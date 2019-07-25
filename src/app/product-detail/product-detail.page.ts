import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  
  loaderToShow: any;

  slideOpts = {
    initialSlide: 0,
    autoplay: true
  };

  ProductSliders: any = [];
  ProductDetails: any = [];
  CategoryDetails: any = [];
  Productlists: any = [];
  loading: any;
  
  constructor(public navCtrl: NavController, public http: Http, private route: ActivatedRoute, public loadingController: LoadingController) { }

  // create loader
  //this. = this.loadingController.create();

  // show loader
  //await loading.present();

  ngOnInit() {
    this.getProductSlidersData();
    this.getProductDetailsData();
  }
  
  id = this.route.snapshot.paramMap.get('id');

  
  getProductSlidersData() {
    this.http.get('https://www.tri-stateparalegalservice.com/vcareapi/webserviceandroid/product_slider.php?id='+this.id).subscribe((data) => {
      const dt = data.json();
      //console.log(dt);
      //const listData = JSON.stringify(dt.data);
      const listData = dt.data;
      //console.log(listData);
      this.ProductSliders = listData;
    });
  }

  getProductDetailsData() {
    this.http.get('https://www.tri-stateparalegalservice.com/vcareapi/webserviceandroid/product_details.php?id='+this.id).subscribe((data) => {
      const dt = data.json();
      //console.log(dt);
      //const listData = JSON.stringify(dt.data);
      const listData = dt.data;
      const productData = dt.product_data;
      const categoryData = dt.category_data;
      //console.log(listData);
      this.Productlists = listData;
      this.ProductDetails = productData;
      this.CategoryDetails = categoryData;

    });
  }



}
