package main

import (
	"log"

	"sorteador-de-numeros/backend/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Configurar CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"} // Ajuste conforme necessário
	r.Use(cors.New(config))

	// Rotas
	r.POST("/sortear", handlers.SortearNumeros)

	// Iniciar servidor
	log.Fatal(r.Run(":8080"))
}
