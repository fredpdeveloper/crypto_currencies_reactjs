import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chile from "../../assets/img/chile.png";
import Brasil from "../../assets/img/brasil.png";
import Argentina from "../../assets/img/argentina.png";
import Europa from "../../assets/img/europa.png";
import Bitcoin from "../../assets/img/bitcoin.png";
import Eos from "../../assets/img/eos.png";
import Ethereum from "../../assets/img/ethereum.png";
import Stellar from "../../assets/img/stellar.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const countryArray = [
  { name: "CLP", src: Chile },
  { name: "ARS", src: Argentina },
  { name: "EUR", src: Europa },
  { name: "BRL", src: Brasil },
];
const marketArray = [
  { name: "ETH", src: Ethereum },
  { name: "BTC", src: Bitcoin },
  { name: "XLM", src: Stellar },
  { name: "EOS", src: Eos },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    margin: 16,
  },
  paper: {
    padding: 16,
    margin: "auto",
    minWidth: 200,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  market: {
    width: 24,
    height: 24,
  },
  country: {
    width: 24,
    height: 24,
  },
});

export default function Item(props) {
  const classes = useStyles();
  const { ticker } = props;
  function showChart() {
    props.showChart(ticker.market);
  }
  let srcCountry = null;
  let srcMarket = null;
  let currency = null;
  countryArray.map((country) => {
    if (ticker.market.includes(country.name)) {
      srcCountry = country.src;
      currency = country.name;
    }
  });
  marketArray.map((market) => {
    if (ticker.market.includes(market.name)) {
      srcMarket = market.src;
    }
  });
  let market =
    ticker.market.substring(0, 3) +
    "/" +
    ticker.market.substring(3, ticker.market.lenght);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <Grid item xs={2}>
              <img alt="timer" src={srcMarket} className={classes.market} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1">{market}</Typography>
            </Grid>
            <Grid item xs={2}>
              <img alt="timer" src={srcCountry} className={classes.country} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              ${ticker.bid} {currency}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button size="small" color="primary" onClick={showChart}>
              VER HISTORICO
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
