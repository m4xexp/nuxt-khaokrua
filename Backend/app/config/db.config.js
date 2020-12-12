module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "102799",
    DB: "KhaoKrua",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };