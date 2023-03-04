// @ts-check

"use strict";

const test = require("ava").default;
const {
  indentFor
} = require("../helper");

const indentations = {
  "one-space": " ",
  "two-spaces": "  ",
  "tab": "\t",
  "two-tabs": "\t\t",
  "-----": "-----"
};

for (const [ key, indentation ] of Object.entries(indentations)) {
  test(
    "normal text with '" + key + "'",
    (t) => {
      t.is(
        indentFor("zero identation", indentation),
        indentation.repeat(0));
      t.is(
        indentFor(indentation + "two identation", indentation),
        indentation.repeat(1));
    });

  test(
    "lists with '" + key + "'",
    (t) => {
      t.is(
        indentFor("* two identation", indentation),
        indentation.repeat(1));
      t.is(
        indentFor("- two identation", indentation),
        indentation.repeat(1));
      t.is(
        indentFor("1. three identation", indentation),
        indentation.repeat(1));
      t.is(
        indentFor(indentation + "* the `* ` should also count", indentation),
        indentation.repeat(2));
      t.is(
        indentFor(indentation + "- the `- ` should also count", indentation),
        indentation.repeat(2));
      t.is(
        indentFor(indentation + "1. the `1. ` should also count", indentation),
        indentation.repeat(2));
    });

  test(
    "quotes with '" + key + "'",
    (t) => {
      t.is(
        indentFor(">one identation", indentation),
        ">");
      t.is(
        indentFor(indentation + "> the `> ` should also count", indentation),
        indentation + "> ");
      t.is(
        indentFor("> two identation", indentation),
        "> ");
    }
  );
}

