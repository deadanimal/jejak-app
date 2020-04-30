import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileHelpTicketPage } from './profile-help-ticket.page';

describe('ProfileHelpTicketPage', () => {
  let component: ProfileHelpTicketPage;
  let fixture: ComponentFixture<ProfileHelpTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHelpTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHelpTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
