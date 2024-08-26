import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimerComponent } from './card-timer.component';

describe('CardTimerComponent', () => {
  let component: CardTimerComponent;
  let fixture: ComponentFixture<CardTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
