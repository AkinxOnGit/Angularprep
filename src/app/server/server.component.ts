import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: [`
    .online {
      color: rgba(142, 14, 87, 0.79);
    }
  `]
})
export class ServerComponent implements OnInit {
   serverName = "Julians Web Server";
   serverStatus = "online";

   getServerStatus() {
     return this.serverStatus
   }

  constructor() {
     this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {

  }

  getColor(){
     return this.serverStatus === 'online' ? 'green' : 'red'
  }

}
