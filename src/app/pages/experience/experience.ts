import { Component } from '@angular/core';
import { EXPERIENCE_COMPANIES } from './experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly companies = EXPERIENCE_COMPANIES;
}
