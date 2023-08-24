
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpto5';
  count:number=30;
    toggle: boolean = true;
    style:object={'font-size':this.count+'px'};
    minus(){
      this.count=this.count-1;
      this.style={'font-size':this.count+'px'};
    }
    plus(){
      this.count=this.count+1;
      this.style={'font-size':this.count+'px'};
}
worklocation:String="";
default(){

this.worklocation="any"}
username:string="tguj";
fetchdata=["sha","pav","neer","aswi"];
}
