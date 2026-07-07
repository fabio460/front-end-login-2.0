import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { usuarioType } from '../typesGerais';

const initialState:usuarioType = {
   id:"",
   nome:"",
   email:""
}

const usuarioReducer = createSlice({
  name: "usuarioReducer",
  initialState,
  reducers: {
   adicionarUsuario: (state, action: PayloadAction<usuarioType>) => {
    return action.payload;
   }
  }
});

export const {adicionarUsuario} = usuarioReducer.actions

export default usuarioReducer.reducer