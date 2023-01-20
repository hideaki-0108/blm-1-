'use strict';
// const noble = require('@abandonware/noble');
import noble from '@abandonware/noble';
const knownDevices = [];

import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBy2NTXpapUVySmg1dMtk-q0XvX5fZB_s0',
  authDomain: 'bluetooth-indoormap.firebaseapp.com',
  projectId: 'bluetooth-indoormap',
  storageBucket: 'bluetooth-indoormap.appspot.com',
  messagingSenderId: '961498286889',
  appId: '1:961498286889:web:a1df6ecb71003f7546c538',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//htmlfile button
// const searchButton = document.querySelector('#search');

// searchButton.addEventListener('click', () => console.log('on click'));

// const data = require('../assets/json/uuid.json');
// for (const key in data) {
//   console.log(key, data[key]);
// }

//discovered BLE device
const discovered = (peripheral) => {
  const device = {
    name: peripheral.advertisement.localName,
    uuid: peripheral.uuid,
    rssi: peripheral.rssi,
  };
  knownDevices.push(device);

  // if (device.uuid === '883d537fc6fad0d0c1488549288168b6') {
  //   console.log(
  //     `${knownDevices.length}:${device.name}(${device.uuid}) RSSI${device.rssi}`
  //   );
  //   console.log(peripheral);
  // }
  // if (device.name === 'AQUOS sense3 basic') {
  //   console.log(
  //     `${knownDevices.length}:${device.name}(${device.uuid}) RSSI${device.rssi}`
  //   );
  //   console.log(peripheral);
  // }

  console.log(
    `${knownDevices.length}:${device.name}(${device.uuid}) RSSI${device.rssi}`
  );
};

//BLE scan start
const scanStart = () => {
  // setInterval(() => {
  noble.startScanning();
  noble.on('discover', discovered);
  // }, 5000);
};

if (noble.state === 'poweredOn') {
  scanStart();
} else {
  noble.on('stateChange', scanStart);
}
