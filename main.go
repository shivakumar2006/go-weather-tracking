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
	"fmt"
	"strings"
)

func main() {
	text := "Hello world! This is a simple world of Programming"

	if strings.Contains(text, "world") {
		fmt.Println("world was contain...")
	} else {
		fmt.Println("world was not contain...")
	}

	words := strings.Split(text, "  ")
	fmt.Println("Words in the text : ", words)

	replacedText := strings.Replace(text, "world", "GO-lang", -1)
	fmt.Println("text after replacement", replacedText)
}
