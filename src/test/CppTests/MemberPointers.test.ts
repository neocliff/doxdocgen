//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import TestSetup from "./TestSetup";

// Defines a Mocha test suite to group tests of similar kind together
suite("C++ - Member pointers tests", () => {
    const testSetup: TestSetup = new TestSetup("void foo();");

    // tests
    test("Simple", () => {
        const result = testSetup.SetLine("void test(int foo::* memberPointer);").GetResult();
        assert.equal("/**\n * @brief \n * \n * @param memberPointer \n */", result);
    });
});
