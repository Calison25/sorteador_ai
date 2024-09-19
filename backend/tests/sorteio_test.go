package tests

import (
	"sort"
	"testing"

	"sorteador-de-numeros/backend/services"
)

func TestRealizarSorteio(t *testing.T) {
	t.Run("Sorteio básico", func(t *testing.T) {
		resultado, err := services.RealizarSorteio(5, 1, 10, false, false)
		if err != nil {
			t.Fatalf("Erro inesperado: %v", err)
		}
		if len(resultado) != 5 {
			t.Errorf("Esperado 5 números, obtido %d", len(resultado))
		}
	})

	t.Run("Não repetir números", func(t *testing.T) {
		resultado, err := services.RealizarSorteio(5, 1, 10, true, false)
		if err != nil {
			t.Fatalf("Erro inesperado: %v", err)
		}
		numeros := make(map[int]bool)
		for _, num := range resultado {
			if numeros[num] {
				t.Errorf("Número repetido encontrado: %d", num)
			}
			numeros[num] = true
		}
	})

	t.Run("Ordenar números", func(t *testing.T) {
		resultado, err := services.RealizarSorteio(5, 1, 10, false, true)
		if err != nil {
			t.Fatalf("Erro inesperado: %v", err)
		}
		if !sort.IntsAreSorted(resultado) {
			t.Errorf("Resultado não está ordenado: %v", resultado)
		}
	})
}
