import {Component, OnInit, ViewChild,ViewEncapsulation} from '@angular/core';
import { AjaxserviceService } from 'src/app/ajaxservice.service';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  index: number;
  capital: string;
  delete : string;
}

/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.css'],
  templateUrl: 'table-sorting-example.html',
  encapsulation: ViewEncapsulation.None,
})


export class TableSortingExample implements OnInit {

  constructor(private callingBridge: AjaxserviceService){

  }

  displayedColumns: string[] = ['index', 'name', 'capital', 'delete'];
  hidden : boolean = false;
  hiddenCapital : boolean = false;

  @ViewChild(MatSort) sort: MatSort;

  ELEMENT_DATA: PeriodicElement[] = [
];
ELEMENT_DATA_FILTER: PeriodicElement[] = [
];

dataSource = new MatTableDataSource(this.ELEMENT_DATA_FILTER);


  ngOnInit() {
    this.dataSource.sort = this.sort;
    //loading countries from API on load of page
    this.callingBridge.getCountries()
    .subscribe(response => {
      console.log(response);
      for(let i=0;i<response.length;i++){
        this.ELEMENT_DATA.push({index:i+1,name:response[i].name,capital:response[i].capital,delete:''});
      }
    });
  }

  //function to add new row
  addNew(){
    this.ELEMENT_DATA_FILTER.push({'index':this.ELEMENT_DATA_FILTER.length+1, 'name': '', 'capital': '','delete' : ''});
    this.dataSource.sort = this.sort;
  
  }

  //function to save data from new row
  saveRow(c,i){
    this.ELEMENT_DATA_FILTER[i] = {'index': i+1, 'name': c.name, 'capital': c.capital,'delete' : ''};
    this.dataSource.sort = this.sort;
    this.hidden = false;    
    this.hiddenCapital = false;    
  }

  //function to delete row
  deleteRow(i){
    this.ELEMENT_DATA_FILTER.splice(i, 1);
    this.dataSource.sort = this.sort;
  }
  
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */