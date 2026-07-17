import { Component } from '@angular/core';
import { STACK_GROUPS, stackLogoUrl, type StackItem } from './stack.data';

@Component({
  selector: 'app-stack',
  imports: [],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  protected readonly groups = STACK_GROUPS;
  protected readonly itemLogoUrl = stackLogoUrl;

  protected monogram(item: StackItem): string {
    return item.name
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }
}
