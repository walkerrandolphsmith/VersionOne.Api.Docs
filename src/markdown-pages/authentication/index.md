```bash
curl "https://V1Host/V1Instance/api_endpoint_here"
  -H "Authorization: Bearer <access-token>"
```

VersionOne uses access tokens to grant access to the API. You can register a new access token by
...

VersionOne expects for the access token to be included in all API requests to the server in a header that looks like the following:

`Authorization: Bearer <access-token>`

<aside class="notice">
  <div class="content">
    You can set your access token by clicking the avatar in the bottom left!
  </div>
</aside>