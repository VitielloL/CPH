import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Template
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';

// Material do angular
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/views/home/home.component';
import { EntretenimentoComponent } from './components/views/entretenimento/entretenimento.component';
import { PromocoesComponent } from './components/views/promocoes/promocoes.component';
import { EntrarComponent } from './components/views/entrar/entrar.component';
import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { EsquecerComponent } from './components/views/esquecer/esquecer.component';
import { BagComponent } from './components/views/bag/bag.component';
import { PerfilComponent } from './components/views/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    EntretenimentoComponent,
    PromocoesComponent,
    EntrarComponent,
    CadastrarComponent,
    EsquecerComponent,
    BagComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
