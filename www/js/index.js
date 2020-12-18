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
'M0W4002K2',
'M0W4002MQ',
'M0W4002TM',
'M0W4002U9',
'M0W4002UH',
'M0W4002WX',
'M0W4002X5',
'M0W400329',
'M0W400354',
'M0W4003IA',
'M0W4003IL',
'M0W4003KB',
'M0W4003KX',
'M0W4003PS',
'M0W4003VM',
'M0W4003X4',
'M0W40043M',
'M0W40047V',
'M0W4004BK',
'M0W4004D7',
'N0W2009DJ',
'N0W200J3Q',
'N0W200JHM',
'N0W200LND',
'N0W200LQ1',
'N0W200LZD',
'N0W200M3C',
'N0W200M4Q',
'N0W200M8V',
'N0W200NOV',
'N0W200NP3',
'N0W200NRR',
'N0W200NS8',
'N0W200NZB',
'N0W200O08',
'N0W200O4T',
'N0W200PAO',
'N0W200QKU',
'N0W200QKY',
'N0W200QND',
'N0W200QNI',
'N0W200QPS',
'N0W200QQ2',
'N0W200QSC',
'N0W200QU2',
'N0W200QUQ',
'N0W200QXS',
'N0W200R5U',
'N0W200RAL',
'N0W200S05',
'M0W4000BK',
'M0W4002TV',
'M0W4002U2',
'M0W4002U3',
'M0W4002WJ',
'M0W4002WQ',
'M0W4002WR',
'M0W4002Z7',
'M0W4002ZE',
'M0W4002ZF',
'M0W40031V',
'M0W400322',
'M0W400323',
'M0W40034J',
'M0W40034Q',
'M0W40034R',
'M0W40037F',
'M0W40039V',
'M0W4003A3',
'M0W4003A4',
'M0W4003CR',
'M0W4003CS',
'M0W4003FF',
'M0W4003FG',
'M0W4003HG',
'M0W4003I3',
'M0W4003I4',
'M0W4003KR',
'M0W4003KS',
'M0W4003MS',
'M0W4003NF',
'M0W4003NG',
'M0W4003UW',
'M0W40045C',
'M0W4004E0',
'M0W2004PX',
'M0W2004SL',
'M0W2004YD',
'M0W200P2J',
'M0W200X2Z',
'M0W200X6Q',
'M0W200Z9D',
'M0W200Z9V',
'M0W200ZEO',
'M0W200ZUO',
'N0W40002P',
'N0W40003C',
'N0W40003V',
'N0W400046',
'N0W40004Q',
'N0W40005N',
'N0W40006R',
'N0W40006U',
'N0W400072',
'N0W40009Q',
'N0W4000F2',
'N0W4000FN',
'N0W4000GB',
'N0W4000GJ',
'N0W4000H6',
'N0W4000K6',
'N0W4000N2',
'N0W4000PF',
'N0W4000QW',
'N0W4000S3',
'N0W4000SE',
'N0W4000SZ',
'N0W4000UR',
'N0W4000V2',
'N0W40011Z',
'N0W400127',
'N0W400138',
'N0W4001E8',
'N0W4001EH',
'N0W4001FR',
'N0W4001GW',
'N0W4001KN',
'N0W4001PP',
'N0W40006O',
'N0W4000A8',
'N0W4000CW',
'N0W4000FK',
'N0W4000XN',
'N0W40015H',
'N0W4001AT',
'N0W4001CD',
'N0W4001CH',
'N0W4001HF',
'N0W4001PF',
'N0W4001SN',
'N0W4001TI',
'N0W200993',
'N0W200LOQ',
'N0W200PFT',
'N0W400028',
'N0W400037',
'N0W40005F',
'N0W40005V',
'N0W400083',
'N0W40009C',
'N0W4000AX',
'N0W4000DV',
'N0W4000G3',
'N0W4000IG',
'N0W4000LE',
'N0W4000XF',
'N0W40011D',
'N0W400141',
'N0W400165',
'N0W40017F',
'N0W40019D',
'N0W4001B9',
'N0W4001DH',
'N0W4001FK',
'N0W4001IT',
'N0W4001O5',
'N0W4001RY',
'N0W4001U0',
'N0W2009ZV',
'N0W200IYI',
'N0W200J6Q',
'N0W200J8F',
'N0W200LP3',
'N0W200O0C',
'N0W200O7L',
'N0W200OA9',
'N0W200P9X',
'N0W200PGA',
'N0W200PRM',
'N0W200QI9',
'N0W200RBA',
'N0W200RDA',
'M0W200XUC',
'M0W200Z4M',
'M0W200ZF9',
'M0W201321',
'M0W201345',
'M0W201365',
'M0W2013HU',
'M0W2013LX',
'M0W200X3O',
'M0W200XGX',
'M0W2014BF',
'M0W200BLE',
'M0W200BWA',
'M0W200XB8',
'M0W2001BF',
'M0W200HI2',
'M0W200HIA',
'M0W200HII',
'M0W200HKQ',
'M0W200HKY',
'M0W200HL6',
'M0W200HNE',
'M0W200HNM',
'M0W200HNU',
'M0W200HQ2',
'M0W200HQI',
'M0W200HSQ',
'M0W200HT6',
'M0W200HVE',
'M0W200HVM',
'M0W200HVU',
'M0W200HY2',
'M0W200HYA',
'M0W200HYI',
'M0W200I0Q',
'M0W200I0Y',
'M0W200I16',
'M0W200I3E',
'M0W200I3M',
'M0W200I3U',
'M0W200I5U',
'M0W200I62',
'M0W200I6I',
'M0W200I8Q',
'M0W200I8Y',
'M0W200IB6',
'M0W200IBE',
'M0W200IBM',
'M0W200X1G',
'M0W200X1O',
'M0W200X40',
'M0W200X4C',
'M0W200X6O',
'M0W200X70',
'M0W200X9C',
'M0W200XCC',
'M0W200XLJ',
'M0W200XRQ',
'M0W200XU5',
'M0W200Z9H',
'M0W200ZET',
'M0W201349',
'M0W20136X',
'M0W20139L',
'M0W2013C9',
'M0W2013EX',
'M0W2013HL',
'M0W2013K9',
'M0W2013MX',
'M0W2013PL',
'M0W2013S9',
'M0W2013SF',
'M0W2013UX',
'M0W2013V3',
'M0W2013XL',
'M0W2007M8',
'M0W2007RK',
'M0W2007U8',
'M0W2007ZT',
'M0W20082H',
'M0W200854',
'M0W2008FS',
'M0W200B69',
'M0W200B7S',
'M0W200BOX',
'M0W200BSW',
'M0W200XB7',
'M0W200XEL',
'M0W200XJZ',
'M0W200XMM',
'M0W20142G',
'M0W20148L',
'M0W2014LG',
'M0W2014QS',
'N0W200K0M',
'N0W200KGU',
'N0W200NK1',
'N0W200NTC',
'N0W200O89',
'N0W200RE2',
'N0W200RRL',
'M0W200BM9',
'N0W200LYK',
'N0W200M3W',
'N0W200M98',
'N0W200MBW',
'N0W200PYW',
'N0W200PYX',
'N0W200Q48',
'N0W200Q49',
'N0W200Q4A',
'N0W200Q6W',
'N0W200Q6X',
'N0W200Q9L',
'N0W200Q9M',
'N0W200QCA',
'N0W200RR2',
'N0W200A2J',
'N0W200IZO',
'N0W200J57',
'N0W200J80',
'N0W200JIJ',
'N0W200JR3',
'N0W200JTI',
'N0W200JZ3',
'N0W200K6U',
'N0W200KQ8',
'N0W200KSW',
'N0W200KVK',
'N0W200KY8',
'N0W200L0W',
'N0W200L3K',
'N0W200L68',
'N0W200L8W',
'N0W200LBK',
'N0W200LE8',
'N0W200LJK',
'N0W200M22',
'N0W200NEC',
'N0W200NPH',
'N0W200NQI',
'N0W200NYN',
'N0W200O1B',
'N0W200O3Z',
'N0W200PE5',
'N0W200PE7',
'N0W200POT',
'N0W200PSR',
'N0W200PTX',
'N0W200PYZ',
'N0W200QCB',
'N0W200QCC',
'N0W200QHX',
'N0W200RLP',
'M0W200N4Q',
'M0W2013MK',
'M0W2013ML',
'M0W200MYQ',
'M0W200MZM',
'M0W200N42',
'M0W200UXU',
'M0W200XGV',
'M0W200YEK',
'M0W200YMK',
'M0W2013S0',
'M0W2013S1',
'M0W2008FM',
'M0W200BHA',
'M0W200BKH',
'M0W200BKI',
'M0W200XE2',
'M0W200XGQ',
'M0W200XGS',
'M0W200XJ9',
'M0W200XJE',
'M0W200XJG',
'M0W200XOQ',
'M0W200XS4',
'M0W200NY4',
'M0W200O5W',
'M0W200OJ0',
'M0W200Y6D',
'M0W200YH0',
'M0W200YMD',
'N0W200KHA',
'N0W200QJE',
'M0W200B9I',
'M0W200NRU',
'M0W200UJG',
'M0W2011EY',
'M0W2011KE',
'M0W2011SC',
'M0W2011XP',
'M0W2013CW',
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
'M0W200CJ0',
'M0W200CB8',
'M0W200CLO',
'M0W200CRJ',
'M0W200D2U',
'M0W200JZI',
'M0W200KR1',
'M0W200P94',
'M0W200SGW',
'M0W200SZK',
'M0W200H9I',
'M0W200IXR',
'M0W200JB4',
'M0W200SLC',
'M0W200V2L',
'M0W200V6S',
'M0W200W68',
'M0W200WBK',
'M0W200WBN',
'M0W200WGZ',
'M0W2016VS',
'M0W20172W',
'M0W2017DU',
'M0W2006CA',
'M0W200HEC',
'M0W200PN0',
'M0W200Q4C',
'M0W2016NS',
'M0W2016PQ',
'M0W2016YG',
'M0W2017DJ',
'M0W2017G7',
'M0W2005GB',
'M0W2006CC',
'M0W200H9D',
'M0W2015SB',
'M0W2015SH',
'M0W2015SI',
'M0W2015SJ',
'M0W2015UZ',
'M0W2015V5',
'M0W2015V6',
'M0W2015V7',
'M0W2015XN',
'M0W2015XT',
'M0W2015XU',
'M0W2015XV',
'M0W20160B',
'M0W20160I',
'M0W20160J',
'M0W20162Y',
'M0W20162Z',
'M0W201636',
'M0W201637',
'M0W20165N',
'M0W20165U',
'M0W20165V',
'M0W20168A',
'M0W20168B',
'M0W20168I',
'M0W20168J',
'M0W2016AY',
'M0W2016AZ',
'M0W2016B6',
'M0W2016B7',
'M0W2016DM',
'M0W2016DU',
'M0W2016DV',
'M0W2016DW',
'M0W2016GB',
'M0W2016GI',
'M0W2016GJ',
'M0W2016GK',
'M0W2016IY',
'M0W2016IZ',
'M0W2016J4',
'M0W2016J6',
'M0W2016J7',
'M0W2016J8',
'M0W2016LM',
'M0W2016LS',
'M0W2016LU',
'M0W2016LV',
'M0W2016LW',
'M0W200HXH',
'M0W200I05',
'M0W2015SA',
'M0W2015UY',
'M0W2015V4',
'M0W2015VQ',
'M0W2015XM',
'M0W2015XS',
'M0W2015YD',
'M0W20160G',
'M0W201611',
'M0W201634',
'M0W201638',
'M0W20165M',
'M0W20165S',
'M0W20168G',
'M0W2016B4',
'M0W2016DS',
'M0W2016GA',
'M0W2016GG',
'M0W2016J5',
'M0W2016JR',
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
'M0W200Z41',
'M0W200Z6P',
'M0W200Z9G',
'M0W200ZC4',
'M0W200ZEP',
'M0W200ZES',
'M0W200ZHD',
'M0W200ZK1',
'M0W200ZS0',
'M0W200ZS3',
'M0W200ZUR',
'N0W200K8L',
'N0W200KGL',
'N0W200O96',
'N0W200OBU',
'N0W200PAI',
'N0W200PII',
'N0W200PIJ',
'N0W200PL6',
'N0W200PQI',
'N0W200PQJ',
'N0W200PT4',
'N0W200QJW',
'M0W20139U',
'M0W2013DS',
'M0W2013GG',
'M0W2013J4',
'M0W2013KI',
'M0W2013PK',
'M0W2013R4',
'M0W2013TS',
'M0W2013UW',
'M0W2013Z4',
'M0W200Z41',
'M0W200Z6P',
'M0W200Z9G',
'M0W200ZC4',
'M0W200ZEP',
'M0W200ZES',
'M0W200ZHD',
'M0W200ZK1',
'M0W200ZS0',
'M0W200ZS3',
'M0W200ZUR',
'M0W200ZK4',
'M0W200ZNA',
'N0W200JMQ',
'N0W200K8L',
'N0W200KGL',
'N0W200PJD',
'N0W4000YB',
'N0W4000YJ',
'N0W4001GR',
'N0W200PEC',
'N0W200PM1',
'N0W200JSL',
'N0W200JV9',
'N0W200O26',
'N0W200OBO',
'N0W200OBR',
'N0W200PGP',
'N0W200PIB',
'N0W200PIC',
'N0W200PIE',
'N0W200QJI',
'N0W200NXX',
'N0W200PAB',
'N0W200PKZ',
'N0W200QFQ',
'M0W4001T9',
'M0W40023Q',
'M0W400292',
'M0W4002ED',
'M0W4002MD',
'N0W4000WC',
'N0W4000WJ',
'N0W4000WK',
'N0W4000WR',
'N0W4001F9',
'N0W4001GQ',
'N0W4001LU',
'N0W4001LX',
'M0W4002SQ',
'M0W4002VE',
'N0W4000I8',
'N0W4000VT',
'N0W40019E',
'M0W40034B',
'M0W40039N',
'M0W4003AR',
'M0W40031N',
'N0W4000L1',
'M0W200633',
'N0W200NH7',
'N0W200NIF',
'N0W200NL3',
'M0W105EWK',
'M0W105EZ8',
'M0W105F1W',
'M0W105F4K',
'M0W105F78',
'M0W201C4A',
'M0W201GAI',
'M0W201KEI',
'M0W201KML',
'M0W201KPI',
'M0W201KUU',
'M0W201LWO',
'M0W2017LQ',
'M0W20181Q',
'M0W2018F3',
'M0W201FUX',
'M0W2014RP',
'M0W2018SV',
'M0W2018T2',
'M0W2018VQ',
'M0W2018VZ',
'M0W201912',
'M0W2019MF',
'M0W201H1K',
'M0W201HEO',
'M0W201HHC',
'M0W201HK0',
'M0W201MFF',
'M0W2017MI',
'M0W201AZQ',
'M0W201BP1',
'M0W201CQ7',
'M0W201CY5',
'M0W201D65',
'M0W201G2X',
'M0W201J0X',
'M0W201UQU',
'N0W20066G',
'N0W200DNY',
'N0W200DZL',
'N0W200E1A',
'N0W200MK3',
'N0W200MS3',
'N0W200MUO',
'N0W200MXF',
'N0W200N2R',
'N0W200N5P',
'N0W200S9H',
'N0W200SAE',
'N0W200SUB',
'N0W200SVQ',
'N0W200T4A',
'N0W200U9K',
'N0W200UFT',
'N0W200UIH',
'N0W200UPK',
'N0W200V2I',
'N0W200V3D',
'N0W200V56',
'N0W200V8Y',
'N0W200VA2',
'N0W200VAY',
'N0W200VEI',
'N0W200VEX',
'N0W200VFE',
'N0W200VFM',
'N0W200VIQ',
'N0W200VK0',
'N0W200VS1',
'N0W200W5G',
'N0W200W5O',
'N0W200WAK',
'N0W200WN9',
'N0W2010SM',
'M0W200O5X',
'M0W2018YT',
'M0W201ASP',
'M0W201AV6',
'M0W201AZX',
'M0W201B0I',
'M0W201B36',
'M0W201BAL',
'M0W201C2D',
'M0W201CCQ',
'M0W201CCR',
'M0W201CFF',
'M0W201CI3',
'M0W201CP4',
'M0W201CQ3',
'M0W201CSR',
'M0W201CVF',
'M0W201CY3',
'M0W201D0G',
'M0W201D3F',
'M0W201D3O',
'M0W201D63',
'M0W201E5Q',
'M0W201E5Z',
'M0W201E73',
'M0W201E83',
'M0W201E8B',
'M0W201EDQ',
'M0W201EGM',
'M0W201EIT',
'M0W201EIZ',
'M0W201EJR',
'M0W201ER2',
'M0W201ETO',
'M0W201EW5',
'M0W201FRH',
'M0W201GEJ',
'M0W201H48',
'M0W201J4Z',
'M0W201KC2',
'M0W201KEQ',
'M0W201KPD',
'M0W201KUP',
'M0W201WGX',
'M0W2021NH',
'M0W2021Q5',
'M0W20223G',
'M0W107T4W',
'M0W107T54',
'M0W107GT3',
'M0W107GVR',
'M0W107GYU',
'M0W107H1I',
'N0W101T7E',
'N0W101TA2',
'N0W101TFE',
'M0W201CRS',
'M0W201CUG',
'M0W201CZS',
'M0W201E36',
'M0W201E3Z',
'M0W201E5T',
'M0W201E5X',
'M0W201E8L',
'M0W201E8M',
'M0W201E8N',
'M0W201EBA',
'M0W201EDY',
'M0W201EDZ',
'M0W201EEV',
'M0W201EGN',
'M0W201EMV',
'M0W201EON',
'M0W201ETZ',
'M0W2017R0',
'M0W2017R1',
'M0W2017WD',
'M0W2017Z1',
'M0W20182T',
'M0W201872',
'M0W2018CD',
'M0W201M4A',
'M0W201M6A',
'M0W201M6I',
'M0W201M6Q',
'M0W201M6Y',
'M0W201MBM',
'M0W201MCA',
'M0W201MEI',
'M0W201MF6',
'M0W201MGQ',
'M0W201MH6',
'M0W201MM2',
'M0W201MMI',
'M0W201MP6',
'M0W201MRM',
'M0W201MRU',
'M0W201MUY',
'M0W201MV6',
'M0W201MX6',
'M0W201H35',
'M0W201H4P',
'M0W201H7D',
'M0W201B7P',
'M0W201CKW',
'M0W2007XT',
'M0W20140X',
'M0W2016D3',
'M0W2018U3',
'M0W2018WR',
'M0W2019AA',
'M0W2019CR',
'M0W2019CY',
'M0W2019F9',
'M0W2019I3',
'M0W2019L3',
'M0W201C8X',
'M0W201MJM',
'M0W201MWY',
'M0W201E38',
'M0W201E3A',
'M0W201E8V',
'M0W201E9R',
'M0W201EBB',
'M0W201EBJ',
'M0W201ECF',
'M0W201EE7',
'M0W201EJB',
'M0W201ELY',
'M0W201ERB',
'M0W201EWN',
'M0W201805',
'M0W201870',
'M0W20189O',
'M0W2018CC',
'M0W201M3M',
'M0W201M3U',
'M0W201M4I',
'M0W201M8Y',
'M0W201M96',
'M0W201MC2',
'M0W201MEQ',
'M0W201MHE',
'M0W201MHM',
'M0W201MJU',
'M0W201MK2',
'M0W201MMQ',
'M0W201MMY',
'M0W201MPE',
'M0W201MPM',
'M0W201MXE',
'M0W201MXM',
'M0W2018RY',
'M0W2018S6',
'M0W2018XA',
'M0W2018ZY',
'M0W201906',
'M0W20192U',
'M0W20197Y',
'M0W201986',
'M0W2019D9',
'M0W2019IM',
'M0W2019LA',
'M0W201CI4',
'M0W201CKS',
'M0W201CQ4',
'M0W201CT1',
'M0W201CVP',
'M0W201CY4',
'M0W201CYD',
'M0W201D11',
'M0W201D3J',
'M0W201WEH',
'M0W201WEI',
'M0W201WEJ',
'M0W201WH4',
'M0W201WH6',
'M0W201WJS',
'M0W201WJT',
'M0W201WJU',
'M0W201WJV',
'M0W201WMG',
'M0W201WMI',
'M0W201WMJ',
'M0W201WP5',
'M0W201WP6',
'M0W201WRT',
'M0W201WUG',
'M0W201WX4',
'M0W201WX5',
'M0W201WZS',
'M0W201X2G',
'M0W201XYH',
'M0W201Y15',
'M0W201Y16',
'M0W201Y17',
'M0W2021CQ',
'M0W2021KR',
'M0W2021KS',
'M0W2021NE',
'M0W2021Q4',
'M0W2021SQ',
'M0W2021VE',
'M0W20220Q',
'M0W201F0Y',
'M0W201FRL',
'M0W20085S',
'M0W2019EM',
'M0W2019MM',
'M0W201CFE',
'M0W201CSZ',
'M0W201F10',
'M0W201F11',
'M0W201F31',
'M0W201F3K',
'M0W201F3O',
'M0W201F67',
'M0W201F6C',
'M0W201F6D',
'M0W201F6J',
'M0W201F8V',
'M0W201F8Y',
'M0W201F90',
'M0W201FBJ',
'M0W201FBM',
'M0W201FBO',
'M0W201FEA',
'M0W201FGY',
'M0W201FJM',
'M0W201FJN',
'M0W201FJV',
'M0W201FRM',
'M0W201FRN',
'M0W201FRO',
'M0W201FUC',
'M0W201GCK',
'M0W201KPE',
'M0W201KXE',
'M0W201B7Y',
'M0W201CAQ',
'M0W201CAR',
'M0W201CO2',
'M0W201CTE',
'M0W201CYP',
'M0W201E2V',
'M0W201E5J',
'M0W201EAV',
'M0W201EB1',
'M0W201EFZ',
'M0W201EJ1',
'M0W201ELP',
'M0W201EO4',
'M0W201EQS',
'M0W201ETG',
'M0W201EYJ',
'M0W201GVT',
'M0W201H3T',
'M0W201H6H',
'M0W201H95',
'M0W201HBT',
'M0W201HI0',
'M0W201HMH',
'M0W201KG7',
'M0W201KIV',
'M0W201KQV',
'M0W201L5H',
'M0W201WH0',
'M0W201WH1',
'M0W201WJN',
'M0W201WMC',
'M0W201WMD',
'M0W201WOZ',
'M0W201WP1',
'M0W201WRO',
'M0W201WUC',
'M0W201WX0',
'M0W201WZO',
'M0W201X2A',
'M0W201X2C',
'M0W201XYB',
'M0W201XYC',
'M0W201XYD',
'M0W201Y10',
'M0W2021HL',
'M0W2021K9',
'M0W201CG9',
'M0W201CIX',
'M0W201CLL',
'M0W201CO1',
'M0W201CO3',
'M0W201CO9',
'M0W201CQO',
'M0W201CQP',
'M0W201CTF',
'M0W201CW3',
'M0W201CW9',
'M0W201CYX',
'M0W201D1C',
'M0W201D1K',
'M0W201D1L',
'M0W201D49',
'M0W201IVC',
'M0V90065A',
'M0V900WD1',
'M0V900WDC',
'M0V900WDC',
'M0V900WDD',
'M0V900WDD',
'M0V900WDE',
'M0V900WDH',
'M0V900WDM',
'M0V900WDO',
'M0V900WDR',
'M0V900WFJ',
'M0V900WFP',
'M0V900WG3',
'M0V900WG5',
'M0V900WGA',
'M0V900WGF',
'M0V900WID',
'M0V900WIP',
'M0V900WIP',
'M0V900WIY',
'M0V900WJ0',
'M0V900WJ3',
'M0V900WJB',
'M0V900WLF',
'M0V900WLH',
'M0V900WLM',
'M0V900WLO',
'M0V900WLO',
'M0V900WLZ',
'M0V900WNX',
'M0V900WO2',
'M0V900WOB',
'M0V900WOF',
'M0V900WQ5',
'M0V900WQO',
'M0V900WQS',
'M0V900WQT',
'M0V900WQZ',
'M0V900WR0',
'M0V900WSV',
'M0V900WTF',
'M0V900WTH',
'M0V900WTM',
'M0V900WTN',
'M0V900WTZ',
'M0V900WVH',
'M0V900WW5',
'M0V900WWF',
'M0V900WYO',
'M0V900WYS',
'M0V900WYT',
'M0V900WYZ',
'M0V900WZ3',
'M0V900WZB',
'M0V900X1D',
'M0V900X1F',
'M0V900X1H',
'M0V900X1M',
'M0V900X1N',
'M0V900X40',
'M0V900X42',
'M0V900X43',
'M0V900X45',
'M0V900X4B',
'M0V900X4C',
'M0V900X6O',
'M0V900X6R',
'M0V900X6T',
'M0V900X6Z',
'M0V900X8K',
'M0V900X8L',
'M0V900X8M',
'M0V900X8N',
'M0V900XB8',
'M0V900XB9',
'M0V900XBA',
'M0V900XDW',
'M0V900XDX',
'M0V900XDY',
'M0V900XGK',
'M0V900XGL',
'M0V900XGM',
'M0V900XGN',
'M0V900XJ8',
'M0V900XJB',
'M0V900XLY',
'M0V900XLZ',
'M0V900XOK',
'M0V900XOM',
'M0V900XON',
'M0V900XR8',
'M0V900XRA',
'M0V900XRB',
'M0V900XTU',
'M0V900XTW',
'M0V900XTX',
'M0V900XTY',
'M0V900XTZ',
'M0V900XWI',
'M0V900XWL',
'M0V900XWM',
'M0V900XWN',
'M0V900XZ6',
'M0V900XZ8',
'M0V900XZ9',
'M0V900XZB',
'M0V900Y1W',
'M0V900Y1X',
'M0V900Y1Y',
'M0V900WCV',
'M0V900WI5',
'M0V900WKT',
'M0V900WL1',
'M0V900WL9',
'M0V900WNH',
'M0V900WQ7',
'M0V900X3H',
'M0V900X5X',
'M0V900XTH',
'M0V900YX5',
'M0V900WIZ',
'M0V900WLC',
'M0V900WOC',
'M0V900WW0',
'M0V900WWB',
'M0V900X41',
'M0V900X6P',
'M0V900X82',
'M0V900XAQ',
'M0V900XBB',
'M0V900XJ0',
'M0V900XLW',
'M0V900XO2',
'M0V900XTE',
'M0V900XW2',
'M0V900XWK',
'M0V900XYQ',
'M0V900XYY',
'M0V900XZ0',
'M0V900Y1O',
'M0V900Y1U',
'M0V9005LA',
'M0V90061B',
'M0V90063Z',
'M0V900APF',
'M0V900AS3',
'M0V900WJ1',
'M0V900WR1',
'M0V900WXA',
'M0V900WZ1',
'M0V900YG4',
'N0W200MTZ',
'N0W200WUE',
'N0W200WX2',
'N0W200X04',
'N0W200X8M',
'N0W200XGU',
'N0W200XI6',
'N0W200XJA',
'N0W200Z65',
'N0W201FZ9',
'N0W201I9Y',
'N0W201IRU',
'N0W201ITU',
'N0W201JM7',
'N0W200MWN',
'N0W200N4N',
'N0W200N7B',
'N0W200U5N',
'N0W200VSL',
'N0W200XBA',
'N0W200XE6',
'N0W2017TO',
'N0W2017WC',
'N0W20181O',
'N0W201B00',
'N0W201B2O',
'N0W201BFX',
'N0W201H3H',
'N0W201HJY',
'N0W201HRI',
'N0W201HWU',
'N0W201HZ9',
'N0W201I1X',
'N0W201ICM',
'N0W201JG7',
'N0W201JME',
'M0W202BQV',
'M0W202C1J',
'M0W202CQ0',
'N0U400160',
'N0U4002B1',
'N0U4002B2',
'N0U4002DV',
'N0U4005UE',
'N0U4006D2',
'N0U4006GL',
'N0U4006J8',
'N0U4006J9',
'N0U4006LX',
'N0U4006Z7',
'N0U4006Z8',
'N0U4006ZI',
'N0U400726',
'N0U40077J',
'N0U4007B0',
'M0U2006IS',
'M0U2006IT',
'M0U2006IU',
'M0U2006IV',
'M0U2006LG',
'M0U2006LH',
'M0U2006LI',
'M0U2006LJ',
'M0U2006O4',
'M0U2006O5',
'M0U2006O6',
'M0U2006QS',
'M0U2006QT',
'M0U2006QU',
'M0U2006TG',
'M0U2006TH',
'M0U2006TI',
'M0U2006W3',
'M0U2006W5',
'M0U2006W6',
'M0U2006YR',
'M0U2006YS',
'M0U2006YT',
'M0U2006YU',
'M0U2006ZB',
'M0U20071F',
'M0U20071G',
'M0U20071I',
'M0U20071Z',
'M0U200743',
'M0U200744',
'M0U200745',
'M0U200746',
'M0U20076R',
'M0U20076S',
'M0U20076T',
'M0U20076U',
'M0U20079F',
'M0U20079G',
'M0U20079H',
'M0U20079I',
'M0U20079Z',
'M0U2007C3',
'M0U2007C4',
'M0U2007C5',
'M0U2007C6',
'M0U200DY5',
'M0U200DYI',
'M0U200E0S',
'M0U200E0T',
'M0U200E16',
'M0U200E3C',
'M0U200E3G',
'M0U200E3H',
'M0U200E64',
'M0U200E65',
'M0U200E6I',
'M0U200E8S',
'M0U200E8T',
'M0U200E96',
'M0U200EBG',
'M0U200EE3',
'M0U200EE4',
'M0U200EE5',
'M0U200EEI',
'M0U200EGR',
'M0U200EGT',
'M0U200EH6',
'M0U200EJF',
'M0U200EJG',
'M0U200EJH',
'M0U200EJU',
'M0U200EM3',
'M0U200EOR',
'M0U200EOS',
'M0U200ERF',
'M0U200ERG',
'M0U2006JO',
'M0U2006JP',
'M0U2006JV',
'M0U2006MD',
'M0U2006P1',
'M0U2006P7',
'M0U2006RP',
'M0U2006UD',
'M0U2006X1',
'M0U2006ZP',
'M0U200DZL',
'M0U200E2J',
'M0U200E3U',
'M0U200E4X',
'M0U200E7V',
'M0U200EBF',
'M0U200EBH',
'M0U200EBU',
'M0U200EEJ',
'M0U200EGS',
'M0U200EM4',
'M0U200DY4',
'N0U2001VB',
'N0U2003Q0',
'N0U2003SO',
'N0U2003Y0',
'N0U20040O',
'N0U20040W',
'N0U20043C',
'N0U200460',
'N0U20048O',
'N0U2004BC',
'N0U2004JK',
'M0U2006IR',
'M0U2006LF',
'M0U2006OC',
'M0U2006TF',
'M0U2006TO',
'M0U2006Z0',
'M0U200DX4',
'M0U200DXC',
'M0U200DXK',
'M0U200DXL',
'M0U200DXT',
'M0U200DXU',
'M0U200DY1',
'M0U200DY9',
'M0U200DYH',
'M0U200DZS',
'M0U200E00',
'M0U200E08',
'M0U200E09',
'M0U200E0H',
'M0U200E0I',
'M0U200E0P',
'M0U200E0X',
'M0U200E15',
'M0U200E2G',
'M0U200E2O',
'M0U200E2W',
'M0U200E35',
'M0U200E36',
'M0U200E3D',
'M0U200E3L',
'M0U200E3T',
'M0U200E5C',
'M0U200E5K',
'M0U200E5L',
'M0U200E5S',
'M0U200E5T',
'M0U200E5U',
'M0U200E61',
'M0U200E69',
'M0U200E6H',
'M0U200E7S',
'M0U200E80',
'M0U200E88',
'M0U200E89',
'M0U200E8G',
'M0U200E8H',
'M0U200E8P',
'M0U200E8X',
'M0U200E95',
'M0U200EAG',
'M0U200EAO',
'M0U200EAW',
'M0U200EAX',
'M0U200EB4',
'M0U200EB5',
'M0U200EBC',
'M0U200EBD',
'M0U200EBL',
'M0U200EBT',
'M0U200ED4',
'M0U200EDC',
'M0U200EDK',
'M0U200EDS',
'M0U200EDT',
'M0U200EE1',
'M0U200EFL',
'M0U200EFS',
'M0U200EG0',
'M0U200EG8',
'M0U200EG9',
'M0U200EGG',
'M0U200EGH',
'M0U200EGP',
'M0U200EH7',
'M0U200EIG',
'M0U200EIO',
'M0U200EIW',
'M0U200EJ4',
'M0U200EJC',
'M0U200EJD',
'M0U200EJV',
'M0U200EL4',
'M0U200ELC',
'M0U200ELK',
'M0U200ELS',
'M0U200ELT',
'M0U200EM1',
'M0U200EMJ',
'M0U200ENL',
'M0U200ENS',
'M0U200EO0',
'M0U200EO8',
'M0U200EOG',
'M0U200EOH',
'M0U200EP7',
'M0U200EQG',
'M0U200EQO',
'M0U200EQW',
'M0U200ER4',
'M0U200ER5',
'M0U200ERD',
'M0U200ERV',
'M0U200ES5',
'M0U200ES6',
'M0U200ES7',
'M0U200EUT',
'M0U200EUU',
'M0U200EUV',
'M0U200EXH',
'M0U200EXI',
'M0U200EXJ',
'M0U200F05',
'M0U200F06',
'M0U200F07',
'M0U200F2T',
'M0U200F2V',
'M0U200F5H',
'M0U200F5I',
'M0U200F85',
'M0U200F86',
'M0U200F87',
'M0U200FAT',
'M0U200FAU',
'M0U200FAV',
'M0U200FDG',
'M0U200FDH',
'M0U200FDI',
'M0U200FDJ',
'M0U200FG4',
'M0U200FG5',
'M0U200FG7',
'M0U200FIS',
'M0U200FIT',
'M0U200FIU',
'M0U200FLG',
'M0U200FLH',
'M0U200FLI',
'M0U200FLJ',
'M0U200EJ5',
'M0U20071R',
'M0U20074F',
'N0U200316',
'N0U2003IQ',
'N0U2003O2',
'N0U20043K',
'M0U400C2I',
'M0U400CNK',
'M0U400CXL',
'M0U400CY1',
'M0U400D35',
'M0U400D3L',
'M0U400DAX',
'M0U400DE1',
'M0U400DE9',
'M0U400DIX',
'M0U400DM9',
'M0U400DOP',
'M0U400CUQ',
'M0U400CUY',
'M0U400CXE',
'M0U400D0A',
'M0U400D2Q',
'M0U400DDM',
'M0U400DJ6',
'M0U4006BT',
'M0U4006IK',
'M0U4006JW',
'M0U4006NO',
'M0U4006NW',
'M0U4006P8',
'M0U4006QC',
'M0U4006QG',
'M0U4006T0',
'M0U4006UK',
'M0U4006X8',
'M0U400718',
'M0U40073W',
'M0U4007BW',
'M0U400A7B',
'M0U400A9I',
'M0U400ACN',
'M0U400AFB',
'M0U400AHY',
'M0U400AHZ',
'M0U400AK6',
'M0U400AKN',
'M0U400AMI',
'M0U400AP6',
'M0U400ASM',
'M0U400AUT',
'M0U400AVA',
'M0U400AXH',
'M0U400B05',
'M0U400B0M',
'M0U400C2D',
'M0U400DG9',
'M0U400DSR',
'M0U400DSS',
'M0U400DVL',
'M0U400AS6',
'M0U400DLU',
'M0U400DVE',
'N0U4000C6',
'N0U4002KZ',
'N0U4002L9',
'N0U4002NX',
'N0U4002QL',
'N0U4002RK',
'N0U4006ID',
'N0U4006L1',
'N0U4006QD',
'N0U4006T0',
'N0U4006VN',
'N0U4006ZL',
'N0U4007BP',
'N0U40099G',
'N0U400AEW',
'N0U400AHL',
'N0U400AMW',
'N0U400AW0',
'N0U400AXC',
'N0U400B0W',
'N0U400B1C',
'end'
];
