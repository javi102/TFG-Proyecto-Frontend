import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarBuildComponent } from './personalizar-build.component';

describe('PersonalizarBuildComponent', () => {
  let component: PersonalizarBuildComponent;
  let fixture: ComponentFixture<PersonalizarBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalizarBuildComponent]
    });
    fixture = TestBed.createComponent(PersonalizarBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
