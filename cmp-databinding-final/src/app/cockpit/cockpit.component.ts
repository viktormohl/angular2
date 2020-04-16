import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {ServerData} from '../model/server-data';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**
   * 3 kind of data binding: Property & event binding on 'HTML elements' (native properties & events),
   * 'directives' (custom properties & events) and 'components' (custom properties & events)
   */
    // custom event for passing data to parent component
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<ServerData>();

  // // properties for two-way-data-binding
  // newServerName = '';
  // newServerContent = '';

  // @Angular9+ add { static: true }
  // The following selectors are supported.
  // * Any class with the `@Component` or `@Directive` decorator
  // * A template reference variable as a string (e.g. query `<my-component #cmp></my-component>` with `@ViewChild('cmp')`)
  // NOT DIRECTLY CHANGE HTML-Element via:  this.serverNameInput.nativeElement.value = 'newValue'
  // use string interpolation oder property binding instead
  @ViewChild('serverNameInput', {static: true}) serverNameInput: ElementRef;
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {
  }

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

  private createServerDataFromInput(serverName: string, serverContent: string): ServerData {
    return {
      serverName: serverName,
      serverContent: serverContent
    };
  }

  // // local preferences
  // onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
  //   this.serverCreated.emit(this.createServerDataFromInput(nameInput.value, contentInput.value));
  // }
  //
  // onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
  //   this.blueprintCreated.emit(this.createServerDataFromInput(nameInput.value, contentInput.value));
  // }


  // local preferences & @ViewChild
  onAddServer() {
    this.serverCreated.emit(this.createServerDataFromInput(
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit(this.createServerDataFromInput(
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value));
  }

}
