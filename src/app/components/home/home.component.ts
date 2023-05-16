import { Component } from '@angular/core';
import { Concepts } from 'src/app/models/concepts.model';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public concepts: Array<Concepts> = [];

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.concepts = this.titleService.concepts;
  }

}
