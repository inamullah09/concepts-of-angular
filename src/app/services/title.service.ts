import { Injectable } from '@angular/core';
import { Concepts } from '../models/concepts.model';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public concepts: Array<Concepts> = [
    {title: 'NgFor', path: 'ngfor'},
    {title: 'NgIf', path: 'ngif'},
    {title: 'NgModel', path: 'ngmodel'},
    {title: 'Inputs', path: 'input'}
  ];
}
