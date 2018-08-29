# Authentication

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
curl "https://V1Host/V1Instnace/api_endpoint_here"
  -H "Authorization: Bearer <access-token>"
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

> Make sure to replace `<access-token>` with your API token.

VersionOne uses access tokens to grant access to the API. You can register a new access token by
...

VersionOne expects for the access token to be included in all API requests to the server in a header that looks like the following:

`Authorization: Bearer <access-token>`

<aside class="notice">
You must replace <code><access-token></code> with your personal access token.
</aside>
