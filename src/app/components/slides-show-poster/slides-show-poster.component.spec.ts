import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidesShowPosterComponent } from './slides-show-poster.component';

describe('SlidesShowPosterComponent', () => {
  let component: SlidesShowPosterComponent;
  let fixture: ComponentFixture<SlidesShowPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesShowPosterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidesShowPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
