import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import ItemTicker from "../Tickers/Item";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    margin:16
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();

  function showChart(market) {
    props.showChart(market);
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {props.tickers.map((ticker) => (
          <ItemTicker ticker={ticker} showChart={showChart} />
        ))}
      </GridList>
    </div>
  );
}
