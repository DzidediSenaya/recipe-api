import { Router} from "express";

export const router = Router();

router.post('/recipes', (req, res) => {
    res.send('Post all recipes!');
});

router.get('/recipes', (req, res) => {
    res.send('Get all recipes!');
});

router.get('/recipes/:id', (req, res) => {
    res.send('Get recipe with id');
});

router.patch('/recipes', (req, res) => {
    res.send('Patch recipe with id')
});

router.delete('/recipes', (req, res) => {
    res.send('Delete recipe with id')
});