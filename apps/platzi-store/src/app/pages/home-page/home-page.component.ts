import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchbarComponent } from '../../core/infra/ui/components/searchbar/searchbar.component';

@Component({
  selector: 'platzi-home-page',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    private readonly router: Router
  ) { }

  searchProductsByTitle(title: string) {
    if (!title?.length) {
      return;
    }
    this.router.navigate(['buscador'], {
      queryParams: {
        title
      }
    });
  }
}
