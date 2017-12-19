import {Injectable} from '@angular/core';
import {Course} from '../../modules/course/course-block/course-block.class';
import { COURSES } from './courses-page.data';
// const COURSES = null;

@Injectable()
export class CoursesPageService {

  public courses: Course[];

  constructor() {
    this.courses = this.loadCourses();
  }

  private loadCourses(): Course[] {
    if (COURSES && Array.isArray(COURSES)) {
      return COURSES.map(courseData => this.createCourse(courseData));
    } else {
      return null;
    }
  }

  private getCourseIndex(course: Course): number {
    return this.courses.indexOf(this.getCourseById(course.id));
  }

  getCourses(): Course[] {
    this.courses = this.courses || this.loadCourses();
    return this.courses;
  }

  createCourse(courseData): Course {
    return new Course(
      courseData.id,
      courseData.title,
      courseData.duration,
      new Date(courseData.date),
      courseData.description,
      courseData.controls);
  }

  addCourse(course: Course): Course[] {
    this.courses.push(course);
    return this.courses;
  }

  getCourseById(id) {
    return this.courses.find(item => item.id === id);
  }

  updateCourse(courseToUpdate) {
    this.courses = this.courses.splice(this.getCourseIndex(courseToUpdate), 1, courseToUpdate);
  }

  deleteCourse(id): Course[] {
    this.courses = this.courses.filter(element => {
      return element.id !== id;
    });

    return this.courses;
  }
}
