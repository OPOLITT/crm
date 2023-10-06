import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,

    
    plugins: {
        legend: {
        position: 'bottom' as const,
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        title: {
        display: true,
        text: 'График продаж за 2022/2023',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Пупсень',
      data: [300,9],
      backgroundColor: '#4aabbc',
    },
    {
      label: 'Вупсень',
      data: [100,200,10],
      backgroundColor: '#fcddaf',
    },
  ],
};

export function Baar() {
  return <Bar options={options} data={data} width='80%' height='50%' />;
}
