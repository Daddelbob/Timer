import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

import { GoogleAnalyticsService } from './analytics/google-analytics.service';
// https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
// npm install angularfire2 firebase --save
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent, StartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CustomMaterialModule,
    FormsModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
