import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemoTrendsComponent } from './teemo-trends.component';

describe('TeemoTrendsComponent', () => {
  let component: TeemoTrendsComponent;
  let fixture: ComponentFixture<TeemoTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeemoTrendsComponent]
    });
    fixture = TestBed.createComponent(TeemoTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
