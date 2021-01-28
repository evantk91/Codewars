const assert = require('assert');
const { tvRemoteShiftSpace } = require('../problems/tvRemoteShiftSpace');

describe('TV Remote w Shift and Space Tests', () => {
    it("Mixed", function() {
        assert.strictEqual(tvRemoteShiftSpace("Code Wars"), 69);
    });

    it("Lower", function() {
        assert.strictEqual(tvRemoteShiftSpace("   "), 9);
        assert.strictEqual(tvRemoteShiftSpace("your"), 23);
        assert.strictEqual(tvRemoteShiftSpace("solution"), 33);
        assert.strictEqual(tvRemoteShiftSpace("work"), 20);
        assert.strictEqual(tvRemoteShiftSpace("for"), 12);
        assert.strictEqual(tvRemoteShiftSpace("these"), 27);
        assert.strictEqual(tvRemoteShiftSpace("words"), 25);
    });

    it("Upper", function() {
        assert.strictEqual(tvRemoteShiftSpace("DOES"), 27);
        assert.strictEqual(tvRemoteShiftSpace("YOUR"), 26);
        assert.strictEqual(tvRemoteShiftSpace("SOLUTION"), 38);
        assert.strictEqual(tvRemoteShiftSpace("WORK"), 23);
        assert.strictEqual(tvRemoteShiftSpace("FOR"), 21);
        assert.strictEqual(tvRemoteShiftSpace("THESE"), 32);
        assert.strictEqual(tvRemoteShiftSpace("WORDS"), 28);
    });

    it("Capitalized", function() {
        assert.strictEqual(tvRemoteShiftSpace("Does"), 40);
        assert.strictEqual(tvRemoteShiftSpace("Your"), 37);
        assert.strictEqual(tvRemoteShiftSpace("Solution"), 49);
        assert.strictEqual(tvRemoteShiftSpace("Work"), 30);
        assert.strictEqual(tvRemoteShiftSpace("For"), 28);
        assert.strictEqual(tvRemoteShiftSpace("These"), 41);
        assert.strictEqual(tvRemoteShiftSpace("Words"), 35);
    });
})