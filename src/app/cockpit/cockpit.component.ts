import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName: string;
  newServerContent: string;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.servers.push({
      type: 'server',
      name: this.newServerName, 
      content: this.newServerContent
    });
  }
  onAddBlueprint(){
    this.servers.push({
      type: 'blueprint',
      name: this.newServerName, 
      content: this.newServerContent
    });
  }
}
