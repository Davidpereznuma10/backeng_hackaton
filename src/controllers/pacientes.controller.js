const Pacientes = require("../model/Pacientes.model")
const Medicamentos = require("../model/Medicamento.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotEnv = require("dotenv")

dotEnv.config()

const add_pacientes_new = async(req, res) => {

    let data = req.body
    let searchData = await Pacientes.findOne({ dni: data.dni })
    if(searchData) return res.json({ "estado": false })

    let password = req.body.password
    req.body.password = await bcrypt.hash(password, 8)
    
    const jsonWT = await jwt.sign({ dni: req.body.dni }, process.env.SECRET_JWT)
    const pacientes = await Pacientes.create(data)
    res.json(jsonWT)

}

const add_medicamentos_new = async(req, res) => {

    let data = req.body
    const medicamentos = await Medicamentos.create(data)
    res.json(medicamentos)

}

const medicamento_paciente = async(req,res) => {

    const idPaciente = req.params.idPaciente
    const idMedicamentos = req.body.medicamentos

    let searchPacienet = await Pacientes.findOne({ _id: idPaciente })
    searchPacienet.medicamentos.push(idMedicamentos)

    let updateData = await Pacientes.updateOne({ _id: idPaciente }, searchPacienet )
    res.json(updateData)

}

const get_pacientes = async(req, res) => {

    let pacientes = await Pacientes.find()
    res.json(pacientes)
}

const get_paciente = async(req, res) => {

    let id = req.params.id
    let paciente = await Pacientes.findOne({ _id: id })
    res.json(paciente)
}

const get_medicamento = async (req, res) => {

    let id = req.params.id
    let medicamento = await Medicamentos.findOne({ _id: id })
    res.json(medicamento) 
}

module.exports = { add_pacientes_new, add_medicamentos_new, medicamento_paciente, get_pacientes, get_paciente, get_medicamento }