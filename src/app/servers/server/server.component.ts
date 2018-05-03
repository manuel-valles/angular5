import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
    // Fetching data with the Resolve Guard
    this.route.data
      .subscribe(
        (data: Data) => {
          //'server' name must match with the resolve property in the app-routing
          this.server = data['server'];
        }
      );    
    /*
    // + converts it to a number
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    // Reactive it
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
        }
      )
    */
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling:'preserve'});
  }

}
