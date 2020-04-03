// package main

// import (
// 	"fmt"
// 	"io/ioutil"
// )

// type Page struct {
// 	Title string
// 	Body  []byte
// }

// func (p *Page) save() error {
// 	filename := p.Title + ".txt"
// 	return ioutil.WriteFile(filename, p.Body, 0600)
// }

// func loadPage(title string) (*Page, error) {
// 	filename := title + ".txt"
// 	body, err := ioutil.ReadFile(filename)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return &Page{Title: title, Body: body}, nil
// }

// func main() {
// 	p1 := &Page{Title: "TestPage", Body: []byte("This is sample page.")}
// 	p1.save()
// 	p2, _ := loadPage("TestPage")
// 	fmt.Println(string(p2.Body))
// }

package main

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
)

type Page struct {
	Title string
	Body  []byte
}

func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}

func handler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/view/"):]
	p, _ := loadPage(title)
	fmt.Fprintf(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
}

func editHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/edit/"):]
	p, err := loadPage(title)
	if err != nil {
		p = &Page{Title: title}
	}
	t, _ := template.ParseFiles("edit.html")
	t.Execute(w, p)
	// fmt.Fprintf(w, "<h1>Editing %s</h1>"+
	// 	"<form action=\"/save/%s\">%s\" method=\"POST\">"+
	// 	"<textarea name=\"body\">%s</textarea><br>"+
	// 	"input type=\"submit\" value=\"Save\">"+
	// 	"</form>",
	// 	p.Title, p.Title, p.Body)
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/view/"):]
	p, _ := loadPage(title)
	t, _ := template.ParseFiles("view.html")
	t.Execute(w, p)
}

func main() {
	http.HandleFunc("/view/", viewHandler)
	http.HandleFunc("/edit/", editHandler)
	// http.HandleFunc("/save/", saveHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
