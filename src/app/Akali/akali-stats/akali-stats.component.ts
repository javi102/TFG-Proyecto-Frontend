import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../champion.service';

@Component({
  selector: 'app-akali-stats',
  templateUrl: './akali-stats.component.html',
  styleUrls: ['./akali-stats.component.css']
})
export class AkaliStatsComponent implements OnInit {

  champions: any[] = [];  // Arreglo de campeones
  selectedChampion: any = null;  // Campeón seleccionado
  stats2: any = {};  // Estadísticas adicionales (stats2)
  counterMatchups: any[] = [];  // Inicializa como arreglo vacío

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    // Obtener los campeones
    this.championService.getChampions().subscribe(
      (response: any) => {
        console.log('Datos de campeones recibidos:', response);  // Verifica cómo llega la respuesta
        if (response && response.data) {
          this.champions = response.data;
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los campeones:', error);
      }
    );

    // Obtener las estadísticas (stats2)
    this.championService.getStats2().subscribe(
      (response: any) => {
        console.log('Datos de stats2 recibidos:', response);  // Verifica cómo llega la respuesta
        if (response && response.data) {
          this.stats2 = response.data;
        } else {
          console.error('Los datos recibidos no tienen la forma esperada para stats2:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los stats2:', error);
      }
    );

    this.championService.getCounterMatchups().subscribe(
      (response: any) => {
        console.log('Datos de counter matchups recibidos:', response);
        if (response && response.data) {
          this.counterMatchups = response.data.slice(22, 33);
        } else {
          console.error('Los datos recibidos no tienen la forma esperada para counter matchups:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los counter matchups:', error);
      }
    );
  }

  // Función para seleccionar un campeón
  selectChampion(champion: any): void {
    this.selectedChampion = champion;
  }

  // Función para mostrar el video
  showVideo(videoElement: HTMLVideoElement) {
    if (videoElement) {
      videoElement.style.display = 'block';  // Muestra el video
      videoElement.muted = true;  // Mutea el video
      videoElement.play();  // Reproduce el video
    }
  }

  // Función para ocultar el video
  hideVideo(videoElement: HTMLVideoElement) {
    if (videoElement) {
      videoElement.style.display = 'none';  // Oculta el video
      videoElement.pause();  // Pausa el video
      videoElement.currentTime = 0;  // Restaura el tiempo del video a 0
    }
  }


  QuitarApostrofes(campeon: string): string { //  Método para quitar los apóstrofes y espacios en blanco de los nombres de los campeones
    return campeon
      .replace(/'/g, '')
      .replace(/%20/g, '-');
  }

}


