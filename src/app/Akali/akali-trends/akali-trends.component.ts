import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
@Component({
  selector: 'app-akali-trends',
  templateUrl: './akali-trends.component.html',
  styleUrls: ['./akali-trends.component.css']
})
export class AkaliTrendsComponent {
  
  public winRateCenterText: string = '49.85%'; 
  public pickRateCenterText: string = '10.3%'; 
  public banRateCenterText: string = '14.2%'; 

  // Datos de la gráfica de Win Rate
  public winRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [50.1, 49.8, 49.5, 49.3, 50.0, 50.2, 50.1, 50.5, 49.85], 
        label: 'Win Rate',
        borderColor: (context) => {
          const winRate = context.dataset.data[context.dataIndex] as number;
          return winRate < 50 ? 'red' : 'green';
        }, // Color dinámico
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        pointBorderColor: (context) => {
          const winRate = context.dataset.data[context.dataIndex] as number;
          return winRate < 50 ? 'red' : 'green';
        }, 
        pointRadius: 5,
        pointHoverRadius: 6,
      }
    ]
  };

  public winRateChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 48,
        max: 52,
        ticks: { callback: (value) => `${value}%` }
      },
      x: { display: true }
    }
  };

  public pickRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [10.5, 11.0, 11.4, 11.9, 12.2, 12.5, 12.7, 12.9, 13.0], 
        label: 'Pick Rate',
        borderColor: 'gray',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        pointBorderColor: 'gray',
        pointRadius: 5,
        pointHoverRadius: 6,
      }
    ]
  };

  public pickRateChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 8,
        max: 16,
        ticks: { callback: (value) => `${value}%` }
      },
      x: { display: true }
    }
  };

  public banRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [13.5, 14.0, 14.8, 15.3, 15.0, 14.7, 14.5, 14.2, 14.0], 
        label: 'Tasa/Ban',
        borderColor: 'grey',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        pointBorderColor: 'grey',
        pointRadius: 5,
        pointHoverRadius: 6,
      }
    ]
  };

  public banRateChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 12,
        max: 20,
        ticks: { callback: (value) => `${value}%` }
      },
      x: { display: true }
    }
  };

  public winRateChartType: 'line' = 'line';
  public pickRateChartType: 'line' = 'line';
  public banRateChartType: 'line' = 'line';

  public winRateByDurationChartData: ChartData<'line'> = {
    labels: ['0', '25', '30', '35', '40'],  
    datasets: [
      {
        data: [48.5, 49.2, 50.1, 50.8, 51.0], 
        label: 'Tasa de Victoria',
        borderColor: 'red',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        pointBorderColor: 'red',
        pointRadius: 5,
        pointHoverRadius: 6,
      }
    ]
  };

  public winRateByDurationChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 48,
        max: 52,
        ticks: { callback: (value) => `${value}%` }
      },
      x: { display: true }
    }
  };

  public winRateByDurationChartType: 'line' = 'line';
}

