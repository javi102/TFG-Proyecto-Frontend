import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaliStatsComponent } from './akali-stats.component';

describe('AkaliStatsComponent', () => {
  let component: AkaliStatsComponent;
  let fixture: ComponentFixture<AkaliStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkaliStatsComponent]
    });
    fixture = TestBed.createComponent(AkaliStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
