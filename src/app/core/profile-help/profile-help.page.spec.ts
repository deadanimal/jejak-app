import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileHelpPage } from './profile-help.page';

describe('ProfileHelpPage', () => {
  let component: ProfileHelpPage;
  let fixture: ComponentFixture<ProfileHelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHelpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
