import {Injectable} from '@angular/core';
import {Course} from '../../modules/course/course-block/course-block.class';
import { COURSES } from './courses-page.data';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class CoursesPageService {

  public courses: Rx.Observable<Course>;

  constructor() {
    this.courses = this.loadCourses();
  }

  private loadCourses(): Rx.Observable<Course>{
    if (COURSES && Array.isArray(COURSES)) {
      return Rx.Observable.from(COURSES)
        .map(courseData => this.createCourse(courseData));
    } else {
      return null;
    }
  }

  getCourses(): Rx.Observable<Course> {
    this.courses = this.courses || this.loadCourses();
    console.log(this.courses);
    return this.courses;
  }

  filterCourses(filter: string, searchField: string): any {
    return this.courses.filter(
      // (courses)=>{
      // courses.filter(
    (course)=>{
        const SEARCH = course[searchField].toString().match(new RegExp(filter, 'gi'));
        return SEARCH && SEARCH.length > 0;
      // })
    });
  }

  createCourse(courseData): Course {
    return new Course(
      courseData.id,
      courseData.title,
      courseData.duration,
      new Date(courseData.date),
      courseData.description,
      courseData.topRated,
      );
  }

  addCourse(course: Course): Rx.Observable<Course> {
    return Rx.Observable.merge(this.courses.flatMap, Rx.Observable.of(course));
  }

  getCourseById(id) {
    let courseToReturn = {};
    console.log('1');

    this.courses.filter(item => {
      console.log('2');

      return item.id === id;
    });
    return courseToReturn[0];
  }

  updateCourse(courseToUpdate) {
    // return this.courses.map((course)=>{
    //   if(course.id === courseToUpdate.id) {
    //     return
    //   }
    // });

    // let newCourses = [...this.courses];
    // newCourses.splice(this.getCourseIndex(courseToUpdate), 1, courseToUpdate);
    // this.courses = newCourses;
  }

  deleteCourse(course): Rx.Observable<Course> {
    if (course)
    console.log(course, this.courses);

    this.courses.filter( item => {
      console.log('item', item);
      return false
    });
    console.log( this.courses);

    return this.courses;
  }
}
