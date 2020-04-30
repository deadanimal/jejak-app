import { Component, OnInit } from '@angular/core';

import { TicketsService } from 'src/app/shared/services/tickets/tickets.service';

@Component({
  selector: 'app-profile-help-create',
  templateUrl: './profile-help-create.page.html',
  styleUrls: ['./profile-help-create.page.scss'],
})
export class ProfileHelpCreatePage implements OnInit {

  // Data
  input

  constructor(
    private ticketService: TicketsService
  ) { }

  ngOnInit() {
  }
  
  sendMessage() {
    
  }
}
