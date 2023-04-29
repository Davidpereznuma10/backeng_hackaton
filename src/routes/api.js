const express = require("express")
const router = express.Router()
const { add_pacientes_new, add_medicamentos_new, medicamento_paciente, get_pacientes, get_paciente, get_medicamento } = require("../controllers/pacientes.controller")



router.post("/agregar-paciente", add_pacientes_new)

router.post("/agregar-medicamentos", add_medicamentos_new)

router.put("/medicamentos-pacientes/:idPaciente", medicamento_paciente)

router.get("/obtener-pacientes", get_pacientes)

router.get("/obtener-paciente/:id", get_paciente)

router.get("/obtener-medicamento/:id", get_medicamento)

module.exports = router