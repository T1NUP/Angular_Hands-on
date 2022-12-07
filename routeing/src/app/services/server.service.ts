import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  public listUpdateEvent= new EventEmitter<string[]>();
  public mapUpdateEvent= new EventEmitter<Record<string,object[]>>();
  public list: string[];
  public map: Record<string,object[]>;

  constructor(private http: HttpClient) { 
    this.list=[];
    this.map={};
    this.http.get<string[]>("http://localhost:8080/list").subscribe((data)=>{
      console.log("Hello 1", data);
      this.list= data;
      this.listUpdateEvent.emit(this.list);
    });
    console.log("Hello 2", this.list);
    this.http.get<Record<string,object[]>>("http://localhost:8080/list/map").subscribe((data)=>{
      console.log("Hello 3", data);
      this.map= data;
      this.mapUpdateEvent.emit(this.map);
    });
  }

  listAdd=(value: string)=>{
    this.http.post<string[]>("http://localhost:8080/list", value).subscribe((data)=>{
      this.list= data;
      this.listUpdateEvent.emit(this.list);
    });

    this.http.get<Record<string,object[]>>("http://localhost:8080/list/map").subscribe((data)=>{
      console.log("Hello 3", data);
      this.map= data;
      this.mapUpdateEvent.emit(this.map);
    });

  };



}
