import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mysql://christhopher:rJm2rCNmZL8sDBPSwpgv@ec2-18-229-236-15.sa-east-1.compute.amazonaws.com:3306/bouman-christhopher"
);

export default sequelize;
