import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.searchForm.value);

  }


  countries = [
    {name: 'India'},
    {name: 'America'},
    {name: 'Canada'},
    {name: 'Spain'},
    {name: 'Newzeland'},
  ];

  regions = [
    {name: 'Delhi'},
    {name: 'Lucknow'},
    {name: 'Northeast'},
    {name: 'Southwest'},
    {name: 'Midwest'},
    
  ];
  
  searchForm = new FormGroup({
    csrNumber: new FormControl(),
    companyName: new FormControl(),
    country: new FormControl(),
    region: new FormControl(),
    poBox: new FormControl(),
    town: new FormControl()
  });
 
 
}
