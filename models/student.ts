// models/student.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/sequelize';

class Student extends Model {
  public id!: number;
  public name!: string;
  public phone_number!: number;
  public PASSWORD!: string;
  public gender!: string;
  public id_card!: number;
  public BIRTH!: Date;
  public degree!: string;
  public college!: string;
  public department!: string;
  public major!: string;
  public generation!: number;
  public academic_year!: number;
  public classes!: string;
  public shif!: string;
  public gpa!: number;
}

Student.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true,
    },
    PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    id_card: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    BIRTH: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    degree: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    college: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    generation: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    academic_year: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    shif: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    gpa: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Student',
  }
);

export default Student;
