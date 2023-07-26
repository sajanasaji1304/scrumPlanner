import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
})
export class StoryListComponent implements OnInit {
  stories: { name: string; points: number }[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.stories = this.sharedDataService.getStories();
    this.sharedDataService.getStoriesSubject().subscribe(() => {
      this.updateStories();
    });
  }

  updateStories() {
    this.stories = this.sharedDataService.getStories();
  }
}
