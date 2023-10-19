import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HeaderComponent } from './header/header.component';
import { WorkspaceBoardCardComponent } from './workspace-board-card/workspace-board-card.component';
import { NewBoardModalComponent } from './new-board-modal/new-board-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoardService } from './board.service';
import { BoardListsComponent } from './board-lists/board-lists.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardListCardComponent } from './board-list-card/board-list-card.component';
import { BoardListCardCardComponent } from './board-list-card-card/board-list-card-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    HomePageComponent,
    WorkspaceComponent,
    HeaderComponent,
    WorkspaceBoardCardComponent,
    NewBoardModalComponent,
    BoardListsComponent,
    BoardListCardComponent,
    BoardListCardCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
