import { Component } from '@angular/core';
import { OneSignalService } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onesignal-angular';

  constructor(private os: OneSignalService) {
    this.os.init({
      appId: "30a2434b-90b8-47bf-952e-cab24efef79b",
    });
  }

  onHandleTag(tag: any) {
    console.log('Tagging');
    this.os.sendTag("tech", tag).then(() => {
      console.log("Sent tag: " + tag);
    });
  }
}
