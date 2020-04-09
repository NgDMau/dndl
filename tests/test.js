var pool = {
    host: process.env.DB_HOST,
    name: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: false,
    user: process.env.DB_USER
}

console.log(pool);
console.log(process.env);