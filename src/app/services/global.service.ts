import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  private isMobileResolution: boolean;

  urlApi() {
    return environment.urlAPI;
  }

  session() {
    return String(localStorage.getItem('session'))
  }

  logout() {
    return localStorage.clear();
  }

  getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
