import { Component } from '@angular/core';
import { RECOMMENDATIONS } from './recommendations.data';

@Component({
  selector: 'app-recommendations',
  imports: [],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss',
})
export class Recommendations {
  protected readonly recommendations = RECOMMENDATIONS;
}
