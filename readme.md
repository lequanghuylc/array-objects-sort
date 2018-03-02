## array-objects-sort

- Sort with many priorities
- Sort with descending and ascending

## usage

Example list:
```javascript
    const list = [
        {  
            a: "string",
            b: "number",
            c: "string",
            d: "string",
            e: "string"
        }
    ]
```

Usage:
```javascript
    const SortList = require("array-objects-sort");

    const options = [
        {
            key: "a",
            priority: ["value_of_a_will_sort_at_top", "value_of_a_behind", "value_of_a_behind", ...]
        },
        {
            key: "b",
            priority: ["desc"] // ["asc"]
        },
        {
            key: "c",
            priority: ["value_of_c", ["this_two_value", "will_be_treated_as_equal_while_sorting"] , ...]
        },
    ];

    const thisSort = new SortList(options);
    const newSortedList = thisSort.sort(list);
    console.log(newSortedList);
```