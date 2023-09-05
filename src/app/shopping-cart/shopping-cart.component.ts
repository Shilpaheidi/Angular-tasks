import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  @Input()
  cart!: string[];

constructor(private app:AppComponent){}
  // addItem(){


  //   for (let index = 0; index < this.app.cartItems.length; index++) {
   
  //     this.cart =  this.cart.concat([this.app.cartItems[index]]);

  //     // this.cart.push(this.app.cartItems[index])
      
  //   }

  //   // this.app.cartItems.forEach(element => {

  //   //   if (this.app.cartItems.length > 0) {
  //   //     for (let index = 0; index < this.app.cartItems.length; index++) {
        
  //   //       this.cart.push(element[index]);
          
  //   //     }
  //   //   }
  //   // });
 
  // }
 
      
      // currentIndex: number = 0;
  // addItem() {
  //   if (this.currentIndex < this.app.cartItems.length) {
  //     this.cart.push(this.app.cartItems[this.currentIndex]);
  //     this.currentIndex++;
  //   }
  // }
  
  // removeItem(){
  //   this.cart.pop()
  // }
}
