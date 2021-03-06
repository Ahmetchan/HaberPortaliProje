using haber_portalı.Models;
using haber_portalı.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace haber_portalı.Controllers
{
    public class ServisController : ApiController
    {
        DBEntities db = new DBEntities();
        SonucModel sonuc = new SonucModel();

        #region Haber
        [HttpGet]
        [Route("api/haber")]
        public List<HaberModel> HaberListe()
        {
            List<HaberModel> Liste = db.Haberler.Select(x => new HaberModel()
            {
                HaberId = x.HaberId,
                HaberKat = x.HaberKat,
                HaberIcerik = x.HaberIcerik
            }).ToList();
            return Liste;
        }

        [HttpGet]
        [Route("api/haberbyid/{HaberId}")]
        public HaberModel HaberById(int HaberId)
        {
            HaberModel kayit = db.Haberler.Where(s => s.HaberId == HaberId).Select(x => new HaberModel()
            {
                HaberId = x.HaberId,
                HaberIcerik = x.HaberIcerik,
                HaberKat = x.HaberKat
            }).SingleOrDefault();
            return kayit;
        }
        [HttpPost]
        [Route("api/Haberekle")]
        public SonucModel HaberEkle(HaberModel model)
        {
            if (db.Haberler.Count(c => c.HaberIcerik == model.HaberIcerik) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen Haber Daha Önce Kaydedildi!";
                return sonuc;
            }

            Haberler yeni = new Haberler();
            yeni.HaberIcerik = model.HaberIcerik;
            yeni.HaberKat = model.HaberKat;
            db.Haberler.Add(yeni);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Haber Eklendi";

            return sonuc;
        }
        [HttpPut]
        [Route("api/haberduzenle")]
        public SonucModel HaberDuzenle(HaberModel model)
        {
            Haberler kayit = db.Haberler.Where(s => s.HaberIcerik == model.HaberIcerik).SingleOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Haber Bulunamadı";
                return sonuc;
            }

            kayit.HaberIcerik = model.HaberIcerik;
            kayit.HaberKat = model.HaberKat;

            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Haber Düzenlendi";
            return sonuc;

        }

        [HttpDelete]
        [Route("api/habersil/{HaberId}")]

        public SonucModel HaberSil(int HaberId)
        {
            Haberler kayit = db.Haberler.Where(s => s.HaberId == HaberId).SingleOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Haber Bulunamadı";
                return sonuc;
            }

            if (db.Kayit.Count(c => c.KayitHaberId == HaberId) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Haber Silinmez";
                return sonuc;
            }

            db.Haberler.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Haber Silindi";
            return sonuc;


        }

        #endregion Haber

        #region kategori 

        [HttpPost]
        [Route("api/kategoriekle")]
        public SonucModel KategoriEkle(KatModel model)
        { 
            if ( db.Kategori.Count(c => c.KatAdi == model KatAdi) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Girilen Kategori kayıtlıdır";
                return sonuc;
            }

            Kategori yeni = new Kategori();
            yeni.KatAdi = model KatAdi;

            db.Kategori.Add(yeni);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Kategori Eklendi";
            return sonuc;
        }

        [HttpPut]
        [Route("api/katduzenle")]
        public SonucModel KatDuzenle(Katmodell model)
        {

            Kategori kayit = db.Kategori.Where(s => s.KatId == model.KatId).SingleOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı!";
                return sonuc;
            }

            kayit.KatAdi = model.KatAdi;
            kayit.KatId = model.KatId;

            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Kategori Düzenlendi";

            return sonuc;
        }
        [HttpDelete]
        [Route("api/katsil/{KatId}")]
        public SonucModel KategoriSil(string KatId)
        {

            Kategori kayit = db.Kategori.Where(s => s.KatId == KatId).SingleOrDefault();

            if (kayit == null)
            {
                sonuc.islem = false;
                sonuc.mesaj = "Kayıt Bulunamadı!";
                return sonuc;
            }

            if (db.Kayit.Count(c => c.kayitKatId == KatId) > 0)
            {
                sonuc.islem = false;
                sonuc.mesaj = "İcinde Haber Olan kategori silinemez";
                return sonuc;
            }

            db.Kategori.Remove(kayit);
            db.SaveChanges();
            sonuc.islem = true;
            sonuc.mesaj = "Kategori Silindi";

            return sonuc;

        }
}
