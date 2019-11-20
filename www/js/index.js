/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    }
};

function doScan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var myElement = document.querySelector("#scanResult");
            var a = bobbinAry.indexOf(result.text);
            if (a >= 0) {
                myElement.style.backgroundColor = "red";
            }
            else {
                myElement.style.backgroundColor = "green";
            }
            myElement.textContent = result.text;
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: false, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
            prompt: "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 0, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: "DATA_MATRIX", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: false // iOS
        }
    );
}

/* 11/13/12019 */   

var bobbinAry = [
    'M0W200HLH',
    'M0W200I1H',
    'M0W200I3X',
    'M0W200I6L',
    'M0W200HKL',
    'M0W200HNX',
    'M0W200HOD',
    'M0W200HQT',
    'M0W200HST',
    'M0W200HVX',
    'M0W200HW5',
    'M0W200HY5',
    'M0W200HYL',
    'M0W200I0L',
    'M0W200I19',
    'M0W200I8D',
    'M0W200I8L',
    'M0W200I99',
    'M0W200IB1',
    'M0W200IB9',
    'N0W200DRZ',
    'N0W20065T',
    'N0W2006VC',
    'N0W20079E',
    'N0W2004Q5',
    'N0W2006ZP',
    'M0W2006CI',
    'M0W2006CK',
    'M0W2006CN',
    'M0W2006CZ',
    'M0W2006F7',
    'M0W2006GB',
    'M0W2006HV',
    'M0W2006HW',
    'M0W2006KJ',
    'M0W2006KK',
    'M0W2006LN',
    'M0W2006NB',
    'M0W2006NN',
    'M0W2006PH',
    'M0W2006PU',
    'M0W2006PZ',
    'M0W2006QB',
    'M0W2006QY',
    'M0W2006TM',
    'M0W2006UT',
    'M0W2006V4',
    'M0W2006XV',
    'M0W2006XZ',
    'M0W2006YY',
    'M0W2006YZ',
    'M0W20070G',
    'M0W20070I',
    'M0W20070J',
    'M0W20071M',
    'M0W20071N',
    'M0W200734',
    'M0W200736',
    'M0W200737',
    'M0W20073M',
    'M0W20074A',
    'M0W20075U',
    'M0W20075V',
    'M0W20076Y',
    'M0W200Q6J',
    'M0W200Q97',
    'M0W200W1M',
    'M0W2015Y6',
    'M0W2016PF',
    'M0W2016PW',
    'M0W2016PX',
    'M0W2016SD',
    'M0W2016UR',
    'M0W2016V9',
    'M0W2016VA',
    'M0W2016XG',
    'M0W2016XH',
    'M0W2016XZ',
    'M0W201703',
    'M0W20170K',
    'M0W20170L',
    'M0W20172T',
    'M0W201739',
    'M0W20173B',
    'M0W20175F',
    'M0W201783',
    'M0W201784',
    'M0W2017AS',
    'M0W2017AT',
    'M0W2017B9',
    'M0W2017BB',
    'M0W2017DG',
    'M0W2017DV',
    'M0W2017DZ',
    'M0W2017G3',
    'M0W2017G4',
    'M0W2017GE',
    'M0W2017GJ',
    'M0W2017IS',
    'M0W2017Y1',
    'N0W200A7Y',
    'N0W200ADA',
    'N0W200AIN',
    'N0W200ANZ',
    'N0W200KRL',
    'N0W200LCZ',
    'M0W20017J',
    'M0W2001A7',
    'M0W2001G6',
    'M0W2001IU',
    'M0W2015SQ',
    'M0W2015ST',
    'M0W2015VG',
    'M0W2015VH',
    'M0W2015Y4',
    'M0W2015Y5',
    'M0W20160R',
    'M0W20163F',
    'M0W201664',
    'M0W2016BI',
    'M0W2016E4',
    'M0W2016GT',
    'M0W2016GU',
    'M0W2016JI',
    'M0W2016M6',
    'M0W20001P',
    'M0W20003O',
    'M0W20004D',
    'M0W200071',
    'M0W200090',
    'M0W2000BO',
    'M0W2000H0',
    'M0W2000KD',
    'M0W2000PP',
    'M0W2000UI',
    'M0W2000ZQ',
    'M0W200106',
    'M0W200113',
    'M0W20012E',
    'M0W20012U',
    'M0W20015B',
    'M0W20016F',
    'M0W20017Q',
    'M0W20017Z',
    'M0W200186',
    'M0W2001AE',
    'M0W2001AN',
    'M0W2001AU',
    'M0W2001AV',
    'M0W2001CU',
    'M0W2001D2',
    'M0W2001DB',
    'M0W2001EF',
    'M0W2001FI',
    'M0W2001FQ',
    'M0W2001FR',
    'M0W2001H3',
    'M0W2001IF',
    'M0W2001JR',
    'M0W2001L3',
    'M0W2001LB',
    'M0W2001LJ',
    'M0W2001NI',
    'M0W2001O7',
    'M0W2001QF',
    'M0W2001QN',
    'M0W2001T2',
    'M0W2001T3',
    'M0W2001TB',
    'M0W2001UT',
    'M0W2001XY',
    'M0W2001ZL',
    'M0W20020I',
    'M0W200229',
    'M0W200236',
    'M0W20023A',
    'M0W20024X',
    'M0W20025U',
    'M0W20025V',
    'M0W200274',
    'M0W20027L',
    'M0W20028J',
    'M0W2002A9',
    'M0W2002B7',
    'M0W2002BC',
    'M0W2002CX',
    'M0W2002DD',
    'M0W2002DX',
    'M0W2002FL',
    'M0W2006K1',
    'M0W2006PD',
    'M0W2006PF',
    'M0W2006S2',
    'M0W200702',
    'M0W200LAL',
    'M0W200N9N',
    'M0W2016LO',
    'M0W2016O2',
    'M0W2016QQ',
    'M0W2016QR',
    'M0W2016QS',
    'M0W2016TD',
    'M0W2016TE',
    'M0W2016TG',
    'M0W2016W3',
    'M0W2016W4',
    'M0W2016XX',
    'M0W2016YP',
    'M0W201742',
    'M0W20176P',
    'M0W20176R',
    'M0W20176S',
    'M0W2017C2',
    'M0W2017C3',
    'M0W2017HD',
    'M0W2017HE',
    'M0W2017KM',
    'M0W2017NA',
    'M0W2017SM',
    'M0W2017SO',
    'M0W2017VC',
    'M0W2017VL',
    'M0W20180O',
    'M0W201869',
    'M0W2018BC',
    'M0W20015I',
    'M0W200221',
    'M0W2005HL',
    'M0W2005MX',
    'M0W2005MY',
    'M0W20062X',
    'M0W2006C2',
    'M0W2006HD',
    'M0W2006HG',
    'M0W2006K4',
    'M0W2006MR',
    'M0W2006XF',
    'M0W200701',
    'M0W200703',
    'M0W20072S',
    'M0W200C6T',
    'M0W200M8C',
    'M0W200MDW',
    'M0W200MSC',
    'M0W200OOE',
    'M0W200OOM',
    'M0W200OZA',
    'M0W200P8M',
    'M0W200159',
    'M0W20017X',
    'M0W2001A4',
    'M0W2001AL',
    'M0W2001B0',
    'M0W2001CS',
    'M0W2001I4',
    'M0W2001IS',
    'M0W2001KS',
    'M0W200112',
    'M0W2001TA',
    'M0W2001WA',
    'M0W200241',
    'M0W20027T',
    'N0W2003IU',
    'N0W2004Y4',
    'N0W200AT3',
    'N0W200AVR',
    'N0W200B3A',
    'N0W200B3U',
    'N0W200B4H',
    'N0W200B6T',
    'N0W200B6Y',
    'N0W200B7E',
    'N0W200B8M',
    'N0W200B9H',
    'N0W200B9U',
    'N0W200BBX',
    'N0W200BI2',
    'N0W200BKI',
    'N0W200BKQ',
    'N0W200BMT',
    'N0W200BMY',
    'N0W200BN6',
    'N0W200BPU',
    'N0W200BQT',
    'N0W200BRX',
    'N0W200BRY',
    'N0W200BS9',
    'N0W200BW5',
    'N0W200BWU',
    'N0W200BX8',
    'N0W200BXD',
    'N0W200BXL',
    'N0W200BXM',
    'N0W200BXU',
    'N0W200EZ7',
    'N0W200F4J',
    'N0W200KWH',
    'N0W200KZ5',
    'N0W200L4H',
    'M0W200QXR',
    'N0W2006IZ',
    'N0W2006ZE',
    'N0W2006ZG',
    'N0W2007A4',
    'N0W20084F',
    'N0W20098V',
    'N0W200999',
    'N0W2009EL',
    'N0W2009FX',
    'N0W2009IL',
    'N0W2009KU',
    'N0W2009KW',
    'N0W2009L9',
    'N0W2009LA',
    'N0W2009LW',
    'N0W2009PB',
    'N0W2009RZ',
    'N0W2009SW',
    'N0W2009TO',
    'N0W2009UE',
    'N0W2009Z0',
    'N0W2009Z9',
    'N0W200B2Q',
    'N0W200B5E',
    'N0W200B6Q',
    'N0W200B7G',
    'N0W200BDE',
    'N0W200BEQ',
    'N0W200BHE',
    'N0W200BK2',
    'N0W200BKK',
    'N0W200BKS',
    'N0W200BLE',
    'N0W200BN8',
    'N0W200BO2',
    'N0W200BPW',
    'N0W200BQQ',
    'N0W200BSK',
    'N0W200BTE',
    'N0W200BWA',
    'N0W200BXW',
    'N0W200F8X',
    'M0W200QR3',
    'N0W2005QN',
    'N0W2008HF',
    'N0W2008HG',
    'N0W2008K4',
    'N0W200B8U',
    'N0W200BJA',
    'N0W200BMP',
    'N0W200BO0',
    'N0W200BP1',
    'N0W200BUM',
    'N0W200FCJ',
    'N0W200KTT',
    'N0W200KTV',
    'N0W200LCH',
    'N0W200LF5',
    'M0W200PBI',
    'N0W200D4R',
    'N0W200M1N',
    'N0W2009KX',
    'N0W200LWP',
    'N0W2002OP',
    'N0W20042U',
    'N0W20097E',
    'N0W20098G',
    'N0W2009A9',
    'N0W2009FS',
    'N0W2009I0',
    'N0W2009KV',
    'N0W2009NL',
    'N0W2009NN',
    'N0W2009SR',
    'N0W2009SX',
    'N0W2009VO',
    'N0W200A0W',
    'N0W200B3Q',
    'N0W200B6E',
    'N0W200BBQ',
    'N0W200BGM',
    'N0W200BLY',
    'N0W200BOU',
    'N0W200BU6',
    'N0W200LHT',
    'N0W20095H',
    'N0W200B9T',
    'N0W200BC6',
    'N0W200BIO',
    'N0W200EQ2',
    'N0W200IEV',
    'N0W200IJZ',
    'N0W200LLM',
    'N0W200M6Z',
    'N0W200BOM',
    'N0W200DEZ',
    'M0W200CPI',
    'M0W200L8D',
    'M0W200LIF',
    'M0W200LIV',
    'M0W200MGC',
    'M0W200MLG',
    'M0W200TIX',
    'M0W200U41',
    'M0W200F0D',
    'M0W200K06',
    'M0W200LKS',
    'M0W200TCC',
    'M0W200TCS',
    'M0W200TV8',
    'M0W200U0C',
    'M0W200C72',
    'M0W200CQL',
    'M0W200INF',
    'M0W200ISB',
    'M0W200L2X',
    'M0W200LDL',
    'M0W200LIS',
    'M0W200T0D',
    'M0W200T39',
    'M0W200T8L',
    'M0W200THL',
    'M0W200TZH',
    'M0W200IKR',
    'M0W200LAX',
    'M0W200LG9',
    'M0W200LIX',
    'M0W200LTH',
    'M0W200TEU',
    'M0W200KCY',
    'M0W200KD4',
    'M0W200CIK',
    'M0W200JBP',
    'M0W200JED',
    'M0W200JH1',
    'M0W200JP1',
    'M0W200JRP',
    'M0W200JUD',
    'M0W200K7B',
    'M0W200K7W',
    'M0W200KAK',
    'M0W200KD8',
    'M0W200KDZ',
    'M0W200KEL',
    'M0W200KFW',
    'M0W200KGN',
    'M0W200KHJ',
    'M0W200KIK',
    'M0W200KJB',
    'M0W200KJX',
    'M0W200KK7',
    'M0W200KL8',
    'M0W200KLZ',
    'M0W200KML',
    'M0W200KMV',
    'M0W200KNW',
    'M0W200KON',
    'M0W200KP9',
    'M0W200KPJ',
    'M0W200KQK',
    'M0W200KRB',
    'M0W200KRX',
    'M0W200KS7',
    'M0W200KUL',
    'M0W200KVO',
    'M0W200KXR',
    'M0W200KYC',
    'M0W200L0F',
    'M0W200RUN',
    'M0W200TD1',
    'M0W200TDV',
    'M0W200TFP',
    'M0W200TGJ',
    'M0W200TID',
    'M0W200TJ7',
    'M0W200TL1',
    'M0W200TLV',
    'M0W200TNP',
    'M0W200TNT',
    'M0W200TQD',
    'M0W200TR7',
    'M0W200TT1',
    'M0W200TVP',
    'M0W200TYD',
    'M0W200U11',
    'M0W200U25',
    'M0W200U3P',
    'M0W200U4T',
    'M0W200U4V',
    'M0W200U65',
    'M0W200U6D',
    'M0W200V45',
    'M0W200V4D',
    'M0W200V4L',
    'M0W200V59',
    'M0W200V5H',
    'M0W200V6T',
    'M0W200V71',
    'M0W200V7X',
    'M0W200V85',
    'M0W200V9H',
    'M0W200V9P',
    'M0W200VAL',
    'M0W200VAT',
    'M0W200VC5',
    'M0W200VCD',
    'M0W200VD9',
    'M0W200VET',
    'M0W200VF1',
    'M0W200VFX',
    'M0W200VHH',
    'M0W200VHP',
    'M0W200VID',
    'M0W200VIL',
    'M0W200VK5',
    'M0W200VKD',
    'M0W200VL1',
    'M0W200VL9',
    'M0W200VMT',
    'M0W200VN1',
    'M0W200VNP',
    'M0W200VNX',
    'M0W200VPH',
    'M0W200VPP',
    'M0W200VQD',
    'M0W200VS5',
    'M0W200VSD',
    'M0W200VT1',
    'M0W200VUT',
    'M0W200VV1',
    'M0W200VVP',
    'M0W200VXH',
    'M0W200VXP',
    'M0W200VYD',
    'M0W200TZ3',
    'M0W200U4D',
    'M0W200I9Y',
    'M0W200IF9',
    'M0W200II5',
    'M0W200IKL',
    'M0W200IXX',
    'M0W200KN2',
    'M0W200PJH',
    'M0W200PND',
    'M0W200PUA',
    'M0W200JB5',
    'M0W200JGP',
    'M0W200JJD',
    'M0W200JM1',
    'M0W200JOP',
    'M0W200JQH',
    'M0W200JQX',
    'M0W200JRD',
    'M0W200JTL',
    'M0W200JW9',
    'M0W200JYX',
    'M0W200K1L',
    'M0W200K49',
    'M0W200LXT',
    'M0W200M0H',
    'M0W200Q4A',
    'M0W200PHK',
    'M0W200Q7G',
    'M0W200K0P',
    'M0W200PLF',
    'M0W200POI',
    'M0W200QA0',
    'M0W200V6B',
    'M0W200VEI',
    'M0W200GSW',
    'M0W200H5U',
    'M0W200V5L',
    'M0W200VB5',
    'M0W200VFU',
    'M0W200VJ5',
    'M0W200VR5',
    'M0W200VU1',
    'M0W200VYX',
    'M0W200VZ5',
    'M0W200W22',
    'M0W200GXR',
    'M0W200H07',
    'M0W200HC7',
    'M0W200HEV',
    'M0W200HGF',
    'M0W200IHY',
    'M0W200W13',
    'N0W2000A1',
    'N0W200B7W',
    'N0W200C88',
    'N0W200CJY',
    'N0W200CMM',
    'N0W200CO8',
    'N0W200DVL',
    'N0W200DXY',
    'N0W200E0X',
    'N0W200E3S',
    'N0W200E94',
    'N0W200EJS',
    'N0W200EMG',
    'N0W200ENJ',
    'N0W200ENR',
    'N0W200ESV',
    'N0W200ET3',
    'N0W200EYF',
    'N0W200F6F',
    'N0W200F93',
    'N0W200FEN',
    'N0W200G45',
    'N0W200GAS',
    'N0W2001NJ',
    'N0W2002CD',
    'N0W2007BS',
    'N0W2007N3',
    'N0W2007S6',
    'N0W2007SE',
    'N0W200976',
    'N0W2000YZ',
    'N0W2001C5',
    'N0W2001DS',
    'N0W20020P',
    'N0W2003II',
    'N0W2003RF',
    'N0W2003T2',
    'N0W2003WT',
    'N0W2005K9',
    'N0W2007TU',
    'N0W2009IY',
    'N0W2005KX',
    'N0W20074A',
    'N0W2009LL',
    'N0W200DSV',
    'M0W200I9J',
    'M0W200SWY',
    'M0W200VT4',
    'N0W2001EN',
    'N0W2009LX',
    'M0W200KVW',
    'M0W200KYK',
    'M0W200TCD',
    'M0W200THP',
    'M0W200TIT',
    'M0W200TKD',
    'M0W200TLH',
    'M0W200TN1',
    'M0W200TO5',
    'M0W200TPP',
    'M0W200TSD',
    'M0W200TV1',
    'M0W200TXP',
    'M0W200U0D',
    'M0W200U31',
    'M0W200U5P',
    'M0W200U7B',
    'M0W2015SF',
    'M0W2015SM',
    'M0W2015V3',
    'M0W2015VA',
    'M0W2015XY',
    'M0W20160F',
    'M0W20160N',
    'M0W201633',
    'M0W20163A',
    'M0W20163E',
    'M0W20165R',
    'M0W20165Y',
    'M0W20168F',
    'M0W20168M',
    'M0W2016BA',
    'M0W2016BB',
    'M0W2016DR',
    'M0W2016DY',
    'M0W2016GN',
    'M0W2016J3',
    'M0W2016JB',
    'M0W2016LR',
    'M0W2016LZ',
    'M0W2016M2',
    'M0W2016O1',
    'M0W2016TC',
    'M0W2016W0',
    'M0W2016YO',
    'M0W20171C',
    'M0W201740',
    'M0W20176O',
    'M0W2017C0',
    'M0W2017EO',
    'M0W2017HC',
    'N0W2000YN',
    'N0W2001UF',
    'N0W200ESO',
    'N0W200HZD',
    'N0W200IQ0',
    'M0W2006I2',
    'M0W2015VB',
    'M0W2015XR',
    'M0W2015XZ',
    'M0W20165Z',
    'M0W20168N',
    'M0W2016BE',
    'M0W2016JE',
    'M0W200023',
    'M0W20004R',
    'M0W20007F',
    'M0W20007K',
    'M0W2000A3',
    'M0W2000A8',
    'M0W2000CR',
    'M0W2000JQ',
    'M0W2000ME',
    'M0W2000NY',
    'M0W2000NZ',
    'M0W2000P2',
    'M0W2000X2',
    'M0W2000ZO',
    'M0W20012C',
    'M0W20017O',
    'M0W2001AC',
    'M0W2001D0',
    'M0W2001FO',
    'M0W2001IC',
    'M0W2001L0',
    'M0W2001NG',
    'M0W2001NO',
    'M0W2001Q4',
    'M0W2001SS',
    'M0W2001VE',
    'M0W2001Y2',
    'M0W2001Z1',
    'M0W20020Q',
    'M0W20023E',
    'M0W200292',
    'M0W2002BQ',
    'M0W2002EE',
    'M0W2002H2',
    'M0W2002JQ',
    'M0W2002NC',
    'M0W2006C5',
    'M0W2006CX',
    'M0W2006E2',
    'M0W2006E6',
    'M0W2006FK',
    'M0W2006FL',
    'M0W2006GL',
    'M0W2006GU',
    'M0W2006I8',
    'M0W2006I9',
    'M0W2006J9',
    'M0W2006JI',
    'M0W2006KX',
    'M0W2006LX',
    'M0W2006M6',
    'M0W2006NK',
    'M0W2006NL',
    'M0W2006OE',
    'M0W2006OL',
    'M0W2006OU',
    'M0W2006Q8',
    'M0W2006R2',
    'M0W2006R9',
    'M0W2006SW',
    'M0W2006TQ',
    'M0W2006TX',
    'M0W2006WE',
    'M0W2006Y8',
    'M0W2006YJ',
    'M0W2006Z2',
    'M0W20070S',
    'M0W20070W',
    'M0W200717',
    'M0W20073G',
    'M0W20073V',
    'M0W200768',
    'M0W20076J',
    'M0W200CDW',
    'M0W200CW6',
    'M0W200DVI',
    'M0W200DVJ',
    'M0W200DY7',
    'M0W200E0V',
    'M0W200E3J',
    'M0W200E66',
    'M0W200E67',
    'M0W200E8U',
    'M0W200E8V',
    'M0W200EBJ',
    'M0W200EE7',
    'M0W200EGV',
    'M0W200EJA',
    'M0W200EJJ',
    'M0W200EM7',
    'M0W200HCQ',
    'M0W200JVO',
    'M0W200JYC',
    'M0W200L3I',
    'M0W200L66',
    'M0W200LVP',
    'M0W200QJ7',
    'M0W200TQS',
    'M0W200TTG',
    'M0W2016QO',
    'M0W2006CD',
    'M0W2006D0',
    'M0W2006FO',
    'M0W2006IC',
    'M0W2006L0',
    'M0W2006NO',
    'M0W2006Q4',
    'M0W2006QC',
    'M0W2006SS',
    'M0W2006T0',
    'M0W2006VG',
    'M0W2006VO',
    'M0W2006Y4',
    'M0W2006YC',
    'M0W200710',
    'M0W20073O',
    'M0W200764',
    'M0W20076C',
    'N0W2009ED',
    'N0W2009HB',
    'N0W200A11',
    'M0W200WXX',
    'N0W20078W',
    'N0W2009C7',
    'N0W2009EV',
    'N0W2009IC',
    'N0W2009P1',
    'N0W2009R0',
    'N0W2009RP',
    'N0W200BOG',
    'N0W200BSD',
    'N0W200E14',
    'M0W2004VS',
    'N0W200A0X',
    'N0W200BG8',
    'N0W200BIW',
    'N0W200BJC',
    'M0W2004KD',
    'M0W2004N1',
    'M0W2004T6',
    'M0W20057W',
    'M0W2005AK',
    'M0W2005D8',
    'M0W2005FW',
    'M0W2004KB',
    'M0W200534',
    'N0W200ADZ',
    'N0W200AON',
    'N0W200AWN',
    'M0W2005UV',
    'N0W20053G',
    'N0W200564',
    'N0W20058S',
    'N0W2005BG',
    'N0W20097D',
    'N0W20099J',
    'N0W2009GK',
    'N0W2009I1',
    'N0W2009I8',
    'N0W2009IG',
    'N0W2009QB',
    'N0W2009ZY',
    'N0W200A0D',
    'N0W200A0P',
    'N0W200A2M',
    'N0W200A6V',
    'N0W200A9J',
    'N0W200AC7',
    'N0W200AF3',
    'N0W200AHJ',
    'N0W200AHR',
    'N0W200AKF',
    'N0W200AXJ',
    'N0W200AXR',
    'N0W200B0F',
    'N0W200B34',
    'N0W200B4L',
    'N0W200B5K',
    'N0W200B70',
    'N0W200B72',
    'N0W200B88',
    'N0W200B9O',
    'N0W200B9X',
    'N0W200BAW',
    'N0W200BB4',
    'N0W200BBC',
    'N0W200BCL',
    'N0W200BDS',
    'N0W200BF9',
    'N0W200BGG',
    'N0W200BHX',
    'N0W200BN0',
    'N0W200BPO',
    'N0W200BPP',
    'N0W200BSC',
    'N0W200BU0',
    'N0W200BV0',
    'N0W200BV1',
    'N0W200BXP',
    'N0W200EO1',
    'N0W200EPD',
    'N0W200EQP',
    'N0W200EUP',
    'N0W200EW6',
    'N0W200EXD',
    'N0W200EXL',
    'N0W200EYP',
    'N0W200EYU',
    'N0W200F01',
    'N0W200F09',
    'N0W200F2X',
    'N0W200F5D',
    'N0W200F81',
    'N0W200F89',
    'N0W200FAX',
    'M0W2004UW',
    'N0W2008PG',
    'N0W200A7B',
    'N0W200A7J',
    'N0W200A87',
    'N0W200A8F',
    'N0W200AA7',
    'N0W200AAV',
    'N0W200AB3',
    'N0W200ACV',
    'N0W200ADJ',
    'N0W200ADR',
    'N0W200AFJ',
    'N0W200AG7',
    'N0W200AGF',
    'N0W200AIV',
    'N0W200AJ3',
    'N0W200ALJ',
    'N0W200ALR',
    'N0W200AO7',
    'N0W200AOF',
    'N0W200AQ7',
    'N0W200AQV',
    'N0W200ASV',
    'N0W200ATJ',
    'N0W200AW7',
    'N0W200AY7',
    'N0W200AYF',
    'N0W200AZ3',
    'N0W200B0V',
    'N0W200B13',
    'N0W200B1J',
    'N0W200BCM',
    'N0W200BE0',
    'N0W200BWS',
    'N0W200EO9',
    'N0W200ETD',
    'N0W200ETL',
    'N0W200F1D',
    'N0W200F41',
    'N0W200F9D',
    'N0W200FAP',
    'N0W200FC1',
    'N0W200FEP',
    'N0W200FG1',
    'N0W200FHD',
    'M0W2004MD',
    'M0W200553',
    'M0W20057D',
    'M0W20057Q',
    'M0W200W54',
    'M0W200W7S',
    'M0W200WAG',
    'M0W200WAI',
    'M0W200WB5',
    'M0W200WD9',
    'M0W200WDT',
    'M0W200WFT',
    'M0W200WGG',
    'M0W200WGH',
    'M0W200WIG',
    'M0W200WIL',
    'M0W200WL9',
    'M0W200WLT',
    'M0W200WNT',
    'M0W200WOG',
    'M0W200WQH',
    'M0W200WT4',
    'M0W200WT6',
    'M0W200WTS',
    'M0W200WVS',
    'M0W200WVT',
    'M0W200WVU',
    'M0W200WVX',
    'M0W200WYG',
    'M0W200WYH',
    'M0W200WZ5',
    'M0W200Z3L',
    'M0W200Z69',
    'M0W200Z6X',
    'M0W200Z9K',
    'M0W200ZC8',
    'M0W200ZE9',
    'M0W200ZGX',
    'M0W200ZGY',
    'M0W200ZJK',
    'M0W200ZK8',
    'M0W200ZK9',
    'M0W200ZMW',
    'M0W200ZOX',
    'M0W200ZPK',
    'M0W200ZPL',
    'M0W200ZRK',
    'M0W200ZS8',
    'M0W200ZS9',
    'M0W200ZU9',
    'M0W200ZUX',
    'M0W200ZWW',
    'M0W200ZXK',
    'M0W2001X5',
    'M0W20022H',
    'M0W2004XX',
    'M0W200CN1',
    'M0W200CS5',
    'M0W200TG4',
    'M0W200U07',
    'M0W200U2V',
    'M0W200Z3K',
    'M0W200Z8K',
    'M0W200Z8N',
    'M0W200ZDY',
    'M0W200ZE8',
    'M0W200ZGM',
    'M0W200ZTY',
    'M0W200ZWM',
    'M0W200ZXL',
    'M0W200Z63', /* new list added after this */
    'N0W200B6X',
    'M0W20013E',
    'M0W20018U',
    'M0W2001E2',
    'M0W2001E6',
    'M0W2001GQ',
    'M0W2001GR',
    'M0W2001GU',
    'M0W2001JF',
    'M0W2001M6',
    'M0W2001OQ',
    'M0W2001RF',
    'M0W2001U2',
    'M0W2001YG',
    'M0W2002BY',
    'M0W2002EM',
    'M0W2002HA',
    'M0W2005H0',
    'M0W2005JM',
    'M0W2005JO',
    'M0W2005MC',
    'M0W2005OY',
    'M0W2005P0',
    'M0W2005TP',
    'M0W2005WZ',
    'M0W2005Z1',
    'M0W2005ZN',
    'M0W20067N',
    'M0W2006PT',
    'M0W200ECY',
    'M0W200EOQ',
    'M0W200LAC',
    'M0W200LQK',
    'M0W200ON8',
    'M0W200OOC',
    'M0W200OQ4',
    'M0W200OS4',
    'M0W200OSC',
    'M0W200OSK',
    'M0W200OV0',
    'M0W200OV8',
    'M0W200OXW',
    'M0W200P04',
    'M0W200P0C',
    'M0W200P0K',
    'M0W200P1O',
    'M0W200P30',
    'M0W200P5G',
    'M0W200P84',
    'M0W200P8K',
    'M0W200P9O',
    'M0W200PA4',
    'M0W200PB0',
    'M0W200PDW',
    'M0W200PF0',
    'M0W200PFG',
    'M0W200PGK',
    'M0W200Z2N',
    'M0W200Z3T',
    'M0W200Z3U',
    'M0W200Z3V',
    'M0W200Z4B',
    'M0W200Z5Y',
    'M0W200Z6I',
    'M0W200Z7Z',
    'M0W200Z8Y',
    'M0W200Z96',
    'M0W200Z97',
    'M0W200Z9B',
    'M0W200Z9N',
    'M0W200ZAN',
    'M0W200ZBT',
    'M0W200ZBV',
    'M0W200ZBY',
    'M0W200ZEM',
    'M0W200ZFZ',
    'M0W200ZH5',
    'M0W200ZH9',
    'M0W200ZIN',
    'M0W200ZJY',
    'M0W200ZJZ',
    'M0W200ZKA',
    'M0W200ZMA',
    'M0W200ZMH',
    'M0W200ZMI',
    'M0W200ZMM',
    'M0W200ZP5',
    'M0W200ZPA',
    'M0W200ZPM',
    'M0W200ZQN',
    'M0W200ZRM',
    'M0W200ZRT',
    'M0W200ZRV',
    'M0W200ZRY',
    'M0W200ZS7',
    'M0W200ZSA',
    'M0W200ZTB',
    'M0W200ZUA',
    'M0W200ZUI',
    'M0W200ZUJ',
    'M0W200ZUM',
    'M0W200ZX6',
    'M0W200ZX7',
    'M0W20170P',
    'M0W201836',
    'M0W20188I',
    'M0W2018B6',
    'M0W2018DU',
    'N0W200I4A',
    'N0W200IKB',
    'N0W200ISR',
    'N0W200IT0',
    'N0W200IUT',
    'N0W200IUU',
    'N0W200J0Z',
    'N0W200J13',
    'N0W200J3R',
    'N0W200J63',
    'N0W200J6F',
    'N0W200J93',
    'N0W200JAS',
    'N0W200JDG',
    'N0W200JGZ',
    'N0W200JH3',
    'N0W200JI4',
    'N0W200JIT',
    'N0W200JJN',
    'N0W200JLG',
    'N0W200JNG',
    'N0W200JO4',
    'N0W200LLZ',
    'N0W200LM5',
    'N0W200LRP',
    'N0W200LZJ',
    'N0W200LZP',
    'N0W200M4V',
    'N0W200MA5',
    'N0W200MAD',
    'N0W200MG1',
    'M0W200Z3S',
    'M0W200ZBW',
    'M0W200ZEZ',
    'M0W200ZH8',
    'M0W200ZHN',
    'M0W200ZJW',
    'M0W200ZKB',
    'M0W200ZUZ',
    'M0W200ZXM',
    'N0W2006W0',
    'N0W200AWF',
    'N0W200AYV',
    'N0W200F4P',
    'N0W200LN9',
    'N0W200LSL',
    'N0W200LU3',
    'N0W200MEO',
    'N0W200A1P',
    'N0W200AD2',
    'N0W200AT2',
    'N0W200B7M',
    'N0W200BAA',
    'N0W200D1V',
    'N0W200DCR',
    'N0W200EBW',
    'N0W200EH8',
    'N0W200EOH',
    'N0W200ERD',
    'N0W200EU1',
    'N0W200EZ5',
    'N0W200EZD',
    'N0W200F19',
    'N0W200F1T',
    'N0W200F4H',
    'N0W200F4O',
    'N0W200F75',
    'N0W200FBX',
    'N0W200HZ9',
    'N0W200I5G',
    'N0W200J2C',
    'N0W200J7O',
    'N0W200JNN',
    'N0W200LN1',
    'N0W200LN6',
    'N0W200LPT',
    'N0W200LQP',
    'N0W200LV2',
    'N0W200LV5',
    'N0W200LV6',
    'N0W200LXQ',
    'N0W200LXT',
    'N0W200M0E',
    'N0W200M0H',
    'N0W200M0L',
    'N0W200M0V',
    'N0W200M1D',
    'N0W200M4L',
    'N0W200M79',
    'N0W200M8E',
    'N0W200M8L',
    'N0W200MAL',
    'N0W200MDQ',
    'N0W200MEP',
    'N0W200MGE',
    'M0W200WCS',
    'M0W400101',
'M0W40019J',
'M0W4001E7',
'M0W4001QR',
'M0W4002BX',
'M0W4000X3',
'M0W4000Z2',
'M0W40015A',
'M0W4001DB',
'M0W4001F2',
'M0W4001QN',
'M0W4001YS',
'M0W40026U',
'M0W4002B9',
'M0W4002ET',
'M0W4002HG',
'M0W4002IM',
'M0W4002KB',
'M0W4002LA',
'M0W4002MT',
'M0W400188',
'M0W200CK5',
'M0W200E46',
'M0W200IKT',
'M0W200INH',
'M0W200IQ5',
'M0W200IST',
'M0W200IVH',
'M0W200JGQ',
'M0W200JOQ',
'M0W200JZ6',
'M0W200K1U',
'M0W200K4I',
'M0W200K5P',
'M0W200K8D',
'M0W200KB1',
'M0W200KDP',
'M0W200KJ1',
'M0W200KOD',
'M0W200KTX',
'M0W200QLV',
'M0W200VON',
'M0W200VRB',
'N0W200684',
'N0W2006AS',
'N0W200BAJ',
'N0W200D23',
'N0W200DT0',
'N0W200EH7',
'N0W200EJW',
'N0W200EMJ',
'N0W200EOP',
'N0W200ER5',
'N0W200EW9',
'N0W200EYX',
'N0W200F7C',
'N0W200FA0',
'N0W200FDL',
'N0W200FEX',
'N0W200FF5',
'N0W200FFC',
'N0W200FHT',
'N0W200IUP',
'N0W200IV0',
'N0W200IX0',
'N0W200J1F',
'N0W200J67',
'N0W200J8E',
'N0W200J9T',
'N0W200JB2',
'N0W200JCH',
'N0W200JKF',
'N0W200JOC',
'N0W200L5V',
'N0W200LLD',
'N0W200LN5',
'N0W200LO1',
'N0W200LP7',
'N0W200LPZ',
'N0W200LQ0',
'N0W200LSH',
'N0W200LYG',
'N0W200LYP',
'N0W200M0Z',
'N0W200M39',
'N0W200M3N',
'N0W200M57',
'N0W200M5X',
'N0W200M6O',
'N0W200M8K',
'N0W200M8X',
'N0W200MB9',
'N0W200MC0',
'N0W200MDT',
'N0W200MDW',
'N0W200ME7' ,
'M0W1021UZ',
'M0W1021XN',
'M0W101OE8',
'M0W101OZ1',
'M0W104BES',
'M0W104LO2',
'M0W104NYE',
'M0W104O17',
'M0W104OH3',
'M0W104OH7',
'M0W104V3W',
'M0W1056K8',
'N0W2000YV',
'N0W2001MV',
'N0W200D5L',
'N0W200D89',
'N0W200DAX',
'N0W200DKP',
'N0W200IU7',
'N0W200IYB',
'N0W200JMB',
'N0W200LV3',
'N0W200LZH',
'N0W200A9Z',
'N0W200B4O',
'N0W200B7C',
'N0W200FCO',
'N0W200I0F',
'N0W200IVN',
'N0W200J11',
'N0W2005YM',
'N0W200AYV',
'N0W200F4P',
'N0W200LOI',
'N0W200LR6',
'N0W200LU3',
'N0W2009ML',
'N0W200IXG',
'N0W200JA5',
'N0W200JEE',
'N0W200JLH',
'N0W200M2F',
'N0W200M53',
'N0W200NHV',
'N0W200QAZ',
'N0W200QRE',
'N0W200QRX',
'N0W200QX9',
'N0W200QZX',
'N0W200R22',
'N0W200R4Q',
'N0W200R7Y',
'N0W200RCQ',
'N0W200RF1',
'N0W200RHD',
'N0W200RPL',
'N0W200RS9',
'N0W200RUX',
'N0W200RXL',
'M0W104CFO',
'M0W104CFW',
'M0W104CIC',
'M0W104CIS',
'M0W104CLO',
'M0W104CNW',
'M0W104COC',
'M0W104CW4',
'M0W104D18',
'M0W104D1W',
'M0W104D44',
'M0W104D4K',
'M0W104HT3',
'M0W102M67',
'M0W104WMO',
'M0W104ZHV',
'M0W10500I',
'M0W1056YM',
'M0W10573Y',
'M0W1031GK',
'M0W1031M4',
'M0W1031MC',
'M0W1031RG',
'M0W1031TW',
'M0W1031WK',
'M0W1031Z8',
'M0W1031ZG',
'M0W1031ZO',
'M0W103224',
'M0W104OFC',
'M0W1021PN',
'M0W104Y0W',
'M0V20399W'
];
