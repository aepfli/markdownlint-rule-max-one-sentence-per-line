// @ts-check

"use strict";

const indentFor = (string, indentation) => {
  // eslint-disable-next-line max-len
  const regex = new RegExp("^(?<indents>(" + indentation + ")*)(?<adds>- |> |>|\\* |\\d+\\. )?");
  const match = regex.exec(string);
  if (!match) {
    return "";
  }
  let indentSize = 0;
  if (match.groups.indents) {
    indentSize = match.groups.indents.length / indentation.length;
  }
  if (match.groups.adds) {
    if (match.groups.adds.includes(">")) {
      return indentation.repeat(indentSize) + match.groups.adds;
    }
    indentSize++;
  }
  return indentation.repeat(indentSize);
};

module.exports.indentFor = indentFor;
