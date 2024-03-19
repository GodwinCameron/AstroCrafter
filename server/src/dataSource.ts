import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
type: "postgres",
host: "localhost",
port: 5432,
username: "postgres",
password: "admin",
database: "astrocrafter_db",
entities: ["src/entity/**"],
logging: true,
synchronize: true
});

AppDataSource.initialize()
.then(()=>{
    console.log("Data Initialized")
})
.catch((error)=>{
    console.log("error initializing database", error);
});

export default AppDataSource;

  
  