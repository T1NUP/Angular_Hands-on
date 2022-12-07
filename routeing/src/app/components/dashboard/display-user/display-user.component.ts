import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  user: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.user = this.route.snapshot.params['user'];
    this.route.params.subscribe((perams: Params) => {
      this.user = perams['user'];
    });
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['user'];
    this.route.params.subscribe((perams: Params) => {
      this.user = perams['user'];
    }); // observables
  }

}
