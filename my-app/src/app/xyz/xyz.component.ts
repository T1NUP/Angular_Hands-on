import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit,OnChanges {

  private mark1: string;
  public rocket: boolean;
  public inputs: string= '';
  public dynamic= "";

  constructor() {
    this.mark1= 'PKM';
    this.rocket= true;
  }

  ngOnInit(): void {
    // mark1= 'PKM';
    console.log("INIT");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHNGES", SimpleChange)
  }

  getPrivateData(): string{
    return this.mark1;
  }

  onButtonClicked(event: any){
    console.log("BUTTON: ", event);
    this.mark1= this.mark1==='PKM'? '***' : 'PKM';
    this.dynamic= ''
  }

  toggleRocket(){
    this.rocket= !this.rocket;
  }

  onTextInput(event: any){
    console.log("Rece:", event);
    this.inputs= event.target.value;
  }

  changeDyan(event: any){
    this.dynamic= event.target.value;
  }
}
