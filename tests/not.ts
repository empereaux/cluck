import { assert } from "chai";
import { describe, it } from "mocha";

import * as cluck from "../index";

describe(
    "Not",
    () =>
    {
        it(
            "Correctly validates inverted assertions",
            () =>
            {
                assert.throws(() => cluck.expect(null).to.not.be.null, "Expected value to not be");
                assert.throws(() => cluck.expect(null).to.not.equal(null), "Expected value to not be");

                assert.doesNotThrow(() => cluck.expect(null).to.not.be.false);
                assert.doesNotThrow(() => cluck.expect(null).to.not.be.true);
                assert.doesNotThrow(() => cluck.expect(null).to.not.equal(123));
                assert.doesNotThrow(() => cluck.expect(null).to.not.equal("string"));
            });
    });