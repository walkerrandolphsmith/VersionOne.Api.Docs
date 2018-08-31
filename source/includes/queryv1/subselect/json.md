```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "Owners.@Count",
        {
          "from": "Owners",
          "select": [
            "Name",
            "Avatar.Content"
          ]
        }
    ]
}
```