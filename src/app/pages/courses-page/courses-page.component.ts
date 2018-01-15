import {Component, OnInit} from '@angular/core';
import {CoursesPageService} from './courses-page.service';
import {Course} from '../../modules/course/course-block/course-block.class';
import {AuthenticationService} from '../../services';
import * as Rx from "rxjs/Rx";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less']
})

export class CoursesPageComponent implements OnInit {
  protected courses: Rx.Observable<Course>;
  private showDeleteModal: boolean;
  private showEditModal: boolean;
  private modalHeading: string;
  private currentCourseId: string;
  private courseToDelete: Course;
  private courseToEdit: Course;

  constructor(private coursesPageService: CoursesPageService,
              private _authService: AuthenticationService) {
  }

  ngOnInit() {
    this.showDeleteModal = false;
    this.showEditModal = false;
    this.modalHeading = '';
    this.getCourses();
  }

  getCourses() {
    this.courses = this.coursesPageService.getCourses();
  }

  showDeleteModalWindow(course) {
    this.courseToDelete = course;
    this.currentCourseId = course.id;
    this.modalHeading = 'Do you really want to delete this course?';
    this.showDeleteModal = true;
  }

  showEditModalWindow(course) {
    this.courseToEdit = course;
    this.showEditModal = true;
  }

  handleDeleteCourse(result) {
    if (result) {
      // this.courses.subscribe(() => {
        this.coursesPageService.deleteCourse(this.courseToDelete);
      // });
    }
    this.showDeleteModal = false;
  }

  handleEditCourse(result) {
    if (result) {
      this.coursesPageService.updateCourse(this.courseToEdit);
      this.getCourses();
    }
    this.showEditModal = false;
  }

  isFreshCourse(course): boolean {
    const TODAY = new Date(),
      courseDate = course.date;
    return (courseDate < TODAY) && (courseDate >= new Date().setDate(TODAY.getDate() - 14));
  }

  isUpcommingCourse(course): boolean {
    const TODAY = new Date(),
      courseDate = course.date;
    return courseDate > TODAY;
  }

  rateCourse(course) {
    course.topRated = !course.topRated;
    this.coursesPageService.updateCourse(course);
  }

  filterList(filterValue) {
    this.courses = this.coursesPageService.filterCourses.call(this, filterValue, 'date');
  }

  isLoggedWithPermition(): boolean {
    const HAS_PERMITION = this._authService.getUserInfo() &&
      this._authService.getUserInfo().permitions &&
      this._authService.getUserInfo().permitions.edit;
    return this._authService.isAuthenticated() && HAS_PERMITION;
  }
}
