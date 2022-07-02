import { Component, OnInit } from '@angular/core';
import { Tool } from '../tools-and-materials';
import { TOOLS_AND_MATERIALS } from '../../assets/data/tools-and-materials-list';

@Component({
  selector: 'app-toolsandmaterials',
  templateUrl: './toolsandmaterials.component.html',
  styleUrls: ['./toolsandmaterials.component.css']
})
export class ToolsandmaterialsComponent implements OnInit {

  tools: Tool[] = TOOLS_AND_MATERIALS

  constructor() { }

  ngOnInit(): void {
  }

}
