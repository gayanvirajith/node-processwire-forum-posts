# ProcessWire Latest Forum Posts CLI

Use ProcessWire CMS Forum? This is a command line tool to print out the latest 
ProcessWire forum posts to your terminal.

![Preview](http://gayan.me/thumbnails/node-processwire-forum-posts-lg.png)

## Requirements / node dependencies

- [request](https://github.com/request/request)
- [feedparser](https://github.com/danmactough/node-feedparser)
- [prompt](https://github.com/flatiron/prompt)

##Installation

Following command requires [node](http://nodejs.org/) & [npm](https://npmjs.org/).

    sudo npm install -g processwire-forum-posts
    
##Usage

The global installation will symlink an executable script and place it in 
your PATH. To use processwire-forum-posts type `pwtalk` on your terminal or
command prompt:

    pwtalk    
    
A list of post items will be promted. Type the number of the post to open a 
post or type 0 to quit and return to your terminal session.

### Version history

- 0.0.1 - A very much initial release.

## License

(The MIT License)

Copyright (c) 2014 Gayan Virajith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.