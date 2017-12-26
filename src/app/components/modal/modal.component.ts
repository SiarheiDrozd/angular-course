import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  private showModal: boolean;

  @Input()
  get show() {
    return this.showModal;
  }

  @Output() showChange = new EventEmitter();
  set show(val) {
    this.showModal = val;
    this.showChange.emit(this.showModal);
  }

  @Output() result = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.showModal = false;
  }

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
    this.showModal = false;
  }
}
