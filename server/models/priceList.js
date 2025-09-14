
export default (sequelize, DataTypes) => {
    
   const PriceList = sequelize.define('ProceList', {
        articleNo:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inPrice: DataTypes.STRING,
        price : DataTypes.STRING,
        unit : DataTypes.STRING,
        inStock: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {
        
        tableName: 'pricelist',
        timestamps: true
    });
    
    return PriceList;
}
