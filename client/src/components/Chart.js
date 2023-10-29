import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';
import { api } from '../api';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

import Title from './Title';
import { Line } from 'react-chartjs-2';
import { Container, Paper, Typography } from '@mui/material';

const LineChartThingieMagigie = () => {
  const chartRef = useRef(null);
  // Sample data for the line chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Line Chart Example
        </Typography>
        <Line ref={chartRef} data={data} />
      </Paper>
    </Container>
  );
};

function LineChartThingie() {
  return( 
    <LineChart
    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
    series={[
      {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
      },
    ]}
    width={500}
    height={300}
  />
  );
}
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
    // <LineChartThingie />
    <React.Fragment>
      <LineChartThingieMagigie />
      <Title>Custom Code</Title>
      
    </React.Fragment>
  );
} 






