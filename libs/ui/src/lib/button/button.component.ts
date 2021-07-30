import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'virtual-lolly-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() title: string = '';
  @Input() link: string = '';

  @Output() onBtnClick: EventEmitter<undefined> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  bttnClick() {
    this.onBtnClick.emit();
  }
}
