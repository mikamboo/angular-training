import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'mpo-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {

  @Input()
  score: number;

  @Output()
  scoreChange = new EventEmitter<number>();

  /**
   * Add like
   */
  like() {
    this.score++;
    this.scoreChange.emit(this.score);
  }
}
