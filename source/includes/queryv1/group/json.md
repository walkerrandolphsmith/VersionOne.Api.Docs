```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "Number"
    ],
    "group": [
      {
        "from": "Status",
        "select": [
          "Name"
        ]
      }
    ]
}
```