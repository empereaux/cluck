import { Expect } from "./types";

/**
 * Represents a valid set of properties for each state.
 */
const properties: Record<ExpectStates, Set<string | symbol>> =
{
    "a" :    new Set([ "array", "boolean", "function", "number", "object", "string", ]),
    "be":    new Set([ "a", "an", "false", "null", "true", "undefined", ]),
    "equal": new Set(),
    "root":  new Set([ "to" ]),
    "to":    new Set([ "be", "equal", ]),
};

/**
 * Begins an assertion.
 */
export function expect(value: any): Expect
{
    let invert = false;
    let state: ExpectStates = "root";

    // Use a proxy so we can cleanly move between states.
    //
    // Note that we use a dummy function as the base target object because we want developers
    // to be able to call our proxy. As per MDN: 
    //
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
    // "The target must be a callable itself. That is, it must be a function object."
    let proxy: Expect;

    proxy = new Proxy(
        new Function() as unknown as Expect,
        {
            /**
             * Handles the function call on the proxy.
             */
            apply(target, instance, parameters)
            {
                onCall(parameters, value, state, invert);

                // Function calls will not have follow-ups (for now).
                return undefined;
            },

            /**
             * Gets the value of the given property.
             */
            get(target, property, receiver)
            {
                onGet(property, value, state, invert);

                switch (property)
                {
                    case "array":
                    case "boolean":
                    case "false":
                    case "function":
                    case "null":
                    case "number":
                    case "object":
                    case "string":
                    case "true":
                    case "undefined":
                    {
                        // No other checks can be performed on these.
                        return undefined;
                    }

                    // Check for aliasses, usually just for grammatical purposes.
                    case "an":
                        property = "a";
                        break;
                }

                // If we are here then we encountered a property that just moves us into the next state.
                state = property as ExpectStates;

                return receiver;
            }
        });

    return proxy;
}

/**
 * Represents the states the Expect proxy can be in.
 */
type ExpectStates = 
    "a"     |
    "be"    |
    "equal" |
    "root"  |
    "to"
    ;

/**
 * Handles calls.
 */
function onCall(
    parameters: Array<any>,
    value: any,
    state: ExpectStates,
    invert: boolean): void
{
    if (state === "a")
    {
        // We need to verify the type of the value.
        let type = parameters[0];
        if (typeof type === "string")
        {
            is(value, type, invert);
        }
        else
        {
            throw new RangeError(`Expected a string, but received a '${typeof type}'`);
        }
    }
    else if (state === "be" || state === "equal")
    {
        // Validate the actual value.
        literally(value, parameters[0], invert);
    }
    else
    {
        // The current state is not a function.
        throw new TypeError(`${state} is not a function.`);
    }
}

/**
 * Handles getters.
 */
function onGet(
    property: string | symbol,
    value: any,
    state: ExpectStates,
    invert: boolean): void
{
    let valid = properties[state];
    if (valid.has(property))
    {
        switch (property)
        {
            case "array":
            case "boolean":
            case "function":
            case "number":
            case "object":
            case "string":
            case "undefined":
            {
                // Validate the type of the value.
                is(value, property, invert);
                break;
            }

            // Check for literal checks against values.
            case "false":
                literally(value, false, invert);
                break;
            case "null":
                literally(value, null, invert);
                break;
            case "true":
                literally(value, true, invert);
                break;
        }
    }
    else
    {
        // We always fail hard for accessing unknown properties.
        throw new TypeError(`No such property: '${String(property)}'`);
    }
}
    
/**
 * Checks whether the value is of a given value.
 */
function is(value: any, type: string, invert: boolean): void
{
    let valid = false;
    
    switch (type)
    {
        case "array":
            // Only arrays count as arrays. Do not allow TypedArrays, etc.
            valid = Array.isArray(value);
            break;

        case "boolean":
        case "function":
        case "number":
        case "object":
        case "string":
        case "undefined":
            // Just check to see if the primitive matches.
            valid = typeof value === type;
            break;

        default:
        {
            // Validate the type against the name of the constructor.
            if (value !== null && value !== undefined)
            {
                let constructor = value.constructor;
                if (constructor && typeof constructor === "function")
                {
                    valid = constructor.name === type;
                }
            }

            break;
        }
    }

    if (invert)
    {
        valid = !valid;
    }

    if (!valid)
    {
        // Type does not match.
        throw new RangeError(`Expected value to be a '${type}', but got '${typeOf(value)}'.`);
    }
}

/**
 * Checks whether the value literally matches the given value.
 */
function literally(value: any, match: any, invert: boolean): void
{
    let matches = value === match;

    if (invert)
    {
        matches = !matches;
    }

    if (!matches)
    {
        throw new Error(`Expected value to be '${match}', got '${value}'.`);
    }
}

/**
 * Gets the type name of the value.
 */
function typeOf(value: any): string
{
    let valueType = (typeof value) as string;
    if (value === null)
    {
        valueType = "null";
    }
    else if (valueType === "object")
    {
        if (Array.isArray(value))
        {
            valueType = "array";
        }
        else
        {
            let constructor = value.constructor;
            if (constructor && typeof constructor === "function")
            {
                valueType = constructor.name;
            }
        }
    }

    return valueType;
}