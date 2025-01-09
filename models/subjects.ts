// models/subject.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/sequelize';

class Subject extends Model {
  public id!: number;
  public name!: string;
}

Subject.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Subject',
  }
);

export default Subject;
