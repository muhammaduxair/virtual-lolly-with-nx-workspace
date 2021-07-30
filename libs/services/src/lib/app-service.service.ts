import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ServiceLolliesINT {
  _id?: string;
  reciever: string;
  message: string;
  sender: string;
  colorTop: string;
  colorMiddle: string;
  colorBottom: string;
}

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  private createURL: string = 'http://localhost:3333/api/create';
  private getLollyURL: string = 'http://localhost:3333/api/lolly';

  createLolly(lolly: ServiceLolliesINT): Observable<ServiceLolliesINT> {
    return this.http.post<ServiceLolliesINT>(this.createURL, lolly, httpOption);
  }

  getLollyById(id: string): Observable<ServiceLolliesINT> {
    return this.http.get<ServiceLolliesINT>(
      `${this.getLollyURL}/${id}`,
      httpOption
    );
  }
}
