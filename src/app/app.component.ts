import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  writtenText = '';
  
  onInput(text: any){
    //console.log(text.target.value);
    this.writtenText = text.target.value;
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter? 'correct' : 'incorrect';
  }
}
