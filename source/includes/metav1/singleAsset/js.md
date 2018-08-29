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

const assetType = 'Member'; // Story, Defect, Epic, etc

v1.queryDefinition(assetType).then(response => {
  console.log(response);
});
```