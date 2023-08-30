import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceFotoComponent } from './enlace-foto.component';

describe('EnlaceFotoComponent', () => {
  let component: EnlaceFotoComponent;
  let fixture: ComponentFixture<EnlaceFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnlaceFotoComponent]
    });
    fixture = TestBed.createComponent(EnlaceFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
