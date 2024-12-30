import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {
  champions: any[] = [];
  allChampions: any[] = [];  // Aquí se guarda la lista completa de campeones
  selectedChampion: any = null;
  stats2: any = {};
  searchForm: FormGroup;  // Formulario reactivo

  // Mapeo de roles a campeones por nombre
  rolesMapping: { [key in 'top' | 'jungle' | 'mid' | 'adc' | 'support' | 'all']?: string[] } = {
    top: [
      'Maokai', 'Illaoi', 'Olaf', 'Tahm Kench', 'Aatrox', 'Cassiopeia', 'Singed', 'Gwen',
      'Riven', 'Kennen', 'Vayne', 'Urgot', 'Gragas', 'Heimerdinger', 'Yorick', 'Malphite',
      'Dr. Mundo', 'Darius', 'Mordekaiser', 'Ornn', 'Fiora', 'Irelia', 'Volibear', 'Teemo',
      'Renekton', 'Camille', 'Galio', 'Cho\'Gath', 'Kayle', 'Quinn', 'Poppy', 'Kled', 'Shen',
      'Gangplank', 'Sion', 'Warwick', 'Sion', 'Trundle', 'Gnar', 'Zac', 'Yone', 'Jayce', 'Swain',
      'Sylas', 'Vladimir', 'Sett', 'Rumble', 'Pantheon', 'Wukong', 'Jax', 'Nasus', 'Ryze', 'K\'Sante'
    ],
    jungle: [
      'Graves', 'Qiyana', 'Dr. Mundo', 'Fiddlesticks', 'Warwick',
      'Pantheon', 'Taliyah', 'Elise', 'Nocturne', 'Viego',
      'Kayn', 'Zed', 'Fiddlesticks', 'Poppy', 'Ivern',
      'Shaco', 'Wukong', 'Shyvana', 'Nunu & Willump', 'Lee Sin',
      'Kha\'Zix', 'Shaco', 'Diana', 'Ekko', 'Master Yi',
      'Rek\'Sai', 'Jarvan IV', 'Bel\'Veth', 'Jax', 'Teemo',
      'Talon', 'Udyr', 'Rammus', 'Volibear', 'Skarner',
      'Rengar', 'Kindred', 'Zyra', 'Nidalee', 'Amumu',
      'Qiyana', 'Taliyah', 'Poppy', 'Rengar', 'Gwen',
      'Lillia', 'Fiddlesticks', 'Vi', 'Karthus', 'Zac',
      'Gragas', 'Sejuani'
    ],
    mid: [
      'Ahri', 'Akali', 'Akshan', 'Anivia', 'Azir', 'Brand', 'Cassiopeia', 'Cho\'Gath',
      'Corki', 'Diana', 'Ekko', 'Fizz', 'Galio', 'Gragas', 'Irelia', 'Jayce', 'Kaisa',
      'Kassadin', 'Kennen', 'Kayle', 'LeBlanc', 'Lissandra', 'Lux', 'Malphite', 'Malzahar',
      'Mordekaiser', 'Neeko', 'Orianna', 'Pantheon', 'Qiyana', 'Renekton', 'Ryze',
      'Syndra', 'Sylas', 'Taliyah', 'Talon', 'Twisted Fate', 'Vex', 'Vel\'Koz', 'Viktor',
      'Vladimir', 'Xerath', 'Yasuo', 'Zed', 'Ziggs', 'Zoe', 'Naafiri', 'Swain', 'Veigar',
      'Vladimir', 'Veigar', 'Vex', 'Kennen', 'Kayle', 'Taliyah', 'Swain'
    ],
    adc: [
       'Ashe', 'Nilah', 'Jhin', 'Jinx', 'Swain', 'Kog\'Maw', 'Caitlyn',
      'Miss Fortune', 'Sivir', 'Draven', 'Vayne', 'Xayah', 'Seraphine', 'Ezreal',
      'Ziggs', 'Kai\'Sa', 'Lucian', 'Yasuo', 'Tristana', 'Varus', 'Samira',
      'Kalista', 'Zeri', 'Twitch', 'Aphelios'
    ],

    support: [
      'Lulu', 'Vel\'Koz', 'Taric', 'Maokai', 'Nami', 'Shen', 'Galio', 'Blitzcrank',
      'Poppy', 'Sona', 'Janna', 'Thresh', 'Seraphine', 'Tahm Kench', 'Karma',  
      'Braum', 'Senna', 'Milio', 'Soraka', 'Pyke', 'Neeko', 'Vel\'Koz', 'Xerath',
      'Bard', 'Blitzcrank', 'Nautilus', 'Leona', 'Lux', 'Zilean', 'Rakan', 'Zyra',
      'Morgana', 'Renata Glasc', 'Alistar', 'Pantheon', 'Yuumi', 'Brand', 'Sylas',
      'Swain', 'Shaco', 'Rell', 'Zac'
  ]
    };

  difficultyMapping: { [key: string]: string } = { // Mapeo de dificultades a colores
    medium: 'rgb(71, 199, 71)',
    intermediate: 'yellow',
    advanced: '#ff4400',
    expert: 'rgb(196, 73, 196)',
    intermediate_plus: 'lightgreen',
    novice: 'rgb(0, 255, 255)',
    beginner: 'orange'
  };

  
  championRoutesMap: { [name: string]: string } = { // Mapeo de nombres de campeones a rutas
    'Aatrox': 'aatrox-stats',
    'Ahri': 'ahri-stats',
    'Akali': 'akali-stats',
    'Akshan': 'akshan-stats',
    'Teemo': 'teemo-stats',
  };

  constructor(private championService: ChampionService, private fb: FormBuilder) {
    // Inicializa el formulario reactivo
    this.searchForm = this.fb.group({
      search: ['']  // El campo 'search' para el input
    });
  }

  ngOnInit(): void {
    this.championService.getChampions().subscribe( // obtiene los campeones
      (response: any) => {
        if (response && response.data) {
          this.champions = response.data;
          this.allChampions = [...this.champions]; // Guardamos la lista completa
          // Ordenamos los campeones por nombre
          this.champions.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          console.error('Los datos recibidos no tienen la forma esperada:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los campeones:', error);
      }
    );

    this.championService.getStats2().subscribe( // obtiene las stats2
      (response: any) => {
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

    // Suscripción al formulario reactivo para detectar cambios en el campo de búsqueda
    this.searchForm.get('search')?.valueChanges.subscribe(value => {
      this.filterChampionsBySearch(value);
    });
  }

  // Método para filtrar campeones por búsqueda
  filterChampionsBySearch(searchTerm: string): void { 
    if (searchTerm.trim() === '') {
      this.champions = [...this.allChampions];  // Restaurar la lista completa si no hay búsqueda
    } else {
      // Filtrar la lista de campeones según el término de búsqueda
      this.champions = this.allChampions.filter(champion => {
        return champion.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }
  

  // Método para filtrar campeones por rol (por nombre)
  filterChampions(role: keyof typeof this.rolesMapping): void {
    if (role === 'all') {
      // Si el rol es "all", mostramos todos los campeones
      this.champions = [...this.allChampions];  // Restauramos la lista original
    } else {
      // Filtrar los campeones según el rol basado en el nombre
      this.champions = this.allChampions.filter(champion => {
        // Solo mostramos campeones cuyo nombre está en el mapeo de roles
        return this.rolesMapping[role]?.includes(champion.name) ?? false;
      });
    }
  }

  // Método para obtener el color según la dificultad
  getDifficultyColor(difficulty: string): string {
    return this.difficultyMapping[difficulty?.toLowerCase()] || 'gray'; // pone los colores en gris si no hay coincidencia
  }

  
}
