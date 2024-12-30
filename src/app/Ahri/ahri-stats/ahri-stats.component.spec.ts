import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhriStatsComponent } from './ahri-stats.component';

describe('AhriStatsComponent', () => {
  let component: AhriStatsComponent;
  let fixture: ComponentFixture<AhriStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhriStatsComponent]
    });
    fixture = TestBed.createComponent(AhriStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
