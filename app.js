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
  '883d537fc6fad0d0c1488549288168b6': '21aw0130',
  '1234567890else1010test': 'elseTest',
};

// user, rssi

//firebase処理
const detabase = async () => {
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

    //データベースにドキュメントを追加（IDを指定して保存します）
    //   for (const studentElementFor in studentElement) {
    //     const initElement = studentElement[studentElementFor];
    //     console.log(initElement);

    //     const userDocumentRef = doc(db, 'pc001', `${studentElementFor}`);
    //     const documentRef = await setDoc(userDocumentRef, {
    //       boothNo: initElement.boothNo,
    //       pcnum: initElement.pcnum,
    //       rssi: initElement.rssi,
    //       student: initElement.student,
    //       student: initElement.studentName,
    //       type: initElement.type,
    //     });

    //     // console.log(documentRef);
    //   }
    // } catch (err) {
    //   console.log(`Error: ${JSON.stringify(err)}`);
    // }

    // handleSubmit();

    //const docRef = doc(db,PCの番号（設置場所に既存）, user(引数として学籍番号が渡されています))
    //   const docRef = doc(db, 'pc001', user);

    //   //firebaseにRSSIを上書きします
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
  } catch (e) {
    console.log(e);
  }
};

//見つかったbluetoothデバイスが格納されます。
let knownDevices = [];

//bluetoothデバイスデータを処理
const discovered = (peripheral) => {
  //繰り返し処理
  // setInterval(() => {
  knownDevices = [];
  const device = {
    name: peripheral.advertisement.localName,
    uuid: peripheral.uuid,
    rssi: peripheral.rssi,
  };
  knownDevices.push(device);

  // if (device.uuid === '883d537fc6fad0d0c1488549288168b6') {
  //   console.log(device.rssi);
  //   console.log(peripheral);
  // }
  //  else
  // if (device.uuid === 'C655BDBFE0E54032A7676382CA1FF483') {
  //   console.log(peripheral);
  // }

  // console.log(peripheral.address);

  // if (device.name === '21aw0130') {
  //   console.log(peripheral);
  // }

  console.log(`${device.name}:UUID:${device.uuid}:${device.rssi}`);

  //   for (const property in studentUUID) {
  //     if (device.uuid === property) {
  //       const docID = studentUUID[property];
  //       const deviceRSSI = device.rssi;
  //       console.log(docID);
  //       detabase(docID, deviceRSSI);
  //     } else {
  //     }
  //   }

  //！=====繰り返し処理はここまで
  // }, 5000);
  // peripheral.connect();
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
