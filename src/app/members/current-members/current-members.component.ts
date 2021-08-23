import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-members',
  templateUrl: './current-members.component.html',
  styleUrls: ['./current-members.component.css']
})
export class CurrentMembersComponent implements OnInit {
  public proStudent;
  public proJobStudent;
  public masterStudent;
  public masterJobStudent;
  public bachelorStudent;

  // public students:{name:string, male:boolean, field:string, study:string, uni:string}[] = namelist;

  public students = [
    {
      "name": "吳越",
      "male":true,
      "field":"SDN & BigData",
      "study":"Master-degree",
      "uni": "國立宜蘭大學"
    },
    {
      "name": "朱登豪",
      "male":true,
      "field":"SDN & IOT",
      "study":"Master-degree",
      "uni": "國立宜蘭大學"

    },
    {
      "name": "黃加賢",
      "male":true,
      "field":"SDN & Spark",
      "study":"Master-degree",
      "uni": "國立宜蘭大學"

    },
    {
      "name": "​蔣明祐",
      "male":true,
      "field":"",
      "study":"Master-degree",
      "uni": "國立宜蘭大學"

    },
    {
      "name": "陳文謙",
      "male":true,
      "field":"",
      "study":"Master-degree",
      "uni": "國立宜蘭大學"
    },
    {
      "name": "楊竣智",
      "male":true,
      "field":"人臉辨識系統",
      "study":"On-the-Job-Master-degree",
      "uni": "國立宜蘭大學"
    },
    {
      "name": "劉大然",
      "male":true,
      "field":"無線通訊",
      "study":"On-the-Job-Master-degree",
      "uni": "國立宜蘭大學"
    },
    {
      "name": "林巧苓",
      "male":false,
      "field":"ASP.NET程式設計",
      "study":"On-the-Job-Master-degree",
      "uni": "國立宜蘭大學"
    },
    {
      "name": "鄭羽彤",
      "male":false,
      "field":"音樂教學系統",
      "study":"On-the-Job-Master-degree",
      "uni": "國立宜蘭大學"
    },
    {
      "name": "郭育銘",
      "male":true,
      "field":"大數據應用",
      "study":"On-the-Job-Master-degree",
      "uni": "國立宜蘭大學"
    },
    {
      "name": "何芷怡",
      "male":false,
      "field":"",
      "study":"Master-degree",
      "uni": "國立屏東科技大學"
    },
    {
      "name": "周佳鋐",
      "male":true,
      "field":"",
      "study":"Master-degree",
      "uni": "國立屏東科技大學"
    },
    {
      "name": "吳明軒",
      "male":true,
      "field":"",
      "study":"Bachelor-degree",
      "uni": "國立屏東科技大學"
    },
    {
      "name": "吳雲聖",
      "male":true,
      "field":"",
      "study":"Bachelor-degree",
      "uni": "國立屏東科技大學"
    },
    {
      "name": "蔡承恩",
      "male":true,
      "field":"",
      "study":"Bachelor-degree",
      "uni": "國立屏東科技大學"
    },
    // {
    //   "name": "鄭伏杰",
    //   "male":true,
    //   "field":"",
    //   "study":"On-the-Job-Phd-degree",
    //   "uni": "國立台灣科技大學"
    // },
    // {
    //   "name": "鄭敖明",
    //   "male":true,
    //   "field":"",
    //   "study":"On-the-Job-Phd-degree",
    //   "uni": "國立台灣科技大學"
    // }

]

  constructor() {
  }
  ngOnInit() {
    this.proStudent = this.students.filter((studentInfo)=>studentInfo.study=="Phd-degree");
    this.proJobStudent = this.students.filter((studentInfo)=>studentInfo.study=="On-the-Job-Phd-degree");
    this.masterStudent = this.students.filter((studentInfo)=>studentInfo.study=="Master-degree");
    this.masterJobStudent = this.students.filter((studentInfo)=>studentInfo.study=="On-the-Job-Master-degree");
    this.bachelorStudent = this.students.filter((studentInfo)=>studentInfo.study=="Bachelor-degree");

  }


}
