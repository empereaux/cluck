import { assert } from "chai";
import { describe, it } from "mocha";

import * as cluck from "../index";

describe(
    "Array",
    () =>
    {
        it(
            "Correctly validates arrays",
            () =>
            {
                assert.doesNotThrow(() => cluck.expect([ ]).to.be.a.array);
                assert.doesNotThrow(() => cluck.expect([ ]).to.be.an.array);
                assert.doesNotThrow(() => cluck.expect([ ]).to.be.a("array"));
                assert.doesNotThrow(() => cluck.expect([ ]).to.be.an("array"));
            });

        it(
            "Correctly invalidates Set",
            () =>
            {
                let set = new Set();

                assert.throws(() => cluck.expect(set).to.be.a.array, "Expected value to be a");
                assert.throws(() => cluck.expect(set).to.be.an.array, "Expected value to be a");
                assert.throws(() => cluck.expect(set).to.be.a("array"), "Expected value to be a");
                assert.throws(() => cluck.expect(set).to.be.an("array"), "Expected value to be a");
            });

        it(
            "Correctly invalidates TypedArray",
            () =>
            {
                let buffer = new Uint8Array(0);

                assert.throws(() => cluck.expect(buffer).to.be.a.array, "Expected value to be a");
                assert.throws(() => cluck.expect(buffer).to.be.an.array, "Expected value to be a");
                assert.throws(() => cluck.expect(buffer).to.be.a("array"), "Expected value to be a");
                assert.throws(() => cluck.expect(buffer).to.be.an("array"), "Expected value to be a");
            });
    });