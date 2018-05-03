import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";

// We can create an internal interface for not repeating ourselves
interface Server {
  id: number;
  name: string;
  status: string;
}
// Inject the serverService to synchronously fetch data
@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serverService: ServersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
    // This Server will run every time we will load the route
    return this.serverService.getServer(+route.params['id']);
  }

}