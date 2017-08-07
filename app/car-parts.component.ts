import {Component} from '@angular/core';
import {CarPart} from './car-parts';
import { CARPARTS } from './mock'

@Component({
selector: 'car-parts',
  templateUrl:'app/car-parts.component.html',
  styleUrls:['app/car-parts.component.css']
})
export class CarPartsComponent{
  public carParts: CarPart[];
ngOnInit(){
  this.carParts = CARPARTS;
}
upQuantity(carPart) {
    if(carPart.quantity < carPart.instock) carPart.quantity++;
  }
  downQuantity(carPart){
    if(carPart.quantity != 0) carPart.quantity--;
  }

  totalCarParts(){
   return this.carParts.reduce(function(prev, current) { return prev + current.instock; }, 0 ); 
  }
}