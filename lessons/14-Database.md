---
id: 14
title: 데이터베이스(database/sql)
summary: database/sql로 연결, 쿼리, 컨텍스트 타임아웃을 구현한다.
version: 1.0.0
tags: [Go, DB]
---

# 데이터베이스(database/sql)

## 예제 1: SQLite(in-memory) 사용
```go
package main
import (
    "context"
    "database/sql"
    "fmt"
    _ "modernc.org/sqlite"
    "time"
)
func main(){
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()
    db, err := sql.Open("sqlite", ":memory:")
    if err!=nil { panic(err) }
    defer db.Close()

    if _, err:=db.ExecContext(ctx, "CREATE TABLE t(id INTEGER, name TEXT)"); err!=nil { panic(err) }
    if _, err:=db.ExecContext(ctx, "INSERT INTO t VALUES(1,'go')"); err!=nil { panic(err) }

    row := db.QueryRowContext(ctx, "SELECT name FROM t WHERE id=?", 1)
    var name string
    if err:=row.Scan(&name); err!=nil { panic(err) }
    fmt.Println(name)
}
```

**출력**
```
go
```

## 연습 문제
1. 트랜잭션으로 다중 INSERT를 원자적으로 수행하라.
2. 타임아웃을 100ms로 줄이고 타임아웃을 재현하라.

## 참고
- https://pkg.go.dev/database/sql
- https://pkg.go.dev/modernc.org/sqlite
