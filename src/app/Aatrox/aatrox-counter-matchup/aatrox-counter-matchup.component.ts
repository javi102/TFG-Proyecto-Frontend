import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../champion.service';

@Component({
  selector: 'app-aatrox-counter-matchup',
  templateUrl: './aatrox-counter-matchup.component.html',
  styleUrls: ['./aatrox-counter-matchup.component.css']
})
export class AatroxCounterMatchupComponent implements OnInit {

  counterMatchups: any;
  matchups: any;
  goodMatchups: any;
  champions: any;

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {
    // Llamar al servicio para obtener los counter matchups cuando se inicializa el componente
    this.championService.getCounterMatchups().subscribe(
      (response: any) => {
        console.log('Datos de counter matchups recibidos:', response);  // Verifica cómo llega la respuesta
        if (response && response.data) {
          this.counterMatchups = response.data.slice(0, 11);  // Solo los primeros 11 elementos
        } else {
          console.error('Los datos recibidos no tienen la forma esperada para counter matchups:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los counter matchups:', error);
      }
    );

    this.championService.getMatchups().subscribe( // obtiene los matchups
      (response: any) => {
        console.log('Datos de matchups recibidos:', response);
        this.matchups = response.data.slice(1, 12);  //El metodo slice nos permite obtener solo los primeros 11 elementos
      },
      (error) => {
        console.error('Error al obtener los matchups:', error);
      }
    );
    

    this.championService.getGoodMatchups().subscribe( // obtiene los good matchups
      (response: any) => {
        console.log('Datos de good matchups recibidos:', response);
        this.goodMatchups = response.data.slice(1, 12);  
      },
      (error) => {
        console.error('Error al obtener los good matchups:', error);
      }
    );
    

    this.championService.getChampions().subscribe( // obtiene los campeones
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
  }


  QuitarApostrofes(campeon: string): string { // Método para quitar los apóstrofes y espacios en blanco de los nombres de los campeones
    return campeon
      .replace(/'/g, '')
      .replace(/%20/g, '-');
  }

}



