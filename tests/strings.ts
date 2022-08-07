import { assert } from "chai";
import { describe, it } from "mocha";
import { expect } from "..";
import { ExpectA } from "../types";

describe(
    "Primitives: Strings",
    () =>
    {
        let types = new Array<keyof ExpectA>(
            "array", "boolean", "function", "number", "object");

        let values = [ 0, 1, false, null, true, undefined, ];

        it(
            "Primitive: Strings",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => expect("string").to.be.a[type]);
                    assert.throws(() => expect("string").to.be.a(type));

                    // expect ... to be an ...
                    assert.throws(() => expect("string").to.be.an[type]);
                    assert.throws(() => expect("string").to.be.an(type));
                }

                for (let value of values)
                {
                    // expect ... to be ...
                    assert.throws(() => expect("string").to.be(value));

                    // expect ... to equal ...
                    assert.throws(() => expect("string").to.equal(value));
                }

                assert.doesNotThrow(() => expect("string").to.be("string"));

                assert.doesNotThrow(() => expect("string").to.be.a("string"));
                assert.doesNotThrow(() => expect("string").to.be.a.string);

                assert.doesNotThrow(() => expect("string").to.be.an("string"));
                assert.doesNotThrow(() => expect("string").to.be.an.string);
                
                assert.doesNotThrow(() => expect("string").to.equal("string"));
            });
    });