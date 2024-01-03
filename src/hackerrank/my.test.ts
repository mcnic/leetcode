import {tokens1, tokens2, urlTestArr1, urlTestArr2} from './myRawData';

/*
 * Complete the 'getResponses' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY valid_auth_tokens
 *  2. 2D_STRING_ARRAY requests
 */

function getResponses(
  valid_auth_tokens: string[],
  requests: string[][]
): string[] {
  // Write your code here
  const methods = ['GET', 'POST'];
  let ar: string[] = [];
  // console.log(requests);
  for (let j in requests) {
    const reqArr: string[] = requests[j][1]?.split('?');
    const req: string = reqArr[1] || '';
    const urlParams = new URLSearchParams(req);
    const token = urlParams.get('token');
    // console.log(urlParams);
    if (
      !methods.includes(requests[j][0]) ||
      !token ||
      !valid_auth_tokens.includes(token)
    ) {
      ar.push('INVALID token');
      continue;
    }

    const csrf = urlParams.get('csrf');
    if (requests[j][0] === 'POST' && csrf && csrf.length < 8) {
      ar.push('INVALID csrf');
      continue;
    }

    let res = 'VALID';
    let isValid = true;
    urlParams.forEach((value, key) => {
      // console.log('', value, key)
      if (key !== 'token' && key != 'csrf') {
        res += ',' + key;
        res += ',' + value;
      }
      let error = false; //todo: ckeck for correct kay, value etc.
      if (error) {
        isValid = false;
      }
    });
    ar.push(isValid ? res : 'INVALID');
  }

  return ar;
}

test('IBM test', () => {
  // expect(getResponses(tokens1, urlTestArr1)).toEqual(['VALID,id,1', 'INVALID']);
  expect(getResponses(tokens2, urlTestArr2)).toEqual(['VALID,id,1', 'INVALID']);
});
