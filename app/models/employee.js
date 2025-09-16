import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize'

const Employee = sequelize.define('employee', {
  name: { type: DataTypes.STRING }
})

sequelize.sync({
  alter: true
})

export default Employee
