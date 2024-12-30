import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshanCounterMatchupComponent } from './akshan-counter-matchup.component';

describe('AkshanCounterMatchupComponent', () => {
  let component: AkshanCounterMatchupComponent;
  let fixture: ComponentFixture<AkshanCounterMatchupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkshanCounterMatchupComponent]
    });
    fixture = TestBed.createComponent(AkshanCounterMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
