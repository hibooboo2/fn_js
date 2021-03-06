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
    define(['ApiClient', 'model/App', 'model/ErrorBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./App'), require('./ErrorBody'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.AppsWrapper = factory(root.FnJs.ApiClient, root.FnJs.App, root.FnJs.ErrorBody);
  }
}(this, function(ApiClient, App, ErrorBody) {
  'use strict';




  /**
   * The AppsWrapper model module.
   * @module model/AppsWrapper
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>AppsWrapper</code>.
   * @alias module:model/AppsWrapper
   * @class
   * @param apps {Array.<module:model/App>} 
   */
  var exports = function(apps) {
    var _this = this;


    _this['apps'] = apps;

  };

  /**
   * Constructs a <code>AppsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppsWrapper} obj Optional instance to populate.
   * @return {module:model/AppsWrapper} The populated <code>AppsWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('next_cursor')) {
        obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
      }
      if (data.hasOwnProperty('apps')) {
        obj['apps'] = ApiClient.convertToType(data['apps'], [App]);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorBody.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * cursor to send with subsequent request to receive the next page, if non-empty
   * @member {String} next_cursor
   */
  exports.prototype['next_cursor'] = undefined;
  /**
   * @member {Array.<module:model/App>} apps
   */
  exports.prototype['apps'] = undefined;
  /**
   * @member {module:model/ErrorBody} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


