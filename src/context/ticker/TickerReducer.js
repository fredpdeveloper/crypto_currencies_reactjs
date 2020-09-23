import {
  GET_TICKER,
  SET_LOADING,
  FAILED_TICKER,
  GET_ALL_TICKER,
  FAILED_ALL_TICKER,
} from "../types";

const currencyArray = [
  { name: "CLP"},
  { name: "ARS"},
  { name: "EUR"},
  { name: "BRL"}
];

export default (state, action) => {
  switch (action.type) {
    case GET_TICKER:
      let tickers = action.payload.data;
      let filterTicker = tickers.filter((ticker) => ticker.bid > 0);
      return {
        ...state,
        tickers: filterTicker,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FAILED_TICKER:
      return {
        ...state,
        loading: false,
      };
    case GET_ALL_TICKER:
      let bidData = action.payload.data.bid;
      let bidList = [];
      bidData.map((ticker) => {
        let bid = new Object();
        bid.x = new Date(ticker.candle_date);
        bid.y = parseInt(ticker.close_price);
        bidList.push(bid);
      });
      return {
        ...state,
        tickersByMarket: bidList,
      };
    case FAILED_ALL_TICKER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
