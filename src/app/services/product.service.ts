import { Injectable, EventEmitter } from '@angular/core';

import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export  class ProductService {
  private products: Product[] = [
    new Product(1," 第一个商品",10,3,"这是 第一个商品的描述",["电子产品"]),
    new Product(2," 第二个商品",15,4,"这是 第一个商品的描述",["图书"]),
    new Product(3," 第三个商品",18,2,"这是 第一个商品的描述",["硬件设备"]),
    new Product(4," 第四个商品",19,4,"这是 第一个商品的描述",["电子产品","硬件设备"]),
    new Product(5," 第五个商品",5,3,"这是 第一个商品的描述",["电子产品"]),
    new Product(6," 第六个商品",25,5,"这是 第一个商品的描述",["图书"]),
  ];
  private  comments: Comment[] = [
    new Comment(1, 1, "2018-9-11 11:11:11", "zs", 3  , "good"),
    new Comment(2, 1, "2018-10-11 11:11:11", "ss", 4  , "好东西"),
    new Comment(3, 1, "2018-11-11 11:11:11", "ds", 5  , "好东西"),
    new Comment(4, 2, "2018-12-11 11:11:11", "bs", 4 , "好东西"),
    ];
  searchEvent: any;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id:number): Product {
    return this.products.find((product)=>product.id == id);
  }

  getCommentsForProductId(id: number):Comment[]  {
    return this.comments.filter((comment:Comment)=>comment.productId == id);
  }

   getAllCategroyProduct() {
    return [];
  }
}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ) {

  }
}

export  class Comment {
  constructor(
    public id: number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string,

  ) {

  }

}
