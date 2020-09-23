import React, { useContext, useEffect } from "react";
import ParticlesBg from "particles-bg";
import TickerContext from "../context/ticker/TickerContext";
import SingleLineGridList from "../components/Tickers/List";
import Chart from "../components/Tickers/Chart";

const Home = () => {
  const tickerContext = useContext(TickerContext);

  const {
    getTicker,
    getTickerByMarket,
    tickersByMarket,
    tickers,
    loading,
  } = tickerContext;

  useEffect(() => {
    getTicker();
    getTickerByMarket("ETHCLP");

    // eslint-disable-next-line
  }, []);
  function showChart(market) {
    getTickerByMarket(market);
  }
  if (!loading) {
    return (
      <div>
        <SingleLineGridList tickers={tickers} showChart={showChart} />
        <Chart tickers={tickersByMarket} />
      </div>
    );
  } else {
    return (
      <div>
        <ParticlesBg type="cobweb" bg={true} />
      </div>
    );
  }
};

export default Home;
