---
id: 13
title: JSON과 REST 핸들러
summary: JSON 인코딩/디코딩, RESTful 핸들러 패턴을 익힌다.
version: 1.0.0
tags: [Go, JSON, REST]
---

# JSON과 REST 핸들러

## 예제 1: JSON 응답
```go
package main
import (
    "encoding/json"
    "net/http"
)
type Msg struct{ Text string `json:"text"` }
func main(){
    http.HandleFunc("/api/msg", func(w http.ResponseWriter, r *http.Request){
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(Msg{"hello"})
    })
    http.ListenAndServe(":8080", nil)
}
```

## 예제 2: JSON 요청 파싱
```go
package main
import (
    "encoding/json"
    "net/http"
)
type User struct{ Name string `json:"name"` }
func main(){
    http.HandleFunc("/api/user", func(w http.ResponseWriter, r *http.Request){
        if r.Method!="POST"{ w.WriteHeader(405); return }
        var u User
        if err:=json.NewDecoder(r.Body).Decode(&u); err!=nil { w.WriteHeader(400); return }
        w.Write([]byte("ok:"+u.Name))
    })
    http.ListenAndServe(":8080", nil)
}
```

## 연습 문제
1. 에러 응답을 JSON 표준 형태로 통일하라(e.g. `{ "error": "message" }`).
2. REST CRUD 스텁을 작성하라.

## 참고
- https://pkg.go.dev/encoding/json
