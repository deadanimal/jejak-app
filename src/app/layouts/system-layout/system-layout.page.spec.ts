import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemLayoutPage } from './system-layout.page';

describe('SystemLayoutPage', () => {
  let component: SystemLayoutPage;
  let fixture: ComponentFixture<SystemLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
