/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// external packages
import React from 'react';

// other dependencies
import Reference from './Reference';

class PageReference extends React.Component {
    render() {
        return (
            <div id="reference" role="main" className="reference-page innerwrapper Mb(50px) Mx(10px) Maw(1000px)--sm Mx(a)--sm W(90%)--sm">
                <h1>Reference</h1>
                <p>Use this page to search for Atomic classes. Visit <a href="/guides/syntax.html" aria-label="about the syntax">this one</a> to understand the syntax, <a href="/guides/syntax.html#examples-" aria-label="examples">this one</a> to look at examples, <a href="/guides/atomic-classes.html" aria-label="about custom classes">this one</a> to learn about custom classes, and check <a href="/guides/helper-classes.html" aria-label="about the helpers">this one</a> for helper/utility classes.</p>
                <p>You may also want to check <a href="https://pankajparashar.com/atomizer-web/">ATOMIZER WEB</a> (an online tool built by <a href="https://twitter.com/pankajparashar" title="@pankajparashar on Twitter">Pankaj Parashar</a>) which is a playground for ACSS. Add some Atomic classes and ATOMIZER WEB will show you the rendered CSS. The tool even gives you access to a config file where you can set your own break-points, variables, and more.</p>
                <Reference />
            </div>
        );
    }
}

export default PageReference;
