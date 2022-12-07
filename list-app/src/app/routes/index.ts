import { Routes } from "@angular/router";
import { HomeComponent } from "../contents/home/home/home.component";
import { LandingComponent } from "../contents/landing/landing/landing.component";

export const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent, data:{animation: 'AboutPage'}},
    {path: 'land', component: LandingComponent, data:{animation: 'HomePage'}}
]