import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfinitiPage } from './infiniti.page';

describe('InfinitiPage', () => {
  let component: InfinitiPage;
  let fixture: ComponentFixture<InfinitiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinitiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfinitiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
