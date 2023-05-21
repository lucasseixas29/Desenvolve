import livros from "../models/Livro.js";

class LivroController {

static listarLivros = async (req, res) => {
    const result = await livros.find();
    res.status(200).json(result)
}

static cadastrarLivros = async (req, res) => {
    let livro = new livros(req.body);
    try {

    const resultPost = await livro.save();
    res.status(201).send(livro.toJSON())

} catch (err) {
    res.status(500).send({message:`${err} - falha ao cadastrar o livro`})
   }
}

static async atualizarLivros  (req, res) {

    const id = req.params.id;
    try { 
        livros.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send({message: "Livro atualizo com sucesso"})

        } catch (err) {
            res.status(500).send({message:err.message});
        }
}

}

export default LivroController;