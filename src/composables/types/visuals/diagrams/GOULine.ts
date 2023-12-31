import { GOUColor } from "@/composables/types/GOUColor";
import GOUPosition from "@/composables/types/GOUPosition";
import GOUDiagram from "@/composables/types/visuals/GOUDiagram";

class GOULine extends GOUDiagram {
  start: GOUPosition;
  end: GOUPosition;
  thick: number;
  constructor(
    start: GOUPosition,
    end: GOUPosition,
    thick: number,
    color?: GOUColor
  ) {
    super(color);
    this.start = start;
    this.end = end;
    this.thick = thick;
    this.width = this.getMaxX() - this.getMinX();
    this.height = this.getMaxY() - this.getMinY();
  }
  getMinX(): number {
    return Math.min(this.start.px, this.end.px);
  }
  getMaxX(): number {
    return Math.max(this.start.px, this.end.px);
  }
  getMinY(): number {
    return Math.min(this.start.py, this.end.py);
  }
  getMaxY(): number {
    return Math.max(this.start.py, this.end.py);
  }
  isInside(): boolean {
    return false;
  }
}

export default GOULine;
