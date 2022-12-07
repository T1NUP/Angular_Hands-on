import { Component, Input, OnInit } from '@angular/core';
import { ListItemsService } from 'src/app/services/store/list-items.service';

@Component({
  selector: 'app-list-item-g',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponentStore implements OnInit {

  @Input('k') item: {name: string};
  @Input('i') index: number;
  editBox: boolean;

  constructor(private ListDataServices: ListItemsService) {
    this.item={name: ''};
    this.index=0;
    this.editBox= false;
  }

  delete=(selected: object)=>{
    // console.log("del: ", this.item,">>> ",this.index," button", selected);
    this.ListDataServices.deleteData(this.index);
  }

  editOn=()=> this.editBox=!this.editBox;

  onEnter=(value: string)=>{
    this.ListDataServices.changeListData({name: value},this.index);
    this.editBox= false;
  }

  ngOnInit(): void {
  }

}
