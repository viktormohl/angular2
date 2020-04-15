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
  // properties for two-way-data-binding
  newServerName = '';
  newServerContent = '';
  // custom event for passing data to parent component
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<ServerData>();

  // @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // emitting the event ==> start communication between components
    this.serverCreated.emit(this.createServerDataFromInput());
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(this.createServerDataFromInput());
  }

  private createServerDataFromInput(): ServerData{
    return {
      serverName: this.newServerName,
      serverContent: this.newServerContent
    };
  }

  // onAddServer(nameInput: HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.serverContentInput.nativeElement.value
  //   });
  // }
  //
  // onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.serverContentInput.nativeElement.value
  //   });
  // }

}
