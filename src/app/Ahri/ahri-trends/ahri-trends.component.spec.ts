import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhriTrendsComponent } from './ahri-trends.component';

describe('AhriTrendsComponent', () => {
  let component: AhriTrendsComponent;
  let fixture: ComponentFixture<AhriTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhriTrendsComponent]
    });
    fixture = TestBed.createComponent(AhriTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
