import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.page.html',
  styleUrls: ['./profile-information.page.scss'],
})
export class ProfileInformationPage implements OnInit {

  // Icon
  iconHeader = 'assets/img/settings/portfolio.svg'

  constructor(
    private router: Router
  ) { 
    this.loadInfo()
  }

  ngOnInit() {
  }

  loadInfo() {
    console.log('Loading info')
  }

  editInformation(url: string, type: string) {
    console.log('Url: ', url)
    console.log('Type: ', type)
    let navigationUrl: string = '/' + url
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(type)
      }
    }
    this.router.navigate([navigationUrl], navigationExtras)
    console.log(navigationUrl)
  }

}
