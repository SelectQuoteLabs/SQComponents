# Section, Section Header, Section Body

Simple wrapper components.

## Design Notes

- You can specifically override `<SectionHeader>`'s default `font-size: 1.4rem`. You could also use an `<h1>`, `<h2>`, etc., but be aware this will impact the distance between text and border-bottom!

## Technical Notes

- `<Section>` is the container component using the semantic HTML tag of the same name. It always renders its children, `SectionHeader` and `SectionBody`, with `flex-direction: column`.
- `<SectionHeader>` takes a `title` prop for the header text, and justifies the title + children via space-between. Pass children for whatever you want on the right side of the header. For example, a button (see story 'Section With Action Header'), or to control the styles of the container itself, use the `containerStyles` prop (see story Section With Header Style Overrides).
- `<SectionHeader>` also takes a `type` prop, which changes the color and iconography of the informative heading text. The options are similar to bootstrap: `info`, `success`, `warning`, `error`. The default is `null` and will not change the color or icon.
- `<SectionBody>` ensures the `margin-left` provides consistent indentation relative to `<SectionHeader>`.
