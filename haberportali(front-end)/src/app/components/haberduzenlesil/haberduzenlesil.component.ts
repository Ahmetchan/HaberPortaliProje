import { Sonuc } from './../../models/sonuc';
import { DataService } from './../../services/data.services';
import { Icerik } from './../../models/icerik';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-haberduzenlesil',
  templateUrl: './haberduzenlesil.component.html',
  styleUrls: ['./haberduzenlesil.component.css']
})
export class HaberduzenlesilComponent implements OnInit {
  icerikId!: number;
  islem!: number;
  secIcerik!: Icerik;
  sonuc: Sonuc = new Sonuc();
  constructor(
    public servis: DataService,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.icerikId = this.route.snapshot.params["id"];
    this.islem = this.route.snapshot.params["islem"];

    this.secIcerik = this.servis.IcerikById(this.icerikId);
  }

  Kaydet() {
    this.sonuc = this.servis.IcerikDuzenle(this.secIcerik);
  }

  Sil () {
    this.sonuc = this.servis.IcerikSil(this.secIcerik);
  }



}
