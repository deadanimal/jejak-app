import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appliance-settings',
  templateUrl: './appliance-settings.page.html',
  styleUrls: ['./appliance-settings.page.scss'],
})
export class ApplianceSettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle(item: string) {
    console.log('Toggling: ', item)
  }

  addCustomAlert() {
    console.log('Adding custom alert...')
  }

  mergeDevice() {
    console.log('Merging device...')
  }

  deleteDevice() {
    console.log('Deleting device...')
  }

  reportProblem() {
    console.log('Reporting problem...')
  }

}
