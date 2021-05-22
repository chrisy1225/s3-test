import Box from '@material-ui/core/Box';

import { useEffect } from 'react';

import Chart from 'chart.js/auto';
/*

import { Chart, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
*/

const showChart = (data) => {
   const ctx = document.getElementById('myChart');
   const chart = new Chart(ctx, {
      type: 'line',
      data: {
         labels: ['Red', 'Yellow', 'Blue'],
         datasets: [{
            data: data,
            label: 'Attacker',
            borderColor: "#3e95cd",
            fill: false
         }],
      },
      options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Chart Title'
              }
          },
          scales: {
              x: {
                  display: true,
                  title: {
                     display: true,
                     text: 'booga'
                  }
              },
              y: {
                  display: true,  
              }
          }
      }
  })
}



export default function MyChart(props) {
   let data = props.data;
   useEffect(() => {
      showChart(data);
      return () => {
         
      };
   }, []);

  return (
     <div style={{width: '40vw'}}>
        <canvas id='myChart' />
     </div>
   
  );
}