import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product.model";
import { ProductsDataService } from "../products.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  public products: Product[];
  constructor(private productdataService:ProductsDataService , private router:Router) { }

  getMensPants(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
               .then(()=>this.router.navigate(["/productdisplay/Men/Pants"]));

  }

  getMensShirts(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
    .then(()=>this.router.navigate(["/productdisplay/Men/Shirts"]));
  }

  getWomensDress(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
               .then(()=>this.router.navigate(["/productdisplay/Women/Dress"]));
  }
  getWomensTops(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
               .then(()=>this.router.navigate(["/productdisplay/Women/Tops"]));
  }



  getBoysShirt(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
               .then(()=>this.router.navigate(["/productdisplay/Boys/Shirt"]));
  }
  getBoysPants(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
               .then(()=>this.router.navigate(["/productdisplay/Boys/Pants"]));
  }


  getGirlsDress(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
               .then(()=>this.router.navigate(["/productdisplay/Girls/Dress"]));
  }
  getGirlsTops(){
    this.router.navigateByUrl('/productdisplay', {skipLocationChange: true})
               .then(()=>this.router.navigate(["/productdisplay/Girls/Tops"]));
  }



  ngOnInit() {
   
    }
  }

