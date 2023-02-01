'use strict';
import noble from '@abandonware/noble';

import { getDoc, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
} from 'firebase/firestore';

//CMstudent

const studentUUID = {
  2130: '21aw0130',
  '3d0d99632af1dab5a0c368fc7993110d': '22aw0135',
  '1234567890else1010test': 'elseTest',
};

const studentElement = {
  '21aw0101': {
    boothNo: '21',
    pcnum: '001',
    rssi: -90,
    student: '21aw0101',
    studentName: '秋元空道',
    type: 'type-fire',
  },
  '21aw0102': {
    boothNo: '5',
    pcnum: '001',
    rssi: -90,
    student: '21aw0102',
    studentName: 'アンティポヴ・イワン',
    type: 'type-fire',
  },
  '21aw0103': {
    boothNo: '11',
    pcnum: '001',
    rssi: -90,
    student: '21aw0103',
    studentName: '池田新之助',
    type: 'type-thunder',
  },
  '21aw0104': {
    boothNo: '14',
    pcnum: '001',
    rssi: -90,
    student: '21aw0104',
    studentName: '池田桃生',
    type: 'type-wind',
  },
  '21aw0106': {
    boothNo: '13',
    pcnum: '001',
    rssi: -90,
    student: '21aw0106',
    studentName: '浦野正羽',
    type: 'type-fire',
  },
  '21aw0107': {
    boothNo: '25',
    pcnum: '001',
    rssi: -90,
    student: '21aw0107',
    studentName: '王子赫',
    type: 'type-thunder',
  },
  '21aw0108': {
    boothNo: '2',
    pcnum: '001',
    rssi: -90,
    student: '21aw0108',
    studentName: '大井朝登',
    type: 'type-fire',
  },
  '21aw0109': {
    boothNo: '12',
    pcnum: '001',
    rssi: -90,
    student: '21aw0109',
    studentName: '大内田浩翔',
    type: 'type-fire',
  },
  '21aw0110': {
    boothNo: '24',
    pcnum: '001',
    rssi: -90,
    student: '21aw0110',
    studentName: '大塚響太郎',
    type: 'type-wind',
  },
  '21aw0111': {
    boothNo: '18',
    pcnum: '001',
    rssi: -90,
    student: '21aw0111',
    studentName: '大森萌',
    type: 'type-water',
  },
  '21aw0114': {
    boothNo: '2',
    pcnum: '001',
    rssi: -90,
    student: '21aw0114',
    studentName: '小山田笑渚',
    type: 'type-thunder',
  },
  '21aw0115': {
    boothNo: '9',
    pcnum: '001',
    rssi: -90,
    student: '21aw0115',
    studentName: '賀 擇 杭',
    type: 'type-fire',
  },
  '21aw0117': {
    boothNo: '19',
    pcnum: '001',
    rssi: -90,
    student: '21aw0117',
    studentName: '上瀬 創太',
    type: 'type-fire',
  },
  '21aw0118': {
    boothNo: '3',
    pcnum: '001',
    rssi: -90,
    student: '21aw0118',
    studentName: '川崎 駿',
    type: 'type-water',
  },
  '21aw0121': {
    boothNo: '7',
    pcnum: '001',
    rssi: -90,
    student: '21aw0121',
    studentName: '酒井 優真',
    type: 'type-thunder',
  },
  '21aw0122': {
    boothNo: '16',
    pcnum: '001',
    rssi: -90,
    student: '21aw0122',
    studentName: '佐々木 花菜',
    type: 'type-water',
  },
  '21aw0123': {
    boothNo: '15',
    pcnum: '001',
    rssi: -90,
    student: '21aw0123',
    studentName: '寒川 飛向',
    type: 'type-thunder',
  },
  '21aw0126': {
    boothNo: '22',
    pcnum: '001',
    rssi: -90,
    student: '21aw0126',
    studentName: '城子 拓巳',
    type: 'type-fire',
  },
  '21aw0127': {
    boothNo: '4',
    pcnum: '001',
    rssi: -90,
    student: '21aw0121',
    studentName: '高野 萌',
    type: 'type-wind',
  },
  '21aw0128': {
    boothNo: '23',
    pcnum: '001',
    rssi: -90,
    student: '21aw0128',
    studentName: '田中 楠乃',
    type: 'type-thunder',
  },
  '21aw0129': {
    boothNo: '1',
    pcnum: '001',
    rssi: -90,
    student: '21aw0129',
    studentName: '辻 宗馬',
    type: 'type-water',
  },
  '21aw0130': {
    boothNo: '4',
    pcnum: '001',
    rssi: -90,
    student: '21aw0130',
    studentName: '友利 秀旭',
    type: 'type-wind',
  },
  '21aw0131': {
    boothNo: '26',
    pcnum: '001',
    rssi: -90,
    student: '21aw0131',
    studentName: '中村 哉太',
    type: 'type-wind',
  },
  '21aw0133': {
    boothNo: '23',
    pcnum: '001',
    rssi: -90,
    student: '21aw0133',
    studentName: '野中 杏莉',
    type: 'type-wind',
  },
  '21aw0134': {
    boothNo: '1',
    pcnum: '001',
    rssi: -90,
    student: '21aw0134',
    studentName: '藤原 直樹',
    type: 'type-fire',
  },
  '21aw0135': {
    boothNo: '20',
    pcnum: '001',
    rssi: -90,
    student: '21aw0135',
    studentName: '朴 雄 権',
    type: 'type-fire',
  },
  '21aw0136': {
    boothNo: '6',
    pcnum: '001',
    rssi: -90,
    student: '21aw0136',
    studentName: '洪 優 斌',
    type: 'type-fire',
  },
  '21aw0137': {
    boothNo: '1',
    pcnum: '001',
    rssi: -90,
    student: '21aw0137',
    studentName: '村上 由里恵',
    type: 'type-thunder',
  },
  '21aw0138': {
    boothNo: '10',
    pcnum: '001',
    rssi: -90,
    student: '21aw0138',
    studentName: '師岡 崚汰',
    type: 'type-thunder',
  },
  '21aw0139': {
    boothNo: '26',
    pcnum: '001',
    rssi: -90,
    student: '21aw0139',
    studentName: '湯浅 輝星',
    type: 'type-wind',
  },
  '21aw0141': {
    boothNo: '17',
    pcnum: '001',
    rssi: -90,
    student: '21aw0141',
    studentName: '劉 宇 欣',
    type: 'type-wind',
  },
  '21aw0142': {
    boothNo: '8',
    pcnum: '001',
    rssi: -90,
    student: '21aw0142',
    studentName: '渡辺 友樹',
    type: 'type-fire',
  },
  '22aw0101': {
    boothNo: '28',
    pcnum: '001',
    rssi: -90,
    student: '22aw0101',
    studentName: '青木 岳志',
    type: 'type-thunder',
  },
  '22aw0103': {
    boothNo: '35',
    pcnum: '001',
    rssi: -90,
    student: '22aw0103',
    studentName: '市川 浩輝',
    type: 'type-fire',
  },
  '22aw0104': {
    boothNo: '56',
    pcnum: '001',
    rssi: -90,
    student: '22aw0104',
    studentName: '伊藤 翼空',
    type: 'type-wind',
  },
  '22aw0105': {
    boothNo: '57',
    pcnum: '001',
    rssi: -90,
    student: '22aw0105',
    studentName: '稲毛 朱莉',
    type: 'type-fire',
  },
  '22aw0106': {
    boothNo: '42',
    pcnum: '001',
    rssi: -90,
    student: '22aw0106',
    studentName: '井上 陽南',
    type: 'type-thunder',
  },
  '22aw0107': {
    boothNo: '34',
    pcnum: '001',
    rssi: -90,
    student: '22aw0107',
    studentName: '梅原 真之介',
    type: 'type-fire',
  },
  '22aw0108': {
    boothNo: '41',
    pcnum: '001',
    rssi: -90,
    student: '22aw0108',
    studentName: '遠藤 響',
    type: 'type-wind',
  },
  '22aw0109': {
    boothNo: '29',
    pcnum: '001',
    rssi: -90,
    student: '22aw0109',
    studentName: '神村 将星',
    type: 'type-wind',
  },
  '22aw0110': {
    boothNo: '50',
    pcnum: '001',
    rssi: -90,
    student: '22aw0110',
    studentName: '河野 結理恵',
    type: 'type-water',
  },
  '22aw0111': {
    boothNo: '43',
    pcnum: '001',
    rssi: -90,
    student: '22aw0111',
    studentName: '金 優知',
    type: 'type-water',
  },
  '22aw0112': {
    boothNo: '44',
    pcnum: '001',
    rssi: -90,
    student: '22aw0112',
    studentName: '後上 真那斗',
    type: 'type-water',
  },
  '22aw0113': {
    boothNo: '45',
    pcnum: '001',
    rssi: -90,
    student: '22aw0113',
    studentName: '小林 龍生',
    type: 'type-wind',
  },
  '22aw0114': {
    boothNo: '58',
    pcnum: '001',
    rssi: -90,
    student: '22aw0114',
    studentName: '齋藤 元',
    type: 'type-wind',
  },
  '22aw0115': {
    boothNo: '30',
    pcnum: '001',
    rssi: -90,
    student: '22aw0115',
    studentName: '周 旻 慧',
    type: 'type-fire',
  },
  '22aw0117': {
    boothNo: '31',
    pcnum: '001',
    rssi: -90,
    student: '22aw0117',
    studentName: '髙橋 凜',
    type: 'type-water',
  },
  '22aw0118': {
    boothNo: '36',
    pcnum: '001',
    rssi: -90,
    student: '22aw018',
    studentName: '滝口 心',
    type: 'type-water',
  },
  '22aw0119': {
    boothNo: '51',
    pcnum: '001',
    rssi: -90,
    student: '22aw0119',
    studentName: '田中 伶奈',
    type: 'type-fire',
  },
  '22aw0120': {
    boothNo: '55',
    pcnum: '001',
    rssi: -90,
    student: '22aw0120',
    studentName: '千葉 一輝',
    type: 'type-fire',
  },
  '22aw0121': {
    boothNo: '32',
    pcnum: '001',
    rssi: -90,
    student: '22aw0121',
    studentName: '千葉 晃大',
    type: 'type-thunder',
  },
  '22aw0122': {
    boothNo: '52',
    pcnum: '001',
    rssi: -90,
    student: '22aw0122',
    studentName: '千葉 結梨花',
    type: 'type-fire',
  },
  '22aw0123': {
    boothNo: '46',
    pcnum: '001',
    rssi: -90,
    student: '22aw0123',
    studentName: '堤 彩華',
    type: 'type-fire',
  },
  '22aw0124': {
    boothNo: '53',
    pcnum: '001',
    rssi: -90,
    student: '22aw0124',
    studentName: '遠松 莉奈',
    type: 'type-wind',
  },
  '22aw0125': {
    boothNo: '59',
    pcnum: '001',
    rssi: -90,
    student: '22aw0125',
    studentName: '永井 里奈',
    type: 'type-fire',
  },
  '22aw0126': {
    boothNo: '60',
    pcnum: '001',
    rssi: -90,
    student: '22aw0126',
    studentName: '永瀬 萌',
    type: 'type-fire',
  },
  '22aw0127': {
    boothNo: '37',
    pcnum: '001',
    rssi: -90,
    student: '22aw0127',
    studentName: '仲田 采李',
    type: 'type-thunder',
  },
  '22aw0128': {
    boothNo: '27',
    pcnum: '001',
    rssi: -90,
    student: '22aw0128',
    studentName: '西澤 侑陽',
    type: 'type-thunder',
  },
  '22aw0131': {
    boothNo: '47',
    pcnum: '001',
    rssi: -90,
    student: '22aw0131',
    studentName: '長谷川 柾',
    type: 'type-wind',
  },
  '22aw0132': {
    boothNo: '54',
    pcnum: '001',
    rssi: -90,
    student: '22aw0132',
    studentName: '福壽 桃香',
    type: 'type-wind',
  },
  '22aw0134': {
    boothNo: '49',
    pcnum: '001',
    rssi: -90,
    student: '22aw0134',
    studentName: '藤嶋 美凪',
    type: 'type-wind',
  },
  '22aw0135': {
    boothNo: '61',
    pcnum: '001',
    rssi: -90,
    student: '22aw0135',
    studentName: '星子 隆太朗',
    type: 'type-fire',
  },
  '22aw0136': {
    boothNo: '62',
    pcnum: '001',
    rssi: -90,
    student: '22aw0136',
    studentName: '堀越 理那',
    type: 'type-water',
  },
  '22aw0137': {
    boothNo: '46',
    pcnum: '001',
    rssi: -90,
    student: '22aw0137',
    studentName: '湊谷 友希',
    type: 'type-wind',
  },
  '22aw0138': {
    boothNo: '38',
    pcnum: '001',
    rssi: -90,
    student: '22aw0138',
    studentName: '三浦 総司',
    type: 'type-wind',
  },
  '22aw0139': {
    boothNo: '33',
    pcnum: '001',
    rssi: -90,
    student: '22aw0139',
    studentName: '宮下 琉雅',
    type: 'type-thunder',
  },
  '22aw0140': {
    boothNo: '39',
    pcnum: '001',
    rssi: -90,
    student: '22aw0140',
    studentName: '三輪 泉',
    type: 'type-fire',
  },
  '22aw0141': {
    boothNo: '40',
    pcnum: '001',
    rssi: -90,
    student: '22aw0141',
    studentName: '李 振 南',
    type: 'type-wind',
  },
};

const studentServiceUUids = [
  '2101',
  '2102',
  '2103',
  '2104',
  '2106',
  '2107',
  '2108',
  '2109',
  '2110',
  '2111',
  '2114',
  '2115',
  '2117',
  '2118',
  '2121',
  '2122',
  '2123',
  '2126',
  '2127',
  '2128',
  '2129',
  '2130',
  '2131',
  '2133',
  '2134',
  '2135',
  '2136',
  '2137',
  '2138',
  '2139',
  '2141',
  '2142',
  '2201',
  '2203',
  '2204',
  '2205',
  '2206',
  '2207',
  '2208',
  '2209',
  '2210',
  '2211',
  '2212',
  '2213',
  '2214',
  '2215',
  '2217',
  '2218',
  '2219',
  '2220',
  '2221',
  '2222',
  '2223',
  '2224',
  '2225',
  '2226',
  '2227',
  '2228',
  '2231',
  '2232',
  '2234',
  '2235',
  '2236',
  '2237',
  '2238',
  '2239',
  '2240',
  '2241',
];

// user, rssi

//firebase処理
const detabase = async (element, device) => {
  try {
    const firebaseConfig = {
      apiKey: 'AIzaSyBy2NTXpapUVySmg1dMtk-q0XvX5fZB_s0',
      authDomain: 'bluetooth-indoormap.firebaseapp.com',
      projectId: 'bluetooth-indoormap',
      storageBucket: 'bluetooth-indoormap.appspot.com',
      messagingSenderId: '961498286889',
      appId: '1:961498286889:web:a1df6ecb71003f7546c538',
    };

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    const user = `${element.slice(0, 2)}aw01${element.slice(-2)}`;
    // console.log(user);

    //データベースにドキュメントを追加（IDを指定して保存します）
    for (const studentElementFor in studentElement) {
      const initElement = studentElement[studentElementFor];
      console.log(initElement);

      const userDocumentRef = doc(db, 'pc001', `${studentElementFor}`);
      const documentRef = await setDoc(userDocumentRef, {
        boothNo: initElement.boothNo,
        pcnum: '001',
        rssi: initElement.rssi,
        student: initElement.student,
        student: initElement.studentName,
        type: initElement.type,
      });

      console.log(documentRef);
    }
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  }

  // handleSubmit();

  // const docRef = doc(db,PCの番号（設置場所に既存）, user(引数として学籍番号が渡されています))
  // const docRef = doc(db, 'pc001', user);
  // const rssi = device.rssi;
  // console.log(rssi);

  //firebaseにRSSIを上書きします
  //   await updateDoc(docRef, {
  //     rssi: rssi,
  //   });

  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     //ドキュメントがあればデータが下記のように収納されます
  //     console.log('Document data:', docSnap.data());
  //   } else {
  //     //ドキュメントがなければ下記のようなエラー処理がされます。
  //     console.log('No such document!');
  //   }
  // } catch (e) {
  //   console.log(e);
  // }
};

//02855bb33d862229ae46e9c272b0a287

//見つかったbluetoothデバイスが格納されます。
let knownDevices = [];

//bluetoothデバイスデータを処理
const discovered = (peripheral) => {
  //繰り返し処理
  // setInterval(() => {
  knownDevices = [];

  // setTimeout(() => {
  const device = {
    name: peripheral.advertisement.localName,
    uuid: peripheral.uuid,
    rssi: peripheral.rssi,
  };
  knownDevices.push(device);

  for (let i = 0; i < studentServiceUUids.length; i++) {
    const element = studentServiceUUids[i];
    if (peripheral.advertisement.serviceUuids == element) {
      console.log(`${device.name}:UUID:${device.uuid}:${device.rssi}`);

      detabase(element, device);
    }
  }

  //！=====繰り返し処理はここまで
  // }, 5000);
  peripheral.connect();
  // console.log('=======! scan stop !=======');
};

const scanStart = () => {
  noble.startScanning();
  noble.on('discover', discovered);
};

const scanStop = () => {
  noble.stopScanning();
};

if (noble.state !== 'poweredOn') {
  noble.on('stateChange', scanStart);
} else {
  noble.startScanning();
  noble.on('discover', discovered); //Discover
}

// detabase();

//UUID646a7c5a779078491b7dd88d6ebc9549
