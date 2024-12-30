import { Component } from '@angular/core';
import { ChampionService } from '../../champion.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-akali-build-personalizada',
  templateUrl: './akali-build-personalizada.component.html',
  styleUrls: ['./akali-build-personalizada.component.css']
})
export class AkaliBuildPersonalizadaComponent implements OnInit{
  coreItems: any[] = [];  
  Items: any[] = [];  
  StarterItems: any[] = [];
  Boots: any[] = [];  
  champions: any[] = [];

  builds: any[] = []; 
  userId: number = 0; 
  championId: number = 3; 
 

  coreImages: string[][] = [
    ['../../assets/objetos/4646.png', '../../assets/objetos/4645.png', '../../assets/objetos/223157.png'],
    ['../../assets/objetos/4646.png', '../../assets/objetos/4645.png', '../../assets/objetos/3089.png'],
    ['../../assets/objetos/1082.png', '../../assets/objetos/4646.png', '../../assets/objetos/4645.png'],
    ['../../assets/objetos/223100.png', '../../assets/objetos/4645.png', '../../assets/objetos/223157.png'],
    ['../../assets/objetos/223152.png', '../../assets/objetos/4645.png', '../../assets/objetos/223157.png'],
    ['../../assets/objetos/223100.png', '../../assets/objetos/4645.png', '../../assets/objetos/3089.png'],
    ['../../assets/objetos/1082.png', '../../assets/objetos/4646.png', '../../assets/objetos/3089.png'],
    ['../../assets/objetos/4646.png', '../../assets/objetos/3089.png', '../../assets/objetos/4645.png'],
    ['../../assets/objetos/4646.png', '../../assets/objetos/1082.png', '../../assets/objetos/223100.png'],
    ['../../assets/objetos/4646.png', '../../assets/objetos/223100.png', '../../assets/objetos/223157.png'],
    ['../../assets/objetos/4646.png', '../../assets/objetos/223152.png', '../../assets/objetos/223157.png'],
    ['../../assets/objetos/4646.png', '../../assets/objetos/223152.png', '../../assets/objetos/4645.png'],
  ];

  starterItems: string[][] = [
    ['../../assets/objetos/1054.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1056.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1082.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
  ];

  ItemImages: string[] = [
    '../../assets/objetos/4646.png',
    '../../assets/objetos/4645.png',
    '../../assets/objetos/223157.png',
    '../../assets/objetos/1082.png',
    '../../assets/objetos/223100.png',
    '../../assets/objetos/3145.png',
    '../../assets/objetos/3089.png',
    '../../assets/objetos/3135.png',
    '../../assets/objetos/6653.png',
    '../../assets/objetos/2420.png',
    '../../assets/objetos/3916.png',
    '../../assets/objetos/3041.png'
  ];

  boots: string[] = [
    '../../assets/objetos/223020.png',
    '../../assets/objetos/223111.png',
    '../../assets/objetos/223047.png',
  ];

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {

    const SaveUserId = localStorage.getItem('userId'); // Obtiene el userId de localStorage
    if (SaveUserId) { // Si se encontró userId en localStorage
      this.userId = parseInt(SaveUserId, 10); // Convierte el userId a número
    } else {
      console.error('No se encontró userId en localStorage');
    }


    this.championService.getChampions().subscribe( // obtiene los campeones
      (response: any) => {
        console.log('Datos de campeones recibidos:', response);  
        if (response && response.data) {
          this.champions = response.data; // guarda los campeones en la variable champions
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los campeones:', error);
      }
    );
    
    this.championService.getCoreItems().subscribe( // obtiene los coreItems
      (response: any) => {
        console.log('Datos de coreItems recibidos:', response);  
        if (response && response.data) {
          this.coreItems = response.data.slice(24, 36); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los coreItems:', error);
      }
    );
    this.championService.getItems().subscribe( // obtiene los getItems
      (response: any) => {
        console.log('Datos de getItems recibidos:', response);  
        if (response && response.data) {
          this.Items = response.data.slice(24, 36); 
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
          this.StarterItems = response.data.slice(6, 9); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los StarterItems:', error);
      }
    );

    this.championService.getBoots().subscribe( // obtiene los Boots
      (response: any) => {
        console.log('Datos de Boots recibidos:', response); 
        if (response && response.data) {
          this.Boots = response.data.slice(6, 9); 
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
        this.builds = response.data; 
        console.log('Builds obtenidas:', this.builds); 
      },
      (error) => {
        console.error('Error al obtener las builds:', error);
      }
    );
    

      

  }

 

}
