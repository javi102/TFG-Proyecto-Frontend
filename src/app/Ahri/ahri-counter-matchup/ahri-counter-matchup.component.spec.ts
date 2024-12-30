import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhriCounterMatchupComponent } from './ahri-counter-matchup.component';

describe('AhriCounterMatchupComponent', () => {
  let component: AhriCounterMatchupComponent;
  let fixture: ComponentFixture<AhriCounterMatchupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhriCounterMatchupComponent]
    });
    fixture = TestBed.createComponent(AhriCounterMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
