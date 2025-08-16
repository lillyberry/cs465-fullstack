import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';

import { TripCardComponent } from '../trip-card/trip-card';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trips';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true, 
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'], 
  providers: [TripDataService]
})
export class TripListing implements OnInit {

  trips!: Trip[];
  message: string = '';

  constructor(
    private TripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ){
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.TripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if(value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  // Delegates logged-in check to AuthenticationService
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
