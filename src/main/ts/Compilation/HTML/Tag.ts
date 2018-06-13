import {prepareTextOrHTML, TextOrHTML} from "../../Util/HTML/HTMLValue";

export function generateCoreAttrs ({ID, classes = [], tooltip}: TagConfig) {
  let IDAttr = ID != undefined ? `id="${prepareTextOrHTML(ID)}"` : "";
  let classesAttr = `class="${classes.map(prepareTextOrHTML).join(" ")}"`;
  let titleAttr = tooltip != undefined ? `title="${prepareTextOrHTML(tooltip)}"` : "";

  return `${IDAttr} ${classesAttr} ${titleAttr}`;
}

export interface TagConfig {
  ID?: TextOrHTML;
  classes?: ReadonlyArray<TextOrHTML>;
  tooltip?: TextOrHTML;
}
