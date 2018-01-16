import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlickerSearchComponent } from './flicker-search.component';
import { Observable } from 'rxjs';
 
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from "@angular/router/testing";
import { FlickerService } from '../core/flicker.service';
import { SortPipe } from '../pipes/sort.pipe';

describe('FlickerSearchComponent', () => {
  let component: FlickerSearchComponent;
  let fixture: ComponentFixture<FlickerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickerSearchComponent,SortPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports :[HttpModule,RouterTestingModule],
       providers: [FlickerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search',() => {
    let flicker = TestBed.get(FlickerService);
    let loginSpy = spyOn(flicker,'search').and.callFake(res => { return Observable.empty()});
    component.makeSearch({tags:'x',userid: 1});
    expect(loginSpy).toHaveBeenCalled();
  })
});
