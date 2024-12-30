import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-akshan-trends',
  templateUrl: './akshan-trends.component.html',
  styleUrls: ['./akshan-trends.component.css']
})
export class AkshanTrendsComponent {
  // Valores centrales para mostrar en cada gráfica
  public winRateCenterText: string = '50.79%'; // Valor fijo
  public pickRateCenterText: string = '9.9%'; // Valor fijo
  public banRateCenterText: string = '13.61%'; // Valor fijo

  // Datos de la gráfica de Win Rate
  public winRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [50.1, 50.3, 50.7, 50.8, 50.5, 49.9, 50.2, 50.1, 50.8], // Nuevos datos inventados con un pequeño descenso
        label: 'Win Rate',
        borderColor: (context) => {
          const winRate = context.dataset.data[context.dataIndex] as number;
          return winRate < 50 ? 'red' : 'green'; // Color dinámico
        },
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        pointBorderColor: (context) => {
          const winRate = context.dataset.data[context.dataIndex] as number;
          return winRate < 50 ? 'red' : 'green'; // Color dinámico
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
        min: 49,
        max: 53,
        ticks: { callback: (value) => `${value}%` }
      },
      x: { display: true }
    }
  };

  // Datos de la gráfica de Pick Rate
  public pickRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [11.5, 11.6, 12.0, 12.2, 12.5, 12.8, 13.0, 13.2, 13.1], // Nuevos datos inventados con ligera subida
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

  // Datos de la gráfica de Tasa/Ban
  public banRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [16.0, 16.5, 17.2, 17.7, 17.4, 17.0, 16.7, 16.3, 16.0], // Nuevos datos inventados con ligera caída
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

  // Nueva gráfica de Tasa de Victoria por Duración de la Partida
  public winRateByDurationChartData: ChartData<'line'> = {
    labels: ['0', '25', '30', '35', '40'],  
    datasets: [
      {
        data: [51.0, 51.3, 51.5, 51.7, 51.3], // Nuevos datos inventados con ligera subida
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
        min: 49,
        max: 53,
        ticks: { callback: (value) => `${value}%` }
      },
      x: { display: true }
    }
  };

  public winRateByDurationChartType: 'line' = 'line';
}

