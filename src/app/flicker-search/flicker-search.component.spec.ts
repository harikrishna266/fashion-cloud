import { async, ComponentFixture,tick, TestBed ,fakeAsync} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlickerSearchComponent } from './flicker-search.component';
import { Observable } from 'rxjs';
 
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { RouterTestingModule } from "@angular/router/testing";
import { FlickerService } from '../core/flicker.service';
import { SortPipe } from '../pipes/sort.pipe';
import { SearchResultModel } from './search-result.model';


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
  it('should should navigate to view page when search is clicked',fakeAsync(() => {
    let router = TestBed.get(Router);
      
    let routerSpy = spyOn(router,'navigate' );
    let search = new SearchResultModel(1,1,1,1,1,1,1);
    component.ViewDetails(search);
    tick();
    

    expect(routerSpy).toHaveBeenCalledWith(['/view',1]);

  }))
});
