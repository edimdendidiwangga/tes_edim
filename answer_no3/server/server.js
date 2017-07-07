const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())

app.set('port', process.env.PORT || 3000)

app.use('/', require('./routes/projects'));

app.listen(app.get('port'), function() {
    console.log('listening on port ' + app.get('port'))
})

module.exports = app
