# Push Notifications In Angular With OneSignal

This project demonstrates the usage of OneSignal NPM package to add push notification to your Angular project.

## Create a FREE OneSignal Account
Sign up for a free [OneSignal](https://onesignal.com/) account

## OneSignal NPM Package
NPM Packge: [OneSignal-Ngx](https://www.npmjs.com/package/onesignal-ngx)

## Install OneSignal NPM Package
```javascript
npm i onesignal-ngx
```
## Use OneSignal NPM Package
```javascript
import { OneSignalService } from 'onesignal-ngx';
```

## Use the OneSignal NPM Package
Initialize OneSignal with your OneSignal AppId:

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example-app';

  constructor(private oneSignal: OneSignalService) {
    this.oneSignal.init({
      appId: "8e7fe838-fbcd-4152-980d-32565a2dcf03",
    });
  }
}
```
## Add Tags To Segment Users
If you want to learn more about OneSignal data tags to segment your users, visti our [official docs](https://documentation.onesignal.com/docs/add-user-data-tags).

```javascript
this.os.sendTag("tech", tag).then(() => {
  console.log("Sent tag: " + tag);
});
```
