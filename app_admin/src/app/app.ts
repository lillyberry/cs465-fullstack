import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TripListing} from './trip-listing/trip-listing';
import { EditTripComponent } from './edit-trip/edit-trip';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListing, CommonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin!');
}
