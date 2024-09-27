/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button"); // This function imports the button from out source file

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close()
});

describe ("DOM tests", () => {
    test ("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked");

    });
    test ("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});


