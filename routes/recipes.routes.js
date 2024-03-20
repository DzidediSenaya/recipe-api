import { Router} from "express";
import { addRecipe, getRecipe, getRecipes, patchRecipe, deleteRecipe } from "../controllers/recipes.controllers.js";

export const router = Router();


//define routes
router.post('/', addRecipe);

router.get('/', getRecipes);

router.get('/:id',getRecipe); 

router.patch('/:id', patchRecipe)

router.delete('/', deleteRecipe)