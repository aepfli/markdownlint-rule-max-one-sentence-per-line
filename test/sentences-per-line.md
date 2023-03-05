# max-one-sentence-per-line

## Text

This should? Produce a violation.{max-one-sentence-per-line}

So should! This example.{max-one-sentence-per-line}

Abbreviations (e.g. like) these (i.e. should) not.

"Sentences in." Quotes should, not.

"Sentences ending after". Quotes should.{max-one-sentence-per-line}

Pausing... for... thought... should, but it could be added to the `ignored words`?{max-one-sentence-per-line}

This rule does nothing if a sentence is
already wrapped.

This rule does weird things if `a sentence is
already wrapped. and contains code.` It will not wrap.

> I am not sure, how this behaves in quotes. Should it wrap and indent?{max-one-sentence-per-line}

    How does it behave with text with identation. How is the result.


* this is a bullet list. It should be wrapped but not indented.{max-one-sentence-per-line}

1. A ordered list

    * with a child element. containing sentence, the result looks weird.{max-one-sentence-per-line}

2. another list item

    How does it behave with text with indentation. for lists?{max-one-sentence-per-line}

3. an ordered list item. with a sentence, should also break properly.{max-one-sentence-per-line}

## Code Blocks

### Lower case

Lorem ipsum dolor sit amet. consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet. consetetur sadipscing elitr. consetetur sadipscing elitr. consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet! consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet? consetetur sadipscing elitr.{max-one-sentence-per-line}

### Upper case

Lorem ipsum dolor sit amet. Consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet! Consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet? Consetetur sadipscing elitr.{max-one-sentence-per-line}

### Special beginnings

Theoretically a sentence does not need to start with a letter.

Lorem ipsum dolor sit amet. 'Consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet! "Consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet? *Consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet? _Consetetur sadipscing elitr.{max-one-sentence-per-line}

### Multiple spaces

Lorem ipsum dolor sit amet.  consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet!  consetetur sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit amet?  consetetur sadipscing elitr.{max-one-sentence-per-line}

## Code blocks

Lorem ipsum dolor sit `amet. consetetur` sadipscing elitr.
Lorem ipsum dolor sit `amet. consetetur.` sadipscing elitr.
Lorem ipsum dolor sit `amet.` consetetur. sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit ``amet! consetetur`` sadipscing elitr.
Lorem ipsum dolor sit ``amet! consetetur!`` sadipscing elitr.
Lorem ipsum dolor sit ``amet!`` consetetur! sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit ```amet! consetetur``` sadipscing elitr.
Lorem ipsum dolor sit ```amet! consetetur!``` sadipscing elitr.
Lorem ipsum dolor sit ```amet!``` consetetur! sadipscing elitr.{max-one-sentence-per-line}

### Code Blocks with multiple spaces

Lorem ipsum dolor sit `amet.  consetetur` sadipscing elitr.
Lorem ipsum dolor sit `amet.  consetetur.` sadipscing elitr.
Lorem ipsum dolor sit `amet.` consetetur.  sadipscing elitr.{max-one-sentence-per-line}
Lorem ipsum dolor sit `amet!  consetetur` sadipscing elitr.
Lorem ipsum dolor sit `amet!  consetetur!` sadipscing elitr.
Lorem ipsum dolor sit `amet!` consetetur!  sadipscing elitr.{max-one-sentence-per-line}

### multiple lines

Lorem ipsum dolor sit `amet.
consetetur` sadipscing elitr.

Lorem ipsum dolor sit `amet.
consetetur.` sadipscing elitr.

Lorem ipsum dolor
`sit amet. consetetur.` sadipscing. elitr.{max-one-sentence-per-line}

## Special cases, which we do not detect

Lorem ipsum dolor sit `amet.
consetetur. dd` sadipscing elitr.

Lorem ipsum dolor `sit
amet. consetetur.`
sadipscing. elitr.{max-one-sentence-per-line}

