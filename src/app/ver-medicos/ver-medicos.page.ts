import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-ver-medicos',
  templateUrl: './ver-medicos.page.html',
  styleUrls: ['./ver-medicos.page.scss'],
})
export class VerMedicosPage implements OnInit {
  listaMedicos : any;
  constructor(private datosMedicoService : ServiceService) { }

  ngOnInit() {
    this.listaMedicos = this.datosMedicoService.getAll();
  }

}
