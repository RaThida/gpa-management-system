// models/studentSubject.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/sequelize';
import Student from './student';
import Subject from './subjects';

class StudentSubject extends Model {
  public grade!: number;
}

StudentSubject.init(
  {
    grade: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'StudentSubject',
  }
);

Student.belongsToMany(Subject, { through: StudentSubject });
Subject.belongsToMany(Student, { through: StudentSubject });

export default StudentSubject;
