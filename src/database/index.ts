import { DataSource } from "typeorm";

export const myAppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "postgres",
  username: "postgres",
  password: "admin",
  database: "rentx",
  migrations: [
    "src/database/migrations/*.ts"
  ]
})

myAppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err))