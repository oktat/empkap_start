import Rank from '../models/rank.js'

const RankController = {
  async index(req, res) {
    try {
      const ranks = await Rank.findAll()
      res.status(200)
      res.json({
        success: true,
        data: ranks
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
      const rank = await Rank.create(req.body)
      res.status(201)
      res.json({
        success: true,
        data: rank
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
      const rank = await Rank.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.status(200)
      res.json({
        success: true,
        data: rank
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
      const rank = await Rank.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200)
      res.json({
        success: true,
        data: rank
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

export default RankController
