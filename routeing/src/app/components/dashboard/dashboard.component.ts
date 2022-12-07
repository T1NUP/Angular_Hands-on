import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  list: string[] = [];
  user = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService, //data persisted in dashboard
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.params['user'];
    this.route.params.subscribe((perams: Params) => {
      this.user = perams['user'];
    }); // observables
    this.route.queryParams.subscribe((params: Params) => {
      console.log('Updated Query Parama : ', params);
    });
    this.route.fragment.subscribe((params) => {
      console.log(params);
    });

    this.list = this.dashboardService.getList();
  }

  onEnter(value: string) {
    // this.list.push(value);
    this.dashboardService.addToList(value);
  }

  onEnterForDashboard(value: string) {
    this.router.navigate(['dashboard', value], {
      queryParams: { p1: 'wp1', p2: 'wp2' },
      fragment: 'k',
    });
    // console.log('UO');
  }

  onEnterToServer(value: string) {
    this.http
      .post('http://localhost:8080/list', value)
      .subscribe((data) =>{ 
        console.log(data,'  >done');
    });
  }
}
