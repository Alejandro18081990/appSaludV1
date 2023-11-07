import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-formulario-medico',
  templateUrl: './formulario-medico.component.html',
  styleUrls: ['./formulario-medico.component.scss'],
})
export class FormularioMedicoComponent implements OnInit {
  medicoEnviado: any;
  nombre: string;
  apellido: string;
  especialidad: string;
  cnp: string;
  centroSalud: string;
  id: number;
  constructor(private datosMedService: ServiceService, private toastController: ToastController, private alertController: AlertController) {
    this.nombre = "";
    this.apellido = "";
    this.especialidad = "";
    this.cnp = "";
    this.centroSalud = "";
    this.id = 1;
  }

  ngOnInit() { }

  guardarDatos() {
    this.medicoEnviado = { "id": this.id, "nombre": this.nombre, "apellido": this.apellido, "especialidad": this.especialidad, "cnp": this.cnp, "centroSalud": this.centroSalud };
    this.datosMedService.addMedico(this.medicoEnviado);
    this.id++;
    this.vaciarInputs();
  }

  vaciarInputs(){
    this.nombre = "";
    this.apellido = "";
    this.especialidad = "";
    this.cnp = "";
    this.centroSalud = "";
  }
}
