import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemoStatsComponent } from './teemo-stats.component';

describe('TeemoStatsComponent', () => {
  let component: TeemoStatsComponent;
  let fixture: ComponentFixture<TeemoStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeemoStatsComponent]
    });
    fixture = TestBed.createComponent(TeemoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
