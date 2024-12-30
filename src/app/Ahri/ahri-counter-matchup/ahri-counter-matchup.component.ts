import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../champion.service';

@Component({
  selector: 'app-ahri-counter-matchup',
  templateUrl: './ahri-counter-matchup.component.html',
  styleUrls: ['./ahri-counter-matchup.component.css']
})
export class AhriCounterMatchupComponent implements OnInit {

  counterMatchups: any;
  matchups: any;
  goodMatchups: any;
  champions: any;

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {
    this.championService.getCounterMatchups().subscribe( // obtiene los counter matchups
      (response: any) => {
        console.log('Datos de counter matchups recibidos:', response);  
        if (response && response.data) {
          this.counterMatchups = response.data.slice(11, 22);  
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
        this.matchups = response.data.slice(11, 22);  
      },
      (error) => {
        console.error('Error al obtener los matchups:', error);
      }
    );

    this.championService.getGoodMatchups().subscribe( // obtiene los good matchups
      (response: any) => {
        console.log('Datos de good matchups recibidos:', response);
        this.goodMatchups = response.data.slice(11, 22);  
      },
      (error) => {
        console.error('Error al obtener los good matchups:', error);
      }
    );

    this.championService.getChampions().subscribe( // obtiene los campeones
      (response: any) => {
        console.log('Datos de campeones recibidos:', response);  
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


  QuitarApostrofes(campeon: string): string { // metodo para quitar los apostrofes y espacios de los nombres de los campeones
    return campeon
      .replace(/'/g, '')
      .replace(/%20/g, '-');
  }

}



