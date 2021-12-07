# Push Notifications In Angular With OneSignal

This project demonstrates the usage of OneSignal NPM package to add push notification to your Angular project.

## How-to guide
Read our [official how-to guide](https://onesignal.com/blog/how-to-integrate-push-notifications-in-angular/) to demonstrate the usage of push notification using the OneSignal npm package and Angular.

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
      appId: "YOUR-ONESIGNAL-APP-ID-HERE",
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
