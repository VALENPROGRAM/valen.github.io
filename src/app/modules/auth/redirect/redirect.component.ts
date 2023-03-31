import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent {
  constructor(private route: Router) {}

  public navigate(path: string) {
    const lower = path.toLowerCase();
    this.route.navigateByUrl(`/login/${lower}`);
  }
}
