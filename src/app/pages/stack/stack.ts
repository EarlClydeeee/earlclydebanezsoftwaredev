import { Component } from '@angular/core';
import { STACK_GROUPS } from './stack.data';

@Component({
  selector: 'app-stack',
  imports: [],
  templateUrl: './stack.html',
})
export class Stack {
  protected readonly groups = STACK_GROUPS;
}
