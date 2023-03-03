import { Component } from '@angular/core';
import { AccountService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  username = "";
  constructor(private accountService: AccountService) {
    this.accountService.getUser().subscribe(name => {
      this.username = name;
    });
  }
}
