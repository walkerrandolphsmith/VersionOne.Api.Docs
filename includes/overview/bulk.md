## ~/api/asset

These samples will help guide the usage of the Bulk API endpoint.  The VersionOne Rest API is our original and most general purpose endpoint for querying and manipulating of VersionOne assets.  As with any endpoint or software tool in general, its scope of functionality can be robust but could have some limitations.  One limitation with Rest API is that it cannot perform bulk updates without and is bound to a single operation at a time. 

For example, let's say I have 50,000 messages that I would like to delete.  The traditional way to delete these assets would be create a script that reads the OIDS of 50,000 messages that you would like to delete and process them one at a time.  Using the Rest-API or VersionOne .Net SDK, a deletion of this magnitude would take approximately 11-13 hours since we are force to repeat the following chunk of pseudo code.1

```
var oidList = getOidsToDelete(queryCriteria);
for each (OID x in oidList){
    deleteOid(x); //Called 50,000 times!!!
}
```

The complexity of the client code is very linear and network intensive since it requires 50K individual API calls so the average time in our testing has been 1 deletion per second using the SDK or API. The round trip time latency reduction gives the best case theoretical model would be a reduction of 35-40% time saved per transaction.  We were able to witness an average throughput of 0.65 seconds/deletion or approximately 8.5 hours to process the 50K records given favorable network conditions and eliminating any of the code's bookkeeping required for track and report progress real-time.

Using the Bulk Endpoint, the server is doing all of the work deleting assets closer to the database eliminating multiple calls to the API.  This deletion is now a single POST to the bulk endpoint.  The best-case 8.5 hour deletion time is now approaches 2 hours.