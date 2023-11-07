import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-detalle-medico',
  templateUrl: './detalle-medico.page.html',
  styleUrls: ['./detalle-medico.page.scss'],
})
export class DetalleMedicoPage implements OnInit {
  idRecibida: number;
  datosMedico : any;
  constructor(private route: ActivatedRoute, private datosMedicoService : ServiceService) {
    this.idRecibida = 0;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => { this.idRecibida = params['datoId'] });
    this.datosMedico = this.datosMedicoService.getMedico(this.idRecibida);
  }

  deleteMedico(){
    this.datosMedicoService.deleteMedico(this.idRecibida);
  }
}
