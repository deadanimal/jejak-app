import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileAboutPage } from './profile-about.page';

describe('ProfileAboutPage', () => {
  let component: ProfileAboutPage;
  let fixture: ComponentFixture<ProfileAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
