import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { Router } from '@angular/router';
import { AllServiceService } from '../../services/all-service.service';


export interface ConfirmModel {
  title: string;
}


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit  {
  title: string;
  email: string;
  password: string;
  constructor(dialogService: DialogService,private router:Router,private service: AllServiceService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.service.login(this.email, this.password,false);
    this.close();
  }
  ngOnInit() {

  }
  cancle(){
    this.result = false;
    this.close();
  }
}
