import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    const storedData = localStorage.getItem(key);
  
    try {
      return storedData !== null ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error(`Error parsing data for key ${key}:`, error);
      return null;
    }
  }
  

  setData<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  
}
