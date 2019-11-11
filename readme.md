# Flex-Bem

[SCSS Introduction](docs/scss.md)

This is a mini project that showcases the box model, flexbox, BEM (block element modifier) and scss.

![image](https://user-images.githubusercontent.com/51911441/68110559-26986c00-fee5-11e9-9818-dc55079bd24d.png)

## Box Model

The box model is the idea that every element is a box that has a margin, border, padding and content.

Block boxes and inline boxes behave differently in terms of page flow and in relation to other boxes on the page.

![](https://i.imgur.com/rEarWEO.png)

#### Completed:

Read and played with example code

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

**If a box is defined as a block, it will behave in the following ways:**

- The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available.
- The box will break onto a new line.
- The width and height properties are respected.
- Padding, margin and border will cause other elements to be pushed away from the box

**If a box has an outer display type of inline, then:**

- The box will not break onto a new line.
- The width and height properties will not apply.
- Padding, margin and borders will apply but will not cause other inline boxes to move away from the box.

*The outer display type details whether the box is block or inline The inner display type can be changed using the display property. Block and inline are sometimes refered to as normal flow.*

**Parts of a box:**

- Content box: The area where your content is displayed, which can be sized using properties like width and height.
- Padding box: The padding sits around the content as white space; its size can be controlled using padding and related properties.
- Border box: The border box wraps the content and any padding. Its size and style can be controlled using border and related properties.
- Margin box: The margin is the outermost layer, wrapping the content, padding and border as whitespace between this box and other elements. Its size can be controlled using margin and related properties.

Devtools in the browser make understanding the box model easier.

- **Margin**
    - Invisible space around the box
    - Pushes other elements away from the box
    - Can have positive and negative values
    - **Margin Collapsing:**
        - If you have two elements whose margins touch , those margins combine to become one margin
- **Border**
    - The border is drawn between the margin and the padding of the box
    - The size of the border is added to the width and height of the box
- **Padding**
    - Sits between the border and the content area
    - Can't have negative padding
    - Typically used to push the content away from the border

## Flexbox

### Flexbox

The aim of flexbox is to give the container the ability to alter the width and height of its items to accomodate different screen sizes. The flex container expands items to fill available space or shrinks to prevent overflow.

A flexbox container has a main axis and a cross axis:

![](https://i.imgur.com/j7WfZPc.png)

*Flex-direction changes the main axis*


### Completed:

https://flexboxfroggy.com/

http://www.flexboxdefense.com/

### Container Properties
- display
    - Define a flex container
- flex-direction
    - Extablishes the main axis
        - row
        - row-reverse
        - column
        - column-reverse
- flex-wrap
    - By default, items try to fit onto one line. flex-wrap allows the items to wrap as needed.
- flex-flow
    - **Shorthand** for flex-direction and flex-wrap properties
- justify-content
    - Defines alignment along the main axis

![](https://i.imgur.com/pGTdNcI.png)

- align-items
    - Defines default behaviour for how items are laid out along the cross axis on the current line.
- align-content
    - Aligns a flex containers lines within which there is extra space in the cross-axis

### Item properties
- Order
    - The order in which flex items are laid out
- flex-grow
    - Defines the ability for a flex item to grow if necessary. Accepts a value that serves as a proportion. For example if all items have flex-grow set to 1, then they will take up an equal ammount of space.
- flex-shrink
    - Defines ability for an item to shrink
- flex-basis
    - Defines default size of an element before the remaining space is distributed
- flex
    - Shorthand for flow-grow, flex-shrink and flex-basis
- align-self
    - Allows to overide alignment of individual items

## BEM (Block, Element, Modifier)

BEM is a popular naming convention for css.

**Completed / Resources:**

https://seesparkbox.com/foundry/bem_by_example
http://getbem.com/naming/


A BEM class name includes up to three parts.

1. Block: The outermost element of the component is defined as the block.
    - Encapsulates a standalone entity that is meaningful on its own.
    - Although they can be nested, symantically blocks are equal.
3. Element: Inside the block may be one or more children called elements
4. Modifier: A block or element may have a variation signified by a modifier.

The convention is:

block__element--modifier

- Don’t omit class names from the child elements in your HTML. That will force you to use a selector with increased specificity to style those bare elements inside the component

BEM should not be used to indicate structural depth.

### Block

- Any dom node can be a block
- Encapsualtes standalone entity
- Can be nested and interact with other blocks, but semantically remain equal

##### Naming

`.block`

##### HTML

`<div class="block">...</div>`

##### CSS

`.block { color: #042; }`

### Element

- A part of a block
- Parts of a block have no standalone meaning
- Any element is semantically tied ot its block

##### Naming

- Formed as block name plus two underscores plus element name

`.block__elem`

##### HTML

```
<div class="block">
...
   <span class="block__elem"></span>
</div>
```

##### CSS

- No dependency on other blocks / elements

`.block__elem { color: #042; }`

### Modifier

- Flags on blocks or elements
- Use them to change **appearance**, **behaviour** or **state**

##### Naming

The class is formed as block's or element's name plus two dashes.

- `.block--mod`
- `.block__elem--mod`
- `.block--color-black`, `.block--color-red`

##### HTML

- Modifier is an extra class anme which you add to a block / element
- Keep the orginal class

```
<div class="block block--mod">...</div>
	<div class="block block--size-big
		block--shadow-yes">...</div>
```

##### CSS

`.block--hidden { }`

## Setup

**Prerequisites:**

- Install node
- Install npm
- Install gulp globally
    - `npm install --global gulp-cli`

### Installing packages

> `npm install pluginName --save-dev`

1.  `npm install`
