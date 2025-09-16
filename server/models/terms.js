export default(sequelize, DataTypes) => {
    const Terms = sequelize.define('Terms', {
        en_lang: {
            type: DataTypes.TEXT
        },
        swe_lang: {
            type: DataTypes.TEXT
        }
    }, {
            tableName: 'terms',
            timestamps: true
        }
    );

    return Terms;
}