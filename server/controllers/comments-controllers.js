import { commentsRouter } from 'express';
import { getAllGames, getResultsOfGame, getCommentByID, getResultsOfGameByCategory, addComment, getAll } from '../business-logic/results-bl.js';

const commentsRouter = Router();


commentsRouter.get('/comments-by-id/:id', async (request, response) => {
     let result = await getAll();
    if (!result.succes) {
      response.status(500).send(result)
    }else {
        response.send(result)
    }
        

router.get('/games/:category', async (request, response) => {
    try {
        const category = request.params.category;
        if (category.length === 0) {
            const games = await getAllGames();
            response.json(games);
            return;
        }
        const games = await getResultsOfGameByCategory(category);
        response.json(games);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

router.post('/comment', async (request, response) => {
    try {
        const comment = request.body;
        const addedComment = await addComment(comment);
        response.status(201).json(addedComment);
    } catch (error) {
        console.log(error);
        response.status(500).send(error.message);
    }
});
export default router;