import { Component, OnInit } from '@angular/core';
import { LocomotiveBulb } from '../locomotive-bulb';
import { LOCOMOTIVEBULBS } from 'src/assets/data/locomotive-list';

@Component({
  selector: 'app-bulbindex',
  templateUrl: './bulbindex.component.html',
  styleUrls: ['./bulbindex.component.css']
})
export class BulbindexComponent implements OnInit {

  locomotives : LocomotiveBulb[] = LOCOMOTIVEBULBS

  constructor() { }

  ngOnInit(): void {
  }

}
