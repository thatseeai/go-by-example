# 13: JSON and REST

## Description
Go provides excellent support for working with JSON data through the `encoding/json` package. This lesson covers parsing JSON, marshaling Go data structures to JSON, and creating RESTful APIs.

## Example Code
```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "log"
)

// Data structure
type User struct {
    ID       int    `json:"id"`
    Name     string `json:"name"`
    Email    string `json:"email"`
    IsActive bool   `json:"is_active"`
}

// Sample data
var users = []User{
    {ID: 1, Name: "Alice", Email: "alice@example.com", IsActive: true},
    {ID: 2, Name: "Bob", Email: "bob@example.com", IsActive: false},
    {ID: 3, Name: "Charlie", Email: "charlie@example.com", IsActive: true},
}

func getUsers(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    // Marshal users to JSON
    jsonBytes, err := json.Marshal(users)
    if err != nil {
        http.Error(w, "Failed to marshal JSON", http.StatusInternalServerError)
        return
    }
    
    w.Write(jsonBytes)
}

func getUser(w http.ResponseWriter, r *http.Request) {
    // For simplicity, we'll just return the first user
    w.Header().Set("Content-Type", "application/json")
    
    userJSON, err := json.Marshal(users[0])
    if err != nil {
        http.Error(w, "Failed to marshal JSON", http.StatusInternalServerError)
        return
    }
    
    w.Write(userJSON)
}

func main() {
    // Register handlers
    http.HandleFunc("/api/users", getUsers)
    http.HandleFunc("/api/users/1", getUser)
    
    // Start server
    fmt.Println("JSON REST API server starting on port 8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## How to Run
Open a terminal and run:
```bash
go run json-rest.go
```

## Practice Problems
Create a REST API that handles POST requests to create new users and returns the created user with an assigned ID.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "log"
    "strconv"
)

// Data structure
type User struct {
    ID       int    `json:"id"`
    Name     string `json:"name"`
    Email    string `json:"email"`
    IsActive bool   `json:"is_active"`
}

// In-memory storage (in production, you'd use a database)
var users = []User{}
var nextID = 1

func getUsers(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    // Marshal users to JSON
    jsonBytes, err := json.Marshal(users)
    if err != nil {
        http.Error(w, "Failed to marshal JSON", http.StatusInternalServerError)
        return
    }
    
    w.Write(jsonBytes)
}

func createUser(w http.ResponseWriter, r *http.Request) {
    if r.Method != "POST" {
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        return
    }
    
    // Parse JSON from request body
    var newUser User
    err := json.NewDecoder(r.Body).Decode(&newUser)
    if err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    
    // Assign ID and add to users list
    newUser.ID = nextID
    nextID++
    users = append(users, newUser)
    
    // Return the created user with status 201
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    
    jsonBytes, err := json.Marshal(newUser)
    if err != nil {
        http.Error(w, "Failed to marshal JSON", http.StatusInternalServerError)
        return
    }
    
    w.Write(jsonBytes)
}

func getUser(w http.ResponseWriter, r *http.Request) {
    // Extract user ID from URL path (e.g., /api/users/1)
    path := r.URL.Path
    idStr := path[strings.LastIndex(path, "/")+1:]
    
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    // Find user by ID
    for _, user := range users {
        if user.ID == id {
            w.Header().Set("Content-Type", "application/json")
            jsonBytes, err := json.Marshal(user)
            if err != nil {
                http.Error(w, "Failed to marshal JSON", http.StatusInternalServerError)
                return
            }
            w.Write(jsonBytes)
            return
        }
    }
    
    // User not found
    http.Error(w, "User not found", http.StatusNotFound)
}

func main() {
    // Register handlers
    http.HandleFunc("/api/users", getUsers)
    http.HandleFunc("/api/users", createUser) // This will handle POST requests
    http.HandleFunc("/api/users/", getUser)    // This will handle GET requests for specific users
    
    // Start server
    fmt.Println("JSON REST API server starting on port 8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

This program demonstrates:
1. Creating REST API endpoints for JSON data
2. Parsing JSON request bodies with `json.NewDecoder()`
3. Creating new resources and assigning IDs
4. Handling different HTTP methods (POST, GET)
5. JSON marshaling and unmarshaling with proper error handling
6. Using `http.StatusCreated` for successful resource creation
7. URL path parsing to extract resource IDs

Note: This example includes some basic routing logic, but in a real application you'd want to use a proper router like `gorilla/mux` or similar.

</details>
