import { Recipe, recipes } from '@/data/recipes';

export interface RecipeMatch {
  recipe: Recipe;
  matchedIngredients: string[];
  missingIngredients: string[];
  matchPercentage: number;
}

export class RecipeRecommendationService {
  private normalizeIngredient(ingredient: string): string {
    return ingredient.trim().toLowerCase();
  }

  recommendRecipes(availableIngredients: string[], category?: Recipe['category']): RecipeMatch[] {
    const normalizedAvailableIngredients = availableIngredients.map(this.normalizeIngredient);
    
    let filteredRecipes = recipes;
    if (category) {
      filteredRecipes = recipes.filter(recipe => recipe.category === category);
    }
    
    const matches = filteredRecipes.map(recipe => {
      const normalizedRecipeIngredients = recipe.ingredients.map(this.normalizeIngredient);
      
      const matchedIngredients = normalizedRecipeIngredients.filter(ingredient => 
        normalizedAvailableIngredients.includes(ingredient)
      );
      
      const missingIngredients = normalizedRecipeIngredients.filter(ingredient => 
        !normalizedAvailableIngredients.includes(ingredient)
      );
      
      const matchPercentage = (matchedIngredients.length / recipe.ingredients.length) * 100;
      
      return {
        recipe,
        matchedIngredients,
        missingIngredients,
        matchPercentage
      };
    });
    
    // Sort by match percentage (descending) and return all matches that have at least one ingredient
    return matches
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .filter(match => match.matchedIngredients.length > 0);
  }
}