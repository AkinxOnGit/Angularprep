import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server has yet been added"
  serverName = ""
  username = ""
  serverCreated = false
  details = false
  secretPassword = "My secret Password"
  log = [0]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was successfully added!"
    this.serverCreated = true
  }

  showDetails(){
    this.details = !this.details
    this.log.push(this.log.length + 1)
  }

  onUpdateName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value
    console.log(event)
  }


}
