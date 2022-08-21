import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private produtoService: ProdutosService) {}
  produtosPrincipais: any[] = [];

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtosPrincipais = data.filter((p) => p.categoria === 'principal');
    });
  }
}
