import { Component, OnInit } from '@angular/core';
import { LolliesColorINT } from '../../interfaces/global.interface';

@Component({
  selector: 'virtual-lolly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lolliesColors: LolliesColorINT[] = [
    { colorTop: '#e97393', colorMiddle: '#d03c60', colorBottom: '#ba155f' },
    { colorTop: '#ed265b', colorMiddle: '#ef6e48', colorBottom: '#f1bf4b' },
    { colorTop: '#feefd6', colorMiddle: '#b65ae4', colorBottom: '#c01ab9' },
    { colorTop: '#cd2753', colorMiddle: '#d3c8c8', colorBottom: '#609ed0' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
