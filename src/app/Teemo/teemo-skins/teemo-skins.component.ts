import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teemo-skins',
  templateUrl: './teemo-skins.component.html',
  styleUrls: ['./teemo-skins.component.css']
})
export class TeemoSkinsComponent implements OnInit {
  skins = [
    { name: 'Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_0.jpg' },
    { name: 'Happy Elf Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_1.jpg' },
    { name: 'Recon Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_2.jpg' },
    { name: 'Badger Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_3.jpg' },
    { name: 'Astronaut Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_4.jpg' },
    { name: 'Cottontail Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_5.jpg' },
    { name: 'Super Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_6.jpg' },
    { name: 'Panda Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_7.jpg' },
    { name: 'Omega Squad Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_8.jpg' },
    { name: 'Little Devil Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_14.jpg' },
    { name: 'Beemo', url: '../../assets/Teemo/TeemoSplash/Teemo_18.jpg' },
    { name: 'Spirit Blossom Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_25.jpg' },
    { name: 'Spirit Blossom Teemo Prestige Edition', url: '../../assets/Teemo/TeemoSplash/Teemo_27.jpg' },
    { name: 'Firecracker Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_37.jpg' },
    { name: 'Space Groove Teemo', url: '../../assets/Teemo/TeemoSplash/Teemo_47.jpg' },



  ];

  selectedSkin: string = '';

  ngOnInit(): void {
    this.selectedSkin = this.skins[0].url; // Se selecciona la primera skin por defecto
  }

  selectSkin(skinUrl: string) {
    this.selectedSkin = skinUrl; // Se selecciona la skin
  }
}
