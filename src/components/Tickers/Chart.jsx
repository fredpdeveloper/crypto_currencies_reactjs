import React from "react";
import CanvasJSReact from "../../assets/lib/canvasjs.react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
});
export default function Chart(props) {
  const { tickers } = props;
  const classes = useStyles();

  const options = {
    animationEnabled: true,
    title: {
      text: "Variación de criptomoneda",
    },
    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      title: "Precio",
      prefix: "$",
    },
    data: [
      {
        yValueFormatString: "$#.###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: tickers,
      },
    ],
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {tickers ? <CanvasJSChart options={options} /> : false}
      </Paper>
    </div>
  );
}
