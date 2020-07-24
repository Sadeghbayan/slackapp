const Axios = require('axios');
var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

	await Axios.post(
		'https://hooks.slack.com/services/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',
		{
			text: "Hello Slack"
		}
	)

	res.json({
		date: new Date().toISOString()
	});
});

module.exports = router;

