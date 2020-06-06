import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    serverId: number = 101;
    serverStatus: string = 'offline';
    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created';
    serverName: string = 'Root Server';

    getServerStatus():string{
        return this.serverStatus;
    }

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },
        5000);
    }

    onCreateServer():void{
        this.serverCreationStatus = 'Server was created';
    }

    onUpdateServerName(event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}