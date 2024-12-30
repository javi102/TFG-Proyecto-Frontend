import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ahri-skins',
  templateUrl: './ahri-skins.component.html',
  styleUrls: ['./ahri-skins.component.css']
})
export class AhriSkinsComponent implements OnInit {
  skins = [
    { name: 'Ahri', url: '../../assets/ahri/AhriSplash/Ahri_0.jpg' },
    { name: 'Dynasty Ahri', url: '../../assets/ahri/AhriSplash/Ahri_1.jpg' },
    { name: 'Midnight Ahri', url: '../../assets/ahri/AhriSplash/Ahri_2.jpg' },
    { name: 'Foxfire Ahri', url: '../../assets/ahri/AhriSplash/Ahri_3.jpg' },
    { name: 'Popstar Ahri', url: '../../assets/ahri/AhriSplash/Ahri_4.jpg' },
    { name: 'Challenger Ahri', url: '../../assets/ahri/AhriSplash/Ahri_5.jpg' },
    { name: 'Academy Ahri', url: '../../assets/ahri/AhriSplash/Ahri_6.jpg' },
    { name: 'Arcade Ahri', url: '../../assets/ahri/AhriSplash/Ahri_7.jpg' },
    { name: 'Star Guardian Ahri', url: '../../assets/ahri/AhriSplash/Ahri_14.jpg' },
    { name: 'K/DA Ahri', url: '../../assets/ahri/AhriSplash/Ahri_15.jpg' },
    { name: 'Prestige K/DA Ahri', url: '../../assets/ahri/AhriSplash/Ahri_16.jpg' },
    { name: 'Elderwood Ahri', url: '../../assets/ahri/AhriSplash/Ahri_17.jpg' },
    { name: 'Spirit Blossom Ahri', url: '../../assets/ahri/AhriSplash/Ahri_27.jpg' },
    { name: 'K/DA ALL OUT Ahri', url: '../../assets/ahri/AhriSplash/Ahri_28.jpg' },
    { name: 'Coven Ahri', url: '../../assets/ahri/AhriSplash/Ahri_42.jpg' },
    { name: 'Arcana Ahri', url: '../../assets/ahri/AhriSplash/Ahri_66.jpg' },
    { name: 'Snow Moon Ahri', url: '../../assets/ahri/AhriSplash/Ahri_76.jpg' },
    { name: 'Risen Legend Ahri', url: '../../assets/ahri/AhriSplash/Ahri_85.jpg' },
    { name: 'Immortalized Legend Ahri', url: '../../assets/ahri/AhriSplash/Ahri_86.jpg' },

  ];

  selectedSkin: string = '';

  ngOnInit(): void {
    this.selectedSkin = this.skins[0].url; // selecciona la primera skin por defecto
  }

  selectSkin(skinUrl: string) {
    this.selectedSkin = skinUrl; // cambia la skin seleccionada
  }
}
