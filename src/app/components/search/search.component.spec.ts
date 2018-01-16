import { async, ComponentFixture, tick, TestBed, fakeAsync} from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
 
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import { SearchComponent } from './search.component';

import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports : [ReactiveFormsModule,RouterTestingModule,HttpModule, MatInputModule,BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login should contain input elements called tags and userid',() => {
       expect(component.flickerSearchForm.contains('tags')).toBeTruthy();
       expect(component.flickerSearchForm.contains('user_id')).toBeTruthy();
  })
  
  it('Submit button should not be enabled if the tags are empty',() => {
    let username = component.flickerSearchForm.get('tags');
    username.setValue(''); //now the form is invalid, 
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.submit'));
    let ele:HTMLBRElement = de.nativeElement;
    expect(ele.hasAttribute('disabled')).toBeTruthy();
  })
  
});
