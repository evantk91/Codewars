const assert = require('assert');
const { tvRemoteSymbols } = require('../problems/tvRemoteSymbols');

describe('TV Remote w Additional Symbols', () => {
    it("Mixed", function() {
        assert.strictEqual(tvRemoteSymbols("..._^_--9__"), 44);
    });

    xit("Lower", function() {
        assert.strictEqual(tvRemoteSymbols("does"), 16);
        assert.strictEqual(tvRemoteSymbols("your"), 21);
        assert.strictEqual(tvRemoteSymbols("solution"), 33);
        assert.strictEqual(tvRemoteSymbols("work"), 18);
        assert.strictEqual(tvRemoteSymbols("for"), 12);
        assert.strictEqual(tvRemoteSymbols("these"), 27);
        assert.strictEqual(tvRemoteSymbols("words"), 23);
    });

    xit("Upper", function() {
        assert.strictEqual(tvRemoteSymbols("DOES"), 19);
        assert.strictEqual(tvRemoteSymbols("YOUR"), 22);
        assert.strictEqual(tvRemoteSymbols("SOLUTION"), 34);
        assert.strictEqual(tvRemoteSymbols("WORK"), 19);
        assert.strictEqual(tvRemoteSymbols("FOR"), 15);
        assert.strictEqual(tvRemoteSymbols("THESE"), 28);
        assert.strictEqual(tvRemoteSymbols("WORDS"), 24);
    });

    xit("symbols", function() {
        assert.strictEqual(tvRemoteSymbols("^does^"), 33);
        assert.strictEqual(tvRemoteSymbols("$your$"), 53);
        assert.strictEqual(tvRemoteSymbols("#solution#"), 49);
        assert.strictEqual(tvRemoteSymbols("\u00bfwork\u00bf"), 34);
        assert.strictEqual(tvRemoteSymbols("{for}"), 38);
        assert.strictEqual(tvRemoteSymbols("\u00a3these\u00a3"), 57);
        assert.strictEqual(tvRemoteSymbols("?symbols?"), 54);
    });
})