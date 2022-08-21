import { ProdutosService } from './../../services/produtos.service';
import { Component, Input, OnInit } from '@angular/core';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutosService) {}

  @Input() categoria: string;
  @Input() id: number;
  @Input() plusButton: string;

  produtos: [];

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((data) => {
      if (this.categoria == 'principal') {
        this.produtos = data.filter((p) => p.categoria == this.categoria);
        return;
      }
      if (this.id) {
        this.produtos = data.filter((p) => p.id == this.id);
        return;
      }

      this.produtos = data;
    });
  }
}
