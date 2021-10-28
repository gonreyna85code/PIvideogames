const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {     
    name: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    description_raw: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genres: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    database_created: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
  });
};
