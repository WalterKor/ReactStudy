const models = require('./models');

async function getProducts(){    

    try {
        const Product1 =await models.Products.findByPk(2);
        console.log(Product1.dataValues);
        console.log(Product1.dataValues.id)
        console.log(Product1.dataValues.price)
        const Product2 =await models.Products.findByPk(4);
        console.log(Product2.dataValues);           
    } catch (err) {
        console.log(err);
    }


}

getProducts();