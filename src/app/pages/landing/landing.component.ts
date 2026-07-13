import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANDING_OVERVIEWS } from './landing-overviews.data';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  protected readonly overviews = LANDING_OVERVIEWS;
}
