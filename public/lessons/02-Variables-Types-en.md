# 02: Variables and Types

## Description
Go is a statically typed language, which means that every variable must have a type known at compile time. Go has several built-in types, including basic types like integers, floats, booleans, and strings, as well as composite types like arrays, slices, maps, and structs.

## Example Code
```go
package main

import "fmt"

func main() {
    // Variable declaration with explicit type
    var name string = "Alice"
    
    // Variable declaration with type inference
    age := 25
    
    // Multiple variable declarations
    height, weight := 170.5, 65.3
    
    // Print variables
    fmt.Printf("Name: %s, Age: %d, Height: %.1fcm, Weight: %.1fkg\n", name, age, height, weight)
}
```

## How to Run
Open a terminal and run:
```bash
go run variables.go
```

## Practice Problems
Create a program that declares and prints variables of different types: int, float64, bool, and string.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"

func main() {
    var intValue int = 42
    var floatValue float64 = 3.14159
    var boolValue bool = true
    var stringValue string = "Go Programming"
    
    fmt.Printf("Integer: %d\n", intValue)
    fmt.Printf("Float: %.2f\n", floatValue)
    fmt.Printf("Boolean: %t\n", boolValue)
    fmt.Printf("String: %s\n", stringValue)
}
```

This program demonstrates:
1. Variable declaration with explicit types using `var variableName type = value`
2. Type inference using `:=` operator
3. Multiple variable declarations on one line
4. Using `fmt.Printf` for formatted output with type specifiers:
   - `%d` for integers
   - `%.2f` for floats with 2 decimal places
   - `%t` for booleans
   - `%s` for strings

</details>
