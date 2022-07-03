import { Component, OnInit } from '@angular/core';
import { BulbIndex } from '../bulb-index';
import { LOCOMOTIVEBULBS } from 'src/assets/data/locomotive-list';
import { TENDERSBULBS } from 'src/assets/data/tenders-list';
import { ACCESSORIESBULB } from 'src/assets/data/accessory-list';
import { OPERATINGCARS } from 'src/assets/data/operating-cars-list';
import { TRANSFORMERS } from 'src/assets/data/transformers-list';

@Component({
  selector: 'app-bulbindex',
  templateUrl: './bulbindex.component.html',
  styleUrls: ['./bulbindex.component.css']
})
export class BulbindexComponent implements OnInit {

  locomotives : BulbIndex[] = LOCOMOTIVEBULBS;
  tenders: BulbIndex[] = TENDERSBULBS;
  accessories: BulbIndex[] = ACCESSORIESBULB;
  operatingcars: BulbIndex[] = OPERATINGCARS;
  transformers: BulbIndex[] = TRANSFORMERS;

  constructor() { }

  ngOnInit(): void {
  }

}
