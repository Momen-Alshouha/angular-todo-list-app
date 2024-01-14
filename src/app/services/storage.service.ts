import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    const storedData = localStorage.getItem(key);

    if (storedData !== null) {
      return JSON.parse(storedData);
    } else {
      return null;
    }
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
}
