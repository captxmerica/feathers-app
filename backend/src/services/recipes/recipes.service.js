// Initializes the `recipes` service on path `/recipes`
const createService = require('feathers-nedb');
const createModel = require('../../models/recipes.model');
const hooks = require('./recipes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'recipes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/recipes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('recipes');

  service.hooks(hooks);
};
