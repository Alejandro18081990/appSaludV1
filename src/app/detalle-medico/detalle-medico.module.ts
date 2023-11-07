import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMedicoPageRoutingModule } from './detalle-medico-routing.module';

import { DetalleMedicoPage } from './detalle-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMedicoPageRoutingModule
  ],
  declarations: [DetalleMedicoPage]
})
export class DetalleMedicoPageModule {}
