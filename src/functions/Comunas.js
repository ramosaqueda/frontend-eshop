import axios from 'axios';
export const getComunas = async () =>
  await axios.get('https://apis.digital.gob.cl/dpa/comunas');
