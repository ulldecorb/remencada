const { Router } = require('express');
const aboutUsController = require('../controllers/aboutUsController')();

function aboutUsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(aboutUsController.getAll)
    .post(aboutUsController.createOne);

  routes
    .route('/:aboutUsID')
    .delete(aboutUsController.deleteById)
    .get(aboutUsController.getById)
    .put(aboutUsController.updateById);

  return routes;
}

module.exports = aboutUsRouter();
