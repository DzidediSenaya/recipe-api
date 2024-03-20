import {RecipeModel} from "../models/recipe.js"

export const addRecipe = async (req, res) => {
    //Add recipe to db
    const createResult = await RecipeModel.create(req.body);
    //return Response
    res.json(createResult);
}

export const getRecipes= (req, res) => {
    res.send('Get all recipes!');
}


export const getRecipe= (req, res) => {
    res.send('Get recipe with id');
}

export const patchRecipe= (req, res) => {
    res.send('Update recipe with id');
}

export const deleteRecipe= (req, res) => {
    res.send('Delete recipe with id');
}