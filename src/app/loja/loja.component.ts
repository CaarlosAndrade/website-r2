import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'],
})
export class LojaComponent implements OnInit {
  constructor(private produtoService: ProdutosService) {}

  produtos: [];

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = data;
    });
  }
}
