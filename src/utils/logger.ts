const prefixStyles = [
  'color: white',
  'background-color: gray',
  'border-radius: 10px',
  'padding: 5px 10px'
].join(';');
const messageStyles = ['color: green'].join(';');

export function log(message: string) {
  console.log(`%c%s%c %s`, prefixStyles, 'LOGGER', messageStyles, message);
}
