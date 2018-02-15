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
    // console.log('get courses', sort, from, count, to);
    // console.log(queryStr);
    // console.log(req.originalUrl);
    if (courses.length < to) {
      to = courses.length;
    }
    courses = courses.slice(from, to);
    // console.log(query);

    res.json(courses);
  });

  router.get('/course', (req, res) => {
    let url_parts = url.parse(req.originalUrl, true),
      query = url_parts.query,
      courseId = query.id,
      courses = server.db.getState().courses;

    const COURSE = courses.find( course => {
      return course.id === courseId;
    });

    res.json(COURSE);
  });

  router.delete('/courses', (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true),
      query = url_parts.query,
      courses = server.db.getState().courses,
      element = courses.find((function (item) {
        if (item.id === query.id) {
          return true;
        }
      })),
      index = courses.indexOf(element);
    console.log('courses', courses.length);

    courses.splice(index, 1);

    console.log('index', index);
    console.log('element', element);
    console.log('courses', courses.length);

    res.json(server.db.getState().courses);
  });

  return router;
};
