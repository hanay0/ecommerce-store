import { Component } from '@angular/core';
import { CardCategoryComponent } from './card-category/card-category.component';
import { CardThumbnailComponent } from './card-thumbnail/card-thumbnail.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardCategoryComponent,
    CardThumbnailComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardCategories = ['electronics', 'clothes', 'computers', 'mobiles'];
}
