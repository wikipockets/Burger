exports.mysql={
   host: "localhost",
      port: 3306,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: "burgers_db"
}