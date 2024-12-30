import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-teemo-trends',
  templateUrl: './teemo-trends.component.html',
  styleUrls: ['./teemo-trends.component.css']
})
export class TeemoTrendsComponent {
  // Valores centrales para mostrar en cada gráfica
  public winRateCenterText: string = '42.35%'; // Refleja un promedio más bajo
  public pickRateCenterText: string = '6.7%'; // Ajuste para menor popularidad
  public banRateCenterText: string = '10.8%'; // Ajuste para menor tasa de prohibición

  // Datos de la gráfica de Win Rate
  public winRateChartData: ChartData<'line'> = {
    labels: ['14.13', '14.14', '14.15', '14.16', '14.17', '14.18', '14.19', '14.20', '14.21'],
    datasets: [
      {
        data: [47.1, 46.5, 44.0, 42.8, 41.2, 40.5, 39.8, 40.3, 41.0], // Tendencia a la baja con recuperación mínima
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
        min: 35,
        max: 50, // Ajustado para reflejar un rango más bajo
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
        data: [7.0, 6.9, 6.8, 6.6, 6.5, 6.4, 6.2, 6.3, 6.5], // Tendencia a la baja con estabilización
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
        min: 5,
        max: 10,
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
        data: [13.5, 13.0, 12.5, 12.0, 11.8, 11.6, 11.4, 11.5, 11.8], // Tendencia a la baja con ligera recuperación
        label: 'Ban Rate',
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
        min: 10,
        max: 15,
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
        data: [39.5, 39.8, 40.0, 40.3, 40.1], // Consistentemente bajo en todas las duraciones
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
        min: 35,
        max: 45,
        ticks: { callback: (value) => `${value}%` }
      },
      x: { display: true }
    }
  };

  public winRateByDurationChartType: 'line' = 'line';
}
