import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AatroxSkinsComponent } from './aatrox-skins.component';

describe('AatroxSkinsComponent', () => {
  let component: AatroxSkinsComponent;
  let fixture: ComponentFixture<AatroxSkinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AatroxSkinsComponent]
    });
    fixture = TestBed.createComponent(AatroxSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
