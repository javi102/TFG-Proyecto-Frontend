import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaliTrendsComponent } from './akali-trends.component';

describe('AkaliTrendsComponent', () => {
  let component: AkaliTrendsComponent;
  let fixture: ComponentFixture<AkaliTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkaliTrendsComponent]
    });
    fixture = TestBed.createComponent(AkaliTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
