import {Component, OnInit} from '@angular/core';
import {CoursesPageService} from './courses-page.service';
import {Course} from '../../modules/course/course-block/course-block.class';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less']
})

export class CoursesPageComponent implements OnInit {
  protected courses: Course[];
  private showDeleteModal: boolean;
  private showEditModal: boolean;
  private modalHeading: string;
  private modalMessage: string;
  private currentCourseId: string;

  constructor(private coursesPageService: CoursesPageService) {
  }

  ngOnInit() {
    this.showDeleteModal = false;
    this.showEditModal = false;
    this.modalHeading = '';
    this.modalMessage = '';
    this.getCourses();
  }

  getCourses() {
    this.courses = this.coursesPageService.getCourses();
  }

  handleCourseDelete(id) {
    this.currentCourseId = id;
    this.modalHeading = 'Do you really want to delete this course?';
    this.modalMessage = this.coursesPageService.getCourseById(id).title;
    this.showDeleteModal = true;
  }

  handleCourseEdit(id) {
    this.showEditModal = true;
  }

  handleModalResult(result: boolean) {
    this.showDeleteModal = false;
    if (result) {
      this.courses = this.coursesPageService.deleteCourse(this.currentCourseId);
    }
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
    this.courses = this.coursesPageService.filterCourses(filterValue);
  }
}
