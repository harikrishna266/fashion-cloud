import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', async(() => {
    component.details = {tag: '1', imageUrl: 'imageUrl', uploaded_date: '12', photo_date: '12', ownerName: '11'};
    const de = fixture.debugElement.query(By.css('.imageList'));
    fixture.detectChanges();
    const ele: HTMLBRElement = de.nativeElement;
    expect(ele.getAttribute('src')).toBe('image_url');
  }));

});
