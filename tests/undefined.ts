import { assert } from "chai";
import { describe, it } from "mocha";
import { ExpectA, ExpectBe } from "../types";

import * as cluck from "../index";

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
            "Correctly validates undefined",
            () =>
            {
                for (let type of types)
                {
                    // expect ... to be a ...
                    assert.throws(() => cluck.expect(undefined).to.be.a[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(undefined).to.be.a(type), "Expected value to be a");

                    // expect ... to be an ...
                    assert.throws(() => cluck.expect(undefined).to.be.an[type], "Expected value to be a");
                    assert.throws(() => cluck.expect(undefined).to.be.an(type), "Expected value to be a");
                }

                for (let value of values)
                {
                    // expect ... to be ...
                    assert.throws(() => cluck.expect(undefined).to.be(value), "Expected value to be");
                }

                for (let valueName of valueNames)
                {
                    // expect ... to be ...
                    assert.throws(() => cluck.expect(undefined).to.be[valueName], "Expected value to be");
                }

                assert.doesNotThrow(() => cluck.expect(undefined).to.be.an("undefined"));
                assert.doesNotThrow(() => cluck.expect(undefined).to.be.undefined);
                assert.doesNotThrow(() => cluck.expect(undefined).to.be(undefined));
                assert.doesNotThrow(() => cluck.expect(undefined).to.equal(undefined));
            });
    });