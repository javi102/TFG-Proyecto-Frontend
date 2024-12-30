import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akshan-skins',
  templateUrl: './akshan-skins.component.html',
  styleUrls: ['./akshan-skins.component.css']
})
export class AkshanSkinsComponent implements OnInit {
  skins = [
    { name: 'Akshan', url: '../../assets/Akshan/splash/Akshan_0.jpg' },
    { name: 'Cyber Pop Akshan', url: '../../assets/Akshan/splash/Akshan_1.jpg' },
    { name: 'Crystal Rose Akshan', url: '../../assets/Akshan/splash/Akshan_10.jpg' },
    { name: 'Three Honors Akshan', url: '../../assets/Akshan/splash/Akshan_20.jpg' },

  ];

  selectedSkin: string = '';

  ngOnInit(): void {
    this.selectedSkin = this.skins[0].url; // Inicializa la imagen seleccionada
  }

  selectSkin(skinUrl: string) {
    this.selectedSkin = skinUrl; // Cambia la imagen seleccionada
  }
}
