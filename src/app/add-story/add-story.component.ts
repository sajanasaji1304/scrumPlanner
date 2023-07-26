import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css'],
})
export class AddStoryComponent {
  storyName: string;
  storyPoints: number;
  stories: { name: string; points: number }[] = [];

  constructor(private sharedDataService: SharedDataService) {
    this.storyName = '';
    this.storyPoints = 0;
  }

  saveStory() {
    if (this.isStoryNameExists(this.storyName)) {
      alert('Story name already exists! Please enter a different name.');
      return;
    }
    const newStory = {
      name: this.storyName,
      points: this.storyPoints,
    };

    this.sharedDataService.getStories().push(newStory);
    console.log('Updated Stories:', this.stories);

    this.storyName = '';
    this.storyPoints = 0;
  }

  isStoryNameExists(storyName: string): boolean {
    const stories = this.sharedDataService.getStories();
    return stories.some(
      (story) => story.name.toLowerCase() === storyName.toLowerCase()
    );
  }
}
