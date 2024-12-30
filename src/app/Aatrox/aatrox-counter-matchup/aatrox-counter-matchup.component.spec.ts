import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AatroxCounterMatchupComponent } from './aatrox-counter-matchup.component';

describe('AatroxCounterMatchupComponent', () => {
  let component: AatroxCounterMatchupComponent;
  let fixture: ComponentFixture<AatroxCounterMatchupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AatroxCounterMatchupComponent]
    });
    fixture = TestBed.createComponent(AatroxCounterMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
