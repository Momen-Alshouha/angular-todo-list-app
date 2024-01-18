import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class MockDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'user1', email: 'user1@example.com', password: '123' },
      { id: 2, username: 'user2', email: 'user2@example.com', password: '123' },
    ];

    return { users };
  }
}
