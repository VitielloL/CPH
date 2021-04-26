import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './components/views/bag/bag.component';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { EntrarComponent } from './components/views/entrar/entrar.component';
import { EntretenimentoComponent } from './components/views/entretenimento/entretenimento.component';
import { EsquecerComponent } from './components/views/esquecer/esquecer.component';
import { InicioComponent } from './components/views/inicio/inicio.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';
import { PromocoesComponent } from './components/views/promocoes/promocoes.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'entretenimento',
    component: EntretenimentoComponent,
  },
  {
    path: 'promocoes',
    component: PromocoesComponent,
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent,
  },

  {
    path: 'entrar',
    component: EntrarComponent,
  },

  {
    path: 'esquecer',
    component: EsquecerComponent,
  },

  {
    path: 'perfil',
    component: PerfilComponent,
  },

  {
    path: 'bag',
    component: BagComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
