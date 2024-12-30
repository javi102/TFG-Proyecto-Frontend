import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemoSkinsComponent } from './teemo-skins.component';

describe('TeemoSkinsComponent', () => {
  let component: TeemoSkinsComponent;
  let fixture: ComponentFixture<TeemoSkinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeemoSkinsComponent]
    });
    fixture = TestBed.createComponent(TeemoSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
