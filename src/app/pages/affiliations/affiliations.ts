import { Component } from '@angular/core';
import { AFFILIATIONS } from './affiliations.data';

@Component({
  selector: 'app-affiliations',
  imports: [],
  templateUrl: './affiliations.html',
})
export class Affiliations {
  protected readonly affiliations = AFFILIATIONS;
}
