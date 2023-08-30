import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloWebComponent } from './titulo-web.component';

describe('TituloWebComponent', () => {
  let component: TituloWebComponent;
  let fixture: ComponentFixture<TituloWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloWebComponent]
    });
    fixture = TestBed.createComponent(TituloWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
