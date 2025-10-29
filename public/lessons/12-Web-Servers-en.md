# 12: Web Server

## Description
Go provides excellent support for building web servers with its standard `net/http` package. This lesson covers creating a basic HTTP server, handling routes, and serving static content.

## Example Code
```go
package main

import (
    "fmt"
    "net/http"
    "log"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
    if r.URL.Path != "/" {
        http.Error(w, "404 not found.", http.StatusNotFound)
        return
    }
    
    if r.Method != "GET" {
        http.Error(w, "Method is not allowed.", http.StatusMethodNotAllowed)
        return
    }
    
    w.Header().Set("Content-Type", "text/html")
    fmt.Fprintf(w, `
<!DOCTYPE html>
<html>
<head>
    <title>Go Web Server</title>
</head>
<body>
    <h1>Welcome to Go Web Server!</h1>
    <p>This is a simple web server built with Go.</p>
</body>
</html>
`)
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, `{"message": "Hello from API", "method": "%s"}`, r.Method)
}

func main() {
    // Register handlers
    http.HandleFunc("/", homeHandler)
    http.HandleFunc("/api", apiHandler)
    
    // Start server
    fmt.Println("Server starting on port 8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## How to Run
Open a terminal and run:
```bash
go run web-server.go
```

## Practice Problems
Create a web server that serves a simple HTML page with a form to calculate the area of a rectangle.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import (
    "fmt"
    "net/http"
    "log"
    "html/template"
)

type Rectangle struct {
    Width  float64
    Height float64
    Area   float64
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    if r.URL.Path != "/rectangle" {
        http.Error(w, "404 not found.", http.StatusNotFound)
        return
    }
    
    if r.Method == "GET" {
        // Serve the form
        t, _ := template.ParseFiles("rectangle-form.html")
        t.Execute(w, nil)
    } else if r.Method == "POST" {
        // Handle form submission
        err := r.ParseForm()
        if err != nil {
            http.Error(w, "Error parsing form", http.StatusBadRequest)
            return
        }
        
        width, err1 := fmt.Sscanf(r.FormValue("width"), "%f", new(float64))
        height, err2 := fmt.Sscanf(r.FormValue("height"), "%f", new(float64))
        
        if err1 != 1 || err2 != 1 {
            http.Error(w, "Invalid input. Please enter valid numbers.", http.StatusBadRequest)
            return
        }
        
        // Calculate area (we'll use the parsed values)
        widthVal := r.FormValue("width")
        heightVal := r.FormValue("height")
        
        var rect Rectangle
        fmt.Sscanf(widthVal, "%f", &rect.Width)
        fmt.Sscanf(heightVal, "%f", &rect.Height)
        rect.Area = rect.Width * rect.Height
        
        // Serve result page
        t, _ := template.ParseFiles("rectangle-result.html")
        t.Execute(w, rect)
    } else {
        http.Error(w, "Method is not allowed.", http.StatusMethodNotAllowed)
        return
    }
}

func main() {
    // Register handlers
    http.HandleFunc("/rectangle", homeHandler)
    
    // Start server
    fmt.Println("Server starting on port 8080...")
    fmt.Println("Visit http://localhost:8080/rectangle to use the calculator")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

This program demonstrates:
1. Creating a web server with `net/http` package
2. Handling different HTTP methods (GET and POST)
3. Parsing form data with `r.ParseForm()`
4. Using templates for HTML rendering (conceptual)
5. Error handling for invalid input
6. Basic form processing and calculation
7. Serving different responses based on request method

For a complete implementation, you would need to create the HTML template files.

</details>
