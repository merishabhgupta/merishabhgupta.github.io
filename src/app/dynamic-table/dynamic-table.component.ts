import { Component, OnInit } from '@angular/core';
import * as dataObj from '../../assets/data/data.json';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  headerList = [];
  dataList = [];
  initialData =[];
  constructor() { }

  ngOnInit() {
    this.initialData = JSON.parse(JSON.stringify(dataObj.data));
    this.dataList = JSON.parse(JSON.stringify(dataObj.data));   
    this.headerList = Object.keys(this.dataList[0]);    
  }

  resetData() {
    this.dataList = [...this.initialData];
  }

}
