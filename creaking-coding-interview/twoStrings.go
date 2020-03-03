package interview

import "fmt"

func twoStrings(s1 string, s2 string) string {
	var map1 = make(map[byte]bool)
	var map2 = make(map[byte]bool)
	for i := 0; i < len(s1); i++ {
		map1[s1[i]] = true
	}
	for i := 0; i < len(s2); i++ {
		map2[s2[i]] = true
	}
	for key := range map1 {
		if map2[key] {
			return "YES"
		}
	}
	return "NO"
}

func main() {
	fmt.Println(twoStrings("Hello", "ol"))
}
