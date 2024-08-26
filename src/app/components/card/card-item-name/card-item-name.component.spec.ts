import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemNameComponent } from './card-item-name.component';

describe('CardItemNameComponent', () => {
  let component: CardItemNameComponent;
  let fixture: ComponentFixture<CardItemNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
