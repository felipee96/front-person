import { Injectable } from '@angular/core';
import {url as urlFront} from "../config/connection";
import {PersonModel} from "../model/personModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  urlPerson = `${urlFront}/person`

  constructor(private http: HttpClient) {
  }

  public listPerson(): Observable<PersonModel[]> {
    console.log(this.urlPerson)
    return this.http.get<PersonModel[]>(this.urlPerson);
  }

  public savePerson(personM: PersonModel): Observable<PersonModel> {
    return this.http.post<PersonModel>(this.urlPerson, personM);
  }

  public deletePerson(idUser: number | string | undefined): Observable<any> {
    return this.http.delete(`${this.urlPerson}/${idUser}`);
  }

}
