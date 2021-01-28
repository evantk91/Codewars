const assert = require('assert');
const { tvRemoteWrap } = require('../problems/tvRemoteWrap');

describe('TV Remote w Wrap Tests', () => {
    it("Mixed", function() {
        assert.strictEqual(tvRemoteWrap("Code Wars"), 49);
    });

    it("Lower", function() {
        assert.strictEqual(tvRemoteWrap("does"), 16);
        assert.strictEqual(tvRemoteWrap("your"), 21);
        assert.strictEqual(tvRemoteWrap("solution"), 33);
        assert.strictEqual(tvRemoteWrap("work"), 18);
        assert.strictEqual(tvRemoteWrap("for"), 12);
        assert.strictEqual(tvRemoteWrap("these"), 27);
        assert.strictEqual(tvRemoteWrap("words"), 23);
    });

    it("Upper", function() {
        assert.strictEqual(tvRemoteWrap("DOES"), 19);
        assert.strictEqual(tvRemoteWrap("YOUR"), 22);
        assert.strictEqual(tvRemoteWrap("SOLUTION"), 34);
        assert.strictEqual(tvRemoteWrap("WORK"), 19);
        assert.strictEqual(tvRemoteWrap("FOR"), 15);
        assert.strictEqual(tvRemoteWrap("THESE"), 28);
        assert.strictEqual(tvRemoteWrap("WORDS"), 24);
    });

    it("Capitalized", function() {
        assert.strictEqual(tvRemoteWrap("Does"), 28);
        assert.strictEqual(tvRemoteWrap("Your"), 33);
        assert.strictEqual(tvRemoteWrap("Solution"), 45);
        assert.strictEqual(tvRemoteWrap("Work"), 26);
        assert.strictEqual(tvRemoteWrap("For"), 20);
        assert.strictEqual(tvRemoteWrap("These"), 35);
        assert.strictEqual(tvRemoteWrap("Words"), 31);
    });
})