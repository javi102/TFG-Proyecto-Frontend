import { Component } from '@angular/core';
import { ChampionService } from '../../champion.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-ahri-build-personalizada',
  templateUrl: './ahri-build-personalizada.component.html',
  styleUrls: ['./ahri-build-personalizada.component.css']
})
export class AhriBuildPersonalizadaComponent implements OnInit{
  coreItems: any[] = [];  
  Items: any[] = [];  
  StarterItems: any[] = [];
  Boots: any[] = [];  
  champions: any[] = [];

  builds: any[] = []; 
  userId: number = 0; 
  championId: number = 2; 
 

  coreImages: string[][] = [
    ['../../assets/objetos/223118.png', '../../assets/objetos/224628.png', '../../assets/objetos/3157.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/224628.png', '../../assets/objetos/3089.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/224628.png', '../../assets/objetos/4645.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/6699.png', '../../assets/objetos/6701.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/6699.png', '../../assets/objetos/3089.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/4646.png', '../../assets/objetos/3157.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/223071.png', '../../assets/objetos/6699.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/6653.png', '../../assets/objetos/3157.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/223071.png', '../../assets/objetos/3089.png'],
    ['../../assets/objetos/1082.png', '../../assets/objetos/223118.png', '../../assets/objetos/224628.png'],
    ['../../assets/objetos/1082.png', '../../assets/objetos/223118.png', '../../assets/objetos/223071.png'],
    ['../../assets/objetos/223118.png', '../../assets/objetos/6653.png', '../../assets/objetos/3089.png'],
  ];

  starterItems: string[][] = [
    ['../../assets/objetos/1056.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1001.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1052.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
  ];

  ItemImages: string[] = [
    '../../assets/objetos/223118.png',
    '../../assets/objetos/224628.png',
    '../../assets/objetos/3157.png',
    '../../assets/objetos/4645.png',
    '../../assets/objetos/1082.png',
    '../../assets/objetos/3089.png',
    '../../assets/objetos/6653.png',
    '../../assets/objetos/4646.png',
    '../../assets/objetos/226655.png',
    '../../assets/objetos/223100.png',
    '../../assets/objetos/3916.png',
    '../../assets/objetos/3041.png'
  ];

  boots: string[] = [
    '../../assets/objetos/223020.png',
    '../../assets/objetos/3158.png',
    '../../assets/objetos/223111.png',
  ];

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {
    const SaveUserId = localStorage.getItem('userId'); // Obtiene el userId de localStorage
    if (SaveUserId) { // Si se encontró userId en localStorage
      this.userId = parseInt(SaveUserId, 10); // Convierte el userId a número
    } else {
      console.error('No se encontró userId en localStorage');
    }


    this.championService.getChampions().subscribe(
      (response: any) => {
        console.log('Datos de campeones recibidos:', response);  // Verifica cómo llega la respuesta
        if (response && response.data) {
          this.champions = response.data;  // Guarda los campeones obtenidos
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los campeones:', error);
      }
    );
    
    this.championService.getCoreItems().subscribe( // obtiene los CoreItems
      (response: any) => {
        console.log('Datos de coreItems recibidos:', response);  
        if (response && response.data) {
          this.coreItems = response.data.slice(12, 24); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los coreItems:', error);
      }
    );
    this.championService.getItems().subscribe( // obtiene los Items
      (response: any) => {
        console.log('Datos de getItems recibidos:', response);  
        if (response && response.data) {
          this.Items = response.data.slice(12, 24); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los getItems:', error);
      }
    );
    

   
    this.championService.getStarterItems().subscribe( // obtiene los StarterItems
      (response: any) => {
        console.log('Datos de StarterItems recibidos:', response);  
        if (response && response.data) {
          this.StarterItems = response.data.slice(3, 6); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los StarterItems:', error);
      }
    );

    this.championService.getBoots().subscribe( // obtiene las Botas
      (response: any) => {
        console.log('Datos de Boots recibidos:', response); 
        if (response && response.data) {
          this.Boots = response.data.slice(3, 6); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los Boots:', error);
      }
    );
   
    this.championService.getBuilds(this.userId, this.championId).subscribe( // obtiene las builds
      (response: any) => {
        this.builds = response.data; // Guarda las builds obtenidas
      },
      (error) => {
        console.error('Error al obtener las builds:', error);
      }
    );
    

      

  }

 

}