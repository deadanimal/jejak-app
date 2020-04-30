import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileHardwarePage } from './profile-hardware.page';

describe('ProfileHardwarePage', () => {
  let component: ProfileHardwarePage;
  let fixture: ComponentFixture<ProfileHardwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHardwarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHardwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
