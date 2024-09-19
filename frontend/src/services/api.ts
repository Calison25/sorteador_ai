import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const sortearNumeros = (quantidade: number, min: number, max: number, naoRepetir: boolean, ordenar: boolean) => {
  return api.post('/sortear', { quantidade, min, max, naoRepetir, ordenar });
};