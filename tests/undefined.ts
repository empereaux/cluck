import { assert } from "chai";
import { describe, it } from "mocha";
import { expect } from "..";
import { ExpectA, ExpectBe } from "../types";

describe(
    "Primitives: Undefined",
    () =>
    {
        let types = new Array<keyof ExpectA>(
            "array", "boolean", "function", "number", "object", "string");

        let values = [ 0, 1, false, null, "string", true, ];

        let valueNames = new Array<keyof ExpectBe>(
            "false", "null", "true");

        it(
            "Primitive: Undefined",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => expect(undefined).to.be.a[type]);
                    assert.throws(() => expect(undefined).to.be.a(type));

                    // expect ... to be an ...
                    assert.throws(() => expect(undefined).to.be.an[type]);
                    assert.throws(() => expect(undefined).to.be.an(type));
                }

                for (let value of values)
                {
                    // expect ... to be ...
                    assert.throws(() => expect(undefined).to.be(value));
                }

                for (let valueName of valueNames)
                {
                    // expect ... to be ...
                    assert.throws(() => expect(undefined).to.be[valueName]);
                }

                assert.doesNotThrow(() => expect(undefined).to.be.an("undefined"));
                assert.doesNotThrow(() => expect(undefined).to.be.undefined);
                assert.doesNotThrow(() => expect(undefined).to.be(undefined));
                assert.doesNotThrow(() => expect(undefined).to.equal(undefined));
            });
    });