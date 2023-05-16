import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
  public imageUrl: string = '';
  public quantity: number = 0;
  public images: Array<string> = [];

  public displayImages(): void {
    this.images = []
    if (this.imageUrl && this.quantity > 0) {
      for (let i = 0; i < this.quantity; i++) {
        this.images.push(this.imageUrl)
      }
    }
  }
  
}
