import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {ServerData} from '../model/server-data';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**
   * Note: Property & event binding on 'HTML elements' (native properties & events),
   * 'directives' (custom properties & events) and 'components' (custom properties & events)
   */
  // // properties for two-way-data-binding
  // newServerName = '';
  // newServerContent = '';
  // custom event for passing data to parent component
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<ServerData>();

  // @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // // two-way-binding
  // onAddServer() {
  //   // emitting the event ==> start communication between components
  //   this.serverCreated.emit(this.createServerDataFromInput(this.newServerName, this.newServerContent));
  // }
  //
  // onAddBlueprint() {
  //   this.blueprintCreated.emit(this.createServerDataFromInput(this.newServerName, this.newServerContent));
  // }

  private createServerDataFromInput(serverName: string, serverContent: string): ServerData{
    return {
      serverName: serverName,
      serverContent: serverContent
    };
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit(this.createServerDataFromInput(nameInput.value, contentInput.value));
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit(this.createServerDataFromInput(nameInput.value, contentInput.value));
  }

}
