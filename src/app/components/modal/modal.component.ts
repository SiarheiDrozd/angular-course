import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  @Input() confirmationModal: boolean;
  @Input() heading: string;
  @Input() message: string;

  @Output() result = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitConfirm(){
    this.result.emit(true);
  }

  emitDecline() {
    this.result.emit(false);
  }

  close(event) {
    if (event && event.target === event.currentTarget){
      this.result.emit(false);
    }
  }
}
