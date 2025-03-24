export interface Recipe {
  id: number;
  name: string;
  description: string;
  amount: string;
  ingredients: [string];
  instructions: string;
  tips: string;
  category: [string];
  image: string;
  rating: number;
}

export interface RecipeName {
  id: number;
  name: string;
  image: string;
}
