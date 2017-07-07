const router = require('express').Router();

router.get('/api/v1/famous-people', function(req, res){
	// hardcode
	res.json({
		  error: false,
		  data: [
		    {
		      name: "Bill Gates",
		      age: 61,
		      company: "Microsoft"
		    },
		    {
		      name: "Steve Jobs",
		      age: 56,
		      company: "Apple"
		    },
		    {
		      name: "Gabe Newell",
		      age: 53,
		      company: "Valve"
		    }
		  ]
	})
})

module.exports = router;
