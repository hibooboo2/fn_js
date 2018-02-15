# FnJs.Route

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **String** | URL path that will be matched to this route | [optional] 
**image** | **String** | Name of Docker image to use in this route. You should include the image tag, which should be a version number, to be more accurate. Can be overridden on a per route basis with route.image. | [optional] 
**headers** | **{String: [String]}** | Map of http headers that will be sent with the response | [optional] 
**memory** | **Number** | Max usable memory for this route (MiB). | [optional] 
**cpus** | **String** | Max usable CPU cores for this route. Value in MilliCPUs (eg. 500m) or as floating-point (eg. 0.5) | [optional] 
**type** | **String** | Route type | [optional] 
**format** | **String** | Payload format sent into function. | [optional] 
**config** | **{String: String}** | Route configuration - overrides application configuration | [optional] 
**timeout** | **Number** | Timeout for executions of this route. Value in Seconds | [optional] [default to 30]
**idleTimeout** | **Number** | Hot functions idle timeout before termination. Value in Seconds | [optional] [default to 30]
**createdAt** | **Date** | Time when route was created. Always in UTC. | [optional] 
**updatedAt** | **Date** | Most recent time that route was updated. Always in UTC. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `sync` (value: `"sync"`)

* `async` (value: `"async"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `default` (value: `"default"`)

* `http` (value: `"http"`)

* `json` (value: `"json"`)




