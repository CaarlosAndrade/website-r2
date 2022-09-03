import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProdutosDetalhesComponent } from './produtos/produto-detalhes/produtos-detalhes.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { LojaComponent } from './loja/loja.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TiposDeUsoComponent } from './shared/banners/tipos-de-uso/tipos-de-uso.component';
import { AmostraComponent } from './shared/banners/amostra/amostra.component';
import { BeneficiosComponent } from './shared/banners/beneficios/beneficios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProdutosDetalhesComponent,
    ProdutoComponent,
    LojaComponent,
    FooterComponent,
    TiposDeUsoComponent,
    AmostraComponent,
    BeneficiosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
