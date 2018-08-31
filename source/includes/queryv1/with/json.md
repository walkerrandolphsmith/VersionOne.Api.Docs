```json
{
    "from": "Story",
    "select": [ 
        "Name"
    ],
    "filter": [
      "Name=$myName"
    ],
    "where": {
      "Scope": "$myScope"
    },
    "with": {
      "$myScope": "Scope:1234",
      "$myName": "Alice Agility"
    }
}
```