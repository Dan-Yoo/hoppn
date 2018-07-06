import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Place } from 'src/app/model/place';
import { PlaceDetail } from 'src/app/model/placedetail';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getPlaceDetail(data): Observable<PlaceDetail> {
    return this.http.get<PlaceDetail>('/google/place/detail', { params: data });
  }

  getPlacesNearby(data): Observable<Place[]> {
    return this.http.get<Place[]>('/google/places/nearby', { params: data });
  }

  getPlacePhoto(data): Observable<string> {
    return this.http.get('/google/place/photo', {params: data})
      .pipe(map((result: any) => {
        return 'https://lh4.googleusercontent.com/' + result.photo_url;
        // return result + "";
      }));
  }
}
