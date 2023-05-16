import { Component } from '@angular/core';
import { Concepts } from 'src/app/models/concepts.model';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public concepts: Array<Concepts> = [];

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.concepts = this.titleService.concepts;
  }
}
