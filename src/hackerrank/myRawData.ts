'use strict';
/*
import {WriteStream, createWriteStream} from 'fs';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}
*/

/*
 * Complete the 'getResponses' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY valid_auth_tokens
 *  2. 2D_STRING_ARRAY requests
 */

/*
function getResponses(valid_auth_tokens: string[], requests: string[][]): string[] {
    // Write your code here
    const methods = ['GET', 'POST']
    let ar: string[] = []
    // console.log(requests)
    for(let j in requests) {
        const urlParams = new URLSearchParams(requests[j][1]);
        const token = urlParams.get('https://example.com/?token')
        // console.log(urlParams)
        if (!methods.includes(requests[j][0]) 
            || !valid_auth_tokens.includes(token)
            || (requests[j][0] === 'POST' && urlParams.get('csrf').length<8)
        ) {
            ar.push('INVALID');
            continue;
        }
        
        let res = 'VALID';    
        urlParams.forEach((value, key)=>{
            // console.log('', value, key)
            if (key !== 'https://example.com/?token' && key != 'csrf') {
                res += ','+key
                res += ','+value
            }
        })
        ar.push(res)
        
    }
    
    return ar;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const valid_auth_tokensCount: number = parseInt(readLine().trim(), 10);

    let valid_auth_tokens: string[] = [];

    for (let i: number = 0; i < valid_auth_tokensCount; i++) {
        const valid_auth_tokensItem: string = readLine();
        valid_auth_tokens.push(valid_auth_tokensItem);
    }

    const requestsRows: number = parseInt(readLine().trim(), 10);

    const requestsColumns: number = parseInt(readLine().trim(), 10);

    let requests: string[][] = Array(requestsRows);

    for (let i: number = 0; i < requestsRows; i++) {
        requests[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    const result: string[] = getResponses(valid_auth_tokens, requests);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
*/

export const tokens1: string[] = [
  '43i60keptn0l',
  '771u0er225fc',
  '02l44hn1s08i',
  '09759o2rq6d6',
  '9kt31icb0f5z',
  '310ct5x4k51c',
];

export const urlTestArr1 = [
  [
    'POST',
    'https://example.com/?token=43i60keptn0l&id=6lznm&name=smvqu&location=GAU&date=2020-3-11',
  ],
  [
    'POST',
    'https://example.com/?token=771u0er225fc&id=36qx8&name=fzkaqhsx&location=MAA',
  ],
  [
    'POST',
    'https://example.com/?token=02l44hn1s08i&csrf=6h8dgrw7fk&id=8h165&name=cmwup&location=GAU&date=2021-1-29',
  ],
  ['POST', 'https://example.com/?token=09759o2rq6d6&csrf=pp86n7644&id=5m47p'],
  ['GET', 'https://example.com/?token=9kt31icb0f5z&id=i6ytg&name=davybzb'],
  ['POST', 'https://example.com/?token=310ct5x4k51c&id=s6ldl'],
  [
    'POST',
    'https://example.com/?token=392c00755256&csrf=46z26iw3fsk5&id=b545k',
  ],
  [
    'GET',
    'https://example.com/?token=392c00755256&id=8uei5&name=ueumdw&location=BLR',
  ],
  [
    'POST',
    'https://example.com/?token=3u30d3556q86&csrf=jjag2r02a&id=0z2w0&name=vyzvuug&location=HYD&date=2020-12-12',
  ],
  [
    'POST',
    'https://example.com/?token=a7ehbppg5v04&csrf=o594l5dek25&id=7x080&name=thszxgyi&location=SHL',
  ],
  ['POST', 'https://example.com/?token=pc26k3ioi08e&id=e5ba9&name=yhfkqvl'],
  [
    'POST',
    'https://example.com/?token=67246z8w62yq&csrf=74vjlegh3n48&id=n3037&name=gdzk&location=GOI',
  ],
  ['POST', 'https://example.com/?token=9kt31icb0f5z&id=49dp8'],
  [
    'GET',
    'https://example.com/?token=0tsr6y86p06o&id=c3met&name=sndnb&location=GOI',
  ],
  ['GET', 'https://example.com/?token=le6f1pc2pi6b&id=20yw6'],
  [
    'GET',
    'https://example.com/?token=35in99f16qa2&id=48x8f&name=sfsx&location=GAU',
  ],
  ['POST', 'https://example.com/?token=43i60keptn0l&csrf=6l114mg3&id=2589n'],
  [
    'GET',
    'https://example.com/?token=le6f1pc2pi6b&id=14340&name=msbnalvb&location=LKO',
  ],
  [
    'GET',
    'https://example.com/?token=y7309p01nk7d&id=95rk0&name=obosu&location=GOI',
  ],
  ['POST', 'https://example.com/?token=87175u8s8828&csrf=50zp06&id=45rcv'],
  ['GET', 'https://example.com/?token=1qf55d01k3xg&id=8u4do'],
  ['POST', 'https://example.com/?token=0tsr6y86p06o&csrf=q-hf8p072^&id=s032b'],
  [
    'POST',
    'https://example.com/?token=7l9f6949de87&csrf=63l9x6s74h&id=gubj7&name=kxjxiyeu',
  ],
  [
    'POST',
    'https://example.com/?token=pc26k3ioi08e&csrf=5kq84ko0n&id=9ewqr&name=xwdaip&location=DEL&date=2020-3-6',
  ],
  ['GET', 'https://example.com/?token=vngrxmzji89v&id=drp9z'],
  [
    'POST',
    'https://example.com/?token=hk4q397b8jse&csrf=7s9g89j02f&id=s2t2p&name=qnoixwpa&location=GOI&date=2022-2-15',
  ],
  [
    'POST',
    'https://example.com/?token=pc26k3ioi08e&csrf=tgx5cu5s4q&id=gi7n1&name=sxscqqnn',
  ],
  [
    'POST',
    'https://example.com/?token=0tsr6y86p06o&csrf=8sm1930n87s&id=0mdtu&name=mskhnfjn',
  ],
  ['GET', 'https://example.com/?token=09759o2rq6d6&id=60z45&name=siha'],
  ['GET', 'https://example.com/?token=jkuw9lawq0x3&id=8c1wj&name=lfjtstvr'],
  ['POST', 'https://example.com/?token=b6rkrgo0x2ff&csrf=7nys9x&id=00z6m'],
  ['GET', 'https://example.com/?token=le6f1pc2pi6b&id=h22g9'],
  ['POST', 'https://example.com/?token=1qf55d01k3xg&csrf=jj8m1q7i&id=d7j3v'],
  [
    'POST',
    'https://example.com/?token=23onfb560509&csrf=sys40yxo7w06&id=jq984&name=rwivzay&location=BOM&date=2021-12-19',
  ],
  [
    'GET',
    'https://example.com/?token=0tsr6y86p06o&id=15mns&name=uoeg&location=GAU&date=2022-4-28',
  ],
  [
    'GET',
    'https://example.com/?token=0tsr6y86p06o&id=u2q30&name=bombsj&location=BOM',
  ],
  [
    'POST',
    'https://example.com/?token=a7ehbppg5v04&csrf=5g65r6&id=x225x&name=atml&location=DEL',
  ],
  [
    'GET',
    'https://example.com/?token=6d2euafr6s45&id=1iis9&name=dolg&location=HYD',
  ],
  ['GET', 'https://example.com/?token=6d2euafr6s45&id=j5292&name=cerv'],
  [
    'GET',
    'https://example.com/?token=v38l504o81w3&id=q9hp9&name=fqhgboe&location=MAA',
  ],
  [
    'POST',
    'https://example.com/?token=0tsr6y86p06o&csrf=k16punu5&id=s3om1&name=fzlgrr&location=AMD&date=2022-3-20',
  ],
  [
    'GET',
    'https://example.com/?token=0qh1y4skw127&id=e69k2&name=vjusurk&location=BOM&date=2020-3-29',
  ],
  ['POST', 'https://example.com/?token=a7ehbppg5v04&csrf=r84aw6h2ny3&id=p9g8a'],
  ['POST', 'https://example.com/?token=nasn444jc6xy&id=f6vum&name=rjceof'],
  ['POST', 'https://example.com/?token=a7ehbppg5v04&id=70z18'],
  [
    'POST',
    'https://example.com/?token=104p0wc60us5&id=3r9m3&name=afxfy&location=MAA&date=2021-5-10',
  ],
  [
    'POST',
    'https://example.com/?token=5r6g124cb6lv&csrf=3ynlwh826u&id=bdpt3&name=prlyrb&location=GAU',
  ],
  ['GET', 'https://example.com/?token=7l9f6949de87&id=qm414&name=anjha'],
  [
    'GET',
    'https://example.com/?token=6d2euafr6s45&id=358sl&name=eblc&location=AMD&date=2022-2-11',
  ],
  ['GET', 'https://example.com/?token=87175u8s8828&id=s98c1'],
  ['GET', 'https://example.com/?token=a7ehbppg5v04&id=49qq6&name=dzqxm'],
  [
    'GET',
    'https://example.com/?token=0k8e160316yo&id=ll3fp&name=zmls&location=AMD',
  ],
  ['POST', 'https://example.com/?token=b6rkrgo0x2ff&id=fao7f&name=uzxg'],
  [
    'GET',
    'https://example.com/?token=p6nxc5390405&id=8j0sz&name=fwkrdla&location=BLR',
  ],
];

export const tokens2: string[] = [
  '2mzw0eb30546',
  'qjn7187kb86n',
  'zwvod5612ia5',
  '2xn0y4olpmcz',
  '79133847nox5',
];

export const urlTestArr2 = [
  ['GET', 'https://example.com/?token=2mzw0eb30546&id=0b33q&name=thuw'],
  [
    'GET',
    'https://example.com/?token=qjn7187kb86n&id=s53sn&name=vaimst&location=DEL&date=2021-12-13',
  ],
  ['GET', 'https://example.com/?token=zwvod5612ia5&id=unh5q'],
  [
    'GET',
    'https://example.com/?token=2xn0y4olpmcz&id=6bk7x&name=dtfrmk&location=SHL&date=2021-7-10',
  ],
  [
    'GET',
    'https://example.com/?token=132d89402ae7&id=enca2&name=ujowauqa&location=DEL',
  ],
  [
    'GET',
    'https://example.com/?token=q3jr326u79r8&id=89x8i&name=tslpw&location=BLR&date=2022-1-16',
  ],
  ['GET', 'https://example.com/?token=pbrfh3i13fz5&id=5997s'],
  [
    'POST',
    'https://example.com/?token=t1505c8yru6f&id=7wf2m&name=sctq&location=AMD&date=2021-8-20',
  ],
  ['GET', 'https://example.com/?token=w51njc25i197&id=u8424&name=vjbul'],
  ['GET', 'https://example.com/?token=au0z00a4i0ax&id=1uk7u'],
  ['GET', 'https://example.com/?token=ysk393g978a2&id=qb166'],
  ['GET', 'https://example.com/?token=34926vzqmz84&id=68a5v&name=jbxxfv'],
  ['POST', 'https://example.com/?token=g2p38541hukx&csrf=n2olpub6&id=56f8j'],
  [
    'POST',
    'https://example.com/?token=dnhpm0zb0568&id=r716f&name=xpqydkv&location=HYD',
  ],
  [
    'GET',
    'https://example.com/?token=r5950v5wj7s8&id=37l4u&name=zsbux&location=CCU',
  ],
  [
    'POST',
    'https://example.com/?token=34926vzqmz84&csrf=d$*quu8-4^i!&id=63221&name=irapav&location=BLR',
  ],
  ['GET', 'https://example.com/?token=0h8t0831e641&id=8o030'],
  [
    'GET',
    'https://example.com/?token=0kj7292k6kc7&id=53m2r&name=mjlx&location=LKO',
  ],
  [
    'POST',
    'https://example.com/?token=mvhk55k969ax&csrf=lnnft65qm5&id=1752q&name=cwqlg&location=DEL&date=2021-5-28',
  ],
  [
    'POST',
    'https://example.com/?token=479gh1xn60b1&csrf=3y7xy9elpq&id=ftz20&name=lsdanm',
  ],
  ['POST', 'https://example.com/?token=d7c9qih8w020&id=o4p05&name=akxi'],
  ['GET', 'https://example.com/?token=d7c9qih8w020&id=7l5jp'],
  [
    'GET',
    'https://example.com/?token=132d89402ae7&id=4q92i&name=lcxgcg&location=BLR',
  ],
  [
    'POST',
    'https://example.com/?token=5iy2q394podb&csrf=43o66k6ged2j&id=w97kc&name=igbng&location=GOI',
  ],
  ['GET', 'https://example.com/?token=4999ylu3r5x1&id=5439o&name=qmvfiohe'],
  [
    'POST',
    'https://example.com/?token=j5164fhx5mc2&csrf=*k8y-hf$!0&id=psa2z&name=kbjqeeg&location=LKO&date=2020-5-29',
  ],
  [
    'POST',
    'https://example.com/?token=8tj4c65ho3eb&csrf=2i2b72435l27&id=876b0&name=chxp&location=LKO',
  ],
  [
    'POST',
    'https://example.com/?token=x6792k4g301z&csrf=z52jx220s&id=nw7if&name=azmdfg&location=GOI&date=2020-9-17',
  ],
  [
    'POST',
    'https://example.com/?token=1tmd2f0vs34a&csrf=r3j242a9gfn7&id=x806s&name=rgfvunai',
  ],
  [
    'GET',
    'https://example.com/?token=kzht963xi52z&id=lj3k9&name=begkcgou&location=DEL&date=2021-7-18',
  ],
  [
    'POST',
    'https://example.com/?token=61d4eze6x69e&id=82nt8&name=zxyajrqm&location=SHL',
  ],
  ['GET', 'https://example.com/?token=47yam38a70fb&id=su64r&name=jasjp'],
  [
    'POST',
    'https://example.com/?token=z8b1dgy0j1v9&id=m68fj&name=dzwon&location=SHL',
  ],
  [
    'POST',
    'https://example.com/?token=4po7qk34yyt0&csrf=vjayi3vwy8du&id=r3an2&name=vovzprjr&location=LKO',
  ],
  ['GET', 'https://example.com/?token=4po7qk34yyt0&id=31f7o&name=deayzzk'],
  [
    'GET',
    'https://example.com/?token=4po7qk34yyt0&id=45136&name=hloqwsc&location=GOI&date=2020-7-13',
  ],
  [
    'POST',
    'https://example.com/?token=nc943iuz9883&csrf=r7y5193eyja&id=l2n8v&name=kedqocs&location=CCU&date=2020-9-8',
  ],
  ['GET', 'https://example.com/?token=9h514yqs2m4n&id=62354&name=olei'],
  [
    'POST',
    'https://example.com/?token=c8eu5c837151&csrf=w59w6yx6b&id=34rwm&name=aympf&location=GAU',
  ],
  ['POST', 'https://example.com/?token=juguto84e2nu&csrf=3246hf6536d&id=r3c7d'],
  [
    'GET',
    'https://example.com/?token=40p7ap399n02&id=mk781&name=bvapp&location=DEL',
  ],
  ['POST', 'https://example.com/?token=9om64oil5cbm&csrf=o0869sme414&id=gq26p'],
  [
    'POST',
    'https://example.com/?token=gr7m4rrv37a9&csrf=vfuwu20s&id=n2ur0&name=csrdtvtv',
  ],
  ['GET', 'https://example.com/?token=j5164fhx5mc2&id=983o5'],
  ['POST', 'https://example.com/?token=94b0c11yfd6u&id=5eh0j&name=vwgait'],
  [
    'POST',
    'https://example.com/?token=19q08e4i7b7p&csrf=10i65p0a020&id=rdi39&name=ucmgp',
  ],
  [
    'POST',
    'https://example.com/?token=698r0d0t5k60&csrf=dh26cij59fc5&id=6l1ky&name=tdrko',
  ],
  ['GET', 'https://example.com/?token=43v79z028azq&id=a0923'],
  ['GET', 'https://example.com/?token=206n0ro8bk34&id=v8uhz&name=cpsye'],
  ['POST', 'https://example.com/?token=00s67m5j3ze3&id=xka63&name=xntubi'],
  ['GET', 'https://example.com/?token=0lvmkgylbz82&id=33367'],
  [
    'POST',
    'https://example.com/?token=3mv62463800n&csrf=o6se4dcaxh72&id=b59x9',
  ],
  [
    'POST',
    'https://example.com/?token=02tw6i4x20i8&id=s1v8r&name=sfvm&location=AMD',
  ],
  ['POST', 'https://example.com/?token=o6804kwn9df6&id=k42d3&name=cpldudkh'],
  ['POST', 'https://example.com/?token=ys21mi40v991&id=l78ob&name=hsmlaftv'],
  ['POST', 'https://example.com/?token=ols1mx17jxlo&csrf=47m61re1&id=2n502'],
  ['GET', 'https://example.com/?token=ols1mx17jxlo&id=899s7'],
  [
    'POST',
    'https://example.com/?token=nnu9870l36v1&csrf=c4-qp$heav8e&id=2fv61&name=vqsqxd&location=AMD&date=2020-8-29',
  ],
  [
    'POST',
    'https://example.com/?token=x1ko7vn75ka7&csrf=04f35045&id=8xo9s&name=vnmr',
  ],
  [
    'POST',
    'https://example.com/?token=1qv2i72k2d30&csrf=z7vu9pe42&id=223b5&name=pfnhrgjb&location=DEL',
  ],
  [
    'POST',
    'https://example.com/?token=k361ipites7c&id=q24d5&name=kmowp&location=DEL',
  ],
  [
    'GET',
    'https://example.com/?token=xc8nq72j7jt5&id=nrkrs&name=ozswr&location=BOM',
  ],
  ['GET', 'https://example.com/?token=7u5w78zkegwn&id=l00o4'],
  [
    'GET',
    'https://example.com/?token=oi62ffw4472j&id=s1d76&name=ttaaohu&location=SHL&date=2022-1-9',
  ],
  [
    'GET',
    'https://example.com/?token=5uf27z58293h&id=ox171&name=cihh&location=MAA',
  ],
  ['POST', 'https://example.com/?token=i73b84577t86&csrf=1os4cz&id=kkinr'],
  ['GET', 'https://example.com/?token=zd0a44q33q09&id=8uvw5'],
  ['GET', 'https://example.com/?token=17z82dsp97zn&id=9gv4y'],
  ['POST', 'https://example.com/?token=h9w8iy9txxuk&csrf=84jny2vyp&id=36e13'],
  ['POST', 'https://example.com/?token=js4f1oij66xf&id=8wv92&name=pxxcuk'],
  [
    'POST',
    'https://example.com/?token=6zvk01i577sq&id=w35u5&name=mqjogk&location=SHL',
  ],
  ['POST', 'https://example.com/?token=479gh1xn60b1&csrf=^36b62*ns&id=x0235'],
  ['POST', 'https://example.com/?token=120x4a9f177a&id=kc2h8'],
  [
    'POST',
    'https://example.com/?token=h7h31e0z5ft3&id=41ohn&name=cguxunc&location=SHL',
  ],
  [
    'POST',
    'https://example.com/?token=94b0c11yfd6u&csrf=3vb67e&id=8qw06&name=ywic',
  ],
  ['POST', 'https://example.com/?token=244n8ao7iedi&csrf=52292o&id=czv16'],
  ['GET', 'https://example.com/?token=ab4woc6t3648&id=2lk7i'],
  [
    'GET',
    'https://example.com/?token=got7r6gpb3yx&id=222bu&name=qfxvyat&location=CCU',
  ],
  ['POST', 'https://example.com/?token=6yob61835q0m&id=ses1w'],
  [
    'POST',
    'https://example.com/?token=bln05a2n0rl3&csrf=r0f958&id=89h31&name=axqwtq&location=GOI&date=2022-5-27',
  ],
  [
    'POST',
    'https://example.com/?token=x7115t28n0ih&id=yb3xc&name=hssqn&location=BLR',
  ],
  [
    'POST',
    'https://example.com/?token=6frkaadvrpo9&csrf=ifh3s7w87&id=5zu89&name=aztgnthv',
  ],
  [
    'GET',
    'https://example.com/?token=92ex475voj8z&id=myc0z&name=vgffcl&location=LKO',
  ],
  ['POST', 'https://example.com/?token=x9n9v5746t42&csrf=-6c2$10+&id=i11fx'],
  [
    'GET',
    'https://example.com/?token=na41164r1098&id=3mg12&name=yarig&location=LKO&date=2020-5-20',
  ],
  ['POST', 'https://example.com/?token=89p7jbf37cus&csrf=sn1hhfn088&id=pfq3n'],
  [
    'POST',
    'https://example.com/?token=i6ykgo2igabx&id=0004n&name=iarwsop&location=LKO',
  ],
  [
    'GET',
    'https://example.com/?token=8479qy5w3958&id=0d554&name=vqvvitm&location=BOM',
  ],
  ['POST', 'https://example.com/?token=7u089cn173f2&id=bd8o1'],
  [
    'POST',
    'https://example.com/?token=mq4f14rf2u6g&csrf=l0d7bfh5lkf4&id=jwg0t&name=dbasdwz&location=LKO',
  ],
  [
    'GET',
    'https://example.com/?token=6yob61835q0m&id=r51k2&name=ixaaj&location=BLR',
  ],
  [
    'POST',
    'https://example.com/?token=m34wwt2838q9&id=zppco&name=tostn&location=BLR',
  ],
  [
    'GET',
    'https://example.com/?token=em54ww2a238w&id=9ac27&name=ddpcup&location=CCU',
  ],
  [
    'POST',
    'https://example.com/?token=i4i14364vu34&csrf=0e59i2xj&id=ovkh0&name=ayfwbetx&location=DEL',
  ],
  [
    'GET',
    'https://example.com/?token=k87i75xp3599&id=mp8p4&name=ejio&location=GAU&date=2021-5-9',
  ],
  ['POST', 'https://example.com/?token=pbrfh3i13fz5&csrf=tml54t6j00&id=g8wv7'],
  ['GET', 'https://example.com/?token=k4n548538ujo&id=1jpr9&name=cwrkl'],
  [
    'GET',
    'https://example.com/?token=cvq9fb5rshxs&id=21yk3&name=icwbldx&location=LKO',
  ],
  ['GET', 'https://example.com/?token=50wis0ad310l&id=id344'],
  [
    'POST',
    'https://example.com/?token=79133847nox5&csrf=r019k*1p&id=3g3k9&name=yyjbgdu&location=MAA',
  ],
];

export const tokens3: string[] = [
  '43i60keptn0l',
  '771u0er225fc',
  '02l44hn1s08i',
  '09759o2rq6d6',
];

export const urlTestArr3 = [
  [
    'GET',
    'https://example.com/?token=n970o186481z&id=6gzx5&name=gqtwqits&location=CCU',
  ],
  ['GET', 'https://example.com/?token=129l3210lqje&id=6fuih'],
  ['GET', 'https://example.com/?token=px49541v42au&id=2g9q9'],
  ['GET', 'https://example.com/?token=w6dwzeb4z2v4&id=7e8zy'],
  ['GET', 'https://example.com/?token=651e2v8f8q1d&id=36946&name=lpbzi'],
  [
    'POST',
    'https://example.com/?token=9g7m602tg9b6&csrf=6zz74a63zs1m&id=zz888',
  ],
  ['GET', 'https://example.com/?token=che09046qbk4&id=e52r9'],
  ['GET', 'https://example.com/?token=347vc2g4uli3&id=788sa&name=yrab'],
  [
    'GET',
    'https://example.com/?token=di809tm54r01&id=137k5&name=elpoa&location=DEL',
  ],
  ['GET', 'https://example.com/?token=lxiyq8e813l8&id=41459&name=rmoniu'],
  ['GET', 'https://example.com/?token=62744eufs7z3&id=j414c'],
  [
    'GET',
    'https://example.com/?token=009w8359guin&id=nq3kw&name=rcnzsj&location=BOM',
  ],
  [
    'POST',
    'https://example.com/?token=w486eao4ws3m&csrf=y53ama013e&id=863lk&name=uwvs&location=DEL',
  ],
  [
    'GET',
    'https://example.com/?token=tulbt6ip1woh&id=2deqp&name=vbvi&location=DEL&date=2022-7-18',
  ],
  ['POST', 'https://example.com/?token=b4h5wa472j3c&id=eyl55'],
  ['GET', 'https://example.com/?token=1h88sp52z675&id=2yr20'],
  ['GET', 'https://example.com/?token=8gsvz21t443i&id=p2zo7'],
  [
    'GET',
    'https://example.com/?token=c26643legcew&id=10774&name=jydkehpn&location=BOM&date=2022-4-20',
  ],
  [
    'GET',
    'https://example.com/?token=p6k5984qq1m0&id=987n1&name=jhuzuim&location=SHL',
  ],
  [
    'GET',
    'https://example.com/?token=l0yitc2m000i&id=e7461&name=kgesg&location=SHL&date=2021-9-9',
  ],
  [
    'GET',
    'https://example.com/?token=5u463a1in75w&id=x9014&name=rjzmgl&location=MAA',
  ],
  [
    'GET',
    'https://example.com/?token=6f3kipd5v8yo&id=91h16&name=eezcoar&location=BLR&date=2020-3-24',
  ],
  ['GET', 'https://example.com/?token=1t26l1rh8h25&id=tk2q8&name=wckqnat'],
  [
    'GET',
    'https://example.com/?token=1yc5535kyo5y&id=u2673&name=afmbmqdf&location=DEL&date=2020-10-2',
  ],
  ['GET', 'https://example.com/?token=76nv71jglpst&id=9o19f&name=isfp'],
  ['GET', 'https://example.com/?token=uzi2942w5630&id=85x44&name=qajtt'],
  [
    'GET',
    'https://example.com/?token=fvnx9vvjslk5&id=1tn93&name=dzvlgrpr&location=GAU',
  ],
  [
    'GET',
    'https://example.com/?token=9m585se0e630&id=nl096&name=dbvltuuk&location=LKO&date=2022-2-22',
  ],
  ['GET', 'https://example.com/?token=3knos8231p3p&id=2t4jc&name=fwasekc'],
  ['GET', 'https://example.com/?token=wa9ahkt9g9gg&id=8n3tr&name=rirlfco'],
  [
    'GET',
    'https://example.com/?token=es23i554teaz&id=xvof3&name=tvch&location=GAU',
  ],
  [
    'GET',
    'https://example.com/?token=17r6t6z9ca48&id=g7ga3&name=veuqzlsp&location=GAU&date=2020-4-14',
  ],
  [
    'GET',
    'https://example.com/?token=n939yd795549&id=3254c&name=npyaiqi&location=GAU&date=2020-12-22',
  ],
  ['GET', 'https://example.com/?token=e75s2n1i7id1&id=51y20&name=lcfbv'],
  ['GET', 'https://example.com/?token=ez17gavyu126&id=t37q7&name=zyaxgy'],
  [
    'GET',
    'https://example.com/?token=k17bsoosj2ks&id=1ew3j&name=rvhg&location=AMD&date=2020-2-6',
  ],
  ['GET', 'https://example.com/?token=vr863d7mtqxd&id=ioqd2&name=oebsdvd'],
  ['GET', 'https://example.com/?token=4f6wwors278m&id=8zi8d'],
  [
    'GET',
    'https://example.com/?token=fc52u0i2u970&id=h145p&name=cieqj&location=GOI',
  ],
  ['GET', 'https://example.com/?token=ebi5b8mp0m30&id=361e2'],
  [
    'GET',
    'https://example.com/?token=3jdmnwiocr8q&id=570fp&name=svajzbww&location=LKO',
  ],
  [
    'GET',
    'https://example.com/?token=ttivi5u0dsb1&id=36u0y&name=lzdyxy&location=GOI&date=2022-11-10',
  ],
  ['GET', 'https://example.com/?token=x6g23a9mcl09&id=a4rde&name=gavdrr'],
  ['GET', 'https://example.com/?token=ow0u57n8ox30&id=9x723&name=bchf'],
  [
    'GET',
    'https://example.com/?token=8b710yfjg3d2&id=1272q&name=kkektj&location=SHL',
  ],
  [
    'GET',
    'https://example.com/?token=e7n35x409s79&id=g56h4&name=ubhv&location=CCU',
  ],
  ['POST', 'https://example.com/?token=204fzaq72a86&csrf=o661w8ao&id=ub6a8'],
  [
    'GET',
    'https://example.com/?token=5185h3z6tizq&id=e66w6&name=pske&location=GAU&date=2022-3-28',
  ],
  ['GET', 'https://example.com/?token=qgj676rx7s1q&id=yb9o3&name=kdbdhh'],
  [
    'GET',
    'https://example.com/?token=9ja8n4b67090&id=tede2&name=eohlaul&location=MAA',
  ],
  ['GET', 'https://example.com/?token=619m83xhwy85&id=v2t38&name=woaw'],
  [
    'GET',
    'https://example.com/?token=fw27ah0co1jh&id=u5sr0&name=tuoc&location=DEL',
  ],
  ['GET', 'https://example.com/?token=4fq9i24wnk64&id=zya7m&name=ydnxvsgx'],
  ['GET', 'https://example.com/?token=lkz226f1480h&id=iu4pe'],
  [
    'GET',
    'https://example.com/?token=ma6vk74fa4gj&id=i652f&name=epqaxwcj&location=GOI',
  ],
  ['GET', 'https://example.com/?token=410uxyyu615k&id=0c87s&name=vtcwleg'],
  [
    'GET',
    'https://example.com/?token=v0zc0hq5u3j7&id=4z76f&name=xefps&location=GAU&date=2020-10-16',
  ],
  [
    'GET',
    'https://example.com/?token=8s1v09goha16&id=az45t&name=wirtitps&location=LKO',
  ],
  [
    'GET',
    'https://example.com/?token=1q006yg57k8v&id=ur06f&name=apszouj&location=CCU',
  ],
  [
    'GET',
    'https://example.com/?token=1ls6x83mb3da&id=gyw1a&name=lwasror&location=BLR',
  ],
  ['GET', 'https://example.com/?token=5zs9e2e3n8e8&id=z2g8l&name=hwid'],
  ['GET', 'https://example.com/?token=i5i17f9t3re4&id=mb98h'],
  [
    'POST',
    'https://example.com/?token=2opd26lf5k68&csrf=1xsq17&id=s1l6l&name=qixnc',
  ],
  ['GET', 'https://example.com/?token=1i57r5mzl0o2&id=85kry'],
  ['GET', 'https://example.com/?token=y2r562l44oh2&id=thv90&name=cxod'],
  [
    'GET',
    'https://example.com/?token=2bdg47ho9077&id=h952v&name=xgxxtli&location=AMD&date=2022-11-16',
  ],
  [
    'GET',
    'https://example.com/?token=00295p124nu4&id=o6i46&name=yxcbnsd&location=GAU',
  ],
  ['GET', 'https://example.com/?token=2czm54ymnjjw&id=6n860'],
  [
    'GET',
    'https://example.com/?token=6l99sps4903e&id=i7798&name=bxsw&location=BOM&date=2021-8-11',
  ],
  [
    'GET',
    'https://example.com/?token=9g7m602tg9b6&id=64z83&name=rcwae&location=CCU',
  ],
  [
    'GET',
    'https://example.com/?token=w517v186z02z&id=c4536&name=kmlvidm&location=SHL',
  ],
  ['GET', 'https://example.com/?token=j2938xzd7a19&id=9pa7d'],
  ['GET', 'https://example.com/?token=pud2ch5r2w61&id=5by9j&name=aekk'],
  ['GET', 'https://example.com/?token=002a240o08h3&id=3f547&name=dfkaxpzm'],
  [
    'GET',
    'https://example.com/?token=kf2vcjsx6854&id=v560x&name=cwicvhna&location=GAU',
  ],
  [
    'GET',
    'https://example.com/?token=8736jy30079f&id=8t00x&name=cslk&location=GAU&date=2020-5-23',
  ],
  ['GET', 'https://example.com/?token=gfal8r7otxdl&id=r1148&name=gjgkeklo'],
  ['GET', 'https://example.com/?token=qluc968fh51w&id=28xz4&name=zyqvyzog'],
  [
    'POST',
    'https://example.com/?token=69j487f45av4&csrf=hbi4gk2ue&id=970p7&name=qqxqrdcc',
  ],
  [
    'GET',
    'https://example.com/?token=4tnx86x9yraf&id=203ei&name=okists&location=MAA&date=2022-4-28',
  ],
  [
    'GET',
    'https://example.com/?token=19my08vg5m12&id=uv022&name=lhenpum&location=GAU',
  ],
  [
    'GET',
    'https://example.com/?token=954cg7pf71tv&id=u71e1&name=zuilgtk&location=BOM',
  ],
  [
    'GET',
    'https://example.com/?token=yf13741j1zh0&id=b9of8&name=lilxp&location=BOM',
  ],
  [
    'GET',
    'https://example.com/?token=v441l8l04fok&id=87qg4&name=qerdzs&location=HYD&date=2021-9-23',
  ],
  ['GET', 'https://example.com/?token=vlv408286fr5&id=kwlqh'],
  [
    'GET',
    'https://example.com/?token=k0d2yx7wji17&id=n6f47&name=hflq&location=AMD',
  ],
  ['GET', 'https://example.com/?token=k0d2yx7wji17&id=66hsc&name=ljauwfm'],
  [
    'GET',
    'https://example.com/?token=9se75m691705&id=6tas8&name=pwowbwna&location=SHL',
  ],
  ['GET', 'https://example.com/?token=0wmg807835q0&id=w7459&name=vrgvy'],
  ['GET', 'https://example.com/?token=4s4m008697md&id=7ry36'],
  [
    'GET',
    'https://example.com/?token=19my08vg5m12&id=d37a0&name=euesld&location=MAA',
  ],
  ['GET', 'https://example.com/?token=yi8h6wcib4m5&id=oe6d0&name=jssqxqb'],
  ['GET', 'https://example.com/?token=qnf7d397ie3d&id=z9931'],
  ['GET', 'https://example.com/?token=69g08i5o592p&id=ce2g2&name=psmjg'],
  [
    'GET',
    'https://example.com/?token=nz5d05j79rvo&id=p168j&name=oocprp&location=AMD',
  ],
  [
    'GET',
    'https://example.com/?token=7fk837u57028&id=rvt40&name=xifezuo&location=SHL',
  ],
  [
    'GET',
    'https://example.com/?token=y0gmciv1h83k&id=82myc&name=krwedkhm&location=BLR&date=2022-11-27',
  ],
  ['GET', 'https://example.com/?token=zf960wv41h7c&id=7trkh'],
  [
    'GET',
    'https://example.com/?token=fef82gx45vzy&id=bza7x&name=sjtz&location=SHL',
  ],
  [
    'POST',
    'https://example.com/?token=xuc5dk8bo71v&id=wlr18&name=tfapvr&location=HYD&date=2022-11-1',
  ],
];
