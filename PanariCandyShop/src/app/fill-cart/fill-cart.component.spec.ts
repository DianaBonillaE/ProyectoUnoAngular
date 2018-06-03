import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCartComponent } from './fill-cart.component';

describe('FillCartComponent', () => {
  let component: FillCartComponent;
  let fixture: ComponentFixture<FillCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
