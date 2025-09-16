import Project from '../models/project.js'

const ProjectController = {
  async index(req, res) {
    try {
      const projects = await Project.findAll()
      res.status(200)
      res.json({
        success: true,
        data: projects
      })
    } catch (error) {
      res.status(500)
      res.json({
        success: false,
        message: 'Hiba!',
        error: error
      })
    }
  },
  async store(req, res) {
    try {
      const project = await Project.create(req.body)
      res.status(201)
      res.json({
        success: true,
        data: project
      })
    } catch (error) {
      res.status(500)
      res.json({
        success: false,
        message: 'Hiba!',
        error: error
      })
    }
  },
  async update(req, res) {
    try {
      const project = await Project.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.status(200)
      res.json({
        success: true,
        data: project
      })
    } catch (error) {
      res.status(500)
      res.json({
        success: false,
        message: 'Hiba!',
        error: error
      })
    }
  },
  async destroy(req, res) {
    try {
      const project = await Project.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200)
      res.json({
        success: true,
        data: project
      })
    } catch (error) {
      res.status(500)
      res.json({
        success: false,
        message: 'Hiba!',
        error: error
      })
    }
  }
}

export default ProjectController
