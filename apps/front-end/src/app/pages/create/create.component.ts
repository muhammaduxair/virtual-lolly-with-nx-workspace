import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LolliesColorINT } from '../../interfaces/global.interface';
import { AppServiceService } from 'libs/services/src/lib/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'virtual-lolly-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  defaultLollyColors: LolliesColorINT = {
    colorTop: '#cd2753',
    colorMiddle: '#d3c8c8',
    colorBottom: '#609ed0',
  };

  createForm = new FormGroup({
    reciever: new FormControl('', Validators.required),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    sender: new FormControl('', Validators.required),
  });

  constructor(private appService: AppServiceService, private router: Router) {}

  ngOnInit(): void {}

  onBtnClick() {
    if (this.createForm.valid) {
      this.appService
        .createLolly({
          ...this.createForm.value,
          ...this.defaultLollyColors,
        })
        .subscribe(
          (res) =>
            setTimeout(() => this.router.navigate([`/lolly/${res._id}`]), 500),
          () => alert('Something Wrong Please Check Your Internet Connection')
        );
    } else {
      alert('Please Fill the Required Fields');
    }
  }

  onClrChange(data: any) {
    let id: string = data.target.id;
    let value: string = data.target.value;
    this.defaultLollyColors[id] = value;
  }
}
