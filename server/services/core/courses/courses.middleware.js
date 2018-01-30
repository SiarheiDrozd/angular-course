const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start || 0,
      count = query.count || 0,
			to = +from + +count,
			sort = query.sort,
			queryStr = query.query,
			courses = server.db.getState().courses;
		console.log(sort, from, count, to);
		console.log(queryStr);
    console.log(req.originalUrl);
    if (courses.length < to) {
			to = courses.length;
		}
		courses = courses.slice(from, to);
    console.log(query);

		res.json(courses);
	});

	return router;
};
