import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideshowParesComponent } from './slideshow-pares.component';

describe('SlideshowParesComponent', () => {
  let component: SlideshowParesComponent;
  let fixture: ComponentFixture<SlideshowParesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowParesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideshowParesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
