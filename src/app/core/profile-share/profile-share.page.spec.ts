import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileSharePage } from './profile-share.page';

describe('ProfileSharePage', () => {
  let component: ProfileSharePage;
  let fixture: ComponentFixture<ProfileSharePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSharePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileSharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
