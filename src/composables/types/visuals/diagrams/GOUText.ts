import { GOUColor } from "../../GOUColor";
import GOUPosition from "../../GOUPosition";
import GOUDiagram from "../GOUDiagram";

class GOUText extends GOUDiagram {
  text: string;
  fontSize: number;
  fontFamily?: string;
  constructor(
    text: string,
    fontSize: number,
    fontFamily?: string,
    color?: GOUColor
  ) {
    super(color);
    this.text = text;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
  }
  getMinX(): number {
    return 0;
  }
  getMaxX(): number {
    return this.text.length * (this.fontSize ?? 0);
  }
  getMinY(): number {
    return 0;
  }
  getMaxY(): number {
    return this.fontSize ?? 0;
  }
  isInside(position: GOUPosition): boolean {
    if (position.px < this.getMinX()) {
      return false;
    }
    if (position.px > this.getMaxX()) {
      return false;
    }
    if (position.py < this.getMinY()) {
      return false;
    }
    if (position.py > this.getMaxY()) {
      return false;
    }
    return true;
  }
}
export default GOUText;