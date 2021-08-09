const controlador ={
    index: (req, res) => {
        res.send('Index de protutos');
    },
    viewForm: (req, res)=>{
        return res.render('produto');
    },
    salvarForm:(req, res)=>{
        let {nomeProdutos, precoProdutos } = req.body;

        res.redirect('/produtos/sucesso');
    },
    sucesso:(req, res)=>{
       return res.render('sucesso');
    }, 
    viewAttForm:(req,res)=>{
        let {id}= req.params;
        let produtos =[
            { id:1, nome:'Produto x', preco:10},
            { id:2, nome:'Produto y', preco:20} 
         ]

        res.render('editarProduto',{produtos:produtos[id]});
    },
    editar:(req, res)=>{
        let {nomeProdutos, precoProdutos } = req.body;
        res.send('Você editou o produto' + nomeProduto);
    }
}

module.exports = controlador;