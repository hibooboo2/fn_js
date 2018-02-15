# FnJs.LogApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppCallsCallLogGet**](LogApi.md#appsAppCallsCallLogGet) | **GET** /apps/{app}/calls/{call}/log | Get call logs


<a name="appsAppCallsCallLogGet"></a>
# **appsAppCallsCallLogGet**
> LogWrapper appsAppCallsCallLogGet(app, call)

Get call logs

Get call logs

### Example
```javascript
var FnJs = require('fn_js');

var apiInstance = new FnJs.LogApi();

var app = "app_example"; // String | App Name

var call = "call_example"; // String | Call ID.

apiInstance.appsAppCallsCallLogGet(app, call).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| App Name | 
 **call** | **String**| Call ID. | 

### Return type

[**LogWrapper**](LogWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

