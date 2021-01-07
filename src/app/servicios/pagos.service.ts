import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClientModule) { }
}
