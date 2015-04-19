/**
 * @module
 * @private
 */

var jsonSchemaModule = require("jsonschema"),
    fsModule = require("fs"),
    pathModule = require("path");

var devOpConfigurationSchemaFilePath = pathModule.join(__dirname,"../devOpConfigurationSchema.json");

/**
 * Validates an object against the schema of a devop
 * @param {Object} devOpConfiguration - The object to validate
 * @param {String} devOpConfiguration.name
 * @param {Object.<String,Object>} devOpConfiguration.tasks
 * @param {Object.<String,Object>} devOpConfiguration.variables
 * @returns {String[]} Any errors found by the validator
 */
module.exports = function(
    devOpConfiguration
){
    var devOpFileSchema = JSON.parse(fsModule.readFileSync(devOpConfigurationSchemaFilePath,{encoding:"utf8"}));
    var jsonSchemaValidator = new jsonSchemaModule.Validator();
    var jsonSchemaValidatorResult =  jsonSchemaValidator.validate(devOpConfiguration,devOpFileSchema);
    return jsonSchemaValidatorResult.errors;
};
