# Quick Start
 
In order to start using the atomizer tool, you need to get [Nodejs](http://nodejs.org/) installed in your machine.

To install atomizer, run the below command, you might need to run the command via **sudo**, enter your password and start installation:

```bash
npm install atomizer –g
```

To use the atomizer tool, create a directory and cd into it, and run the below command:

```bash
mkdir example && cd example
atomizer -c|--config=<file> [-o|--outfile=<file>] [--help] [--verbose] [<files-to-parse> ...]
```

**atomizer** accepts the following command line options:
-	-c|--config: that has the configuration file path.
-	-o|--outfile: the output file, where the atomic CSS will be generated and added to that file.
-	--help: is used this to get information about the tool, and the available options.
-	--verbose: is used to output additional log information.
-	files listed at the end of the command, it will be the files that will be parsed and added as config file for the tool in order to be parsed. 

In order to view an example of the config file, check below API

```js
var Atomizer = require('atomizer');

var defaultConfig = {
    'config': {
        'namespace': '#atomic',
        'start': 'left',
        'end': 'right'
    },
    "border": {
        "custom": [
            {
                "suffix": "1",
                "values": [ "1px solid #000" ]
            }
        ]
    }
};

// Parse text to find Atomic CSS classes
var classes = Atomizer.parse('<div class="P-10px M-20% B-1"></div>');

// Generate Atomizer configuration from an array of Atomic classnames
var config = Atomizer.getConfig(classes, defaultConfig);

// Generate Atomic CSS from configuration
var css = Atomizer.createCSS(config);

```


so using this file will be either by using a config file that has all the required classes, or by having the basic config file and the rest will be parsed directly from the html files. For more information about the workflow, check  [acss.io atomizer]( http://acss.io/guides/atomizer.html).

While parsing the html classes’ values, the acceptable values are: integers, floats, percentages and hexadecimal. In order to review all the allowed values refer to [acss.io reference]( http://acss.io/reference).

Any other values, will be custom values, where the user will be asked to add it to the config file, with a default value to guide the user about the right accepted values.
