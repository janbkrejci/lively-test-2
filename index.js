'format esm';
import { part } from 'lively.morphic';
import { Outer } from './ui/outer.cp.js';

export async function main () {
  // new MyRectangle().openInWorld();
  part(Outer).openInWorld();
}
