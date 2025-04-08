export interface Recipe {
  id: number;
  category: string;
  name: string;
  profile: string[];
  allergens: string[];
  portionsize: number;
  description: string;
  difficulty: string;
  instructions: string[];
  ingredients: string[];
  nutrition: string[];
  image: string;
}

export interface RecipeName {
  id: number;
  name: string;
  image: string;
}
