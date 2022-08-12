import { assert } from "chai";
import { describe, it } from "mocha";
import { ExpectA } from "../types";

import * as cluck from "../index";

describe(
    "Primitives: Strings",
    () =>
    {
        let types = new Array<keyof ExpectA>(
            "array", "boolean", "function", "number", "object");

        let values = [ 0, 1, false, null, true, undefined, ];

        it(
            "Correctly validates strings",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => cluck.expect("string").to.be.a[type], "Expected value to be a");
                    assert.throws(() => cluck.expect("string").to.be.a(type), "Expected value to be a");

                    // expect ... to be an ...
                    assert.throws(() => cluck.expect("string").to.be.an[type], "Expected value to be a");
                    assert.throws(() => cluck.expect("string").to.be.an(type), "Expected value to be a");
                }

                for (let value of values)
                {
                    // expect ... to be ...
                    assert.throws(() => cluck.expect("string").to.be(value), "Expected value to be");

                    // expect ... to equal ...
                    assert.throws(() => cluck.expect("string").to.equal(value), "Expected value to be");
                }

                assert.doesNotThrow(() => cluck.expect("string").to.be("string"));

                assert.doesNotThrow(() => cluck.expect("string").to.be.a("string"));
                assert.doesNotThrow(() => cluck.expect("string").to.be.a.string);

                assert.doesNotThrow(() => cluck.expect("string").to.be.an("string"));
                assert.doesNotThrow(() => cluck.expect("string").to.be.an.string);
                
                assert.doesNotThrow(() => cluck.expect("string").to.equal("string"));
            });
    });