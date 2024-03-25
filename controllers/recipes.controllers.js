import {RecipeModel} from "../models/recipe.js"

export const addRecipe = async (req, res, next) => {
    try {//Add recipe to db
        console.log(req.file)
    const createResult = await RecipeModel.create({
        ...req.body,
        image: req.file.filename
    });
    //return Response
    res.status(201).json(createResult);
}
        catch (error){
            //forward to express error handler
            next(error);
        }
    };


export const getRecipes= async (req, res, next) => {
    try {
        //get all recipes from db
        const displayRecipes = await RecipeModel.find();
        //Return response
        res.json(displayRecipes);
    }
    catch (error){
        next(error);
    }
    };

    export const getRecipe= async (req, res, next) => {
        try {
            //get a recipe by id
            const displayRecipe = await RecipeModel.findById(req.params.id);

            //return 404 if not found
            if (displayRecipe === null) {
                res.status(404).json({
                    message: `Recipe with ObjectId: ${req.params.id} Not Found!`
                })
            }
            //Return response
            res.json(displayRecipe);
        }
        catch (error){
            next(error);
        }
        };


export const patchRecipe= (req, res) => {
    res.send('Update recipe with id');
}

export const deleteRecipe= (req, res) => {
    res.send('Delete recipe with id');
}