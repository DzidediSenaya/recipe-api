import { Router} from "express";
import { addRecipe, getRecipe, getRecipes, patchRecipe, deleteRecipe } from "../controllers/recipes.controllers.js";
import multer from "multer";

//configure upload middleware
const upload = multer({dest: 'uploads'});


//create recipes router
export const router = Router();


//define routes
router.post('/', upload.single('image'), addRecipe);

router.get('/', getRecipes);

router.get('/:id',getRecipe); 

router.patch('/:id', patchRecipe)

router.delete('/', deleteRecipe)