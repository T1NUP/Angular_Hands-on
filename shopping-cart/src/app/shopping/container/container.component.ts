import { Component, OnInit } from '@angular/core';
import { ListItemsService } from 'src/app/services/store/list-items.service';
import { bodyPanel } from './layout-config/body';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  public layout: any;
  // public listInput: string;
  public list: { name: string }[];
  public globalStoreDataList: { name: string }[];

  constructor(private ListDataService: ListItemsService) {
    this.layout = bodyPanel;
    // this.listInput = '';
    this.list = [];
    this.globalStoreDataList= ListDataService.list;
    this.ListDataService.changeEvent.subscribe((flist: {name: string}[])=>{
        this.globalStoreDataList= flist;
    })
    console.log("GLOcons:", this.list);
  }

  ngOnInit(): void {
    console.log('SC: ', bodyPanel);
  }

  // onTextInput(event: any): void {
  //   this.listInput = event.target.value;
  //   // console.log("inp: ", event);
  // }

  // getvalue(j: { name: string }): string {
  //   return j?.name;
  // }

  onAddSubmit(value: { name: string }): void {
    console.log('inp: ', value);
    this.list = [...this.list, value];
  }

  // onAddSubmit(value: any): void {
  //   console.log("inp: ", event);
  // }

  onDel(index: number): void {
    console.log('DEL: ', index);
    this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
  }
}
