import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemoCounterMatchupComponent } from './teemo-counter-matchup.component';

describe('TeemoCounterMatchupComponent', () => {
  let component: TeemoCounterMatchupComponent;
  let fixture: ComponentFixture<TeemoCounterMatchupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeemoCounterMatchupComponent]
    });
    fixture = TestBed.createComponent(TeemoCounterMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
