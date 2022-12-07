import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';//came automatically during creation
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUserComponent } from './components/dashboard/display-user/display-user.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from 'src/routes';
import { DynamiclistComponent } from './components/dynamic-page/dynamiclist/dynamiclist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    DisplayUserComponent,
    ErrorComponentComponent,
    DynamiclistComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
