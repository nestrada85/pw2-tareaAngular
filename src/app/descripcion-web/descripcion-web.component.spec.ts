import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionWebComponent } from './descripcion-web.component';

describe('DescripcionWebComponent', () => {
  let component: DescripcionWebComponent;
  let fixture: ComponentFixture<DescripcionWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionWebComponent]
    });
    fixture = TestBed.createComponent(DescripcionWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
