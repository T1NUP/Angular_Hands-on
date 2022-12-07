import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  list: string[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {}

  onEnter(value: string) {
    this.list.push(value);
    this.dashboardService.addToList(value);
  }

  onEnterForDashboard(value: string) {
    // this.router.navigate(['dashboard'],{relativeTo: this.route});// error
    this.router.navigate(['dashboard/' + value]);
  }
}
