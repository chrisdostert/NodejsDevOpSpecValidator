var expect = require("chai").expect,
    pathToModuleUnderTest = "../../lib/useCases/validateDevOp";

describe("validateDevOp", function () {
    it("should return error message for devop with no name", function () {
        /*
         arrange
         */

        var moduleUnderTest = require(pathToModuleUnderTest);
        var expectedErrorCount = 1;

        /*
         act
         */

        var actualErrorCount = moduleUnderTest({}).length;

        /*
         assert
         */

        expect(actualErrorCount).to.equal(expectedErrorCount);
    });
    it("should return empty array for valid devop", function () {
        /*
         arrange
         */

        var moduleUnderTest = require(pathToModuleUnderTest);
        var expectedErrorCount = 0;

        /*
         act
         */

        var actualErrorCount = moduleUnderTest({name:"devOpName"}).length;

        /*
         assert
         */

        expect(actualErrorCount).to.equal(expectedErrorCount);
    })
});
