import { Component } from '@angular/core';
import {ServerData} from './model/server-data';
import {ServerElementData} from './model/server-element.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dummyServerElement: ServerElementData = {type: 'server', name: 'Testserver', content: 'Just a test!'};
  serverElements: ServerElementData[] = [this.dummyServerElement];

  onServerAdded(data: ServerData) {
    this.addToServerElements('server', data);
  }

  onBlueprintAdded(data: ServerData) {
    this.addToServerElements('blueprint', data);
  }

  private addToServerElements(type: string, serverData: ServerData){
    this.serverElements.push({
      type: type,
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
