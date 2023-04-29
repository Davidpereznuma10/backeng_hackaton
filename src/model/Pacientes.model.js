const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pacientesSchema = new Schema(
    {
        name: String,
        apellido: String,
        dni: String,
        patologia: String,
        tel_cuidador: String,
        password: String,
        medicamentos: Array,
        seguimiento: Object,
        
    },
    {
        versionKey: false
    }
)

const modelPacientes = mongoose.model("pacientes", pacientesSchema)

module.exports = modelPacientes