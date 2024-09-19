package services

import (
	"errors"
	"math/rand"
	"sort"
	"time"
)

func RealizarSorteio(quantidade, min, max int, naoRepetir, ordenar bool) ([]int, error) {
	if quantidade <= 0 || min > max {
		return nil, errors.New("parâmetros inválidos")
	}

	rand.Seed(time.Now().UnixNano())

	var resultado []int
	numeros := make(map[int]bool)

	for len(resultado) < quantidade {
		num := rand.Intn(max-min+1) + min
		if naoRepetir {
			if !numeros[num] {
				resultado = append(resultado, num)
				numeros[num] = true
			}
		} else {
			resultado = append(resultado, num)
		}
	}

	if ordenar {
		sort.Ints(resultado)
	}

	return resultado, nil
}
