/**
 * fn
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.2.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Log'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Log'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.LogWrapper = factory(root.FnJs.ApiClient, root.FnJs.Log);
  }
}(this, function(ApiClient, Log) {
  'use strict';




  /**
   * The LogWrapper model module.
   * @module model/LogWrapper
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>LogWrapper</code>.
   * @alias module:model/LogWrapper
   * @class
   * @param log {module:model/Log} Call log entry.
   */
  var exports = function(log) {
    var _this = this;

    _this['log'] = log;
  };

  /**
   * Constructs a <code>LogWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogWrapper} obj Optional instance to populate.
   * @return {module:model/LogWrapper} The populated <code>LogWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('log')) {
        obj['log'] = Log.constructFromObject(data['log']);
      }
    }
    return obj;
  }

  /**
   * Call log entry.
   * @member {module:model/Log} log
   */
  exports.prototype['log'] = undefined;



  return exports;
}));


