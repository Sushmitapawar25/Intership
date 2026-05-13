import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Button functions

  count:number = 0;

  // handleIncrement(){
  //   this.count = this.count + 1;
  // }

  // handleDecrement(){
  //   this.count = this.count - 1;
  // }

  // handleReset(){
  //   this.count = 0;
  // }

   handleCounter(val:string){
    if(val=='minus'){
      this.count = this.count - 1;
    }else if(val =='plus'){
      this.count = this.count + 1;
    }else{
      this.count = 0;
    }
   }

  // Event function

  // handleEvent(event:Event){
  //     console.log("function called",event.type);
  //     // console.log("value", (event.target as HTMLInputElement).value);
  // }
}
