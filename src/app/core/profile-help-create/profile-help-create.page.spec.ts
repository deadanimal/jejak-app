import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileHelpCreatePage } from './profile-help-create.page';

describe('ProfileHelpCreatePage', () => {
  let component: ProfileHelpCreatePage;
  let fixture: ComponentFixture<ProfileHelpCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHelpCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHelpCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
