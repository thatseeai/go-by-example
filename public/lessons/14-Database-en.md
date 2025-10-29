---
id: 14
title: Database(database/sql)
summary: Implement connection, queries, and context timeout with database/sql.
version: 1.0.0
tags: [Go, DB]
---

# Database(database/sql)

## Example 1: Using SQLite(in-memory)
```go
package main
import (
    "context"
    "database/sql"
    "fmt"
    _ "modernc.org/sqlite"
    "time"
)

func main() {
    db, err := sql.Open("sqlite", ":memory:")
    if err != nil {
        panic(err)
    }
    defer db.Close()

    // Create table
    createTable := `CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT
    )`
    _, err = db.Exec(createTable)
    if err != nil {
        panic(err)
    }

    // Insert data
    _, err = db.Exec("INSERT INTO users (name, email) VALUES (?, ?)", "Alice", "alice@example.com")
    if err != nil {
        panic(err)
    }

    // Query with context timeout
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()

    var name, email string
    err = db.QueryRowContext(ctx, "SELECT name, email FROM users WHERE id = ?", 1).Scan(&name, &email)
    if err != nil {
        panic(err)
    }

    fmt.Printf("User: %s (%s)\n", name, email)
}
```

**Output:**
```
User: Alice (alice@example.com)
```

## Practice Problems

1. Create a function to insert multiple users in a transaction
2. Implement connection pooling settings
3. Add prepared statement for repeated queries