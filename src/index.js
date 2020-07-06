console.log('hola mundo');

const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
  key5: 'value 5',
};

const arr = [1, 2, 3];

arr
  .filter((number, index) => number === number && index >= 0)
  .map((number, index) => number * index)
  .filter((number) => number > 1);
