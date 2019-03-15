import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { Router } from '@angular/router';
import { AllServiceService } from '../../services/all-service.service';



export interface ConfirmModel {
  title: string;
  email: string;
  mobile: string;
}
@Component({
  selector: 'app-contact-owner',
  templateUrl: './contact-owner.component.html',
  styleUrls: ['./contact-owner.component.css']
})
export class ContactOwnerComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit  {

  title: string;
  email: string;
  mobile: string;
  showOTP:boolean;
  otp:any;
  constructor(dialogService: DialogService,private router:Router,private service: AllServiceService) {
    super(dialogService);
  }
  ngOnInit() {

  }
  cancle(){
    this.result = false;
    this.close();
  }

  continue(){
    //send otp from here....
    this.showOTP=true;    
  }

  contact(){
    this.result = true;
    this.close();
  }

}
