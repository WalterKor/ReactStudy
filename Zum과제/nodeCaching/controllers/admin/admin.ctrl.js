const req = require('express/lib/request');
const res = require('express/lib/response');
const models = require('../../models');

exports.get_products = async ( _ , res) => {

    try {
        const products =await models.Products.findAll();
        res.render('admin/products.html', { products })        
    } catch (error) {
        console.log(error);
    }

}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = async ( req , res ) => {
    
    await models.Products.create(       
        req.body
    );    
    res.redirect('/admin/products');
    
}

exports.get_products_detail = ( req , res ) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/detail.html', { product: product });  
    });
};

//수정하기
exports.get_products_edit = (req, res) =>{
    models.Products.findByPk(req.params.id).then((product)=>{
        res.render('admin/write.html', { product })
    })
}

exports.post_products_edit = (req,res)=>{
    models.Products.update({
        //내용
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    },{
        //조건
        where: { id : req.params.id}
    }).then(()=>{
        res.redirect('/admin/products/detail/' + req.params.id);
    })
};

//삭제하기
exports.get_products_delete = (req, res)=>{
    console.log("삭제메서드 호출됨")
    models.Products.destroy({
        where : { id : req.params.id }
    }).then(()=>{
        res.redirect('/admin/products');
    })
    
}
