import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-ahri-trends',
  templateUrl: './ahri-trends.component.html',
  styleUrls: ['./ahri-trends.component.css']
})
export class AhriTrendsComponent {
  // Valores centrales para mostrar en cada gráfica
  public winRateCenterText: string = '50.79%';
  public pickRateCenterText: string = '9.9%';
  public banRateCenterText: string = '13.61%';

  // Datos de la gráfica de Win Rate
  public winRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [50.1, 50.3, 50.7, 50.8, 50.5, 50.7, 50.6, 50.9, 50.8], 
        label: 'Win Rate',
        borderColor: 'green',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        pointBorderColor: 'green',
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
        data: [11.8, 11.7, 12.0, 12.4, 12.6, 12.8, 13.1, 13.3, 13.0], 
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
        data: [16.0, 16.5, 17.2, 17.7, 17.4, 17.1, 16.8, 16.3, 16.0], 
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
        data: [50.9, 51.1, 51.2, 51.3, 51.0], 
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
