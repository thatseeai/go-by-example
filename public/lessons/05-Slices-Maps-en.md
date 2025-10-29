# 05: Slices and Maps

## Description
Go provides two important collection types: slices (dynamic arrays) and maps (dictionaries). Slices are growable arrays, while maps are key-value data structures.

## Example Code
```go
package main

import "fmt"

func main() {
    // Slice operations
    slice := []int{1, 2, 3, 4, 5}
    
    // Append to slice
    slice = append(slice, 6)
    fmt.Printf("After appending 6: %v\n", slice)
    
    // Slice a slice (create sub-slice)
    subSlice := slice[1:4]
    fmt.Printf("Subslice [1:4]: %v\n", subSlice)
    
    // Map operations
    mapExample := make(map[string]int)
    mapExample["apple"] = 5
    mapExample["banana"] = 3
    
    // Access map value
    count, exists := mapExample["apple"]
    if exists {
        fmt.Printf("Apples: %d\n", count)
    }
    
    // Iterate over map
    fmt.Println("All fruits:")
    for fruit, count := range mapExample {
        fmt.Printf("%s: %d\n", fruit, count)
    }
}
```

## How to Run
Open a terminal and run:
```bash
go run slices-maps.go
```

## Practice Problems
Create a program that uses a slice of structs and a map to store information about students.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"

type Student struct {
    Name  string
    Grade int
}

func main() {
    // Slice of students
    students := []Student{
        {"Alice", 85},
        {"Bob", 92},
        {"Charlie", 78},
    }
    
    // Map of student grades
    grades := make(map[string]int)
    for _, student := range students {
        grades[student.Name] = student.Grade
    }
    
    // Print all students and their grades
    fmt.Println("Students and their grades:")
    for _, student := range students {
        fmt.Printf("%s: %d\n", student.Name, student.Grade)
    }
    
    // Print grades from map
    fmt.Println("\nGrades from map:")
    for name, grade := range grades {
        fmt.Printf("%s: %d\n", name, grade)
    }
}
```

This program demonstrates:
1. Creating a slice of struct instances
2. Using a map to store key-value pairs (student name → grade)
3. Iterating over slices with `range`
4. Iterating over maps with `range`
5. Struct definition and instantiation

</details>
