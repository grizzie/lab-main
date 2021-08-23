import { Component, OnInit } from '@angular/core';

interface StudentInfo {
  name: string;
  male: boolean;
  field: string;
  title: string;
  study: string;
  uni: string;
  year: number;
}

interface StudentListWithStudy {
  proStudent: StudentInfo[];
  proJobStudent: StudentInfo[];
  masterStudent: StudentInfo[];
  masterJobStudent: StudentInfo[];
  bachelorStudent: StudentInfo[];
}

interface StudentListWithYear {
  [key: number]: StudentListWithStudy;
}

interface StudentList {
  year: number;
  student: StudentListWithStudy;
}
@Component({
  selector: 'app-former-members',
  templateUrl: './former-members.component.html',
  styleUrls: ['./former-members.component.css']
})
export class FormerMembersComponent implements OnInit {
  // public students:{name:string, male:boolean, title:string, study:string, uni:string, year:number}[] = namelist;
  students: StudentInfo[] = [
    {
      name: '張冊',
      male: true,
      field: '資訊工程學系碩士班',
      title: '藉由錯誤數據的聚類方式改善影像特徵點提取的權重',
      study: 'masterStudent',
      uni:'國立宜蘭大學',
      year: 2015
    },
    {
      name: '洪煜能',
      male: true,
      field: '多媒體網路通訊數位學習碩士在職專班',
      title: '使用大數據分析空氣品質感測數據最適化取樣地點',
      study: 'masterJobStudent',
      uni:'國立宜蘭大學',
      year: 2015
    },
    {
      name: '吳昱緯',
      male: true,
      field: '資訊工程學系碩士班',
      title: '基於無線人體區域網路低特定吸收率之省電傳輸路徑機制',
      study: 'masterStudent',
      uni:'國立宜蘭大學',
      year: 2014
    },
    {
      name: '謝竣宇',
      male: true,
      field: '資訊工程學系碩士班',
      title: '以排隊理論完成多路口自適應智慧車載路由系統',
      study: 'masterStudent',
      uni:'國立宜蘭大學',
      year: 2014
    },
    {
      name: '周秋菊',
      male: false,
      field: '多媒體網路通訊數位學習碩士在職專班',
      title: '遠端桌面遙控實驗室之應用----以量測高清晰度多媒體界面為例',
      study: 'masterJobStudent',
      uni:'國立宜蘭大學',
      year: 2014
    },
    {
      name: '劉文凱',
      male: true,
      field: '資訊工程學系碩士班',
      title: '無線人體區域網路傳輸干擾問題之合作賽局及全域最佳化應用',
      study: 'masterStudent',
      uni:'國立宜蘭大學',
      year: 2013
    },
    {
      name: '羅苡榛',
      male: false,
      field: '多媒體網路通訊數位學習碩士在職專班',
      title: '健康資訊化與資訊健康化-以銀髮族健康照護系統需求為例',
      study: 'masterJobStudent',
      uni:'國立宜蘭大學',
      year: 2013
    },
    {
      name: '李東成',
      male: true,
      field: '多媒體網路通訊數位學習碩士在職專班',
      title: '虛擬桌面導入教育雲個案之影響因素研究',
      study: 'masterJobStudent',
      uni:'國立宜蘭大學',
      year: 2013
    },
    {
      name: '張恭',
      male: true,
      field: '多媒體網路通訊數位學習碩士在職專班',
      title: '整合ISO 27001與CSA/CCM運用於私有雲之研究--以某政府機關為例',
      study: 'masterJobStudent',
      uni:'國立宜蘭大學',
      year: 2013
    },
    {
      name: '林承翰',
      male: true,
      field: '電機工程學系碩士班',
      title: '使用粒子群最佳化演算法尋找無線人體區域網路低特定吸收率路徑',
      study: 'masterStudent',
      uni:'淡江大學',
      year: 2012
    },
    {
      name: '許惟倫',
      male: true,
      field: '電機工程學系碩士班',
      title: '利用平行名稱查詢與貝式分類法增進命名中心網路路由效能',
      study: 'masterStudent',
      uni:'淡江大學',
      year: 2012
    },
    {
      name: '段建宇',
      male: true,
      field: '電機工程學系碩士班',
      title: '以資料封包存活時間改進命名中心網路之QoS機制',
      study: 'masterStudent',
      uni:'淡江大學',
      year: 2012
    },
    {
      name: '鄭凱璘',
      male: true,
      field: '電機工程學系碩士在職專班',
      title: '基於NDN網路的高效能動態網路負載調節機制以減少能源消耗',
      study: 'masterJobStudent',
      uni:'國立宜蘭大學',
      year: 2012
    },
    {
      name: '黃致翔',
      male: true,
      field: '電機工程學系碩士班',
      title: '應用於雲端運算即時轉移之記憶體相對式修改預測機制',
      study: 'masterStudent',
      uni: '淡江大學',
      year: 2011
    },
    {
      name: '林宗翰',
      male: true,
      field: '電機工程學系碩士班',
      title: '基於服務時延預測之車載換手負載平衡機制',
      study: 'masterStudent',
      uni: '淡江大學',
      year: 2011
    },
    {
      name: '呂偉民',
      male: true,
      field: '電機工程學系碩士在職專班',
      title: '基於雲端檔案系統之高效率檔案分塊與管理機制',
      study: 'masterJobStudent',
      uni: '淡江大學',
      year: 2010
    }
  ];

  public studentList: StudentList[] = [];

  constructor() { }

  ngOnInit() {
    const tempList: StudentListWithYear = {};
    // 把資料以年份作為key，在加入資料會根據年份小到大排序
    this.students.forEach(studentInfo => {
      if (!tempList[studentInfo.year]) {
        tempList[studentInfo.year] = {
          proStudent: [],
          proJobStudent: [],
          masterStudent: [],
          masterJobStudent: [],
          bachelorStudent: []
        };
      }
      tempList[studentInfo.year][studentInfo.study].push(studentInfo);
    });
    // 把object轉成array方便使用ngFor
    this.studentList = Object.entries(tempList).map(([key, value]) => {
      return { year: parseInt(key, 10), student: value } as StudentList;
    });
    //如果要排大到小需要逆轉順序
    this.studentList.reverse()
    console.log(tempList);
  }
  }



