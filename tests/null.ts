import { assert } from "chai";
import { describe, it } from "mocha";
import { expect } from "..";
import { ExpectA, ExpectBe } from "../types";

describe(
    "Primitives: Null",
    () =>
    {
        let types = new Array<keyof ExpectA>(
            "array", "boolean", "function", "number", "object", "string");

        let values = [ 0, 1, false, "string", true, undefined, ];

        let valueNames = new Array<keyof ExpectBe>(
            "false", "true", "undefined");

        it(
            "Primitive: Null",
            () =>
            {
                for (let type of types)
                {
                    if (type !== "object")
                    {
                        // expect ... to be a ...
                        assert.throws(() => expect(null).to.be.a[type]);
                        assert.throws(() => expect(null).to.be.a(type));

                        // expect ... to be an ...
                        assert.throws(() => expect(null).to.be.an[type]);
                        assert.throws(() => expect(null).to.be.an(type));
                    }
                }

                for (let value of values)
                {
                    // expect ... to be ...
                    assert.throws(() => expect(null).to.be(value));
                }

                for (let valueName of valueNames)
                {
                    // expect ... to be ...
                    assert.throws(() => expect(null).to.be[valueName]);
                }

                assert.doesNotThrow(() => expect(null).to.be.null);
                assert.doesNotThrow(() => expect(null).to.be(null));
                assert.doesNotThrow(() => expect(null).to.equal(null));
            });
    });