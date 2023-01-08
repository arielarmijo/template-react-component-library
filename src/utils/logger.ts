const styles = ['color: green'].join(';');

export function log(message: string) {
  console.log(`%c%s`, styles, message);
}
