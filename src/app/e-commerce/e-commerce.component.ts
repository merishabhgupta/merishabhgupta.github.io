import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
  productList: Product[];
  sortBy: string = '-Sort by Price-';
  isGrid: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductData();
  }

  getProductData() {
    this.route.data.subscribe((response) => {
      this.productList = response.productData;
    }, error => {
      alert(error.message);
    })
  }

  sortProducts() {
    switch (this.sortBy) {
      case 'High to Low': this.productList.sort((a: Product, b: Product)=>{ return b.price - a.price});
                          break;
      case 'Low to High': this.productList.sort((a: Product, b: Product)=>{ return a.price - b.price});
                          break;

    }
  }

}
