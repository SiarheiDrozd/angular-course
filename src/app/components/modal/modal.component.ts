import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  @Output() result = new EventEmitter();

  constructor() {}

  ngOnInit() { }

  emitConfirm() {
    this.result.emit(true);
    close();
  }

  emitDecline() {
    this.result.emit(false);
    close();
  }

  close(event) {
    if (event && event.target === event.currentTarget) {
      this.result.emit(false);
    }
  }
}
