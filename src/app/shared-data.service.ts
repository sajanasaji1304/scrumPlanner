import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private stories: { name: string; points: number }[] = [];
  private storiesSubject = new Subject<{ name: string; points: number }[]>();

  constructor() {}

  setStories(stories: { name: string; points: number }[]) {
    this.stories = stories;
    this.notifySubscribers();
  }

  getStories(): { name: string; points: number }[] {
    return this.stories;
  }

  clearStories() {
    this.stories = [];
    this.notifySubscribers();
  }

  getAllStories(): { name: string; points: number }[] {
    return this.stories.slice();
  }
  getStoriesSubject() {
    return this.storiesSubject.asObservable();
  }

  private notifySubscribers() {
    this.storiesSubject.next(this.stories);
  }
}
