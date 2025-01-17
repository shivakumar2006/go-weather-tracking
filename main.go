// package main

// import (
// 	"encoding/json"
// 	"io/ioutil"
// 	"net/http"
// 	"strings"
// )

// func main() {

// }

package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func main() {
	person := Person{
		Name: "Shiva",
		Age:  18,
	}

	jsonData, err := json.Marshal(person)
	if err != nil {
		fmt.Println("Error marshalling JSON: ", err)
		return
	}

	fmt.Println("JSON data : ", string(jsonData))

	var p Person
	err = json.Unmarshal(jsonData, &p)
	if err != nil {
		fmt.Println("Error unmarshalling JSON: ", err)
		return
	}

	fmt.Printf("Unmarshal struct: %+v \n", p)
	fmt.Println("Name: ", p.Name)
	fmt.Println("Age: ", p.Age)
}
