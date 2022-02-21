const { Router } = require('express');
const historyController = require('../controllers/historyController')();

function historyRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(historyController.getAll);
  // .post(historyController.createOne);

  // routes
  //   .route('/:historyID')
  //   .delete(historyController.deleteById)
  //   .get(historyController.getById)
  //   .put(historyController.updateById);

  return routes;
}

module.exports = historyRouter();
