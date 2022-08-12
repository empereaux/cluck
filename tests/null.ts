import { assert } from "chai";
import { describe, it } from "mocha";
import { ExpectA, ExpectBe } from "../types";

import * as cluck from "../index";

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
            "Correctly validates null",
            () =>
            {
                for (let type of types)
                {
                    if (type !== "object")
                    {
                        // expect ... to be a ...
                        assert.throws(() => cluck.expect(null).to.be.a[type], "Expected value to be a");
                        assert.throws(() => cluck.expect(null).to.be.a(type), "Expected value to be a");

                        // expect ... to be an ...
                        assert.throws(() => cluck.expect(null).to.be.an[type], "Expected value to be a");
                        assert.throws(() => cluck.expect(null).to.be.an(type), "Expected value to be a");
                    }
                }

                for (let value of values)
                {
                    // expect ... to be ...
                    assert.throws(() => cluck.expect(null).to.be(value), "Expected value to be");
                }

                for (let valueName of valueNames)
                {
                    // expect ... to be ...
                    assert.throws(() => cluck.expect(null).to.be[valueName], "Expected value to be");
                }

                assert.doesNotThrow(() => cluck.expect(null).to.be.null);
                assert.doesNotThrow(() => cluck.expect(null).to.be(null));
                assert.doesNotThrow(() => cluck.expect(null).to.equal(null));
            });
    });