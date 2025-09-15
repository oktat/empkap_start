import Router from 'express'
import EmployeeController from '../controllers/employeeController.js'
import RankController from '../controllers/rankController.js'
import ProjectController from '../controllers/projectController.js'

const router = Router()

router.get('/employees', EmployeeController.index)
router.post('/employees', EmployeeController.store)
router.put('/employees/:id', EmployeeController.update)
router.delete('/employees/:id', EmployeeController.destroy)

router.get('/ranks', RankController.index)
router.post('/ranks', RankController.store)
router.put('/ranks/:id', RankController.update)
router.delete('/ranks/:id', RankController.destroy)

router.get('/projects', ProjectController.index)
router.post('/projects', ProjectController.store)
router.put('/projects/:id', ProjectController.update)
router.delete('/projects/:id', ProjectController.destroy)

export default router
