import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaliSkinsComponent } from './akali-skins.component';

describe('AkaliSkinsComponent', () => {
  let component: AkaliSkinsComponent;
  let fixture: ComponentFixture<AkaliSkinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkaliSkinsComponent]
    });
    fixture = TestBed.createComponent(AkaliSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
