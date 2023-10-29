
import React, { useId, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart } from '@mui/x-charts/LineChart';
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
export default function Chart() {
  const theme = useTheme();

  return (
    // <LineChartThingie />
    <React.Fragment>
      <LineChartThingieMagigie />
      <Title>Custom Code</Title>
      
    </React.Fragment>
  );
} 






