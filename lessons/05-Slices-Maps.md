---
id: 05
title: 슬라이스와 맵
summary: 슬라이스 내부 구조, make/append, 맵 기본 조작을 익힌다.
version: 1.0.0
tags: [Go, 컬렉션]
---

# 슬라이스와 맵

## 예제 1: 슬라이스 append
```go
package main
import "fmt"
func main(){
    s := make([]int, 0, 2)
    s = append(s, 1,2,3)
    fmt.Println(s, len(s), cap(s))
}
```

**예상 출력(플랫폼에 따라 cap은 다를 수 있음)**
```
[1 2 3] 3 4
```

## 예제 2: 맵 사용
```go
package main
import "fmt"
func main(){
    m := map[string]int{"a":1}
    m["b"] = 2
    v, ok := m["c"]
    fmt.Println(len(m), v, ok)
}
```

**출력**
```
2 0 false
```

## 연습 문제
1. 문자열 슬라이스를 받아 중복을 제거하는 함수를 작성하라.
2. 맵을 이용해 단어 빈도수를 계산하라.

## 참고
- https://go.dev/blog/slices-intro
- https://go.dev/ref/spec#Map_types
