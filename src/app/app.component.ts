import { Component } from '@angular/core';
import { ApiService } from './Service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-node-connection';
  
  constructor(public apiService: ApiService){
    
  }


 
  
}
