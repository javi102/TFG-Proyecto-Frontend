import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaliCounterMatchupComponent } from './akali-counter-matchup.component';

describe('AkaliCounterMatchupComponent', () => {
  let component: AkaliCounterMatchupComponent;
  let fixture: ComponentFixture<AkaliCounterMatchupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AkaliCounterMatchupComponent]
    });
    fixture = TestBed.createComponent(AkaliCounterMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
