const express = require("express")
const router = express.Router()
const { add_pacientes_new, medicamento_paciente, get_pacientes, get_paciente,add_seguimiento, login } = require("../controllers/pacientes.controller")
const jwt_check = require("../middlewares/jwtCheck")
const {add_medicamentos_new, get_medicamento, get_medicamentos} = require("../controllers/medicamentos.controller")


// AGREGAR PACIENTE
router.post("/agregar-paciente", add_pacientes_new) // publico

// AGREGAR MEDICAMENTO
router.post("/agregar-medicamentos", jwt_check, add_medicamentos_new)

// RELACIÓN MACIENTE MEDICAMENTO
router.put("/medicamentos-pacientes/:idPaciente", jwt_check, medicamento_paciente)

// LISTAR PACIENTES
router.get("/obtener-pacientes", jwt_check, get_pacientes)

// LISTAR-UNO PACIENTE POR ID
router.get("/obtener-paciente/:id", jwt_check, jwt_check, get_paciente)

// LISTAR MEDICAMENTO
router.get("/obtener-medicamentos", jwt_check, get_medicamentos)

// LISTAR-UNO MEDICAMENTO POR ID
router.get("/obtener-medicamento/:id", jwt_check, get_medicamento)

// AGREGAR MEDICAMENTO

router.post("/agregar-seguimiento/:id", jwt_check, add_seguimiento) 

// AUTH

router.post("/login", login) // publico


module.exports = router