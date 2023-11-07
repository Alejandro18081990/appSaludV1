import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMedicoPage } from './detalle-medico.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMedicoPageRoutingModule {}
