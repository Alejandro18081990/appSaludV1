import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioMedicoComponent } from './formulario-medico/formulario-medico.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [FormularioMedicoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [FormularioMedicoComponent]
})
export class ComponentsModule { }
