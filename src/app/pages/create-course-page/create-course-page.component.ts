import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.less']
})
export class CreateCoursePageComponent implements OnInit {

  public authorsList: Observable<any>;
  public courseAuthors: any[];

  constructor(private _location: Location, private _http: HttpClient) {
  }

  ngOnInit() {
    this._http.get('http://localhost:3004/authors')
      .subscribe((data: any) => {
        this.authorsList = data.map(item => {
          return {label: `${item.firstName} ${item.lastName}`, checked: false, data: item};
        });
      });
    this.courseAuthors = [
      {
        'firstName': 'Autumn',
        'lastName': 'Solis'
      },
      {
        'firstName': 'Bell',
        'lastName': 'Hull'
      }
    ];
  }

  submit(form) {
    console.log(form);
  }

  back() {
    this._location.back();
  }
}
