# 06: Structs and Methods

## Description
Structs in Go are used to group together related data fields. Methods in Go are functions that have a receiver (similar to class methods in other languages). You can define methods on structs to provide functionality.

## Example Code
```go
package main

import "fmt"

// Define a struct
type Person struct {
    Name string
    Age  int
}

// Method on the struct (value receiver)
func (p Person) introduce() {
    fmt.Printf("Hello, I'm %s and I'm %d years old.\n", p.Name, p.Age)
}

// Method on the struct (pointer receiver)
func (p *Person) haveBirthday() {
    p.Age++
    fmt.Printf("%s is now %d years old.\n", p.Name, p.Age)
}

func main() {
    // Create a person
    person := Person{Name: "Alice", Age: 30}
    
    // Call method with value receiver
    person.introduce()
    
    // Call method with pointer receiver
    person.haveBirthday()
    
    // Another way to create a person
    person2 := &Person{Name: "Bob", Age: 25}
    person2.introduce()
}
```

## How to Run
Open a terminal and run:
```bash
go run structs-methods.go
```

## Practice Problems
Create a struct representing a bank account with methods to deposit and withdraw money.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"

type BankAccount struct {
    Owner   string
    Balance float64
}

// Deposit money into the account
func (account *BankAccount) Deposit(amount float64) {
    account.Balance += amount
    fmt.Printf("Deposited $%.2f. New balance: $%.2f\n", amount, account.Balance)
}

// Withdraw money from the account
func (account *BankAccount) Withdraw(amount float64) bool {
    if account.Balance >= amount {
        account.Balance -= amount
        fmt.Printf("Withdrew $%.2f. New balance: $%.2f\n", amount, account.Balance)
        return true
    } else {
        fmt.Printf("Insufficient funds. Balance: $%.2f\n", account.Balance)
        return false
    }
}

// Get current balance
func (account BankAccount) GetBalance() float64 {
    return account.Balance
}

func main() {
    // Create a bank account
    account := &BankAccount{
        Owner:   "John Doe",
        Balance: 1000.00,
    }
    
    // Deposit money
    account.Deposit(500.00)
    
    // Withdraw money
    account.Withdraw(200.00)
    
    // Try to withdraw more than balance
    account.Withdraw(1500.00)
    
    // Check final balance
    fmt.Printf("Final balance: $%.2f\n", account.GetBalance())
}
```

This program demonstrates:
1. Struct definition with fields (Owner, Balance)
2. Method with pointer receiver for modifying struct fields
3. Method with value receiver for reading data
4. Error handling in the Withdraw method (checking sufficient funds)
5. Using `fmt.Printf` for formatted output with floating-point numbers

</details>
