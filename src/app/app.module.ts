import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { MaterialModule } from './/material.module';
import { CoreModule } from './core/core.module';
import { RoutingModule } from './/routing.module';
import { environment } from '../environments/environment';
import { PostModule } from './post/post.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    RoutingModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
