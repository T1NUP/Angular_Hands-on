import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { myTestAnimation } from './routes/test-router-animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    myTestAnimation
  ]
})
export class AppComponent {
  title = 'list-app';

  constructor(private router : Router, private contexts: ChildrenOutletContexts){}

  goTo=(path: string)=>{
    this.router.navigate([path]);
  };

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
