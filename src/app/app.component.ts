import {Component, OnInit, ViewChild,ChangeDetectorRef,Pipe,ElementRef,Renderer, PipeTransform} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
  delete : string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'symbol', 'delete'];
  hidden : boolean = false;
  hiddenSymbol : boolean = false;

  @ViewChild(MatSort) sort: MatSort;

  ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', symbol: 'H' ,delete : ''},
  {position: 2, name: 'Helium',  symbol: 'He' ,delete : ''},
  {position: 3, name: 'Lithium',  symbol: 'Li',delete : ''},
  {position: 4, name: 'Beryllium',  symbol: 'Be',delete : ''},
  {position: 5, name: 'Boron',  symbol: 'B',delete : ''},
  {position: 6, name: 'Carbon', symbol: 'C',delete : ''},
  {position: 7, name: 'Nitrogen',  symbol: 'N',delete : ''},
  {position: 8, name: 'Oxygen',  symbol: 'O',delete : ''},
  {position: 9, name: 'Fluorine',symbol: 'F',delete : ''},
  {position: 10, name: 'Neon',  symbol: 'Ne',delete : ''},
];
ELEMENT_DATA_FILTER: PeriodicElement[] = [
];

dataSource = new MatTableDataSource(this.ELEMENT_DATA_FILTER);
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  addNew(){
    this.ELEMENT_DATA_FILTER.push({'position':           this.ELEMENT_DATA_FILTER.length+1, 'name': '', 'symbol': '','delete' : ''});
    this.dataSource.sort = this.sort;
  
  }

  saveRow(c,i){
    this.ELEMENT_DATA_FILTER[i] = {'position': i+1, 'name': c.name, 'symbol': c.symbol,'delete' : ''};
    this.dataSource.sort = this.sort;
    this.hidden = false;    
    this.hiddenSymbol = false;    
  }

  deleteRow(i){
    // delete this.ELEMENT_DATA_FILTER[i];
    this.ELEMENT_DATA_FILTER.splice(i, 1);
    this.dataSource.sort = this.sort;
  }
  
}
