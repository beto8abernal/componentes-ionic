import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Las chivas campeones 2021.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Torneo',
      message: 'Guardianes 2021',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Equipo',
          handler: () => {
            console.log('Chivas Campeon');
          }
        }, {
          text: 'Salir',
          role: 'cancel',
          handler: () => {
            console.log('Chivas Pierde');
          }
        }
      ]
    });
    toast.present();
  }

}
