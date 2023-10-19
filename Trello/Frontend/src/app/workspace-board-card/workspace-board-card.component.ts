import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-board-card',
  templateUrl: './workspace-board-card.component.html',
  styleUrls: ['./workspace-board-card.component.css']
})
export class WorkspaceBoardCardComponent {
  
  @Input() title: string;
  @Input() className: string;

  constructor(){}

}
