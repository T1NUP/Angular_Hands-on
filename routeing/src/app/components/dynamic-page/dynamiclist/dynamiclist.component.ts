import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-dynamiclist',
  templateUrl: './dynamiclist.component.html',
  styleUrls: ['./dynamiclist.component.css']
})
export class DynamiclistComponent implements OnInit {

  public list: string[];
  public map: Record<string,string[]>={};
  constructor(private dynamicListService: ServerService) {
    this.list= dynamicListService.list;
    dynamicListService.listUpdateEvent.subscribe((data)=>{
      this.list= data;
    });
  }

  ngOnInit(): void {
    
  }

  onEnter(value: string){
    this.dynamicListService.listAdd(value);
  }

}
