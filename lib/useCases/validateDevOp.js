/**
 * @module
 * @private
 */

var jsonSchemaModule = require("jsonschema"),
    fsModule = require("fs"),
    pathModule = require("path");

var devOpSchemaFilePath = pathModule.join(__dirname,"../devOpSchema.json");

/**
 * Validates an object against the schema of a devop
 * @param {Object} devOp - The object to validate
 * @param {String} devOp.name
 * @param {Object.<String,Object>} devOp.tasks
 * @param {Object.<String,Object>} devOp.variables *
 * @returns {String[]} Any errors found by the validator
 */
module.exports = function(
    devOp
){
    var devOpFileSchema = JSON.parse(fsModule.readFileSync(devOpSchemaFilePath,{encoding:"utf8"}));
    var jsonSchemaValidator = new jsonSchemaModule.Validator();
    var jsonSchemaValidatorResult =  jsonSchemaValidator.validate(devOp,devOpFileSchema);
    return jsonSchemaValidatorResult.errors;
};
