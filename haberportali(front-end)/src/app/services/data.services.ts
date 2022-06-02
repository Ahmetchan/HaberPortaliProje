import { Kayit } from './../models/kayit';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Icerik } from './../models/icerik';
import { Kategoriler, Icerikler } from './data';
import { Kategori } from './../models/kategori';
import { Injectable } from "@angular/core";
import { Sonuc } from '../models/sonuc';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Dosya } from '../models/dosya';
import { finalize } from 'rxjs';
import { NgModule } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class DataService {
    public apiUrl ="http://localhost:3000"
    constructor (
        public http:HttpClient,
    ) {};


   

    KayitListele(){
        return this.http.get(this.apiUrl+"kayitlar");
    }
    KayitById(id:number){
        return this.http.get(this.apiUrl+"kayitlar"+ id);
    }
    KayitEkle(kayit:Kayit){
        return this.http.post(this.apiUrl+"kayitlar",kayit);
    }
    KayitDuzenle(kayit: Kayit){
        return this.http.put(this.apiUrl+"kayitlar"+kayit.id, kayit);
    }
    KayitSil(id:number){
        return this.http.delete(this.apiUrl+"kayitlar"+ id);
    }
    /* Kategori servis Başlangıcı */
    KategoriListele(){
        return Kategoriler;
    }

    KategoriById(id:number) {
        var filtre=Kategoriler.filter(s=> s.katId == id);
        return filtre[0];
    }
    
    KategoriEkle(kat:Kategori) {
        var sonuc: Sonuc= new Sonuc();
        var filtre=Kategoriler.filter(s=>s.katAdi==kat.katAdi)
        if (filtre.length > 0) {
            sonuc.islem=false;
            sonuc.mesaj="girilen Kategori kayıtlıdır!"
        }
        else {
            Kategoriler.push(kat);
            sonuc.islem=true;
            sonuc.mesaj = "Kategori Eklendi...";
        }
        return sonuc;
    }
    
    KategoriDuzenle(kat:Kategori) {
        var index=Kategoriler.indexOf(kat);
        Kategoriler[index].katAdi = kat.katAdi;
        
        var sonuc: Sonuc= new Sonuc();
        sonuc.islem=true;
        sonuc.mesaj = "Kategori Güncellendi..."; 
        return sonuc;  

    }
    KategoriSil(kat:Kategori) {
        var sonuc: Sonuc= new Sonuc();
        var icerikler=Icerikler.filter(s=> s.icerikKatId==kat.katId);
        if (icerikler.length >0) {
            sonuc.islem = false;
            sonuc.mesaj = "İçerik bulunan kategori silinemez!";
        }
        else {
            var index=Kategoriler.indexOf(kat);
            sonuc.islem = true;
            sonuc.mesaj = "Kategori Silindi...";
        }
        return sonuc;

    }


    /* Kategori servis Bitişi */

    /* İçerik servisi */

    IcerikListele() {
        return Icerikler
    }

    IcerikById (id:number) {
        var filtre=Icerikler.filter(s=>s.icerikId==id);
        return filtre[0];
    }
    
    IcerikListeByKatId(katId:number) {
        var filtre=Icerikler.filter(s=>s.icerikKatId == katId);
        return filtre;
    }

    IcerikEkle(icerik:Icerik) {
    var sonuc: Sonuc = new Sonuc();
    var filtre=Icerikler.filter(s=>s.icerikAdi == icerik.icerikAdi);
    if (filtre.length > 0) {
        sonuc.islem = false;
        sonuc.mesaj = "Girilen Haber zaten var"
    }
    else {
        Icerikler.push(icerik);
        sonuc.islem = true;
        sonuc.mesaj = "Haber eklendi";
    }
    return sonuc;
    }

    IcerikDuzenle (icerik:Icerik) {
        var index=Icerikler.indexOf(icerik);
        Icerikler[index].icerikAdi = icerik.icerikAdi;
        Icerikler[index].icerikyazi = icerik.icerikyazi;
        Icerikler[index].icerikKatId = icerik.icerikKatId;

        var sonuc: Sonuc = new Sonuc();
        sonuc.islem = true;
        sonuc.mesaj = "İçerik Güncellendi";
        return sonuc;
    
    }

    IcerikSil(icerik:Icerik) {
        var index= Icerikler.indexOf(icerik);
        Icerikler.splice(index,1);
        var sonuc: Sonuc = new Sonuc();
        sonuc.islem = true;
        sonuc.mesaj = "İçerik Silindi";
        return sonuc;
    }

    /* Kayıt Servisi */
    


}