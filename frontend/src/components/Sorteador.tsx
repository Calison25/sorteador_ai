import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  makeStyles,
} from '@material-ui/core';
import { sortearNumeros } from '../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  result: {
    marginTop: theme.spacing(2),
    fontSize: '2rem',
  },
}));

const Sorteador: React.FC = () => {
  const classes = useStyles();
  const [quantidade, setQuantidade] = useState(2);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [naoRepetir, setNaoRepetir] = useState(true);
  const [ordenar, setOrdenar] = useState(false);
  const [resultado, setResultado] = useState<number[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await sortearNumeros(quantidade, min, max, naoRepetir, ordenar);
      setResultado(response.data.resultado);
    } catch (error) {
      console.error('Erro ao sortear números:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Typography component="h1" variant="h5">
          Sorteador de números
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Quantidade de números"
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Número mínimo"
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Número máximo"
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
          <FormControlLabel
            control={<Switch checked={naoRepetir} onChange={(e) => setNaoRepetir(e.target.checked)} />}
            label="Não repetir número"
          />
          <FormControlLabel
            control={<Switch checked={ordenar} onChange={(e) => setOrdenar(e.target.checked)} />}
            label="Ordenar números em ordem crescente"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sortear
          </Button>
        </form>
        {resultado.length > 0 && (
          <Typography className={classes.result}>
            Resultado: {resultado.join(' e ')}
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default Sorteador;