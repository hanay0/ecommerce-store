import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBidInfoComponent } from './card-bid-info.component';

describe('CardBidInfoComponent', () => {
  let component: CardBidInfoComponent;
  let fixture: ComponentFixture<CardBidInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBidInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBidInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
