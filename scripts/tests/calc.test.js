/**
 * @jest-environment jsdom
 */
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition to function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("Should return 73 for 32 + 41", () => {
            expect(addition(32, 41)).toBe(73);
        })

    });
    describe("Subtraction to function", () => {
        
    });
    describe("Multiplication to function", () => {
        
    });
    describe("Division to function", () => {
        
    });
});