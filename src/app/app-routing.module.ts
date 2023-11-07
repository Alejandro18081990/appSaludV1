import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ver-medicos',
    loadChildren: () => import('./ver-medicos/ver-medicos.module').then( m => m.VerMedicosPageModule)
  },
  {
    path: 'detalle-medico',
    loadChildren: () => import('./detalle-medico/detalle-medico.module').then( m => m.DetalleMedicoPageModule)
  },
  {
    path: 'detalle-medico/:datoId',
    loadChildren: () => import('./detalle-medico/detalle-medico.module').then( m => m.DetalleMedicoPageModule)
  },
  {
    path: 'editar-medico',
    loadChildren: () => import('./editar-medico/editar-medico.module').then( m => m.EditarMedicoPageModule)
  },
  {
    path: 'editar-medico/:idRecibida',
    loadChildren: () => import('./editar-medico/editar-medico.module').then( m => m.EditarMedicoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
