import { Observable } from 'tns-core-modules/data/observable';
import { ProcessButton } from 'nativescript-process-button';

export class HelloWorldModel extends Observable {
  public message: string;
  private processButton: ProcessButton;

  constructor() {
    super();

    this.processButton = new ProcessButton();
    this.message = this.processButton.message;
  }
}
