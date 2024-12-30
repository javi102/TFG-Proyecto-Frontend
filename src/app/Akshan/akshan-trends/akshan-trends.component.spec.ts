import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshanTrendsComponent } from './akshan-trends.component';

describe('AkshanTrendsComponent', () => {
  let component: AkshanTrendsComponent;
  let fixture: ComponentFixture<AkshanTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkshanTrendsComponent]
    });
    fixture = TestBed.createComponent(AkshanTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
