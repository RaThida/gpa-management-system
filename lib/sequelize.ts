// lib/sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('gpa_management_system', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
