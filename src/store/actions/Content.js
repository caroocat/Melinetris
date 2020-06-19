import axios from "axios";

export const getContent = (params) => async (dispatch) => {
  try {
    const search = `https://api.mercadolibre.com/sites/MLA/search?q=`;

    const contentPromise = await axios.get(
      `${search}${params}&offset=0&limit=50`
    );
    const response = contentPromise.data;
    dispatch({
      type: "CURRENT_URL",
      payload: `${search}${params}`,
    });
    dispatch({ type: "GET_CONTENT", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const changeContent = (url, filter, offset) => async (dispatch) => {
  const contentPromise = await axios.get(
    filter
      ? `${url}${filter}&offset=${offset}&limit=50`
      : `${url}&offset=${offset}&limit=50`
  );
  const response = contentPromise.data;
  dispatch({ type: "GET_CONTENT", payload: response });
};

export const getItem = (id) => async (dispatch) => {
  try {
    const itemPromise = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    const response = itemPromise.data;

    dispatch({ type: "GET_ITEM", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilter = (url, offset, filter, value) => async (dispatch) => {
  try {
    const action = value
      ? `${url}&${filter}=${value}`
      : `${url}&sort=${filter}`;

    const filterPromise = await axios.get(
      offset > 0 ? `${action}&offset=${offset}&limit=50` : action
    );
    const response = filterPromise.data;
    dispatch({
      type: "CURRENT_FILTER",
      payload: value ? `&${filter}=${value}` : filter,
    });
    dispatch({ type: "CURRENT_URL", payload: action });
    dispatch({ type: "GET_CONTENT", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};
