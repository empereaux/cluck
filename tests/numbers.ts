import { assert } from "chai";
import { describe, it } from "mocha";
import { ExpectA } from "../types";

import * as cluck from "../index";

describe(
    "Primitives: Numbers",
    () =>
    {
        let types = new Array<keyof ExpectA>(
            "array", "boolean", "function", "object", "string");

        let values = [ false, null, "string", true, undefined, ];

        it(
            "Correctly validates numbers",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => cluck.expect(123).to.be.a[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(123).to.be.a(type), "Expected value to be a");

                    // expect ... to be an ...
                    assert.throws(() => cluck.expect(123).to.be.an[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(123).to.be.an(type), "Expected value to be a");
                }

                for (let value of values)
                {
                    // expect ... to be ...
                    assert.throws(() => cluck.expect(123).to.be(value), "Expected value to be");

                    // expect ... to equal ...
                    assert.throws(() => cluck.expect(123).to.equal(value), "Expected value to be");
                }

                assert.doesNotThrow(() => cluck.expect(123).to.be(123));

                assert.doesNotThrow(() => cluck.expect(123).to.be.a("number"));
                assert.doesNotThrow(() => cluck.expect(123).to.be.a.number);

                assert.doesNotThrow(() => cluck.expect(123).to.be.an("number"));
                assert.doesNotThrow(() => cluck.expect(123).to.be.an.number);

                assert.doesNotThrow(() => cluck.expect(123).to.equal(123));

                // Special numbers.
                assert.doesNotThrow(() => cluck.expect(Number.NaN).to.be.a.number);
                assert.doesNotThrow(() => cluck.expect(Number.NEGATIVE_INFINITY).to.be.a.number);
                assert.doesNotThrow(() => cluck.expect(Number.POSITIVE_INFINITY).to.be.a.number);
            });
    });