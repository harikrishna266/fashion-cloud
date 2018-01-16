import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImageViewComponent } from './image-view.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from "@angular/router/testing";
import { FlickerService } from '../core/flicker.service';
import { Observable } from 'rxjs';


describe('ImageViewComponent', () => {
  let component: ImageViewComponent;
  let fixture: ComponentFixture<ImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports :[HttpModule,RouterTestingModule],
       providers: [FlickerService],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call search',() => {
    let flicker = TestBed.get(FlickerService);
    let loginSpy = spyOn(flicker,'search').and.callFake(res => { return Observable.empty()});
    component.getAllImages({tags:'x',userid: 1});
    expect(loginSpy).toHaveBeenCalled();
  })
});
