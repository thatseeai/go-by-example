---
id: 06
title: 구조체와 메서드
summary: 구조체 정의, 메서드 리시버, 값/포인터 리시버 차이를 익힌다.
version: 1.0.0
tags: [Go, 구조체]
---

# 구조체와 메서드

## 예제 1: 메서드 리시버
```go
package main
import "fmt"
type Vec2 struct{ X,Y float64 }
func (v Vec2) Len() float64 { return v.X*v.X + v.Y*v.Y }
func (v *Vec2) Scale(k float64){ v.X*=k; v.Y*=k }
func main(){ v:=Vec2{3,4}; fmt.Println(v.Len()); v.Scale(2); fmt.Println(v) }
```

**출력**
```
25
{6 8}
```

## 연습 문제
1. 사각형(Rect)의 넓이/둘레 메서드를 작성하라(포인터 리시버 사용).
2. 불변 메서드와 가변 메서드의 차이를 출력으로 확인하라.

## 참고
- https://go.dev/ref/spec#Method_declarations
