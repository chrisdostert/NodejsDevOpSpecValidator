var expect = require("chai").expect,
    pathToModuleUnderTest = "../../lib/useCases/validateDevOpConfiguration";

describe("validateDevOpConfiguration", function () {
    it("should return error message for devop configuration with no name", function () {
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
    it("should return empty array for valid devop configuration", function () {
        /*
         arrange
         */

        var moduleUnderTest = require(pathToModuleUnderTest);
        var expectedErrorCount = 0;

        /*
         act
         */

        var actualErrorCount = moduleUnderTest({name:"devOpConfigurationName"}).length;

        /*
         assert
         */

        expect(actualErrorCount).to.equal(expectedErrorCount);
    })
});
