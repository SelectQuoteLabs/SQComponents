# Section, Section Header, Section Body
Simple wrapper components.

## Design Notes
- You can specifically override `<SectionHeader>`'s default `font-size: 1.4rem`. You could also use an `<h1>`, `<h2>`, etc., but be aware this will impact the distance between text and border-bottom!

## Technical Notes
- These are intentionally simple and composable.
- `<Section>` is the container component using the semantic HTML tag of the same name. It always renders its children, `SectionHeader` and `SectionBody`, with `flex-direction: column`.
- `<SectionHeader>` can be given a simple string child to render the default header text or you can compose other things into it and get, for example, a button at the right end of the header (see story 'Section With Action Header').
- `<SectionBody>` ensures the `margin-left` provides consistent indentation relative to `<SectionHeader>`.
