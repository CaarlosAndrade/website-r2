import { LojaComponent } from './loja/loja.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutosDetalhesComponent } from './produtos/produto-detalhes/produtos-detalhes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: LojaComponent,
  },
  {
    path: 'produtos/:id',
    component: ProdutosDetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
