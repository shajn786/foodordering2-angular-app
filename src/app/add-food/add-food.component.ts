import { Component } from '@angular/core';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {

  name=""
  price=""
  description=""
  image=""

  add=()=>
  {
    let data:any={"name":this.name,"price":this.price,"description":this.description,"image":this.image}
    console.log(data)
  }

}
