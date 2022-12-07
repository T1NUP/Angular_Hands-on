import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './contents/home/home/home.component';
import { LandingComponent } from './contents/landing/landing/landing.component';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './InterceptorConfig';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
