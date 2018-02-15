# FnJs.AppsApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppDelete**](AppsApi.md#appsAppDelete) | **DELETE** /apps/{app} | Delete an app.
[**appsAppGet**](AppsApi.md#appsAppGet) | **GET** /apps/{app} | Get information for a app.
[**appsAppPatch**](AppsApi.md#appsAppPatch) | **PATCH** /apps/{app} | Updates an app.
[**appsGet**](AppsApi.md#appsGet) | **GET** /apps | Get all app names.
[**appsPost**](AppsApi.md#appsPost) | **POST** /apps | Post new app


<a name="appsAppDelete"></a>
# **appsAppDelete**
> appsAppDelete(app)

Delete an app.

Delete an app.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var app = "app_example"; // String | Name of the app.

apiInstance.appsAppDelete(app).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of the app. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppGet"></a>
# **appsAppGet**
> AppWrapper appsAppGet(app)

Get information for a app.

This gives more details about a app, such as statistics.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var app = "app_example"; // String | name of the app.

apiInstance.appsAppGet(app).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppPatch"></a>
# **appsAppPatch**
> AppWrapper appsAppPatch(app, body)

Updates an app.

You can set app level settings here. 

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var app = "app_example"; // String | name of the app.

var body = new FnJs.AppWrapper(); // AppWrapper | App to post.

apiInstance.appsAppPatch(app, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 
 **body** | [**AppWrapper**](AppWrapper.md)| App to post. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsGet"></a>
# **appsGet**
> AppsWrapper appsGet(opts)

Get all app names.

Get a list of all the apps in the system, returned in alphabetical order.

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var opts = { 
  'cursor': "cursor_example", // String | Cursor from previous response.next_cursor to begin results after, if any.
  'perPage': 56 // Number | Number of results to return, defaults to 30. Max of 100.
};
apiInstance.appsGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor from previous response.next_cursor to begin results after, if any. | [optional] 
 **perPage** | **Number**| Number of results to return, defaults to 30. Max of 100. | [optional] 

### Return type

[**AppsWrapper**](AppsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsPost"></a>
# **appsPost**
> AppWrapper appsPost(body)

Post new app

Insert a new app

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.AppsApi();

var body = new FnJs.AppWrapper(); // AppWrapper | App to post.

apiInstance.appsPost(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AppWrapper**](AppWrapper.md)| App to post. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

