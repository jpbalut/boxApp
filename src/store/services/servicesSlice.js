import { createSlice } from '@reduxjs/toolkit';

import SERVICES from '../../constants/data/services.json';

const initialState = {
  data: SERVICES,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
});

// NO TIENE REDUCERS POR QUE ES ALGO QUE NO VAMOS A MODIFICAR, SOLO CONSULTAR.

export default servicesSlice.reducer;
