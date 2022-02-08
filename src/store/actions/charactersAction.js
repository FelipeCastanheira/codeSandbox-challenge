import { GET_CHARACTERS_FAIL, GET_CHARACTERS_SUCCESS } from "./actionTypes";
import fetchApi from "../../services/requestAPI";

export const actionGetCharactersFail = (err) => ({
  type: GET_CHARACTERS_FAIL,
  error: err
});

export const actionGetCharactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  characters
});

// IMPLEMENTAR O THUNK => Funcao quer retorna outra Funcao
// USAR A FUNCAO fetchApi()
// export const actionFetchCharacters = () => {};

export function actionFetchCharacters() {
  return async (dispatch) => {
    try {
      // dispatch(showLoading());
      const data = await fetchApi();
      dispatch(actionGetCharactersSuccess(data.results));
    } catch (error) {
      dispatch(actionGetCharactersFail(error));
    }
  };
}
