import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaliPersonalizarBuildComponent } from './akali-personalizar-build.component';

describe('AkaliPersonalizarBuildComponent', () => {
  let component: AkaliPersonalizarBuildComponent;
  let fixture: ComponentFixture<AkaliPersonalizarBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkaliPersonalizarBuildComponent]
    });
    fixture = TestBed.createComponent(AkaliPersonalizarBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
