import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhriSkinsComponent } from './ahri-skins.component';

describe('AhriSkinsComponent', () => {
  let component: AhriSkinsComponent;
  let fixture: ComponentFixture<AhriSkinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhriSkinsComponent]
    });
    fixture = TestBed.createComponent(AhriSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
