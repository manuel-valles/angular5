import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
// Unlock Operators
import 'rxjs/Rx';

@Injectable()

export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angular-http-f8f26.firebaseio.com/data.json', 
    //   servers, 
    //   {headers: headers});
    return this.http.put('https://angular-http-f8f26.firebaseio.com/data.json', 
      servers, 
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://angular-http-f8f26.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for(const server of data){
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      );
  }
}