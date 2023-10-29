import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';
import { api } from '../api';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';


export default function Chart() {
  const theme = useTheme();

  const [XY, setXY] = useState()
  const [hasSet, setHasSet] = useState(false)

  const loadFavs = () => {
      fetch(api("/getPastFavs"))
        .then(
          res => res.json()
        ).then(
          d => {
            console.log(d)
            let newArr = [d["timestamps"], d["favs"]]
            setXY(newArr)
            setHasSet(true)
          }
        )
  }

  useEffect(loadFavs, [])


  if (XY && hasSet) {
    console.log("VHEJFJHJII")

    const series = [
      // {
      //   type: 'bar',
      //   stack: '',
      //   yAxisKey: 'eco',
      //   data: [2, 5, 3, 4, 1],
      // },
      // {
      //   type: 'bar',
      //   stack: '',
      //   yAxisKey: 'eco',
      //   data: [5, 6, 2, 8, 9],
      // },
      {
        type: 'line',
        yAxisKey: 'pib',
        color: 'red',
        data: XY[1]
      },
    ];

    return (
      <ChartContainer
        series={series}
        width={500}
        height={400}
        xAxis={[
          {
            id: 'years',
            data: XY[0],
            scaleType: 'band',
            valueFormatter: (value) => value.toString(),
          },
        ]}
        yAxis={[
          {
            id: 'eco',
            scaleType: 'linear',
          },
          {
            id: 'pib',
            scaleType: 'log',
          },
        ]}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis label="Years" position="bottom" axisId="years" />
        <ChartsYAxis label="Results" position="left" axisId="eco" />
        <ChartsYAxis label="PIB" position="right" axisId="pib" />
      </ChartContainer>
    );
  }

}