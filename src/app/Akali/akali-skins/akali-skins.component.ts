import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akali-skins',
  templateUrl: './akali-skins.component.html',
  styleUrls: ['./akali-skins.component.css']
})
export class AkaliSkinsComponent implements OnInit {
  skins = [
    { name: 'Akali', url: '../../assets/akali/AkaliSplash/Akali_0.jpg' },
    { name: 'Stinger Akali', url: '../../assets/akali/AkaliSplash/Akali_1.jpg' },
    { name: 'Infernal Akali', url: '../../assets/akali/AkaliSplash/Akali_2.jpg' },
    { name: 'All-star Akali', url: '../../assets/akali/AkaliSplash/Akali_3.jpg' },
    { name: 'Nurse Akali', url: '../../assets/akali/AkaliSplash/Akali_5.jpg' },
    { name: 'Blood Moon Akali', url: '../../assets/akali/AkaliSplash/Akali_6.jpg' },
    { name: 'Silverfang Akali', url: '../../assets/akali/AkaliSplash/Akali_7.jpg' },
    { name: 'Sashimi Akali', url: '../../assets/akali/AkaliSplash/Akali_8.jpg' },
    { name: 'K/DA Akali', url: '../../assets/akali/AkaliSplash/Akali_9.jpg' },
    { name: 'Prestige K/DA Akali', url: '../../assets/akali/AkaliSplash/Akali_13.jpg' },
    { name: 'PROJECT: Akali', url: '../../assets/akali/AkaliSplash/Akali_14.jpg' },
    { name: 'True Damage Akali', url: '../../assets/akali/AkaliSplash/Akali_15.jpg' },
    { name: 'K/DA ALL OUT Akali', url: '../../assets/akali/AkaliSplash/Akali_32.jpg' },
    { name: 'Crime City Nightmare Akali', url: '../../assets/akali/AkaliSplash/Akali_50.jpg' },
    { name: 'Star Guardian Akali', url: '../../assets/akali/AkaliSplash/Akali_61.jpg' },
    { name: 'DRX Akali', url: '../../assets/akali/AkaliSplash/Akali_68.jpg' },
    { name: 'Coven Akali', url: '../../assets/akali/AkaliSplash/Akali_70.jpg' },
    { name: 'Prestige Coven Akali', url: '../../assets/akali/AkaliSplash/Akali_71.jpg' },
    { name: 'Empyrean Akali', url: '../../assets/akali/AkaliSplash/Akali_82.jpg' },

  ];

  selectedSkin: string = '';

  ngOnInit(): void {
    this.selectedSkin = this.skins[0].url; // Inicializa la imagen seleccionada
  }

  selectSkin(skinUrl: string) {
    this.selectedSkin = skinUrl; // Cambia la imagen seleccionada
  }
}

