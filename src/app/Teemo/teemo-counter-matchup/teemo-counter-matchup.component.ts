import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../champion.service';

@Component({
  selector: 'app-teemo-counter-matchup',
  templateUrl: './teemo-counter-matchup.component.html',
  styleUrls: ['./teemo-counter-matchup.component.css']
})
export class TeemoCounterMatchupComponent implements OnInit {

  counterMatchups: any;
  matchups: any;
  goodMatchups: any;
  champions: any;

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {
    this.championService.getCounterMatchups().subscribe( // Se obtienen los counter matchups
      (response: any) => {
        console.log('Datos de counter matchups recibidos:', response);  
        if (response && response.data) {
          this.counterMatchups = response.data.slice(44, 55);  
        } else {
          console.error('Los datos recibidos no tienen la forma esperada para counter matchups:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los counter matchups:', error);
      }
    );

    this.championService.getMatchups().subscribe( // Se obtienen los matchups
      (response: any) => {
        console.log('Datos de matchups recibidos:', response);
        this.matchups = response.data.slice(44, 55);  
      },
      (error) => {
        console.error('Error al obtener los matchups:', error);
      }
    );
    

    this.championService.getGoodMatchups().subscribe( // Se obtienen los good matchups  
      (response: any) => {
        console.log('Datos de good matchups recibidos:', response);
        this.goodMatchups = response.data.slice(44, 55);  
      },
      (error) => {
        console.error('Error al obtener los good matchups:', error);
      }
    );
    

    this.championService.getChampions().subscribe( // Se obtienen los campeones
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


  QuitarApostrofes(campeon: string): string { // Quita los apostrofes de los nombres de los campeones y los espacios
    return campeon
      .replace(/'/g, '')
      .replace(/%20/g, '-');
  }

}





