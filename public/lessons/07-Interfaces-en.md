# 07: Interfaces

## Description
Interfaces in Go define a set of method signatures. A type implements an interface by implementing all the methods defined in that interface. Go is duck-typed, meaning you don't explicitly declare that a type implements an interface - if it has the methods, it implements the interface.

## Example Code
```go
package main

import "fmt"

// Define an interface
type Shape interface {
    area() float64
    perimeter() float64
}

// Define concrete types
type Rectangle struct {
    Width  float64
    Height float64
}

type Circle struct {
    Radius float64
}

// Implement methods for Rectangle
func (r Rectangle) area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Implement methods for Circle
func (c Circle) area() float64 {
    return 3.14159 * c.Radius * c.Radius
}

func (c Circle) perimeter() float64 {
    return 2 * 3.14159 * c.Radius
}

// Function that accepts any Shape
func printShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f\n", s.area())
    fmt.Printf("Perimeter: %.2f\n", s.perimeter())
}

func main() {
    // Create shapes
    rectangle := Rectangle{Width: 5, Height: 3}
    circle := Circle{Radius: 2}
    
    // Use the shapes polymorphically
    fmt.Println("Rectangle:")
    printShapeInfo(rectangle)
    
    fmt.Println("\nCircle:")
    printShapeInfo(circle)
}
```

## How to Run
Open a terminal and run:
```bash
go run interfaces.go
```

## Practice Problems
Create an interface for a Writer and implement it for different types like ConsoleWriter and FileWriter.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"
import "os"

// Define an interface for writers
type Writer interface {
    Write(data string)
}

// Console writer implementation
type ConsoleWriter struct{}

func (cw ConsoleWriter) Write(data string) {
    fmt.Println("Console:", data)
}

// File writer implementation
type FileWriter struct {
    filename string
}

func (fw FileWriter) Write(data string) {
    file, err := os.OpenFile(fw.filename, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
    if err != nil {
        fmt.Printf("Error opening file: %v\n", err)
        return
    }
    defer file.Close()
    
    file.WriteString(data + "\n")
    fmt.Printf("Written to file: %s\n", data)
}

func main() {
    // Create writers
    consoleWriter := ConsoleWriter{}
    fileWriter := FileWriter{filename: "output.txt"}
    
    // Use writers polymorphically
    consoleWriter.Write("Hello, Console!")
    fileWriter.Write("Hello, File!")
}
```

This program demonstrates:
1. Defining an interface with method signatures
2. Implementing the interface for different types (ConsoleWriter, FileWriter)
3. Using interfaces as method parameters for polymorphic behavior
4. Method implementations with different behaviors for each type

Note: For the FileWriter example, you would need to create a proper file system setup or use a simpler approach for demonstration.

</details>
