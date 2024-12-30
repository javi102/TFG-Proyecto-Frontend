import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../champion.service';
@Component({
  selector: 'app-akali-counter-matchup',
  templateUrl: './akali-counter-matchup.component.html',
  styleUrls: ['./akali-counter-matchup.component.css']
})
export class AkaliCounterMatchupComponent implements OnInit {

  counterMatchups: any;
  matchups: any;
  goodMatchups: any;
  champions: any;

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {
    this.championService.getCounterMatchups().subscribe( // Obtiene los counter matchups
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

    this.championService.getMatchups().subscribe( // Obtiene los matchups
      (response: any) => {
        console.log('Datos de matchups recibidos:', response);
        this.matchups = response.data.slice(22, 33);  
      },
      (error) => {
        console.error('Error al obtener los matchups:', error);
      }
    );

    this.championService.getGoodMatchups().subscribe( // Obtiene los good matchups
      (response: any) => {
        console.log('Datos de good matchups recibidos:', response);
        this.goodMatchups = response.data.slice(22, 33);  
      },
      (error) => {
        console.error('Error al obtener los good matchups:', error);
      }
    );

    this.championService.getChampions().subscribe( // Obtiene los campeones
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


  QuitarApostrofes(campeon: string): string { //Metodo para quitar los apostrofes y espacios de los nombres de los campeones
    return campeon
      .replace(/'/g, '')
      .replace(/%20/g, '-');
  }

}
