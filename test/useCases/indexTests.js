// test suite implementation based on:
// http://thenodeway.io/posts/testing-essentials/?utm_source=fredkschott.com&utm_medium=referral

// test framework
var expect = require("chai").expect,
// mock framework
    sinon = require("sinon"),
// module loader replacement
    mockery = require("mockery"),
    pathToModuleUnderTest = "../../";


describe("NodejsDevOpSpecValidator", function () {
    before(function () {
        mockery.enable({
            warnOnUnregistered: false,
            useCleanCache:true
        });
    });
    beforeEach(function(){
        mockery.registerAllowable(pathToModuleUnderTest,true);
    });
    after(function(){
        mockery.disable();
    });
    afterEach(function(){
        mockery.deregisterAll();
        mockery.resetCache();
    });
    describe("validateDevOp", function () {
        it("should proxy to lib/useCases/validateDevOp module export with expected arguments", function () {

            /*
             arrange
             */

            // build up mock useCase module
            var mockValidateDevOpUseCaseModule = sinon.mock();
            mockValidateDevOpUseCaseModule.once();
            var devOp = {name:"devOpName"};
            var projectRootDirPath = "projectRootDirPath";
            mockValidateDevOpUseCaseModule.withExactArgs(
                devOp
            );

            // load
            mockery.registerMock("./validateDevOp",mockValidateDevOpUseCaseModule);
            var moduleUnderTest = require(pathToModuleUnderTest);

            /*
             act
             */
            moduleUnderTest.validateDevOp(
                devOp
            );

            /*
             assert
             */
            mockValidateDevOpUseCaseModule.verify();
        })
    });
    describe("validateDevOpConfiguration", function () {
        it("should proxy to lib/useCases/validateDevOpConfiguration module export with expected arguments", function () {

            /*
             arrange
             */

            // build up mock useCase module
            var mockValidateDevOpConfigurationUseCaseModule = sinon.mock();
            mockValidateDevOpConfigurationUseCaseModule.once();
            var devOpConfiguration = {name:"devOpName"};
            var projectRootDirPath = "projectRootDirPath";
            mockValidateDevOpConfigurationUseCaseModule.withExactArgs(
                devOpConfiguration
            );

            // load
            mockery.registerMock("./validateDevOpConfiguration",mockValidateDevOpConfigurationUseCaseModule);
            var moduleUnderTest = require(pathToModuleUnderTest);

            /*
             act
             */
            moduleUnderTest.validateDevOpConfiguration(
                devOpConfiguration
            );

            /*
             assert
             */
            mockValidateDevOpConfigurationUseCaseModule.verify();
        })
    });
});