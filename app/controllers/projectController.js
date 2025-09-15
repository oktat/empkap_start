import Project from '../models/project.js'

const ProjectController = {
  async index(req, res) {
    try {
      const projects = await Project.findAll()
      res.status(200)
      res.json({
        data: projects
      })
    } catch (error) {
      res.status(500)
      res.json({
        message: 'Hiba'
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
        message: 'Hiba'
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
        message: 'Hiba'
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
        message: 'Hiba'
      })
    }
  }
}

export default ProjectController
