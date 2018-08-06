var ProcessButton = require("nativescript-process-button").ProcessButton;
var processButton = new ProcessButton();

describe("greet function", function() {
    it("exists", function() {
        expect(processButton.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(processButton.greet()).toEqual("Hello, NS");
    });
});