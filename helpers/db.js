import cfg from 'serverless-mysql'
const mysql = cfg({
    config: {
        host: "localhost",
        database: 'barangdb',
        user: 'root',
        password: ''
    }
})


export { mysql }