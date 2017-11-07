import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = 'David';

  handleChange(value: string) {
    this.name = value;
  }
}
