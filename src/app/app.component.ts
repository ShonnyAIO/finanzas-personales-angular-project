import { Component } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      const updatesAvailable = swUpdate.versionUpdates.pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map(evt => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion,
        })));
        console.log(updatesAvailable)
      /* this.swUpdate.available.subscribe(() => {
        this.globalService.updateAvailable(true);
      }); */
  }
  }
  title = 'komerzio-front';
}

