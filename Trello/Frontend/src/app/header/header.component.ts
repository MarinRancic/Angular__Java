import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}
  
  public onPageChangeHandler = (page: string, id:number | null = null):void => {
    this.router.navigate([page]);
  }

}
