
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarAreaChart() {
  const data = {
    labels: ['Sumi', 'Swapan', 'Sojib', 'Swampa', 'Sowrav'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [30, 25, 30, 25, 30],
        backgroundColor: [
          '#3E97FF',
          '#E83E8C',
          '#EEF1F3',
          '#E49E3D',
          '#3DC7BE',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
         labels: {
            usePointStyle: true,
         },
      },
      title: {
        display: false,
        text: 'Polar Area Chart Example',
      },
    },
    scales: {
      r: {
        ticks: {
          display: false, 
        },
      },
    },
  };

  return (
    <div style={{ width: '70%', margin: 'auto', padding: '20px' }}>
      <PolarArea data={data} options={options} />
    </div>
  );
}

export default PolarAreaChart;
