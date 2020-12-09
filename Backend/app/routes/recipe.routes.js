module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", recipes.create);
  
    // Retrieve all Tutorials
    router.get("/", recipes.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", recipes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", recipes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", recipes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", recipes.delete);
  
    // Create a new Tutorial
    router.delete("/", recipes.deleteAll);
  
    app.use('/api/recipes', router);
  };