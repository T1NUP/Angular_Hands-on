import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public lA: string[] = [];
  public lB: string[] = [];
  public lC: string[] = [];
  public i1: string = '';
  public i2: string = '';
  public i3: string = '';
  public lAll: string[] = [];
  public isLoading = false;

  constructor(private dataService: DataStoreService) {
    window.addEventListener('resize', this.getWidth);
    this.fetchData();
  }

  getWidth() {
    console.log('width changed', window.innerWidth);
    return window.innerWidth > 765;
  }

  fetchData = () => {
    this.isLoading = true;
    this.dataService.getListDataFrom().subscribe({
      next: (data) => {
        this.isLoading = false;
        console.log('data: ', data[0]);
        this.lA = data[0];
        this.lB = data[1];
        this.lC = data[2];
        this.lAll = [...data[0], ...data[1], ...data[2]];
      },
      error: (error) => {
        console.log('error: ', error);
        this.isLoading = false;
      },
    });
  };

  change1 = (value: string) => {
    this.i1= value;
    // console.log("I1: ", value);
  };

  change2 = (value: string) => {
    this.i2= value;
    // console.log("I2: ", value);
  };

  change3 = (value: string) => {
    this.i3= value;
    // console.log("I3: ", value);
  };

  postData = () => {
    this.dataService.postListDataTo(this.i1,"A").subscribe({next: (data)=> console.log(data)});
    this.dataService.postListDataTo(this.i2,"B").subscribe({next: (data)=> console.log(data)});
    this.dataService.postListDataTo(this.i3,"C").subscribe({next: (data)=> console.log(data)});
  };

  ngOnInit(): void {}
}
