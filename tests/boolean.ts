import { assert } from "chai";
import { describe, it } from "mocha";
import { ExpectA, ExpectBe } from "../types";

import * as cluck from "../index";

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
            "Correctly validates false",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => cluck.expect(false).to.be.a[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(false).to.be.a(type), "Expected value to be a");

                    // expect ... to be an ...
                    assert.throws(() => cluck.expect(false).to.be.an[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(false).to.be.an(type), "Expected value to be a");
                }

                for (let value of values)
                {
                    if (value !== false)
                    {
                        // expect ... to be ...
                        assert.throws(() => cluck.expect(false).to.be(value), "Expected value to be");
                    }
                }

                for (let valueName of valueNames)
                {
                    if (valueName !== "false")
                    {
                        // expect ... to be ...
                        assert.throws(() => cluck.expect(false).to.be[valueName], "Expected value to be");
                    }
                }

                assert.doesNotThrow(() => cluck.expect(false).to.be.a("boolean"));
                assert.doesNotThrow(() => cluck.expect(false).to.be.false);
                assert.doesNotThrow(() => cluck.expect(false).to.be(false));
                assert.doesNotThrow(() => cluck.expect(false).to.equal(false));
            });

        it(
            "Correctly validates true",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => cluck.expect(true).to.be.a[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(true).to.be.a(type), "Expected value to be a");

                    // expect ... to be an ...
                    assert.throws(() => cluck.expect(true).to.be.an[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(true).to.be.an(type), "Expected value to be a");
                }

                for (let value of values)
                {
                    if (value !== true)
                    {
                        // expect ... to be ...
                        assert.throws(() => cluck.expect(true).to.be(value), "Expected value to be");
                    }
                }

                for (let valueName of valueNames)
                {
                    if (valueName !== "true")
                    {
                        // expect ... to be ...
                        assert.throws(() => cluck.expect(true).to.be[valueName], "Expected value to be");
                    }
                }

                assert.doesNotThrow(() => cluck.expect(true).to.be.a("boolean"));
                assert.doesNotThrow(() => cluck.expect(true).to.be.true);
                assert.doesNotThrow(() => cluck.expect(true).to.be(true));
                assert.doesNotThrow(() => cluck.expect(true).to.equal(true));
            });
    });