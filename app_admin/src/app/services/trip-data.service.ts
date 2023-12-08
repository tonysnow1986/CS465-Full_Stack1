import { Inject, Injectable } from '@angular/core';
import { User } from './../models/user';
import { BROWSER_STORAGE } from '../storage';
import { Authresponse } from '../models/authresponse';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../models/trip';
import { Headers, RequestOptions } from '@angular/http';




@Injectable()
export class TripDataService {


  constructor(private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage) {}

  private apiBaseUrl = 'http://localhost:3000/api/';
  // tslint:disable-next-line:member-ordering
  private tripsUrl = `${this.apiBaseUrl}trips/`;
  private tripUrl = `${this.apiBaseUrl}trip/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    const httpOptions = {  headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('travlr-token')}`
    })
  };
    return this.http
       .post(this.tripsUrl + formData.code , formData, httpOptions)
       .toPromise()
       .then(response => response.json() as Trip[])
       .catch(this.handleError);

}

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
       .get(this.tripUrl + tripCode)
       .toPromise()
       .then(response => response.json() as Trip)
       .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    const httpOption = {  headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('travlr-token')}`
    })
  };
    return this.http
       .get(`${this.apiBaseUrl}trips`)
       .toPromise()
       .then(response => response.json() as Trip[])
       .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    const httpOption = {  headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('travlr-token')}`
    })
  };
    return this.http
    .put(this.tripUrl + formData.code, formData)
    .toPromise()
    .then(response => response.json() as Trip)
    .catch(this.handleError);

  }

  public deleteTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#deleteTrip(tripCode');
    const httpOption = {  headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('travlr-token')}`
    })
  };
    return this.http
    .delete(this.tripUrl + tripCode)
    .toPromise()
    .then(response => response.json() as Trip)
    .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
        .post(url, user)
        .toPromise()
        .then((response) => response as unknown as Authresponse)
        .catch(this.handleError);
  }
}
