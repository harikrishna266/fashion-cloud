import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerSearchComponent } from './flicker-search.component';

describe('FlickerSearchComponent', () => {
  let component: FlickerSearchComponent;
  let fixture: ComponentFixture<FlickerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickerSearchComponent ]
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
});
