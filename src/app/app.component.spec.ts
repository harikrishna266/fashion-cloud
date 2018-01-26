import { TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import { NgModuleFactoryLoader } from '@angular/core';
import { SpyLocation } from '@angular/common/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FlickerSearchModule } from './flicker-search/flicker-search.module';
import { ImageViewModule } from './image-view/image-view.module';

import { FlickerService } from './core/flicker.service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  let router;
  let location;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        HttpModule
      ],
      providers: [FlickerService]
    }).compileComponents();
  }));
   beforeEach(() => {
     router = TestBed.get(Router);
     location = TestBed.get(Location);
     fixture = TestBed.createComponent(AppComponent);
  });
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Fashion Cloud');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Fashion Cloud');
  }));
  it('should register a url called search', fakeAsync(() => {
   router.initialNavigation();
    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {search: FlickerSearchModule};
    router.resetConfig([
      {path: 'search', loadChildren: 'search'},
    ]);

    router.navigateByUrl('/search');
    tick();
    expect(location.path()).toBe('/search');
  }));
  it('should register a url called view', fakeAsync(() => {
    router.initialNavigation();
    const loader = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {search: ImageViewModule};

    router.resetConfig([
      {path: 'view', loadChildren: 'search'},
    ]);

    router.navigateByUrl('/view');
    tick();
    expect(location.path()).toBe('/view');
  }));
});
