// import { AppModule } from './app/app.module';
import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MatListModule} from '@angular/material/list';
// import {TableSortingExample} from './app/table-sorting-example';

import { FilterPipe} from './filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    // MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule
  ],
  entryComponents: [AppModule],
  declarations: [AppModule,FilterPipe],
  bootstrap: [AppModule],
  providers: []
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
