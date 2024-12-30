import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemoBuildPersonalizadaComponent } from './teemo-build-personalizada.component';

describe('TeemoBuildPersonalizadaComponent', () => {
  let component: TeemoBuildPersonalizadaComponent;
  let fixture: ComponentFixture<TeemoBuildPersonalizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeemoBuildPersonalizadaComponent]
    });
    fixture = TestBed.createComponent(TeemoBuildPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
