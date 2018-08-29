Aliasing will allow you to assign the output of a bulk operation to a reference. One of the advantages of this feature is that it will allow users to make a reference to previously created assets in a later part of the payload. For example,  I want to create a brand new scope and use this scope but reference it later on in the payload.

Create a new scope and then create a new story whose scope is the newly created scope.

### HTTP Request

`POST http://V1Host/V1Instance/api/asset`