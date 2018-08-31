```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "Owners.@Count"
    ],
    "filter": [
      "Owners.@Count>'2'"
    ]
}
```