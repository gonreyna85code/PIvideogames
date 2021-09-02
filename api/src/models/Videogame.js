const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechadelanzamiento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    rating: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: true,
    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    timestamps: false,
  });
};
