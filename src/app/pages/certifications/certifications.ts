import { Component } from '@angular/core';
import { CERTIFICATION_GROUPS } from './certifications.data';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  protected readonly groups = CERTIFICATION_GROUPS;
}
