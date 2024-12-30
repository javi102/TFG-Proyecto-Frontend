import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhriBuildPersonalizadaComponent } from './ahri-build-personalizada.component';

describe('AhriBuildPersonalizadaComponent', () => {
  let component: AhriBuildPersonalizadaComponent;
  let fixture: ComponentFixture<AhriBuildPersonalizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhriBuildPersonalizadaComponent]
    });
    fixture = TestBed.createComponent(AhriBuildPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
