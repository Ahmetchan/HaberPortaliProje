import { Icerik } from './../models/icerik';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kayit } from '../models/kayit';
import { Sonuc } from '../models/sonuc';
import { Kategori } from '../models/kategori';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = "http://localhost:34761/";
  constructor(
    public http: HttpClient
  ) { }


  /* Öğrenci API  */

  KategoriListe() {
    return this.http.get<Kategori[]>(this.apiUrl + "/api/kategoriliste");
  }
  KategoriById(katId: string) {
    return this.http.get<Kategori>(this.apiUrl + "/api/kategoribyid/" + katId);
  }
  KategoriEkle(kat: Kategori) {
    return this.http.post<Sonuc>(this.apiUrl + "/api/kategoriekle/", kat);
  }
  Kategoriduzenle(kat: Kategori) {
    return this.http.put<Sonuc>(this.apiUrl + "/api/kategoriduzenle/", kat);
  }
  KategoriSil(katId: string) {
    return this.http.delete<Sonuc>(this.apiUrl + "/api/kategorisil/" + katId);
  }

  /* Ders API  */
  HaberListe() {
    return this.http.get<Icerik[]>(this.apiUrl + "/api/icerikliste");
  }
  IcerikById(icerikId: string) {
    return this.http.get<Icerik>(this.apiUrl + "/api/icerikbyid/" + icerikId);
  }
  IcerikEkle(icerik: Icerik) {
    return this.http.post<Sonuc>(this.apiUrl + "/api/icerikekle/", icerik);
  }
  IcerikDuzenle(icerik: Icerik) {
    return this.http.put<Sonuc>(this.apiUrl + "/api/icerikduzenle/", icerik);
  }
  DersSil(icerikId: string) {
    return this.http.delete<Sonuc>(this.apiUrl + "/api/iceriksil/" + icerikId);
  }
}
