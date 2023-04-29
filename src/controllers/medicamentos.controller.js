const Medicamentos = require("../model/Medicamento.model")

const add_medicamentos_new = async(req, res) => {

    let data = req.body
    const medicamentos = await Medicamentos.create(data)
    res.json(medicamentos)

}

const get_medicamento = async (req, res) => {

    let id = req.params.id
    let medicamento = await Medicamentos.findOne({ _id: id })
    res.json(medicamento) 
}

const get_medicamentos = async(req,res)=>{

    const medicamentos = await Medicamentos.find()
    res.json(medicamentos)

}

module.exports = {add_medicamentos_new, get_medicamento, get_medicamentos} 

