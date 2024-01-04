const LIST_DATA_PRODUCT = 'LIST_DATA_PRODUCT'
const LIST_DATA_PRODUCT_SUCCESS = 'LIST_DATA_PRODUCT_SUCCESS'
const LIST_DATA_PRODUCT_FAILED = 'LIST_DATA_PRODUCT_FAILED'
const UNMOUNT_LIST_DATA_PRODUCT = 'UNMOUNT_LIST_DATA_PRODUCT'

const initialState = {
  data: [],
  loading: true,
  message: null,
}

const listProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_DATA_PRODUCT:
      return {
        ...state,
        data: [],
        loading: true,
      }
    case LIST_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'SUCCESS',
        data: action.payload.data,
      }
    case LIST_DATA_PRODUCT_FAILED:
      return {
        ...state,
        data: [],
        loading: true,
        message: 'FAILED',
      }
    case UNMOUNT_LIST_DATA_PRODUCT:
      return {
        ...state,
        data: [],
        loading: true,
      }
    default:
      return state
  }
}

export default listProductReducer
