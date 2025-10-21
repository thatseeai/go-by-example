---
id: 08
title: 오류 처리(error, panic, recover)
summary: 에러 값, 감싸기(fmt.Errorf), 패닉/리커버 패턴을 다룬다.
version: 1.0.0
tags: [Go, 오류]
---

# 오류 처리

## 예제 1: 에러 감싸기
```go
package main
import (
    "errors"
    "fmt"
)
func mayFail() error { return errors.New("root cause") }
func main(){
    if err := mayFail(); err != nil {
        wrapped := fmt.Errorf("op fetch: %w", err)
        fmt.Println(wrapped)
    }
}
```

**출력**
```
op fetch: root cause
```

## 예제 2: panic/recover
```go
package main
import "fmt"
func safe(fn func()){
    defer func(){
        if r:=recover(); r!=nil { fmt.Println("recovered:", r) }
    }()
    fn()
}
func main(){ safe(func(){ panic("boom") }) }
```

**출력**
```
recovered: boom
```

## 연습 문제
1. 에러를 반환하는 함수를 작성하고 호출부에서 처리/로깅하라.
2. panic이 필요한 경우와 불필요한 경우를 구분해보라.

## 참고
- https://go.dev/blog/go1.13-errors
