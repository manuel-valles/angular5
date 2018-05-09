import { Component, OnInit } from '@angular/core';
// Import everything from the Firebase SDK with firebase as alias
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    // InitializaApp is a method that expect a JS Object as argument
    
    firebase.initializeApp({
      apiKey: "Your APIKey from WEBSETUP",
      authDomain: "Your AuthDomain from WEBSETUP"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
