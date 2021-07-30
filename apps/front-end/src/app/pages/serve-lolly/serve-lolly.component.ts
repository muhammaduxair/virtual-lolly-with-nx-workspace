import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AppServiceService,
  ServiceLolliesINT,
} from 'libs/services/src/lib/app-service.service';

@Component({
  selector: 'virtual-lolly-serve-lolly',
  templateUrl: './serve-lolly.component.html',
  styleUrls: ['./serve-lolly.component.scss'],
})
export class ServeLollyComponent implements OnInit {
  lollyUrl: string = '';
  errorIndecator: boolean = false;
  lollyData!: ServiceLolliesINT;

  constructor(
    private route: ActivatedRoute,
    private appService: AppServiceService
  ) {}

  ngOnInit(): void {
    this.lollyUrl = `${window.location.origin}/lolly/`;
    this.route.params.subscribe(({ id }) =>
      this.appService.getLollyById(id).subscribe((res) =>
        setTimeout(() => {
          this.lollyData = res;
          this.errorIndecator = true;
        }, 2000)
      )
    );
  }
}
