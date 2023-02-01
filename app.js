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

    // handleSubmit();

    // const docRef = doc(db,PCの番号（設置場所に既存）, user(引数として学籍番号が渡されています))
    const docRef = doc(db, 'pc004', user);
    const rssi = device.rssi;
    console.log(rssi);

    // firebaseにRSSIを上書きします;
    await updateDoc(docRef, {
      rssi: rssi,
    });

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //ドキュメントがあればデータが下記のように収納されます
      console.log('Document data:', docSnap.data());
    } else {
      //ドキュメントがなければ下記のようなエラー処理がされます。
      console.log('No such document!');
    }
  } catch (e) {
    console.log(e);
  }
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
