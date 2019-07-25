import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    autoplay: true
  };

  homeSliders: any = [];
  homeBanners: any = [];
  homeRecentProducts: any = [];

  constructor(public navCtrl: NavController, public http: Http) {}

  showPage(pageName: string) {
    console.log(pageName);
    this.navCtrl.navigateForward(pageName);
  }

  showCategoryPage(pageName: string, CategoryId: string) {
    console.log(pageName+'#'+CategoryId);
    this.navCtrl.navigateForward(pageName+'/'+CategoryId);
  }

  showProductPage(pageName: string, ProductId: string) {
    console.log(pageName+'##'+ProductId);
    this.navCtrl.navigateForward(pageName+'/'+ProductId);
  }

  ngOnInit() {
    this.getHomeSlidersData();
    this.getHomeBannersData();
    this.getHomeRecentProductsData();
   }

  getHomeSlidersData() {
    this.http.get('https://www.tri-stateparalegalservice.com/vcareapi/webserviceandroid/home_slider.php').subscribe((data) => {
      const dt = data.json();
      //console.log(dt);
      //const listData = JSON.stringify(dt.data);
      const listData = dt.data;
      //console.log(listData);
      this.homeSliders = listData;
    });
  }

  
  getHomeBannersData() {
    this.http.get('https://www.tri-stateparalegalservice.com/vcareapi/webserviceandroid/home_banner.php').subscribe((data) => {
      const dt = data.json();
      //console.log(dt);
      //const listData = JSON.stringify(dt.data);
      const listData = dt.data;
      //console.log(listData);
      this.homeBanners = listData;
    });
  }

  getHomeRecentProductsData() {
    this.http.get('https://www.tri-stateparalegalservice.com/vcareapi/webserviceandroid/home_latest_products.php').subscribe((data) => {
      const dt = data.json();
      //console.log(dt);
      //const listData = JSON.stringify(dt.data);
      const listData = dt.data;
      //console.log(listData);
      this.homeRecentProducts = listData;
    });
  }

}
