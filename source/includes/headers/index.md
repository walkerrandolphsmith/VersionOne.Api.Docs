# HTTP Headers


```csharp

```

```python
from v1pysdk import V1Meta

with V1Meta(
  instance_url = 'http://V1Host/V1Instance',
  token = '<access-token>'
  ) as v1:
```

```bash
curl "https://V1Host/V1Instance/api_endpoint_here"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
```

```javascript
 import axios from 'axios';
 import sdk, { axiosConnector } from 'v1sdk';

 const axiosConnectedSdk = axiosConnector(axios)(sdk);
 const v1 = axiosConnectedSdk(
    'V1Host',
    'V1Instance',
    443,
    true
  )
  .withAccessToken('<access-token>');
```

For this guide we will only show the VersionOne server accepting and responding with JSON.

The `Content-Type` header tells the server what media type we are sending it in the request body.  
The `Accept` header tells the server what media type to respond to the request with.

Ensure that every request contains the following HTTP headers

`Content-Type: applicaiton/json`  

`Accept: application/json`