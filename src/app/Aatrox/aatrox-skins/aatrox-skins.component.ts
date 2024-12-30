import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aatrox-skins',
  templateUrl: './aatrox-skins.component.html',
  styleUrls: ['./aatrox-skins.component.css']
})
export class AatroxSkinsComponent implements OnInit {
  skins = [
    { name: 'Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_0.jpg' },
    { name: 'Justicar Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_1.jpg' },
    { name: 'Mecha Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_2.jpg' },
    { name: 'Sea Hunter Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_3.jpg' },
    { name: 'Blood Moon Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_7.jpg' },
    { name: 'Blood Moon Aatrox Gold Edition', url: '../../assets/Aatrox/AatroxSplash/Aatrox_8.jpg' },
    { name: 'Victorious Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_9.jpg' },
    { name: 'Odyssey Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_11.jpg' },
    { name: 'Lunar Eclipse Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_21.jpg' },
    { name: 'DRX Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_30.jpg' },
    { name: 'Prestige DRX Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_31.jpg' },
    { name: 'Primordian Aatrox', url: '../../assets/Aatrox/AatroxSplash/Aatrox_33.jpg' },
  ];

  selectedSkin: string = '';

  ngOnInit(): void {
    this.selectedSkin = this.skins[0].url; // Selecciona la primera skin por defecto
  }


  selectSkin(skinUrl: string) { // Método para seleccionar una skin
    this.selectedSkin = skinUrl;
  }
}
