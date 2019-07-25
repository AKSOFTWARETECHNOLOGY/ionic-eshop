import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  categoryInfo: any = [];
  categoryProducts: any = [];

  constructor(public navCtrl: NavController, public http: Http, private route: ActivatedRoute) { }

  showPage(pageName: string) {
    console.log(pageName);
    this.navCtrl.navigateForward(pageName);
  }

  showCategoryPage(pageName: string, CategoryId: string) {
    console.log(pageName+' '+CategoryId);
    this.navCtrl.navigateForward(pageName+'/'+CategoryId);
  }

  showProductPage(pageName: string, ProductId: string) {
    console.log(pageName+' '+ProductId);
    this.navCtrl.navigateForward(pageName+'/'+ProductId);
  }

  ngOnInit() {
    this.getCategoryProductsData();
  }

  id = this.route.snapshot.paramMap.get('id');
  

  getCategoryProductsData() {
    this.http.get('https://www.tri-stateparalegalservice.com/vcareapi/webserviceandroid/list_category_products.php?id='+this.id).subscribe((data) => {
      const dt = data.json();
      //console.log(dt);
      //const listData = JSON.stringify(dt.data);
      const categoryData = dt.category_data;
      const listData = dt.data;
      //console.log(listData);
      this.categoryInfo = categoryData;
      this.categoryProducts = listData;
    });
  }

}
