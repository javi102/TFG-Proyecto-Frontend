import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../champion.service';
@Component({
  selector: 'app-personalizar-build',
  templateUrl: './personalizar-build.component.html',
  styleUrls: ['./personalizar-build.component.css']
})
export class PersonalizarBuildComponent implements OnInit {
  build: any[] = [];
  builds: any;
  championId: number = 1;  
  userId: number = 0;      

  constructor(private championService: ChampionService) {}



  ngOnInit(): void {
    const SaveUserId = localStorage.getItem('userId'); // Obtiene el userId del localStorage
    if (SaveUserId) { // Si se encuentra el userId en localStorage
      this.userId = parseInt(SaveUserId, 10); // Convierte el userId a número
      
    } else {
      console.error('No se encontró userId en localStorage');
    }
  }


  starterItems : any[] = [
    { item_id: 1, name: "Dark seal", image: "../../assets/objetos/1082.png", total: 350 },
    { item_id: 2,name: "Doran ring", image: "../../assets/objetos/1056.png", total: 400 },
    { item_id: 3,name: "Tear of the Goddess", image: "../../assets/objetos/3070.png", total: 400 },
    { item_id: 4,name: "World Atlas ", image: "../../assets/objetos/3865.png", total: 400 },
    { item_id: 5,name: "Doran shield", image: "../../assets/objetos/1054.png", total: 450 },
    { item_id: 6,name: "Doran blade", image: "../../assets/objetos/1055.png", total: 450 },
    { item_id: 7,name: "Cull", image: "../../assets/objetos/1083.png", total: 450 },
    { item_id: 8,name: "Scorchclaw pup", image: "../../assets/objetos/1101.png", total: 450 },
    { item_id: 9,name: "Gustwalker Hatchling", image: "../../assets/objetos/1106.png", total: 450 },
    { item_id: 10,name: "Mosstomper Seedling", image: "../../assets/objetos/1105.png", total: 450 },
  ];

  basicItems = [
    {item_id: 11, name: "Faerie Charm", image: "../../assets/objetos/1004.png", total: 200 },
    {item_id: 12, name: "Dagger", image: "../../assets/objetos/1042.png", total: 250 },
    {item_id: 13, name: "Glowing Mote", image: "../../assets/objetos/222022.png", total: 250 },
    {item_id: 14, name: "Rejuvenation Bead", image: "../../assets/objetos/1006.png", total: 300 },
    {item_id: 15, name: "Sapphire Crystal", image: "../../assets/objetos/1027.png", total: 300 },
    {item_id: 16, name: "Cloth armor", image: "../../assets/objetos/1029.png", total: 300 },
    {item_id: 17, name: "Long sword", image: "../../assets/objetos/1036.png", total: 350 },
    {item_id: 18, name: "Ruby crystal", image: "../../assets/objetos/1028.png", total: 400 },
    {item_id: 19, name: "Null-Magic mantle", image: "../../assets/objetos/1033.png", total: 400 },
    {item_id: 20, name: "Amplifying Tome", image: "../../assets/objetos/1052.png", total: 400 },
    {item_id: 21, name: "Cloak of agility", image: "../../assets/objetos/1018.png", total: 600 },
    {item_id: 22, name: "Blasting Wand", image: "../../assets/objetos/1026.png", total: 850 },
    {item_id: 23, name: "Pickaxe", image: "../../assets/objetos/1037.png", total: 875 },
    {item_id: 24, name: "Needlessly Large Rod", image: "../../assets/objetos/1058.png", total: 1200 },
    {item_id: 25, name: "B.F Sword", image: "../../assets/objetos/1038.png", total: 1300 },
  ];

  bootsItems = [
    {item_id: 26, name: "Boots", image: "../../assets/objetos/1001.png", total: 300 },
    {item_id: 27, name: "Symbiotic Soles", image: "../../assets/objetos/3010.png", total: 900 },
    {item_id: 28, name: "Synchronized Souls", image: "../../assets/objetos/3013.png", total: 900 },
    {item_id: 29, name: "Ionian Boots of Lucidity", image: "../../assets/objetos/3158.png", total: 900 },
    {item_id: 30, name: "Boots of Swiftness", image: "../../assets/objetos/223009.png", total: 1000 },
    {item_id: 31, name: "Berserkers Greaves", image: "../../assets/objetos/223006.png", total: 1100 },
    {item_id: 32, name: "Socerers Shoes", image: "../../assets/objetos/223020.png", total: 1100 },
    {item_id: 33, name: "Plated Steelcaps", image: "../../assets/objetos/223047.png", total: 1200 },
    {item_id: 34, name: "Mercury Treads", image: "../../assets/objetos/223111.png", total: 1300 },
    {item_id: 35, name: "Zephyr", image: "../../assets/objetos/3172.png", total: 3100 },
    ];

  epicItems = [
    {item_id: 36, name: "Runic Compass", image: "../../assets/objetos/3866.png", total: 400 },
    {item_id: 37, name: "Forbidden Idol", image: "../../assets/objetos/3114.png", total: 600 },
    {item_id: 38, name: "Scout Slingshot", image: "../../assets/objetos/3144.png", total: 600 },
    {item_id: 39, name: "Recurve Bow", image: "../../assets/objetos/1043.png", total: 700 },
    {item_id: 40, name: "Rectrix", image: "../../assets/objetos/6690.png", total: 775 },
    {item_id: 41, name: "Chain Vest", image: "../../assets/objetos/1031.png", total: 800 },
    {item_id: 42, name: "Winged Moonplate", image: "../../assets/objetos/3066.png", total: 800 },
    {item_id: 43, name: "Kindlegem", image: "../../assets/objetos/3067.png", total: 800 },
    {item_id: 44, name: "Bramble Vest", image: "../../assets/objetos/3076.png", total: 800 },
    {item_id: 45, name: "Executioner Calling", image: "../../assets/objetos/3123.png", total: 800 },
    {item_id: 46, name: "Crystalline Bracer", image: "../../assets/objetos/3801.png", total: 800 },
    {item_id: 47, name: "Oblivion Orb", image: "../../assets/objetos/3916.png", total: 800 },
    {item_id: 48, name: "Negatron Cloack", image: "../../assets/objetos/1057.png", total: 850 },
    {item_id: 49, name: "Fiendish Codex", image: "../../assets/objetos/3108.png", total: 850 },
    {item_id: 50, name: "Giants Belt", image: "../../assets/objetos/1011.png", total: 900 },
    {item_id: 51, name: "Vampiric Scepter", image: "../../assets/objetos/1053.png", total: 900 },
    {item_id: 52, name: "Fated Ashes", image: "../../assets/objetos/2508.png", total: 900 },
    {item_id: 53, name: "Glacial Buckler", image: "../../assets/objetos/3024.png", total: 900 },
    {item_id: 54, name: "Sheen", image: "../../assets/objetos/223057.png", total: 900 },
    {item_id: 55, name: "Aether Wisp", image: "../../assets/objetos/3113.png", total: 900 },
    {item_id: 56, name: "Bandleglass Mirror", image: "../../assets/objetos/4642.png", total: 900 },
    {item_id: 57, name: "Bamis Cinder", image: "../../assets/objetos/6660.png", total: 900 },
    {item_id: 58, name: "Wardens Mail", image: "../../assets/objetos/3082.png", total: 1000 },
    {item_id: 59, name: "Serrated Dirk", image: "../../assets/objetos/3134.png", total: 1000 },
    {item_id: 60, name: "Caulfields Warhammer", image: "../../assets/objetos/3133.png", total: 1050 },
    {item_id: 61, name: "Steel Sigil", image: "../../assets/objetos/2019.png", total: 1100 },
    {item_id: 62, name: "Phage", image: "../../assets/objetos/3044.png", total: 1100 },
    {item_id: 63, name: "Hextech Alternator", image: "../../assets/objetos/3145.png", total: 1100 },
    {item_id: 64, name: "Blighting Jewel", image: "../../assets/objetos/4630.png", total: 1100 },
    {item_id: 65, name: "Tunneler", image: "../../assets/objetos/2021.png", total: 1100 },
    {item_id: 66, name: "HeathBound Axe", image: "../../assets/objetos/3051.png", total: 1200 },
    {item_id: 67, name: "Tiamat", image: "../../assets/objetos/3077.png", total: 1200 },
    {item_id: 68, name: "Zeal", image: "../../assets/objetos/3086.png", total: 1200 },
    {item_id: 69, name: "Lost Chapter", image: "../../assets/objetos/3802.png", total: 1200 },
    {item_id: 70, name: "Spectres Cowl", image: "../../assets/objetos/3211.png", total: 1250 },
    {item_id: 71, name: "QuickSilver Sash", image: "../../assets/objetos/3140.png", total: 1300 },
    {item_id: 72, name: "Haunting Guise", image: "../../assets/objetos/3147.png", total: 1300 },
    {item_id: 73, name: "Hexdrinker", image: "../../assets/objetos/3155.png", total: 1300 },
    {item_id: 74, name: "Catalyst of Aeons", image: "../../assets/objetos/3803.png", total: 1300 },
    {item_id: 75, name: "Noonquiver", image: "../../assets/objetos/6670.png", total: 1300 },
    {item_id: 76, name: "The Brutalizer", image: "../../assets/objetos/2020.png", total: 1337 },
    {item_id: 77, name: "Last Whisper", image: "../../assets/objetos/3035.png", total: 1450 },
    {item_id: 78, name: "Seekers Armguard", image: "../../assets/objetos/2420.png", total: 1600 },
    {item_id: 79, name: "Verdant Barrier", image: "../../assets/objetos/4632.png", total: 1600 },  ];

  legendaryItems = [
    {item_id: 80, name: "Bounty of Worlds", image: "../../assets/objetos/3867.png", total: 400 },
    {item_id: 81, name: "Celestial Opposition", image: "../../assets/objetos/3869.png", total: 400 },
    {item_id: 82, name: "Dream Maker", image: "../../assets/objetos/3870.png", total: 400 },
    {item_id: 83, name: "ZazZaks Realmspike", image: "../../assets/objetos/3871.png", total: 400 },
    {item_id: 84, name: "Solstice Sleigh", image: "../../assets/objetos/3876.png", total: 400 },
    {item_id: 85, name: "Bloodsong", image: "../../assets/objetos/3877.png", total: 400 },
    {item_id: 86, name: "Mejais Soulstealer", image: "../../assets/objetos/3041.png", total: 1500 },
    {item_id: 87, name: "Shurelyas ", image: "../../assets/objetos/2065.png", total: 2200 },
    {item_id: 88, name: "Zekes Convergence", image: "../../assets/objetos/223050.png", total: 2200 },
    {item_id: 89, name: "Locket of the Iron Solari", image: "../../assets/objetos/223190.png", total: 2200 },
    {item_id: 90, name: "Ardent Censer", image: "../../assets/objetos/223504.png", total: 2200 },
    {item_id: 91, name: "Moonstone Renewer", image: "../../assets/objetos/226617.png", total: 2200 },
    {item_id: 92, name: "Echoes of Helia", image: "../../assets/objetos/226620.png", total: 2200 },
    {item_id: 93, name: "Imperial Mandate", image: "../../assets/objetos/224005.png", total: 2250 },
    {item_id: 94, name: "Staff of Flowing Water", image: "../../assets/objetos/226616.png", total: 2250 },
    {item_id: 95, name: "Redemption", image: "../../assets/objetos/223107.png", total: 2300 },
    {item_id: 96, name: "Knights Vow", image: "../../assets/objetos/223109.png", total: 2300 },
    {item_id: 97, name: "Mikaels Blessing", image: "../../assets/objetos/3222.png", total: 2300 },
    {item_id: 98, name: "Vigilant Wardstone", image: "../../assets/objetos/4643.png", total: 2300 },
    {item_id: 99, name: "Winters Approach", image: "../../assets/objetos/223119.png", total: 2400 },
    {item_id: 100, name: "Fimbulwinter", image: "../../assets/objetos/223121.png", total: 2400 },
    {item_id: 101, name: "Thronmail", image: "../../assets/objetos/223075.png", total: 2450 },
    {item_id: 102, name: "Frozen Heart", image: "../../assets/objetos/223110.png", total: 2500 },
    {item_id: 103, name: "Serpents Fang", image: "../../assets/objetos/6695.png", total: 2500 },
    {item_id: 104, name: "Rylais Crystal Scepter", image: "../../assets/objetos/3116.png", total: 2600 },
    {item_id: 105, name: "Hextech rocketball", image: "../../assets/objetos/223152.png", total: 2600 },
    {item_id: 106, name: "Umbrail Glaive", image: "../../assets/objetos/3179.png", total: 2600 },
    {item_id: 107, name: "Rod of Ages", image: "../../assets/objetos/226657.png", total: 2600 },
    {item_id: 108, name: "Phatom Dancer", image: "../../assets/objetos/223046.png", total: 2650 },
    {item_id: 109, name: "Runaans Hurricane", image: "../../assets/objetos/223085.png", total: 2650 },
    {item_id: 110, name: "Rapid Firecannon", image: "../../assets/objetos/223094.png", total: 2650 },
    {item_id: 111, name: "Navori Flickerblad", image: "../../assets/objetos/226675.png", total: 2650 },
    {item_id: 112, name: "Abbysal Mask", image: "../../assets/objetos/228020.png", total: 2650 },
    {item_id: 113, name: "Spirit Visage", image: "../../assets/objetos/223065.png", total: 2700 },
    {item_id: 114, name: "Sunfire Aegis", image: "../../assets/objetos/223068.png", total: 2700 },
    {item_id: 115, name: "Statikk Shiv", image: "../../assets/objetos/223087.png", total: 2700 },
    {item_id: 116, name: "Malignance", image: "../../assets/objetos/223118.png", total: 2700 },
    {item_id: 117, name: "Randuins Omen", image: "../../assets/objetos/3143.png", total: 2700 },
    {item_id: 118, name: "Horizon Focus", image: "../../assets/objetos/4628.png", total: 2700 },
    {item_id: 119, name: "Opportunity", image: "../../assets/objetos/226701.png", total: 2700 },
    {item_id: 120, name: "Unending Despair", image: "../../assets/objetos/2502.png", total: 2800 },
    {item_id: 121, name: "Blackfire Torch", image: "../../assets/objetos/2503.png", total: 2800 },
    {item_id: 122, name: "Wits End", image: "../../assets/objetos/3091.png", total: 2800 },
    {item_id: 123, name: "Youmuus Ghostblade", image: "../../assets/objetos/3142.png", total: 2800 },
    {item_id: 124, name: "Force of Nature", image: "../../assets/objetos/224401.png", total: 2800 },
    {item_id: 125, name: "Hollow Radiance", image: "../../assets/objetos/6664.png", total: 2800 },
    {item_id: 126, name: "Cryptbloom", image: "../../assets/objetos/3137.png", total: 2800 },
    {item_id: 127, name: "Ludens Companio", image: "../../assets/objetos/226655.png", total: 2850 },
    {item_id: 128, name: "Kaenic Rookern", image: "../../assets/objetos/2504.png", total: 2900 },
    {item_id: 129, name: "Archangels Staff", image: "../../assets/objetos/3003.png", total: 2900 },
    {item_id: 130, name: "Manamune", image: "../../assets/objetos/3004.png", total: 2900 },
    {item_id: 131, name: "Seraphs Embrace", image: "../../assets/objetos/3040.png", total: 2900 },
    {item_id: 132, name: "Muramana", image: "../../assets/objetos/3042.png", total: 2900 },
    {item_id: 133, name: "Essence Reaver", image: "../../assets/objetos/3508.png", total: 2900 },
    {item_id: 134, name: "Dead Mans Plate", image: "../../assets/objetos/3742.png", total: 2900 },
    {item_id: 135, name: "Stormsurge", image: "../../assets/objetos/4646.png", total: 2900 },
    {item_id: 136, name: "IceBorn Gauntlet", image: "../../assets/objetos/6662.png", total: 2900 },
    {item_id: 137, name: "Eclipse", image: "../../assets/objetos/6692.png", total: 2900 },
    {item_id: 138, name: "Morellonomicon", image: "../../assets/objetos/223165.png", total: 2950 },
    {item_id: 139, name: "The Collector", image: "../../assets/objetos/226676.png", total: 2950 },
    {item_id: 140, name: "Yun tal Wildarrows", image: "../../assets/objetos/223032.png", total: 3000 },
    {item_id: 141, name: "Lord Dominik Regards", image: "../../assets/objetos/223036.png", total: 3000 },
    {item_id: 142, name: "Black Cleaver", image: "../../assets/objetos/223071.png", total: 3000 },
    {item_id: 143, name: "Experimental Hex", image: "../../assets/objetos/223073.png", total: 3000 },
    {item_id: 144, name: "Heartsteel", image: "../../assets/objetos/3084.png", total: 3000 },
    {item_id: 145, name: "Banshees Veil", image: "../../assets/objetos/3102.png", total: 3000 },
    {item_id: 146, name: "Nashors Tooth", image: "../../assets/objetos/3115.png", total: 3000 },
    {item_id: 147, name: "Guinsoos Rageblade", image: "../../assets/objetos/3124.png", total: 3000 },
    {item_id: 148, name: "Void Staff", image: "../../assets/objetos/3135.png", total: 3000 },
    {item_id: 149, name: "Hullbreaker", image: "../../assets/objetos/3181.png", total: 3000 },
    {item_id: 150, name: "Terminus", image: "../../assets/objetos/3302.png", total: 3000 },
    {item_id: 151, name: "Edge of Night", image: "../../assets/objetos/3814.png", total: 3000 },
    {item_id: 152, name: "Cosmic Drive", image: "../../assets/objetos/4629.png", total: 3000 },
    {item_id: 153, name: "Liandrys Torment", image: "../../assets/objetos/6653.png", total: 3000 },
    {item_id: 154, name: "Immortal Shieldbow", image: "../../assets/objetos/6673.png", total: 3000 },
    {item_id: 155, name: "Seryldas Grudge", image: "../../assets/objetos/6694.png", total: 3000 },
    {item_id: 156, name: "Axiom Arc", image: "../../assets/objetos/6696.png", total: 3000 },
    {item_id: 157, name: "Hubris", image: "../../assets/objetos/6697.png", total: 3000 },
    {item_id: 158, name: "Voltaic Cyclosword", image: "../../assets/objetos/6699.png", total: 3000 },
    {item_id: 159, name: "Maw Of Malmort", image: "../../assets/objetos/3156.png", total: 3100 },
    {item_id: 160, name: "Spear of Shojin", image: "../../assets/objetos/3161.png", total: 3100 },
    {item_id: 161, name: "RiftMaker", image: "../../assets/objetos/224633.png", total: 3100 },
    {item_id: 162, name: "Chempunk Chainsword", image: "../../assets/objetos/226609.png", total: 3100 },
    {item_id: 163, name: "Sundered Sky", image: "../../assets/objetos/226610.png", total: 3100 },
    {item_id: 164, name: "Kraken Slayer", image: "../../assets/objetos/226672.png", total: 3100 },
    {item_id: 165, name: "Guardian Angel", image: "../../assets/objetos/223026.png", total: 3200 },
    {item_id: 166, name: "Mortal Reminder", image: "../../assets/objetos/223033.png", total: 3200 },
    {item_id: 167, name: "Steraks Gage", image: "../../assets/objetos/223053.png", total: 3200 },
    {item_id: 168, name: "Lich Bane", image: "../../assets/objetos/223100.png", total: 3200 },
    {item_id: 169, name: "Mercurial Scimitar", image: "../../assets/objetos/223139.png", total: 3200 },
    {item_id: 170, name: "Blade of the Ruined King", image: "../../assets/objetos/223153.png", total: 3200 },
    {item_id: 171, name: "Shadowflame", image: "../../assets/objetos/4645.png", total: 3200 },
    {item_id: 172, name: "Jaksho The Protean", image: "../../assets/objetos/6665.png", total: 3200 },
    {item_id: 173, name: "Profane Hydra", image: "../../assets/objetos/226698.png", total: 3200 },
    {item_id: 174, name: "Zhonyas Hourglass", image: "../../assets/objetos/223157.png", total: 3250 },
    {item_id: 175, name: "Overloods Blood", image: "../../assets/objetos/447111.png", total: 3300 },
    {item_id: 176, name: "Ravenous Hydra", image: "../../assets/objetos/223074.png", total: 3300 },
    {item_id: 177, name: "Warmong Armor", image: "../../assets/objetos/3083.png", total: 3300 },
    {item_id: 178, name: "Titanic Hydra", image: "../../assets/objetos/3748.png", total: 3300 },
    {item_id: 179, name: "Deaths Dance", image: "../../assets/objetos/6333.png", total: 3300 },
    {item_id: 180, name: "Stridebreaker", image: "../../assets/objetos/226631.png", total: 3300 },
    {item_id: 181, name: "Trinity Force", image: "../../assets/objetos/3078.png", total: 3333 },
    {item_id: 182, name: "Bloodthirster", image: "../../assets/objetos/3072.png", total: 3400 },
    {item_id: 183, name: "Infinity Edge", image: "../../assets/objetos/3031.png", total: 3600 },
    {item_id: 184, name: "Rabadons Deathcap", image: "../../assets/objetos/3089.png", total: 3600 }
    ];

    guardarBuild() {
      const items = this.build.map(item => item.item_id);  // Mapear los ítems a solo sus IDs
    
      const buildData = { // Crea un objeto con los datos de la build
        championId: this.championId,
        userId: this.userId,
        items: items  
      };
    
    
      this.championService.saveBuild(buildData).subscribe( // Guarda la build en la base de datos
        (response: any) => {
          console.log('Build guardada con éxito:', response);
          alert('¡Build guardada con éxito!');
        },
        (error) => {
          console.error('Error al guardar la build:', error);
          alert('Hubo un error al guardar la build.');
        }
      );
    }

    agregarItem(item: any) { // Agrega un ítem a la build
      console.log('Item a agregar:', item);  
      if (this.build.length < 12) { // Verifica que la build no tenga más de 12 ítems
        this.build.push(item); // Agrega el ítem a la build gracias al push 
      } else {
        alert('¡Has alcanzado el límite de 12 ítems!');
      }
    }

  eliminarUltimoItem() {
    this.build.pop(); // Elimina el último ítem de la build gracias al pop 
  }

 
}
