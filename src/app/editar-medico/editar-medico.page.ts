import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.page.html',
  styleUrls: ['./editar-medico.page.scss'],
})
export class EditarMedicoPage implements OnInit {
  medicoRecibido: any;
  medicoModificado: any;
  idRecibida: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  cnp: string;
  centroSalud: string;
  constructor(private route: ActivatedRoute, private datosMedicoService: ServiceService) {
    this.idRecibida = 0;
    this.nombre = "";
    this.apellido = "";
    this.especialidad = "";
    this.cnp = "";
    this.centroSalud = "";
  }

  ngOnInit() {
    this.route.params.subscribe((params) => { this.idRecibida = params['idRecibida'] });
    this.medicoRecibido = this.datosMedicoService.getMedico(this.idRecibida);
    this.idRecibida = this.medicoRecibido.id;
    this.nombre = this.medicoRecibido.nombre;
    this.apellido = this.medicoRecibido.apellido;
    this.especialidad = this.medicoRecibido.especialidad;
    this.cnp = this.medicoRecibido.cnp;
    this.centroSalud = this.medicoRecibido.centroSalud;
  }
  editarMedico() {
    this.medicoModificado = { "id": this.idRecibida, "nombre": this.nombre, "apellido": this.apellido, "especialidad": this.especialidad, "cnp": this.cnp, "centroSalud": this.centroSalud };
    this.datosMedicoService.editarMedico(this.medicoRecibido, this.medicoModificado);
  }
}

