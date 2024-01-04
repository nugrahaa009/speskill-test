import { API, errorHandler } from "../../configs"

export const unmountListProduct = () => async (dispatch) => await dispatch({type: 'UNMOUNT_LIST_DATA_PRODUCT'})

export const listProduct = () => async (dispatch) => {
  await dispatch({ type: 'LIST_DATA_PRODUCT' })
  return API.GET('recruitment').then((response) => {
    dispatch({
      type: 'LIST_DATA_PRODUCT_SUCCESS',
      payload: {
        data: response,
      },
    })
  }).catch((err) => dispatch(errorHandler(err, dispatch({ type: 'LIST_DATA_PRODUCT_FAILED' }))))
}