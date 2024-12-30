import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhriPersonalizarBuildComponent } from './ahri-personalizar-build.component';

describe('AhriPersonalizarBuildComponent', () => {
  let component: AhriPersonalizarBuildComponent;
  let fixture: ComponentFixture<AhriPersonalizarBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhriPersonalizarBuildComponent]
    });
    fixture = TestBed.createComponent(AhriPersonalizarBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
