import { DataService } from './../../services/data.services';
import { Kategori } from './../../models/kategori';
import { Icerik } from './../../models/icerik';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-haberler',
  templateUrl: './haberler.component.html',
  styleUrls: ['./haberler.component.css']
})
export class HaberlerComponent implements OnInit {
haberler: Icerik[] = [];
kategoriler:Kategori[] = [];
  constructor(
    public servis:DataService,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.IcerikListele();
    this.KategoriListele();
  }


  IcerikListele() {
    this.haberler = this.servis.IcerikListele();
  }
  KategoriListele() {
    this.kategoriler = this.servis.KategoriListele();
  }
}
