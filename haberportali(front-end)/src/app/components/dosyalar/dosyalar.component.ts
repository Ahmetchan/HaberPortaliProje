import { Component, OnInit } from '@angular/core';
import { Dosya } from 'src/app/models/dosya';
import { StServisService } from 'src/app/services/stServis.service';
import { NgModel } from '@angular/forms';
import { Kayit } from 'src/app/models/kayit';

@Component({
  selector: 'app-dosyalar',
  templateUrl: './dosyalar.component.html',
  styleUrls: ['./dosyalar.component.css']
})
export class DosyalarComponent implements OnInit {
  dosyalar: Dosya[];
  files: FileList;
  constructor(
    public stServis: StServisService
  ) { }

  ngOnInit() {
    this.DosyaListele();
  }
  DosyaListele() {
    this.stServis.DosyaListele().snapshotChanges().subscribe(data => {
      this.dosyalar = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.dosyalar.push(y as Dosya);
      });
    });
  }
  DosyaSec(e: { target: { files: FileList; }; }) {
    this.files = e.target.files;
  }
  DosyaYukle() {
    var dosya = new Dosya();
    dosya.file = this.files[0];
    this.stServis.DosyaYukleStorage(dosya).subscribe(
      p => {
        console.log("Yüklendi");
      }, err => {
        console.log("Hata");
      }
    );
  }
  DosyaSil(dosya: Dosya) {
    this.stServis.DosyaSil(dosya);
  }
}

