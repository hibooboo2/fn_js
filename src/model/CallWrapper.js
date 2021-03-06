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
    define(['ApiClient', 'model/Call'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Call'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.CallWrapper = factory(root.FnJs.ApiClient, root.FnJs.Call);
  }
}(this, function(ApiClient, Call) {
  'use strict';




  /**
   * The CallWrapper model module.
   * @module model/CallWrapper
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>CallWrapper</code>.
   * @alias module:model/CallWrapper
   * @class
   * @param call {module:model/Call} Call object.
   */
  var exports = function(call) {
    var _this = this;

    _this['call'] = call;
  };

  /**
   * Constructs a <code>CallWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallWrapper} obj Optional instance to populate.
   * @return {module:model/CallWrapper} The populated <code>CallWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('call')) {
        obj['call'] = Call.constructFromObject(data['call']);
      }
    }
    return obj;
  }

  /**
   * Call object.
   * @member {module:model/Call} call
   */
  exports.prototype['call'] = undefined;



  return exports;
}));


