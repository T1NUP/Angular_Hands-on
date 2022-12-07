import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listInput',
  templateUrl: './listInput.component.html',
  styleUrls: ['./listInput.component.css']
})
export class ShoppingComponent implements OnInit {
  @Output() public dataEmit= new EventEmitter<{name: string}>();
  public listInput: string='';

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(): void {
    if (this.listInput.length > 1)
    //   this.list = [...this.list, { name: this.listInput }];
    this.dataEmit.emit({name: this.listInput});
    this.listInput = '';
  }

  onTextInput(event: any): void {
    this.listInput = event.target.value;
    // console.log("inp: ", this.listInput);
  }

}
