import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { createChart } from "lightweight-charts";

const CryptoChart = ({ data }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (data) {
      const chart = createChart(chartContainerRef.current, { width: chartContainerRef.current.offsetWidth, height: 300 });
      const lineSeries = chart.addLineSeries();

      lineSeries.setData(
        data.map((dataPoint) => ({
          time: dataPoint.time / 1000,
          value: parseFloat(dataPoint.priceUsd),
        })),
      );

      return () => chart.remove();
    }
  }, [data]);

  return <Box ref={chartContainerRef} />;
};

export default CryptoChart;
