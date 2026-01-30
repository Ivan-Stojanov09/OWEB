import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DRIVERS, findDriverById } from '../db-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MotoGP Drivers';
  drivers = DRIVERS;
  selectedId = 1;

  get selectedDriver() {
    return findDriverById(this.selectedId);
  }

  selectDriver(id: number) {
    this.selectedId = id;
  }
}
