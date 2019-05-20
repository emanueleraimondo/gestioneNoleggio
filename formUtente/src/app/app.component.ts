import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formUtente';
  visReg = false;
  visLog = false;

  onChange():boolean{
     if(this.visReg==false){
         this.visReg=true;
     }else{
         this.visReg=false;
     }
   return false;
  }

  onChange1():boolean{
     if(this.visLog==false){
         this.visLog=true;
     }else{
         this.visLog=false;
     }
   return false;
  }


}
