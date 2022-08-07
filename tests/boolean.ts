import { assert } from "chai";
import { describe, it } from "mocha";
import { expect } from "..";
import { ExpectA, ExpectBe } from "../types";

describe(
    "Primitives: Boolean",
    () =>
    {
        let types = new Array<keyof ExpectA>(
            "array", "function", "number", "object", "string");

        let values = [ 0, 1, false, null, "string", true, undefined, ];

        let valueNames = new Array<keyof ExpectBe>(
            "false", "null", "true", "undefined");

        it(
            "Primitive: False",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => expect(false).to.be.a[type]);
                    assert.throws(() => expect(false).to.be.a(type));

                    // expect ... to be an ...
                    assert.throws(() => expect(false).to.be.an[type]);
                    assert.throws(() => expect(false).to.be.an(type));
                }

                for (let value of values)
                {
                    if (value !== false)
                    {
                        // expect ... to be ...
                        assert.throws(() => expect(false).to.be(value));
                    }
                }

                for (let valueName of valueNames)
                {
                    if (valueName !== "false")
                    {
                        // expect ... to be ...
                        assert.throws(() => expect(false).to.be[valueName]);
                    }
                }

                assert.doesNotThrow(() => expect(false).to.be.a("boolean"));
                assert.doesNotThrow(() => expect(false).to.be.false);
                assert.doesNotThrow(() => expect(false).to.be(false));
                assert.doesNotThrow(() => expect(false).to.equal(false));
            });

        it(
            "Primitive: True",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => expect(true).to.be.a[type]);
                    assert.throws(() => expect(true).to.be.a(type));

                    // expect ... to be an ...
                    assert.throws(() => expect(true).to.be.an[type]);
                    assert.throws(() => expect(true).to.be.an(type));
                }

                for (let value of values)
                {
                    if (value !== true)
                    {
                        // expect ... to be ...
                        assert.throws(() => expect(true).to.be(value));
                    }
                }

                for (let valueName of valueNames)
                {
                    if (valueName !== "true")
                    {
                        // expect ... to be ...
                        assert.throws(() => expect(true).to.be[valueName]);
                    }
                }

                assert.doesNotThrow(() => expect(true).to.be.a("boolean"));
                assert.doesNotThrow(() => expect(true).to.be.true);
                assert.doesNotThrow(() => expect(true).to.be(true));
                assert.doesNotThrow(() => expect(true).to.equal(true));
            });
    });