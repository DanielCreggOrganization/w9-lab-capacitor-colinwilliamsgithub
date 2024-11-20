import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  constructor() { }

  async ngOnInit() {
    await this.getCameraStream();
    this.getGeolocation();
    this.getBrowserInfo();
  }

  async getCameraStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Camera stream:', stream);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  getGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log('Geolocation:', { latitude, longitude });
    });
  }

  getBrowserInfo() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    console.log('Browser Info:', { userAgent, platform });
  }
}