import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './counter/states/counter.reducer';
import { coursesReducer } from './courses/states/courses.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter : counterReducer, courses: coursesReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
