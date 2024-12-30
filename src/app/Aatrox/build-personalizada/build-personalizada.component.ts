import { Component } from '@angular/core';
import { ChampionService } from '../../champion.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-build-personalizada',
  templateUrl: './build-personalizada.component.html',
  styleUrls: ['./build-personalizada.component.css']
})
export class BuildPersonalizadaComponent implements OnInit{
  coreItems: any[] = [];  
  Items: any[] = [];  
  StarterItems: any[] = [];
  Boots: any[] = [];  
  champions: any[] = [];

  builds: any[] = []; 
  userId: number = 0; 
  championId: number = 1; 
 

  coreImages: string[][] = [
    ['../../assets/objetos/3161.png', '../../assets/objetos/6610.png', '../../assets/objetos/3053.png'],
    ['../../assets/objetos/6692.png', '../../assets/objetos/6610.png', '../../assets/objetos/6694.png'],
    ['../../assets/objetos/223071.png', '../../assets/objetos/6610.png', '../../assets/objetos/3053.png'],
    ['../../assets/objetos/3161.png', '../../assets/objetos/6699.png', '../../assets/objetos/6701.png'],
    ['../../assets/objetos/6692.png', '../../assets/objetos/223071.png', '../../assets/objetos/3053.png'],
    ['../../assets/objetos/3161.png', '../../assets/objetos/3053.png', '../../assets/objetos/6610.png'],
    ['../../assets/objetos/6692.png', '../../assets/objetos/223071.png', '../../assets/objetos/6699.png'],
    ['../../assets/objetos/6692.png', '../../assets/objetos/6699.png', '../../assets/objetos/223071.png'],
    ['../../assets/objetos/3161.png', '../../assets/objetos/6701.png', '../../assets/objetos/6610.png'],
    ['../../assets/objetos/6701.png', '../../assets/objetos/6699.png', '../../assets/objetos/6610.png'],
    ['../../assets/objetos/6701.png', '../../assets/objetos/6692.png', '../../assets/objetos/6610.png'],
    ['../../assets/objetos/3161.png', '../../assets/objetos/6699.png', '../../assets/objetos/6701.png'],
  ];

  starterItems: string[][] = [
    ['../../assets/objetos/1054.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1055.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1083.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
  ];

  ItemImages: string[] = [
    '../../assets/objetos/6692.png',
    '../../assets/objetos/6610.png',
    '../../assets/objetos/3161.png',
    '../../assets/objetos/223071.png',
    '../../assets/objetos/6699.png',
    '../../assets/objetos/3053.png',
    '../../assets/objetos/6694.png',
    '../../assets/objetos/226333.png',
    '../../assets/objetos/3156.png',
    '../../assets/objetos/3123.png',
    '../../assets/objetos/3074.png',
    '../../assets/objetos/6630.png'
  ];

  boots: string[] = [
    '../../assets/objetos/3047.png',
    '../../assets/objetos/3111.png',
    '../../assets/objetos/3158.png',
  ];

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {
    const SaveUserId = localStorage.getItem('userId'); // Obtiene el userId de localStorage
    if (SaveUserId) {
      this.userId = parseInt(SaveUserId, 10); // Convierte el userId a número
      console.log('UserId para PersonalizarBuild:', this.userId);
    } else {
      console.error('No se encontró userId en localStorage');
    }
  
    this.championService.getChampions().subscribe(
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
    
    this.championService.getCoreItems().subscribe(
      (response: any) => {
        console.log('Datos de coreItems recibidos:', response);  
        if (response && response.data) {
          this.coreItems = response.data.slice(0, 12); // Obtén los primeros 12 elementos
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los coreItems:', error);
      }
    );
    
    this.championService.getItems().subscribe(
      (response: any) => {
        console.log('Datos de getItems recibidos:', response);  // Verifica cómo llega la respuesta
        if (response && response.data) {
          this.Items = response.data.slice(0, 12); // Obtén los primeros 12 elementos
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los getItems:', error);
      }
    );
    

   
    this.championService.getStarterItems().subscribe(
      (response: any) => {
        console.log('Datos de StarterItems recibidos:', response);  // Verifica cómo llega la respuesta
        if (response && response.data) {
          this.StarterItems = response.data.slice(0, 3); // Obtén los primeros 3 elementos
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los StarterItems:', error);
      }
    );
    
    this.championService.getBoots().subscribe(
      (response: any) => {
        console.log('Datos de Boots recibidos:', response);  // Verifica cómo llega la respuesta
        if (response && response.data) {
          this.Boots = response.data.slice(0, 3); // Obtén los primeros 3 elementos
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
        this.builds = response.data; // Guarda las builds en la variable
        console.log('Builds obtenidas:', this.builds); 
      },
      (error) => {
        console.error('Error al obtener las builds:', error);
      }
    );
    

      

  }

 

}