import { Injectable } from '@angular/core';

@Injectable()
export class DeleteProductsService {

  constructor() { }

  public close(){
    localStorage.setItem('sesion',null);
  }
}
