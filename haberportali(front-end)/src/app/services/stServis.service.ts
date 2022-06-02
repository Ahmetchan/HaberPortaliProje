import { getStorage, provideStorage } from '@angular/fire/storage';
import { Inject, Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Dosya } from '../models/dosya';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StServisService {
basePath="/Dosyalar";
constructor(
  public storage: AngularFireStorage,
  public db: AngularFireDatabase,
) { }
  DosyaYukleStorage(dosya: Dosya) {
    var tarih=new Date();
    const dosyaYol=this.basePath+"/"+dosya.file.name;
    const storageRef=this.storage.ref(this.basePath);
    const yukleTask=this.storage.upload(dosyaYol,dosya.file);
    yukleTask.snapshotChanges().pipe(
      finalize(()=>{
        storageRef.getDownloadURL().subscribe((DownloadURL: any)=>{
          dosya.url=DownloadURL;
          dosya.adi=dosya.file.name;
          dosya.tarih=tarih.getTime().toString();
          this.DosyaVeriYaz(dosya)
        });
      })
    ).subscribe();
    return yukleTask.percentageChanges();
  }

  DosyaVeriYaz(dosya:Dosya) {
this.db.list(this.basePath).push(dosya);
  }
  DosyaListele() {
    return this.db.list(this.basePath);
  }
  DosyaSil(dosya: Dosya) {
    this.DosyaVeriSil(dosya).then(()=>{
      this.DosyaStorageSil(dosya);
    })
  }
  DosyaStorageSil(dosya: Dosya) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(dosya.adi).delete();
  }
  DosyaVeriSil(dosya: Dosya) {
    return this.db.list(this.basePath).remove(dosya.key);
  }
  




}
