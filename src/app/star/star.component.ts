import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  // from parent to child
  @Input() rating = 4.5;
  // 1-from child to parent
  @Output() starCicked = new EventEmitter<number>();
  width = 90;
  constructor() { }

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

  // 2-from child to parent
  onClick(): void {
    this.starCicked.emit(this.rating);
  }

}
