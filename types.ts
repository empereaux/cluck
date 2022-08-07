/**
 * Represents the options for the root.
 */
export type Expect =
{
    /**
     * Continues the assertion with `to`.
     */
    to: ExpectTo,
}

/**
 * Represents the options for `to`.
 */
export type ExpectTo =
{
    /**
     * Continues the assertion with `be`.
     */
    be: ExpectBe,

    /**
     * Validates the value strictly equals the given value.
     */
    equal: (value: any) => void,
}

/**
 * Represents the options for `be`.
 */
export type ExpectBe =
{
    /**
     * Validates the value strictly equals the given value.
     */
    (value: any): void,

    /**
     * Continues the assertion with `a`.
     */
    a: ExpectA,

    /**
     * Continues the assertion with `an`.
     * 
     * @remarks This is a grammatical alias for `a`.
     */
    an: ExpectA,

    /**
     * Validates the value is a `false` literal.
     */
    false: void,

    /**
     * Validates the value is a `null` literal.
     */
    null: void,

    /**
     * Validates the value is a `true` literal.
     */
    true: void,

    /**
     * Validates the value is an `undefined` lietral.
     */
    undefined: void,
}

/**
 * Represents the options for `a`.
 */
export type ExpectA =
{
    /**
     * Validates the type of the value.
     */
    (type: string): void,

    /**
     * Validates the the value is an Array.
     * 
     * @remarks Set and the TypedArray family of objects are not considered arrays.
     */
    array: void,

    /**
     * Validates that the value is a `boolean` primitive.
     */
    boolean: void,

    /**
     * Validates that the value is a `function`.
     */
    function: void,

    /**
     * Validates the the value is a `number` primitive.
     */
    number: void,

    /**
     * Validates that the value is an `object`.
     */
    object: void,

    /**
     * Validates that the value is a `string` primitive.
     */
    string: void,
}