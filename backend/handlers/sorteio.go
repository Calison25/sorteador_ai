package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"sorteador-de-numeros/backend/services"
)

type SorteioRequest struct {
	Quantidade int `json:"quantidade"`
	Min        int `json:"min"`
	Max        int `json:"max"`
	NaoRepetir bool `json:"naoRepetir"`
	Ordenar    bool `json:"ordenar"`
}

func SortearNumeros(c *gin.Context) {
	var req SorteioRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	resultado, err := services.RealizarSorteio(req.Quantidade, req.Min, req.Max, req.NaoRepetir, req.Ordenar)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"resultado": resultado})
}
