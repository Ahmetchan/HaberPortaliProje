import { StServisService } from './../../services/stServis.service';
import { Dosya } from './../../models/dosya';
import { Kayit } from './../../models/kayit';
import { Sonuc } from './../../models/sonuc';
import { DataService } from './../../services/data.services';
import { Icerik } from './../../models/icerik';
import { Kategori } from './../../models/kategori';
import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kategoriler: Kategori[] = [];
  icerikler: Icerik[] = [];
  katSonuc: Sonuc = new Sonuc();
  icerikSonuc: Sonuc = new Sonuc();
  dosyalar: Dosya[];
  files: FileList;
  constructor(
    public servis: DataService,
  ) { }

  ngOnInit(): void {
    this.KategoriListeGetir();
    this.IcerikListeGetir();

  }
  
  
  

  KategoriListeGetir (){
    this.kategoriler=this.servis.KategoriListele();
  }
  IcerikListeGetir() {
    this.icerikler=this.servis.IcerikListele();
  }

  KategoriKaydet(k:string) {
    var yeni:Kategori= new Kategori();
    yeni.katId=Math.floor(Math.random()* 100);
    yeni.katAdi= k;
    this.katSonuc = this.servis.KategoriEkle(yeni);
  }

  IcerikKaydet(ad:string, yazi:string, katid: any) {
    
    if (ad == "" || ad == null || yazi == null || katid == null){
      this.icerikSonuc.islem = false;
      this.icerikSonuc.mesaj = "Tüm Alanları Doldurunuz!";
      return false;
    }
   
   
   
    var yeni:Icerik = new Icerik();
    var kat:Kategori=this.servis.KategoriById(katid);
    yeni.icerikId = Math.floor(Math.random() * 100);
    yeni.icerikAdi = ad;
    yeni.icerikyazi = yazi;
    yeni.icerikKatId = katid;
    yeni.icerikKatAdi = kat.katAdi;
    
    this.icerikSonuc= this.servis.IcerikEkle(yeni);

    return Sonuc;

  }


  


}