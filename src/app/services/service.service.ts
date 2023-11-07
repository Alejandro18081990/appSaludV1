import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  lista: any[];

  constructor(private toastController: ToastController, private alertController: AlertController) {
    this.lista = [];
  }

  addMedico(medicoRecibido: any) {
    this.lista.push(medicoRecibido);
    if (medicoRecibido.nombre != "" && medicoRecibido.cnp != "")
      this.presentToast('bottom');
    else
      this.alertValidacion();
  }

  getAll() {
    return this.lista;
  }

  getMedico(idRecibida: number) {
    var objeto;
    for (let medico of this.lista) {
      if (medico.id == idRecibida) {
        objeto = medico;
      }
    }
    return objeto;
  }

  editarMedico(oldMedico : any , newMedico: any) {
    var indiceMedico; 
    indiceMedico = this.lista.indexOf(oldMedico);
    this.lista.splice(indiceMedico,1,newMedico);
  }

  deleteMedico(medicoBorrar: any) {
    var indiceMedico: number;
    indiceMedico = this.lista.indexOf(medicoBorrar);
    this.lista.splice(indiceMedico, 1);

  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Médico guardado',
      duration: 600,
      position: position,
    });

    await toast.present();
  }

  async alertValidacion() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Mensaje importante',
      message: 'Los datos deben ser cumplimentados...Revise',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
