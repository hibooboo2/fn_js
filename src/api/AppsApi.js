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
    define(['ApiClient', 'model/AppWrapper', 'model/AppsWrapper', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AppWrapper'), require('../model/AppsWrapper'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.FnJs) {
      root.FnJs = {};
    }
    root.FnJs.AppsApi = factory(root.FnJs.ApiClient, root.FnJs.AppWrapper, root.FnJs.AppsWrapper, root.FnJs.Error);
  }
}(this, function(ApiClient, AppWrapper, AppsWrapper, Error) {
  'use strict';

  /**
   * Apps service.
   * @module api/AppsApi
   * @version 0.2.4
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an app.
     * Delete an app.
     * @param {String} app Name of the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.appsAppDeleteWithHttpInfo = function(app) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppDelete");
      }


      var pathParams = {
        'app': app
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
      var returnType = null;

      return this.apiClient.callApi(
        '/apps/{app}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an app.
     * Delete an app.
     * @param {String} app Name of the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.appsAppDelete = function(app) {
      return this.appsAppDeleteWithHttpInfo(app)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get information for a app.
     * This gives more details about a app, such as statistics.
     * @param {String} app name of the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppWrapper} and HTTP response
     */
    this.appsAppGetWithHttpInfo = function(app) {
      var postBody = null;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppGet");
      }


      var pathParams = {
        'app': app
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps/{app}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get information for a app.
     * This gives more details about a app, such as statistics.
     * @param {String} app name of the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppWrapper}
     */
    this.appsAppGet = function(app) {
      return this.appsAppGetWithHttpInfo(app)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates an app.
     * You can set app level settings here. 
     * @param {String} app name of the app.
     * @param {module:model/AppWrapper} body App to post.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppWrapper} and HTTP response
     */
    this.appsAppPatchWithHttpInfo = function(app, body) {
      var postBody = body;

      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling appsAppPatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appsAppPatch");
      }


      var pathParams = {
        'app': app
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps/{app}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates an app.
     * You can set app level settings here. 
     * @param {String} app name of the app.
     * @param {module:model/AppWrapper} body App to post.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppWrapper}
     */
    this.appsAppPatch = function(app, body) {
      return this.appsAppPatchWithHttpInfo(app, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all app names.
     * Get a list of all the apps in the system, returned in alphabetical order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor from previous response.next_cursor to begin results after, if any.
     * @param {Number} opts.perPage Number of results to return, defaults to 30. Max of 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppsWrapper} and HTTP response
     */
    this.appsGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AppsWrapper;

      return this.apiClient.callApi(
        '/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all app names.
     * Get a list of all the apps in the system, returned in alphabetical order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor from previous response.next_cursor to begin results after, if any.
     * @param {Number} opts.perPage Number of results to return, defaults to 30. Max of 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppsWrapper}
     */
    this.appsGet = function(opts) {
      return this.appsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post new app
     * Insert a new app
     * @param {module:model/AppWrapper} body App to post.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AppWrapper} and HTTP response
     */
    this.appsPostWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling appsPost");
      }


      var pathParams = {
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
      var returnType = AppWrapper;

      return this.apiClient.callApi(
        '/apps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post new app
     * Insert a new app
     * @param {module:model/AppWrapper} body App to post.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AppWrapper}
     */
    this.appsPost = function(body) {
      return this.appsPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
