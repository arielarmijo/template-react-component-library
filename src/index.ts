const styles = ['color: green'].join(';');

export default function helloWorl (message: string) {
  console.log(`%c%s`, styles, message);
}
