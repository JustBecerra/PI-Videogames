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
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ReleaseDate: {
      type: DataTypes.DATEONLY,
    },
    Rating: {
      type: DataTypes.INTEGER
    },
    Platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  }, {
    timestamps:false,
  });
};
