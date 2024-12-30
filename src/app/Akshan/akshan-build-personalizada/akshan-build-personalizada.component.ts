import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../champion.service';

@Component({
  selector: 'app-akshan-build-personalizada',
  templateUrl: './akshan-build-personalizada.component.html',
  styleUrls: ['./akshan-build-personalizada.component.css']
})
export class AkshanBuildPersonalizadaComponent  implements OnInit{
  coreItems: any[] = [];  
  Items: any[] = [];  
  StarterItems: any[] = [];
  Boots: any[] = [];  
  champions: any[] = [];

  builds: any[] = []; 
  userId: number = 0; 
  championId: number = 4; 
 

  coreImages: string[][] = [
    ['../../assets/objetos/223087.png', '../../assets/objetos/226676.png', '../../assets/objetos/3031.png'],
    ['../../assets/objetos/223087.png', '../../assets/objetos/226676.png', '../../assets/objetos/223036.png'],
    ['../../assets/objetos/223087.png', '../../assets/objetos/226676.png', '../../assets/objetos/223094.png'],
    ['../../assets/objetos/226676.png', '../../assets/objetos/3031.png', '../../assets/objetos/223036.png'],
    ['../../assets/objetos/226676.png', '../../assets/objetos/3031.png', '../../assets/objetos/223094.png'],
    ['../../assets/objetos/223087.png', '../../assets/objetos/226676.png', '../../assets/objetos/223033.png'],
    ['../../assets/objetos/226676.png', '../../assets/objetos/3031.png', '../../assets/objetos/223033.png'],
    ['../../assets/objetos/226672.png', '../../assets/objetos/226676.png', '../../assets/objetos/3031.png'],
    ['../../assets/objetos/6697.png', '../../assets/objetos/226676.png', '../../assets/objetos/3031.png'],
    ['../../assets/objetos/226672.png', '../../assets/objetos/223153.png', '../../assets/objetos/3302.png'],
    ['../../assets/objetos/223087.png', '../../assets/objetos/3031.png', '../../assets/objetos/226676.png'],
    ['../../assets/objetos/223087.png', '../../assets/objetos/3031.png', '../../assets/objetos/223036.png'],
  ];

  starterItems: string[][] = [
    ['../../assets/objetos/1055.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1036.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
    ['../../assets/objetos/1083.png', '../../assets/objetos/2003.png', '../../assets/objetos/2003.png'],
  ];

  ItemImages: string[] = [
    '../../assets/objetos/226676.png',
    '../../assets/objetos/223087.png',
    '../../assets/objetos/3031.png',
    '../../assets/objetos/223036.png',
    '../../assets/objetos/223094.png',
    '../../assets/objetos/223033.png',
    '../../assets/objetos/1038.png',
    '../../assets/objetos/226672.png',
    '../../assets/objetos/223153.png',
    '../../assets/objetos/3134.png',
    '../../assets/objetos/3123.png',
    '../../assets/objetos/6673.png'
  ];

  boots: string[] = [
    '../../assets/objetos/223111.png',
    '../../assets/objetos/223047.png',
    '../../assets/objetos/223009.png',
  ];

  constructor(private championService: ChampionService) { }
  ngOnInit(): void {
    const SaveUserId = localStorage.getItem('userId'); // Obtiene el userId de localStorage
    if (SaveUserId) { // Si se encontró userId en localStorage
      this.userId = parseInt(SaveUserId, 10); // Convierte el userId a número
    } else {
      console.error('No se encontró userId en localStorage');
    }
  
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
    
    this.championService.getCoreItems().subscribe( // Obtiene los coreItems
      (response: any) => {
        console.log('Datos de coreItems recibidos:', response);  
        if (response && response.data) {
          this.coreItems = response.data.slice(36, 48); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los coreItems:', error);
      }
    );
    this.championService.getItems().subscribe( // Obtiene los getItems
      (response: any) => {
        console.log('Datos de getItems recibidos:', response);  
        if (response && response.data) {
          this.Items = response.data.slice(36, 48); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los getItems:', error);
      }
    );
    

   
    this.championService.getStarterItems().subscribe( // Obtiene los StarterItems
      (response: any) => {
        console.log('Datos de StarterItems recibidos:', response);  
        if (response && response.data) {
          this.StarterItems = response.data.slice(9, 12); 
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los StarterItems:', error);
      }
    );

    this.championService.getBoots().subscribe( // Obtiene los Boots
      (response: any) => {
        console.log('Datos de Boots recibidos:', response); 
        if (response && response.data) {
          this.Boots = response.data.slice(9, 12); 
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
