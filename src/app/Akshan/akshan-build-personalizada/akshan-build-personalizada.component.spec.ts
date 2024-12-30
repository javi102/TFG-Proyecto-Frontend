import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshanBuildPersonalizadaComponent } from './akshan-build-personalizada.component';

describe('AkshanBuildPersonalizadaComponent', () => {
  let component: AkshanBuildPersonalizadaComponent;
  let fixture: ComponentFixture<AkshanBuildPersonalizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkshanBuildPersonalizadaComponent]
    });
    fixture = TestBed.createComponent(AkshanBuildPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
