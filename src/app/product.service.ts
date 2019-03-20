import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  addProductsinService(obj) {
    return this.http.post('http://localhost:3000/api/addProducts', obj)
  }
  getAllItems(){
    return this.http.get('http://localhost:3000/api/getAllItems')
  }
}
