import React, { useReducer } from "react";
import axios from "axios";
import TickerContext from "./TickerContext";
import TickerReducer from "./TickerReducer";
import {
  GET_TICKER,
  SET_LOADING,
  FAILED_TICKER,
  GET_ALL_TICKER,
  FAILED_ALL_TICKER,
} from "../types";
import { Api } from "../../config";

const URL = Api.backend;
const TickerState = (props) => {
  const initialState = {
    tickers: [],
    tickersByMarket: [],
    loading: false,
  };

  // set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const [state, dispatch] = useReducer(TickerReducer, initialState);

  const getTicker = async () => {
    setLoading();
    try {
      const response = await axios.get(`${URL}/ticker`);
      dispatch({
        type: GET_TICKER,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: FAILED_TICKER });
    }
  };

  const getTickerByMarket = async (market) => {
    try {
      const response = await axios.get(
        `${URL}/prices?market=${market}&timeframe=1440`
      );
      dispatch({
        type: GET_ALL_TICKER,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: FAILED_ALL_TICKER });
    }
  };

  return (
    <TickerContext.Provider
      value={{
        tickers: state.tickers,
        tickersByMarket: state.tickersByMarket,
        loading: state.loading,
        getTicker,
        getTickerByMarket,
      }}
    >
      {props.children}
    </TickerContext.Provider>
  );
};

export default TickerState;
