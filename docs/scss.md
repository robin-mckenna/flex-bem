# SCSS Features

### Nesting

Nesting code within brackets is a semantic way of creating styles.

For example...

```
nav {
  ul {
      list-style: none;
      margin: 0;
    }
}
```

is translated to...

```
nav ul {
    list-style: none;
    margin: 0;
}
```

### Variables

Defining variables improves allows for the colour theme to be changed in only one place.

Variables are defined like so:

`$myFavouriteColour: #fafafa; `

Variables can be used like so:

```
body {
    background-color: $myFavouriteColour;
}
```

### SCSS has a number of built in functions including:

- `lighten($color, $amount)`
- `darken:($color, $amount)`
- `invert:($color, $weight)`

### Calculations

- Calculations can be performed on compatible units.
    - For example...

```
.google {
    height: 80px - 10px;
}
```

![image](https://user-images.githubusercontent.com/51911441/68580449-4fcd7500-046e-11ea-86e0-a2adf82ed261.png)

### Mixins and includes

Mixins allow reuse of a group of styles. They can be defined using `@mixin` and used with `@include` Mixins can take arguments and be nested.

**Mixin:**

- Created `stylesheets/custom_mixins/_list-mixins.scss`

```
@mixin reset-margin-padding {
  margin: 0;
  padding: 0;

}
```

```
.twitter {
    @include reset-margin-padding;
}
```

**Important:** To use a mixin include the file with the import statement like so:

`@import "stylesheets/custom_mixins/list-mixins";`
