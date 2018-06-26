import { TestBed, inject } from '@angular/core/testing';

import { DeleteProductsService } from './delete-products.service';

describe('DeleteProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteProductsService]
    });
  });

  it('should be created', inject([DeleteProductsService], (service: DeleteProductsService) => {
    expect(service).toBeTruthy();
  }));
});
