import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routeing';
  company="ABC";

  constructor(private router: Router, private route: ActivatedRoute){ }

  ngOnInit(){
    // this.router.navigate(["/home"]);// navigating programitacally

    console.log(this.route);
    // setTimeout(() => {
    //   this.router.navigate(['home'],{relativeTo: this.route});
    // }, 1000);
  }

}
