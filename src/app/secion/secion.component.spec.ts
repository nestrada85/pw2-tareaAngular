import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecionComponent } from './secion.component';

describe('SecionComponent', () => {
  let component: SecionComponent;
  let fixture: ComponentFixture<SecionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecionComponent]
    });
    fixture = TestBed.createComponent(SecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
