import { ProdutosService } from '../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
})
export class ProdutosDetalhesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService
  ) {}

  produtos: [];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.produtoService.getProdutos().subscribe((data) => {
        this.produtos = data.filter((p) => p.id == id);
      });
    });
  }
}
