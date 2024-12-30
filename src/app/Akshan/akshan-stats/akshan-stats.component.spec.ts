import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshanStatsComponent } from './akshan-stats.component';

describe('AkshanStatsComponent', () => {
  let component: AkshanStatsComponent;
  let fixture: ComponentFixture<AkshanStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkshanStatsComponent]
    });
    fixture = TestBed.createComponent(AkshanStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
