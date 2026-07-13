import { Component } from '@angular/core';
import { EDUCATION } from './education.data';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly education = EDUCATION;
}
