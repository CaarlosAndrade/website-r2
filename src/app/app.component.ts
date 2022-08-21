import { HttpClient } from '@angular/common/http';
import { ProdutosService } from './services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {}
}
