import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaliBuildPersonalizadaComponent } from './akali-build-personalizada.component';

describe('AkaliBuildPersonalizadaComponent', () => {
  let component: AkaliBuildPersonalizadaComponent;
  let fixture: ComponentFixture<AkaliBuildPersonalizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkaliBuildPersonalizadaComponent]
    });
    fixture = TestBed.createComponent(AkaliBuildPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
