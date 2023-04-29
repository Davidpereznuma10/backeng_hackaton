const express = require("express")
const router = express.Router()
const { add_pacientes_new, medicamento_paciente, get_pacientes, get_paciente,add_seguimiento, login } = require("../controllers/pacientes.controller")
const jwt_check = require("../middlewares/jwtCheck")
const jwt_check_Admin = require("../middlewares/jwtCheck_Admin")
const {add_medicamentos_new, get_medicamento, get_medicamentos} = require("../controllers/medicamentos.controller")
const {add_doctor_new, get_doctores, get_doctor } = require("../controllers/doctor.controller")


// AGREGAR PACIENTE
router.post("/agregar-paciente", jwt_check_Admin, add_pacientes_new) // publico

// AGREGAR MEDICAMENTO
router.post("/agregar-medicamentos", jwt_check, add_medicamentos_new)

// AGREGAR DOCTOR
router.post("/agregar-doctor", add_doctor_new) //

// RELACIÓN MACIENTE MEDICAMENTO
router.put("/medicamentos-pacientes/:idPaciente", jwt_check, medicamento_paciente)

// LISTAR PACIENTES
router.get("/obtener-pacientes", jwt_check, get_pacientes)

// LISTAR DOCTOR
router.get("/obtener-doctor", jwt_check, get_doctores)

// LISTAR-UNO PACIENTE POR ID
router.get("/obtener-paciente/:id", jwt_check, get_paciente)

// LISTAR-UNO DOCTOR POR ID
router.get("/obtener-doctor/:id", jwt_check, get_doctor)

// LISTAR MEDICAMENTO
router.get("/obtener-medicamentos", jwt_check, get_medicamentos)

// LISTAR-UNO MEDICAMENTO POR ID
router.get("/obtener-medicamento/:id", jwt_check, get_medicamento)

// AGREGAR MEDICAMENTO

router.post("/agregar-seguimiento/:id", jwt_check, add_seguimiento) 

// AUTH

router.post("/login", login) // publico


module.exports = router