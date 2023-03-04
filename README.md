# markdownlint-rule-max-one-sentence-per-line

A custom markdownlint rule to enforce maximum one sentence per line.

## Overview

When writing documentation, line-length often is not the most important rule.
Some projects tend to ignore line-length and prefer an approach to limit each line to maximum one sentence.
For example this allows:

* **easy rearranging of sentences**:
    Most IDEs support to move whole lines with cursor keys.
    When there is only one sentence per line, you can easier move them around, and rearrange the structure.
* **easier detection of complicated sentence structures**:
    If a sentence fits into one line, you can easily spot structures, which are too complicated or might need improvement.

For a better overview it often requires to split a sentence even over multiple lines, which we will not interfere with.
This rule will only enforce maximum one sentence per line, but it will not rejoin sentences and adapt the structure, that one sentence will be on just one line.

## Installation

Use following command to install

```console
npm install markdownlint-rule-max-one-sentence-per-line --save-dev
```

## Configuration

Tags: `sentences`

Parameters:

* `context_length`: Size of context provided in error message (`integer`,
  default `14`)
* `ignored_words`: Words which will be ignored during the detection
  (`string[]`, default `["ie","i.e","eg","e.g","etc","ex"]`)
* `line_endings`: Recognized line-endings (`string[]`, default `[".","?","!"]`)
* `sentence_start`: Regex for sentence start (`string`, default
  `^\s+(\w|[*_'"])`)
* `indentation`: Defines the used indentation (`string`, default
  ``)

Fixable: Some violations can be fixed by tooling

```diff
- First sentence. Second sentence.
+ First sentence.
+ Second sentence.

- > First sentence. Second sentence.
+ > First sentence.
+ > Second sentence.

- * First sentence. Second sentence.
+ * First sentence.
+   Second sentence. <!-- indentation based on provided configuration -->
```


## Usage

For usage with certain tools, please refer to the documentation of [markdownlint](https://github.com/davidAnson/markdownlint), markdownlint-cli or the tool you are using.

## Attribution

This code was/is based on [sentences-per-line](https://github.com/JoshuaKGoldberg/sentences-per-line) by @JoshuaKGoldberg.
Instead of parsing per line, we are utilizing the tokenization of markdownlint.
Without the groundwork of `sentences-per-line` this rule would be for certain not in the state it is currently.
