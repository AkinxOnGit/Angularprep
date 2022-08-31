import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
   serverName = "Julians Web Server";
   serverStatus = "online";

   getServerStatus() {
     return this.serverStatus
   }

  constructor() { }

  ngOnInit(): void {

  }

}
