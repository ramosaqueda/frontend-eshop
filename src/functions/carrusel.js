import axios from 'axios';

export const getCarrusel = async () =>
  await axios.get(`${process.env.REACT_APP_API}/carrusel`);
