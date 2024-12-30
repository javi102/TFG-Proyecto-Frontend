import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemoPersonalizarBuildComponent } from './teemo-personalizar-build.component';

describe('TeemoPersonalizarBuildComponent', () => {
  let component: TeemoPersonalizarBuildComponent;
  let fixture: ComponentFixture<TeemoPersonalizarBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeemoPersonalizarBuildComponent]
    });
    fixture = TestBed.createComponent(TeemoPersonalizarBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
