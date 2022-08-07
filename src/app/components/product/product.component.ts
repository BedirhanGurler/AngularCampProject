import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = { id: 1, productName: "Bardak", productDescription: "Cam Kahve Bardağı", quantity: 25, price: 45 }
  product1: any = { id: 2, productName: "Mouse", productDescription: "Logitech Gaming Mouse", quantity: 25, price: 45 }
  product2: any = { id: 3, productName: "Klavye", productDescription: "Monster", quantity: 25, price: 45 }

  products = [this.product, this.product1, this.product2]


  constructor() { }

  ngOnInit(): void {
  }

}
