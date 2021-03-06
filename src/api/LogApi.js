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
    define(['ApiClient', 'model/Error', 'model/LogWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/LogWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.LogApi = factory(root.FnJs.ApiClient, root.FnJs.Error, root.FnJs.LogWrapper);
  }
}(this, function(ApiClient, Error, LogWrapper) {
  'use strict';

  /**
   * Log service.
   * @module api/LogApi
   * @version 0.2.4
   */

  /**
   * Constructs a new LogApi. 
   * @alias module:api/LogApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get call logs
     * Get call logs
     * @param {String} app App Name
     * @param {String} call Call ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogWrapper} and HTTP response
     */
    this.appsAppCallsCallLogGetWithHttpInfo = function(app, call) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppCallsCallLogGet");
      }

      // verify the required parameter 'call' is set
      if (call === undefined || call === null) {
        throw new Error("Missing the required parameter 'call' when calling appsAppCallsCallLogGet");
      }


      var pathParams = {
        'app': app,
        'call': call
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LogWrapper;

      return this.apiClient.callApi(
        '/apps/{app}/calls/{call}/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get call logs
     * Get call logs
     * @param {String} app App Name
     * @param {String} call Call ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogWrapper}
     */
    this.appsAppCallsCallLogGet = function(app, call) {
      return this.appsAppCallsCallLogGetWithHttpInfo(app, call)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
