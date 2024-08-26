import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.scss'
})
export class CardCategoryComponent {
  @Input() categories!: string[]
}
