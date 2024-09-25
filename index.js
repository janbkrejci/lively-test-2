'format esm';
export * from './ui/my-rectangle.cp.js';
import { MyRectangle } from './ui/my-rectangle.cp.js';

export async function main () {
  // new MyRectangle().openInWorld();
  console.log('MyRectangle', MyRectangle);
}
