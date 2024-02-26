'use strict';

/*
 * Complete the 'getTotalExecutionTime' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY logs
 */

function getTotalExecutionTime(n: number, logs: string[]): number[] {
  const res: number[] = new Array(n);

  const pars = logs.map(el => {
    const p = el.split(':');
    return {
      numProc: Number(p[0]),
      op: p[1],
      time: Number(p[2]),
    };
  });

  // console.log(n, logs, pars);

  const all: number[] = [];

  pars
    .filter(el => el.op === 'start')
    .forEach(el => {
      const num = el.numProc;
      const start = el.time;
      const end = pars.find(
        el => el.numProc === num && el.op === 'end' && el.time >= start
      )?.time!;

      // console.log(num, start, end);
      for (let l = start; l <= end; l++) all[l] = num;
    });

  for (let i = 0; i < n; i++) res[i] = all.filter(el => el === i).length;

  // console.log('all', all, res);

  return res;
}

test('IBM test 2', () => {
  const l = [
    '0:start:0',
    '1:start:3',
    '1:end:6',
    '1:start:8',
    '2:start:9',
    '3:start:11',
    '3:end:11',
    '2:end:12',
    '1:end:15',
    '0:end:17',
  ];
  expect(getTotalExecutionTime(4, l)).toEqual([6, 8, 3, 1]);
});
