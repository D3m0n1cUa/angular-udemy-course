import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output('chosenRecipe') chosenRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://panlasangpinoy.com/wp-content/uploads/2019/10/how-to-cook-dinakdakan-720x485.jpg'),
    new Recipe('A Test Recipe2',
      'This is simply a test2',
      'https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/4101/f820f5da8808ff670e20/letterbox_ToffeeAppleCrumbleCheeseCake_103887.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onChosenRecipe(chosenRecipe: Recipe) {
    this.chosenRecipe.emit(chosenRecipe);
  }
}
