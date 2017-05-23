import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HistoryComponent } from './History.component';
import { CreateComponent } from './create.component';

const appRoutes: Routes = [
  { path: 'History-component', component: HistoryComponent },
  { path: 'Create-component', component: CreateComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    CreateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
