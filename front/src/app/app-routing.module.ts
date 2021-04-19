import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { EntrarComponent } from './components/views/entrar/entrar.component';
import { EntretenimentoComponent } from './components/views/entretenimento/entretenimento.component';
import { HomeComponent } from './components/views/home/home.component';
import { PromocoesComponent } from './components/views/promocoes/promocoes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
