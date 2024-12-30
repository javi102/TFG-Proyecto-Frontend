import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshanSkinsComponent } from './akshan-skins.component';

describe('AkshanSkinsComponent', () => {
  let component: AkshanSkinsComponent;
  let fixture: ComponentFixture<AkshanSkinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkshanSkinsComponent]
    });
    fixture = TestBed.createComponent(AkshanSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
