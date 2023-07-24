const placeRouter = require('express').Router();
const placeController = require('../controller/placeController');
const photoMiddleware = require('../middleware/photoMiddleware');

placeRouter.post('/upload-by-link',placeController.imageDownload);
placeRouter.post('/place',placeController.addNewPlace);

placeRouter.post('/upload',photoMiddleware.array('photos',100),placeController.uploadFiles);
placeRouter.get('/places',placeController.retrieveUserPlaces);
placeRouter.get('/places/:id',placeController.retrieveAUserplace);
placeRouter.put('/places/:id',placeController.updateAplace);
placeRouter.get('/allplaces',placeController.retrieveAllPlaces);
placeRouter.get('/place/:id',placeController.showPlace);



module.exports = placeRouter;