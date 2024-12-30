import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AatroxTrendsComponent } from './aatrox-trends.component';

describe('AatroxTrendsComponent', () => {
  let component: AatroxTrendsComponent;
  let fixture: ComponentFixture<AatroxTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AatroxTrendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AatroxTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
