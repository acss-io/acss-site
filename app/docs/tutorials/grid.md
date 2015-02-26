# Grid system

<p class="Fz-18px">Atomic.css is not an opinionated framework, meaning it does not come with a _out-of-the-box_ grid system. Instead, you can use any property you want to build grids <em>the way **you** want</em>.</p>

## Widths

You can choose from creating a unit-base system, using percentages, or using any arbitrary value you see fit (i.e. `15em`). In other words, the way you apply widths onto boxes is entirely up to you!

<p class="noteBox info">All classes related to `width` start with `W-` &mdash; for example: `W-15em`.</p>

### Fractions

`W-1/12`, `W-2/12`, `W-3/12`, `W-4/12`, `W-5/12`, `W-6/12`, `W-7/12`, etc.

How to create the above classes via config.js?

```json
// pattern
'width': {
    'fraction': {
        denominator: 12
    }
},
```

### Percentages

`W-10%`, `W-20%`, `W-30%`, `W-40%`, ..., `W-100%`

How to create the above classes via config.js?

```json
// pattern
'width': {
    'custom': [{
        'suffix': '10%',
        'values': ['10%']
    }, {
        'suffix': '20%',
        'values': ['20%']
    }, {
        'suffix': '30%',
        'values': ['30%']
    }, {
        'suffix': '40%',
        'values': ['40%']
     },
    ...
    {
        'suffix': '100%',
        'values': ['100%']
    }]
},
```

### `em` units

`W-10em`, `W-50em`

How to create the above classes via config.js?

```json
// pattern
'width': {
    'custom': [{
        'suffix': '10em',
        'values': ['10em']
    }, {
        'suffix': '50em',
        'values': ['50em']
    }]
},
```

### Mixing values

You can have everything you want:

`W-a`, `W-1/4`, `W-2/4`, `W-3/4`, `W-4/4`, `W-5%`, `W-10em`, `W-200px`

How to create the above classes via config.js?

```json
// pattern
'width': {
    'a': true,
    'fraction': {
        'denominator': 4
    }, {
        'suffix': '5%',
        'values': ['5%']
    },
    'custom': [{
        'suffix': '10em',
        'values': ['10em']
    }, {
        'suffix': '200px',
        'values': ['200px']
    }]
},
```

<p class="noteBox info">`a: true` above means you want to use the [pre-defined keyword](http://www.w3.org/TR/css3-values/#keywords)/value `auto`.</p>

<p class="noteBox important">The suffix `inh` for `inherit` is the <strong>same for all properties</strong>.</p>

## Layouts

There are many ways to display boxes next to each other... Your pick:

### `inline-block` <a id="footnote-1" class="D-ib"></a>

This styling has great browser support [\[1\]](#footnote) and it is direction-friendly (boxes are displayed according to `ltr` / `rtl` contexts).

`D-ib`, `Va-t`

How to create the above classes via config.js?

```json
// pattern
'display': {
    'ib': true
},

// pattern
'vertical-align': {
    't': true
},
```

<div class="noteBox warning">
    <p>3 things to be aware of when styling boxes with `inline-block`:</p>
    <ul class="ul-list">
       <li>white-space between nodes in the markup creates space between boxes, so make sure to address this by either removing that space altogether, using html comments (`<!-- -->`), or implementing some other trick like the one used by [PureCSS](http://purecss.io/grids/).</li>
       <li>`vertical-align:top` is needed to make sure all boxes are top aligned.</li>
       <li>IE7 <em>does not support</em> `display:inline-block` but Atomic.css takes care of this behind the scene [\[1\]](#footnote).</li>
    </ul>
</div>

#### Example

```html
<div>
   <div class="D-ib Va-t W-1/3 P-20px Bgc-CCC">Box 1</div><!--
--><div class="D-ib Va-t W-1/3 P-20px Bgc-999">Box 2</div><!--
--><div class="D-ib Va-t W-1/3 P-20px Bgc-777">Box 3</div>
</div>
<hr />
<div dir="rtl">
   <div class="D-ib Va-t W-1/3 P-20px Bgc-CCC">Box 1</div><!--
--><div class="D-ib Va-t W-1/3 P-20px Bgc-999">Box 2</div><!--
--><div class="D-ib Va-t W-1/3 P-20px Bgc-777">Box 3</div>
</div>
```

<h4 class="penResult">Result</h4>

<p data-height="190" data-theme-id="12469" data-slug-hash="emMPaw" data-default-tab="result" data-user="thierry" class='codepen'>See the Pen <a href='http://codepen.io/thierry/pen/emMPaw/'>emMPaw</a> by Thierry (<a href='http://codepen.io/thierry'>@thierry</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p class="noteBox info">Atomic.css also provides a helper class (`ib-box`) that can be used in lieu of `D-ib` and `Va-t` as it groups those 2 styles and also contains the IE7 patch.</p>

### `float` <a id="footnote-2" class="D-ib"></a>

This styling has great browser support and is &quot;direction&quot; agnostic [\[2\]](#footnote).

`Fl-start`

How to create the above class via config.js?

```json
// pattern
'float': {
    'start': true
},
```

#### Example

```html
<div>
   <div class="Fl-start W-50% P-20px Bgc-CCC">Box 1</div>
   <div class="Fl-start W-50% P-20px Bgc-999">Box 2</div>
</div>
```

<h4 class="penResult">Result</h4>

<p data-height="110" data-theme-id="12469" data-slug-hash="PwewjM" data-default-tab="result" data-user="thierry" class='codepen'>See the Pen <a href='http://codepen.io/thierry/pen/PwewjM/'>PwewjM</a> by Thierry (<a href='http://codepen.io/thierry'>@thierry</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p class="penResult">The <em>exact same markup</em> with the `rtl` version of the style sheet:</p>

<p data-height="110" data-theme-id="12469" data-slug-hash="OPZPjL" data-default-tab="result" data-user="thierry" class='codepen'>See the Pen <a href='http://codepen.io/thierry/pen/OPZPjL/'>OPZPjL</a> by Thierry (<a href='http://codepen.io/thierry'>@thierry</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h3> `table` and `table-cell`</h3>

<p>This styling has good browser support (IE8+) and is direction-friendly (boxes are displayed according to `ltr` / `rtl` contexts).</p>

<p>`D-tb`, `D-tbc`, `Va-m`, `Ta-c`</p>

<p>How to create the above classes via config.js?</p>

```json
// pattern
'display': {
    'tb': true,
    'tbc': true
},

// pattern
'text-align': {
    'c': true
},

// pattern
'vertical-align': {
    'm': true
},
```

#### Example

```html
<div class="D-tb W-100% Ta-c">
    <div class="D-tbc Va-m P-20px Bgc-CCC">Box <br />Number <br />1</div>
    <div class="D-tbc Va-m P-20px Bgc-999">Box Number 2</div>
    <div class="D-tbc Va-m P-20px Bgc-777">Box Number 3</div>
    <div class="D-tbc Va-m P-20px Bgc-555">BoxNumber 4</div>
</div>
<hr />
<div class="D-tb W-100% Va-m Ta-c" dir="rtl">
    <div class="D-tbc Va-m P-20px Bgc-CCC">Box <br />Number <br />1</div>
    <div class="D-tbc Va-m P-20px Bgc-999">Box Number 2</div>
    <div class="D-tbc Va-m P-20px Bgc-777">Box Number 3</div>
    <div class="D-tbc Va-m P-20px Bgc-555">BoxNumber 4</div>
</div>
```

<h4 class="penResult">Result</h4>

<p data-height="250" data-theme-id="12469" data-slug-hash="GgdgMa" data-default-tab="result" data-user="thierry" class='codepen'>See the Pen <a href='http://codepen.io/thierry/pen/GgdgMa/'>GgdgMa</a> by Thierry (<a href='http://codepen.io/thierry'>@thierry</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p>One can also use `table-header-group` and/or `table-footer-group` to swap boxes vertically without removing them from the flow:</p>

```html
<div class="D-tb W-100% Ta-c">
    <div class="D-tbfg Fz-20px Bgc-CCC">Box Number 1</div>
    <div class="D-tbc  Fz-20px Bgc-999">Box Number 2</div>
    <div class="D-tbhg Fz-20px Bgc-777">Box Number 3</div>
</div>
```

<h4 class="penResult">Result</h4>

<p data-height="105" data-theme-id="12469" data-slug-hash="MYGYQm" data-default-tab="result" data-user="thierry" class='codepen'>See the Pen <a href='http://codepen.io/thierry/pen/MYGYQm/'>MYGYQm</a> by Thierry (<a href='http://codepen.io/thierry'>@thierry</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


<h3> `flexbox`</h3>

<p>Browser support for `flexbox` is [not that great](http://caniuse.com/#search=flexbox) but nonetheless you can use Atomic.css to leverage its awesomeness.</p>

<p>`D-f`, `Flf-w`, `Jc-sb`</p>

<p>How to create the above classes via config.js?</p>

```json
// pattern
'display': {
    'f': true
},

// pattern
'flex-flow': {
    'w': true
},

// pattern
'justify-content': {
    'sb': true
}
```

#### Example

```html
<div class="D-f Flf-w Jc-sb">
  <div class="W-100px H-100px Lh-100px Fz-30px Ta-c Bgc-CCC">Box 1</div>
  <div class="W-100px H-100px Lh-100px Fz-30px Ta-c Bgc-CCC">Box 2</div>
  <div class="W-100px H-100px Lh-100px Fz-30px Ta-c Bgc-CCC">Box 3</div>
  <div class="W-100px H-100px Lh-100px Fz-30px Ta-c Bgc-CCC">Box 3</div>
</div>
```

<h4 class="penResult">Result</h4>

<p data-height="155" data-theme-id="12469" data-slug-hash="Jovoem" data-default-tab="result" data-user="thierry" class='codepen'>See the Pen <a href='http://codepen.io/thierry/pen/Jovoem/'>Jovoem</a> by Thierry (<a href='http://codepen.io/thierry'>@thierry</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


<hr class="Mt-50px">

<ul id="footnote" class="ul-list">
    <li>[\[1\]](#footnote-1) Atomic.css provides a patch for oldIE</li>
    <li>[\[2\]](#footnote-2) Atomic.css relies on `start` and `end` instead of `left` and `right` which allows the usage of the **same** class regardless of script context.</li>
</ul>
