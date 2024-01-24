"use client"
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
        position: 'top',
      },
      title: {
        display: false,
        text: null,
      },
    },
  };
  
  const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'User',
        data: [15,20, 13,8,11,16,12],
        backgroundColor: '#98D89E',
      },
      {
        label: 'Guest',
        data:  [8,12,8,5,15,16,9],
        backgroundColor: '#EE8484',
      },
    ],
  };
  

const Activities = () => {
  return (
    <div className='activity-chart my-4'>
      <Bar width="1000px" height="300px" options={options} data={data} />
    </div>
  )
}

export default Activities;
