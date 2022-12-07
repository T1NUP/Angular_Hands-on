import { Component, OnInit } from '@angular/core';
import { ListItemsService } from 'src/app/services/store/list-items.service';

@Component({
  selector: 'app-list-input-g',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent implements OnInit {

  constructor(private ListDataService: ListItemsService) { }

  ngOnInit(): void {
  }

  addValue(value: string){
    // alert(value);
    this.ListDataService.addData(value);
  }
}
