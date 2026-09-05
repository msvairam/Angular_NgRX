import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter.component';
import { CounterValueComponent } from './counter-value.component';
import { CounterButtonComponent } from './counter-button.component';

const routes: Routes = [
  { path: '', component: CounterComponent }
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterValueComponent,
    CounterButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class CounterModule { }
