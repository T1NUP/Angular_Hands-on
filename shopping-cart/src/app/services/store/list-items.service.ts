import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  public changeEvent= new EventEmitter<{name: string}[]>();
  list: {name: string}[];

  constructor() { 
    this.list=[];
  }

  addData=(value: string)=>{
    this.list.push({name: value});
    console.log("DATAs: ", this.list);
  }

  deleteData=(value: number)=>{
    // this.list = [...this.list.slice(0, value), ...this.list.slice(value + 1)]; 
    //above will not work as copy is sent

    // this.list.map((item,i)=> {
    //   if(i===value) {
    //     // console.log(i," ",value);
    //     // return item;
    //     this.list.splice(i,1);
    //   }
    //   // else return null;
    // });
    //will work since change in orignal refrence

    this.list.splice(value,1);
    //will work since change in orignal refrence

    // this.emitChangeUsingCopy(value);
    //to make copy of data work use this

    // console.log("GLO ", this.list);
  }

  emitChangeUsingCopy=(value: number)=>{
    /**Copy of list dont trigger any changes, 
     * but by emitting the copy & subscribing 
     * to it in receveing component updates the changes */
    let x= this.list.filter((item,i)=> i!=value) ;
    this.list= x;
    this.changeEvent.emit(this.list);
    // console.log("GLO ", this.list);
  }

  changeListData=(value: {name: string}, index: number)=>{
    // console.log(value," ", index);
    this.list = [...this.list.slice(0, index),value,...this.list.slice(index + 1)]; 
    this.changeEvent.emit(this.list);
  }

}
