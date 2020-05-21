const express = require('express')
const app = express()
const port = process.env.PORT || 1337

require('./server/api-routes')(app);

app.listen(port, () => console.log(`Express server started and listening on port - ${port}`))
