import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CompletatiComponent } from './components/completati/completati.component';


const routes: Route[] = [
  {
    path: '',
    component: ToDoComponent

  },
  {
    path: 'completati',
    component: CompletatiComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToDoComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
