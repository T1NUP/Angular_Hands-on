import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  constructor(private http: HttpClient) {}

  getListDataFrom = () => this.http.get<string[][]>(`http://localhost:8080/list/v2`);


  postListDataTo=(item: string, bucket: string)=>{
    let link= `http://localhost:8080/list/v2/${bucket}`;
    return this.http.post<string[][]>(link,item);
  }
}
