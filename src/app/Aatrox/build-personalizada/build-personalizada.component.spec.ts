import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPersonalizadaComponent } from './build-personalizada.component';

describe('BuildPersonalizadaComponent', () => {
  let component: BuildPersonalizadaComponent;
  let fixture: ComponentFixture<BuildPersonalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPersonalizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
