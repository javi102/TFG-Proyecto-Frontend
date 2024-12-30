import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-aatrox-trends',
  templateUrl: './aatrox-trends.component.html',
  styleUrls: ['./aatrox-trends.component.css']
})
export class AatroxTrendsComponent {
  // Valores centrales para mostrar en cada gráfica
  public winRateCenterText: string = '50.79%';
  public pickRateCenterText: string = '9.9%';
  public banRateCenterText: string = '13.61%';

  // Datos de la gráfica de Win Rate
  public winRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [50.5, 50.64, 50.8, 50.9, 50.3, 50.5, 50.4, 50.8, 50.79],
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
        data: [12, 11.5, 12.8, 13.5, 14.2, 13.9, 13.3, 12.9, 12.5],
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
        data: [15, 16.2, 17.5, 18.3, 17.9, 16.5, 15.8, 15.2, 13.61],
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
        data: [51, 50.8, 51.2, 51, 50.7],
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
