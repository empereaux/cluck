import { assert } from "chai";
import { describe, it } from "mocha";

import * as cluck from "../index";

describe(
    "Object",
    () =>
    {
        it(
            "Correctly validates objects",
            () =>
            {
                assert.doesNotThrow(() => cluck.expect({ }).to.be.a.object);
                assert.doesNotThrow(() => cluck.expect({ }).to.be.an.object);
                assert.doesNotThrow(() => cluck.expect({ }).to.be.a("object"));
                assert.doesNotThrow(() => cluck.expect({ }).to.be.an("object"));
            });

        it(
            "Correctly validates null",
            () =>
            {
                assert.doesNotThrow(() => cluck.expect(null).to.be.an.object);
            });

        it(
            "Correctly validates array",
            () =>
            {
                assert.doesNotThrow(() => cluck.expect([ ]).to.be.an.object);
            });
    });