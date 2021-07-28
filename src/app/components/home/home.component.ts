import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = '我是一个title';

  public picUrl = 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E9%A3%8E%E6%99%AF&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2728776560,2236636365&os=4048473078,2053872099&simid=0,0&pn=0&rn=1&di=36520&ln=1810&fr=&fmq=1627181563114_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fpic1.win4000.com%252Fwallpaper%252F2020-06-03%252F5ed769a931db1.jpg%26refer%3Dhttp%253A%252F%252Fpic1.win4000.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1629773557%26t%3D56cc6b47e3da6cbd25ca4c7e3445ee84&rpstart=0&rpnum=0&adpicid=0&nojc=undefined';


  public list: any[] = [
    {
      "title": '我是新闻1'
    },
    {
      "title": '我是新闻2'
    },
    {
      "title": '我是新闻3'
    }
  ];


  public flag: boolean = true;


  public orderStatus: number = 3;    /* 1表示已经支付   2支付并且确认订单   3、表示已经发货   4表示已经收货   其他、无效*/


  public attr: string = 'orange';



  public today: any = new Date();




  public keywords: string = '这是默认值';
  constructor() { }

  ngOnInit(): void {
  }
  run() {
    alert('这是一个自定义方法')

  }
  getData() {


    alert(this.title);

  }

  setData() {

    this.title = '我是一个改变后的title';
  }

  // runEvent(event) {


  //   //ionic必须这样写

  //   let dom: any = event.target;

  //   dom.style.color = "red";

  // }

  // keyDown(e) {
  //   if (e.keyCode == 13) {
  //     console.log('按了一下回车')
  //   } else {
  //     //e.target 获取dom对象
  //     console.log(e.target.value);
  //   }
  // }
  const routes: Routes = [{ path: 'home', component: HomeComponent }, { path: 'news', component: NewsComponent }, { path: 'newscontent/:id', component: NewscontentComponent }, { path: '', redirectTo: '/home', pathMatch: 'full' }];
}
