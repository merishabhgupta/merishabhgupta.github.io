import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ECommerceService {

    constructor(private http: HttpClient) {}

    fetchData() {
        return this.http.get('https://fakestoreapi.com/products');
    }
}