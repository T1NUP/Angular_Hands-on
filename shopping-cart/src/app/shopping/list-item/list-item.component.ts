import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Output() del= new EventEmitter<number>();
  @Input('k') item: {name: string};
  @Input('i') index: number;
  public isEditable: boolean;

  constructor() { 
    this.item= {name: ''};
    this.isEditable= false;
    this.index=0;
  }

  ngOnInit(): void {
    console.log("pp: ", this.item,"   ",this.index);
  }

  edit(){
    this.isEditable=true;
  }

  onEnter(value: string){
    console.log("ENTER: ", value);
    this.item= {name: value};
    this.isEditable=false;
  }

  delete(){
    this.del.emit(this.index);
  }

}
