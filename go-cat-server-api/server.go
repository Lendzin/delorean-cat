package main

import (
	"log"
	"net/http"

	"github.com/rs/cors"
)

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"}, // this should not be * in production.
	})
	handler := http.FileServer(http.Dir("/cat-app/go-cat-server-api/static"))
	current := c.Handler(handler)

	log.Fatal(http.ListenAndServe(":9000", current))
}
