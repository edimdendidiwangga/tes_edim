// path example
const Project = require('../models/projects')
const User = require('../models/users')

// query populate
Project.find()
	.populate('user')
	.exec((error, records) => {
		if(error){
			res.json({error})
		} else {
			res.json(records)
		}
	})
