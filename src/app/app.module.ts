import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from "@angular/http";

import {AppComponent} from './app.component';
import {EcommerceComponent} from './ecommerce/ecommerce.component';
import {ProductsComponent} from './ecommerce/products/products.component';

import {OrdersComponent} from './ecommerce/orders/orders.component';
import {EcommerceService} from './ecommerce/services/EcommerceService';
import { HomeComponent } from './ecommerce/home/home.component';

import { RegisterComponent } from './register/register.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ProductDisplayComponentComponent } from './product-display-component/product-display-component.component';
import { ProductService } from './product-display-component/productService';
import { RouterOutlet, ActivatedRoute} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderConfirmationComponent } from "./order-confirmation/order-confirmation.component";



import { DeliveryOptionsDataService } from "./delivery-options.service";
import { ProductsDataService } from "./products.service";
import { ShoppingCartService } from "./shopping-cart.service";
import { LocalStorageServie, StorageService } from "./storage.service";
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";
import { LoginComponent } from './login/login.component';



@NgModule({
    declarations: [
        AppComponent,
        EcommerceComponent,
        ProductsComponent,
      
        OrdersComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponentComponent,
        HeaderComponentComponent,
        FooterComponentComponent,
        ProductDisplayComponentComponent,
        ProductDescriptionPageComponent,
        ShoppingCartComponent,
      
        CheckoutComponent,
        OrderConfirmationComponent
       
        
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        
    ],
    providers: [EcommerceService,ProductService,ProductsDataService,
        DeliveryOptionsDataService,
        PopulatedCartRouteGuard,
     
        LocalStorageServie,
        { provide: StorageService, useClass: LocalStorageServie },
        {
          deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
          provide: ShoppingCartService,
          useClass: ShoppingCartService
        }
      ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
