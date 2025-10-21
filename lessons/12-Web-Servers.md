---
id: 12
title: 웹 서버(net/http)
summary: 핸들러, 라우팅, 미들웨어(기본)를 구현한다.
version: 1.0.0
tags: [Go, 웹]
---

# 웹 서버(net/http)

## 예제 1: 간단한 서버
```go
package main
import (
    "fmt"
    "net/http"
)
func hello(w http.ResponseWriter, r *http.Request){ fmt.Fprintln(w, "hello") }
func main(){ http.HandleFunc("/hello", hello); http.ListenAndServe(":8080", nil) }
```

**테스트**
- 브라우저에서 `http://localhost:8080/hello` → `hello`

## 예제 2: 로깅 미들웨어
```go
package main
import (
    "log"
    "net/http"
    "time"
)
func logmw(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
        start := time.Now()
        next.ServeHTTP(w,r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    })
}
func main(){
    mux:=http.NewServeMux()
    mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
        w.Write([]byte("ok"))
    })
    http.ListenAndServe(":8080", logmw(mux))
}
```

## 연습 문제
1. 환경변수로 포트를 지정하도록 변경하라.
2. graceful shutdown을 구현하라.

## 참고
- https://pkg.go.dev/net/http
