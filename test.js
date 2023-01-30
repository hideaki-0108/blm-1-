'use strict';
// const noble = require('@abandonware/noble');
import noble from '@abandonware/noble';

var FOUND_MICROBIT_ADDR1 = 'A0:FB:C5:65:C7:19';

noble.on('stateChange', function (state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on('scanStart', function () {
  console.log('[2.scanStart]');
});

noble.on('scanStop', function () {
  console.log('[scanStop]');
});

noble.on('discover', function (peripheral) {
  console.log('[3.discover]\n' + peripheral);
  if (peripheral.address == FOUND_MICROBIT_ADDR1) {
    peripheral.on('connect', function () {
      console.log('[4.connect]');
      this.discoverServices();
    });
    peripheral.on('disconnect', function () {
      console.log('[disconnect]');
    });
    peripheral.on('servicesDiscover', function (services) {
      console.log('[5.servicesDiscover]');
      for (i = 0; i < services.length; i++) {
        services[i].on(
          'includedServicesDiscover',
          function (includedServiceUuids) {
            //console.log('[6.includedServicesDiscover]');
            this.discoverCharacteristics();
          }
        );
        services[i].on('characteristicsDiscover', function (characteristics) {
          console.log('[7.characteristicsDiscover]');
          for (j = 0; j < characteristics.length; j++) {
            console.log('------------');
            console.log('  serviceid:' + characteristics[j]._serviceUuid);
            console.log('  uuid:' + characteristics[j].uuid);
            console.log('  name:' + characteristics[j].name);
            console.log('  type:' + characteristics[j].type);
            console.log('  properties:' + characteristics[j].properties);
          }
        });
        services[i].discoverIncludedServices();
      }
    });
    peripheral.connect();
  }
  noble.stopScanning();
});
