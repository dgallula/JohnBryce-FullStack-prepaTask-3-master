import {resultsRouter} from 'express';


resultsRouter.get('/results-by-id/:id', async (request, response) => {
    let result = await getAll();
   if (!result.succes) {
     response.status(500).send(result)
   }else {
       response.send(result)
   }
