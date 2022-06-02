import { Sonuc } from './../../../models/sonuc';
import { Kategori } from './../../../models/kategori';
import { DataService } from './../../../services/data.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-katduzenlesil',
  templateUrl: './katduzenlesil.component.html',
  styleUrls: ['./katduzenlesil.component.css']
})
export class KatduzenlesilComponent implements OnInit {
  katId!: number;
  islem!: number;
  secKat:Kategori = new Kategori();
  sonuc: Sonuc = new Sonuc();
  constructor(
    public servis: DataService,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.katId=this.route.snapshot.params["id"];
    this.islem = this.route.snapshot.params["islem"];
    this.secKat =this.servis.KategoriById(this.katId);
  }

  Kaydet() {
    this.sonuc = this.servis.KategoriDuzenle(this.secKat);
  }
  
  Sil() {
    this.sonuc = this.servis.KategoriSil(this.secKat);
  }

}
