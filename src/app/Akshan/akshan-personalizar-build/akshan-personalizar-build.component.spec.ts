import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshanPersonalizarBuildComponent } from './akshan-personalizar-build.component';

describe('AkshanPersonalizarBuildComponent', () => {
  let component: AkshanPersonalizarBuildComponent;
  let fixture: ComponentFixture<AkshanPersonalizarBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkshanPersonalizarBuildComponent]
    });
    fixture = TestBed.createComponent(AkshanPersonalizarBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
