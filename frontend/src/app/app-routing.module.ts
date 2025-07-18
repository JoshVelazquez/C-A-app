import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { NinosComponent } from './pages/ninos/ninos.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    title: 'Principal',
  },
  {
    path: 'hombres',
    component: HombreComponent,
    title: 'Hombres',
  },
  {
    path: 'mujeres',
    component: MujerComponent,
    title: 'Mujeres',
  },
  {
    path: 'ninos',
    component: NinosComponent,
    title: 'Niños',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
