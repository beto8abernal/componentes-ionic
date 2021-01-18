import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotonPage } from './boton.page';

describe('BotonPage', () => {
  let component: BotonPage;
  let fixture: ComponentFixture<BotonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
