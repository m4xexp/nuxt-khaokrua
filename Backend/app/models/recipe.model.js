module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      tag: {
        type: Sequelize.STRING
      },
      fovorite: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Recipe;
  };