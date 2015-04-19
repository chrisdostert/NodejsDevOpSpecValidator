/**
 * @module devopspec-validator
 */

/**
 * @borrows module:useCases/validateDevOp as validateDevOp
 * @borrows module:useCases/validateDevOpConfiguration as validateDevOpConfiguration
 */
module.exports = {
    validateDevOp:require("./validateDevOp"),
    validateDevOpConfiguration:require("./validateDevOpConfiguration")
};