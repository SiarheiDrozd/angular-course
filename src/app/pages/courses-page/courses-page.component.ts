import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {CoursesPageService} from './courses-page.service';
import {Course} from './course-block/course-block.class';
import {AuthenticationService, User} from '../../services';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {AuthorizationStatus} from '../../services/authentication/authorizationStatus.interface';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesPageComponent implements OnInit, OnDestroy {

  private showDeleteModal: boolean;
  private showEditModal: boolean;
  private modalHeading: string;
  private currentCourseId: string;
  private user: User;
  private noCourses: boolean;
  private courses: Observable<Course[]>;
  private authUserSub: Subscription;
  private coursesSub: Subscription;
  private courseToDelete: Course;
  private courseToEdit: Course;

  constructor(private coursesPageService: CoursesPageService,
              public authService: AuthenticationService) {
    this.authUserSub = this.authService.authorizationStatus
      .subscribe((authSt: AuthorizationStatus) => this.user = authSt.user);
    this.courses = this.coursesPageService.courses;
    this.coursesSub = this.courses.subscribe((courses: Course[]) => {
      this.noCourses = !courses.length;
    });
  }

  ngOnInit() {
    this.showDeleteModal = false;
    this.showEditModal = false;
    this.modalHeading = '';
  }

  ngOnDestroy() {
    this.authUserSub.unsubscribe();
    this.coursesSub.unsubscribe();
  }

  loadNext() {
    this.coursesPageService.loadNext();
  }

  loadPrevious() {
    this.coursesPageService.loadPrevious();
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
      this.coursesPageService.deleteCourse(this.courseToDelete);
    }
    this.showDeleteModal = false;
  }

  handleEditCourse(result) {
    if (result) {
      this.coursesPageService.updateCourse(this.courseToEdit);
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
    this.coursesPageService.filterCourses(filterValue, 'title');
  }
}
