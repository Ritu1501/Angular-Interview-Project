import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  dataArray: any;
  tableHeader = [
    {colName: 'Sr'},
    {colName: 'Image'},
    {colName: 'Product Name'},
    {colName: 'Price'},
  ]
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getApiList();
  }


  async getApiList(){
    await this.apiService.getApiListData().subscribe((list:any) =>{
       if(list) {
         this.dataArray = list.items;
         console.log('list ------', this.dataArray);
       }
     })
   }
 

}
