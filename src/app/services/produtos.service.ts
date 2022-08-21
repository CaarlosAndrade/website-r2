import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private httpClient: HttpClient) {}

  public getProdutos(): Observable<any> {
    return this.httpClient.get('assets/data/bd.json');
  }
}
