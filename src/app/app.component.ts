import { Component } from '@angular/core';
import { OneSignalService } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onesignal-angular';

  constructor(private oneSignal: OneSignalService) {
    this.oneSignal.init({
      appId: "8e7fe838-fbcd-4152-980d-32565a2dcf03",
    });
  }
}
