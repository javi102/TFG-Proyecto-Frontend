import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AatroxStatsComponent } from './aatrox-stats.component';

describe('AatroxStatsComponent', () => {
  let component: AatroxStatsComponent;
  let fixture: ComponentFixture<AatroxStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AatroxStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AatroxStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
