const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,// investigar primaryKey
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Released: {
      type: DataTypes.STRING,
    },
    Rating: {
      type: DataTypes.DOUBLE
    },
    Platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  }, {
    timestamps:false,
  });
};
