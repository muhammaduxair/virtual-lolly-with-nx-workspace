import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'virtual-lolly-lolly',
  templateUrl: './lolly.component.html',
  styleUrls: ['./lolly.component.scss'],
})
export class LollyComponent implements OnInit {
  @Input() colorTop: string = '#cd2753';
  @Input() colorMiddle: string = '#d3c8c8';
  @Input() colorBottom: string = '#609ed0';
  @Input() height: string = '431px';
  @Input() width: string = '163px';

  constructor() {}

  ngOnInit(): void {}
}
