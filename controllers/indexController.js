let indexController = {
    viewContato:(req, res)=>{
       let {nome, idade} = (req.query);
       res.render('contato', {nomeUsuario:nome});
    },
    confirmarcontato: (req, res)=>{
        let {nome, email} = req.query;
        res.redirect('/sucesso');
    }
}

module.exports = indexController