import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  // Icon
  iconHeader = 'assets/img/settings/plan.svg'
  iconHeaderPassword = 'assets/img/settings/password.svg'

  // Form
  formType: string = 'name'
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        if (params && params.special) {
          this.formType = JSON.parse(params.special)
          console.log(this.formType)
        }
      }
    )
  }

  ngOnInit() {
  }

  save() {
    
  }


  resetPassword() {

  }
  
}
