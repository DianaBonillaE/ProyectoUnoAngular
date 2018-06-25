import { TestBed, inject } from '@angular/core/testing';

import { RegisterEmployeeService } from './register-employee.service';

describe('RegisterEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterEmployeeService]
    });
  });

  it('should be created', inject([RegisterEmployeeService], (service: RegisterEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
