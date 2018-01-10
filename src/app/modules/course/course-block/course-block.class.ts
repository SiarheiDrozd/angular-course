import {CourseBlockInterface} from './course-block.interface';

export class Course implements CourseBlockInterface {

  constructor(
    public id: string,
    public title: string,
    public duration: number,
    public date: Date,
    public description: string,
    public controls?: object[],
    public topRated?: boolean
  ) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.date = date;
    this.description = description;
    this.controls = controls;
    this.topRated = topRated || false;
  }
}
