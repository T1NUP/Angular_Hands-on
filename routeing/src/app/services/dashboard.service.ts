import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private list: string[];

  constructor() {
    this.list = [];
  }

  getList=()=> this.list;

  addToList = (item: string) => this.list.push(item);

  removeFromList=()=>{};
}
