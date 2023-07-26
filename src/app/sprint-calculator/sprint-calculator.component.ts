import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css'],
})
export class SprintCalculatorComponent {
  maxPoints: number;
  selectedStories: { name: string; points: number }[] = [];
  allStories: { name: string; points: number }[] = [];

  constructor(private sharedDataService: SharedDataService) {
    this.maxPoints = 0;
    this.allStories = this.sharedDataService.getStories().slice();
  }

  autoSelectStories() {
    this.selectedStories = [];
    const stories = this.sharedDataService.getStories();
    const sortedStories = stories.slice().sort((a, b) => b.points - a.points);

    let currentSum = 0;
    for (const story of sortedStories) {
      if (currentSum + story.points <= this.maxPoints) {
        this.selectedStories.push(story);
        currentSum += story.points;
      }
    }
  }

  clearStories() {
    this.selectedStories = [];
    this.sharedDataService.setStories([]);
  }

  clearAutoSelectedStories() {
    this.selectedStories = this.allStories.slice();
  }
}
