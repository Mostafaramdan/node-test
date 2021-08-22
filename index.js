const app = require('./app/src')
const port = process.env.port || 3000
app.listen(port,()=>console.log(`app on local host ${port}`))