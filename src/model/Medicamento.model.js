const mongoose = require("mongoose")
const Schema = mongoose.Schema

const medicamentoSchema = new Schema(
    {
        nombre: String,
        descripcion: String,
        forma: String,
        
    },
    {
        versionKey: false
    }
)

const modelMedicamentos = mongoose.model("medicamentos", medicamentoSchema)

module.exports = modelMedicamentos