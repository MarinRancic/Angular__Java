import { Component } from '@angular/core';

import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { WorkspaceBoardCardComponent } from '../workspace-board-card/workspace-board-card.component';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
  providers: [WorkspaceBoardCardComponent]
})
export class SidePanelComponent {
  faNewspaper = faNewspaper;
}
