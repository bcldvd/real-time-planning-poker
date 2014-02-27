# Real Time Planning Poker 

Got no playing cards to do your planning poker ? No worries, in **less than 5 minutes** form now, you'll be ready to plan !

![Alt](http://f.cl.ly/items/0628021b2o3A2S2O3s1h/Capture%20d%E2%80%99e%CC%81cran%202014-02-25%20a%CC%80%2014.49.32.png)

![Alt](http://f.cl.ly/items/09342C3Z132g1H3V2f1w/Capture%20d%E2%80%99e%CC%81cran%202014-02-25%20a%CC%80%2014.50.06.png)

![Alt](http://f.cl.ly/items/2D0T0W130C1I1Z270F43/Capture%20d%E2%80%99e%CC%81cran%202014-02-25%20a%CC%80%2014.50.26.png)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [TODO](#todo)
- [Contributing](#contributing)
- [License](#license)

## Features

- Random name given to new client
- Change name
- Change User Stories
- Reveal cards
- Play again
- Change themes on-the-fly
- Multi-room
- Deployed on Heroku

## Prerequisites

- [Node.js](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows**: [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu**: `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo yum groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE**: `sudo zypper install --type pattern devel_basis`

:exclamation: **Note**: If you are new to Node.js or Express framework,
I highly recommend watching [Node.js and Express 101](http://www.youtube.com/watch?v=BN0JlMZCtNU) screencast by Alex Ford that teaches Node and Express from scratch. Alternatively, here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).


## Getting Started


The easiest way to get started is to clone the repository:

```bash
# Fetch only the latest commits.
git clone git@github.com:bcldvd/real-time-planning-poker.git my-project

cd my-project

# Install NPM dependencies
npm install

node app.js
```

>:exclamation: **Note**: I strongly recommend installing nodemon `sudo npm install -g nodemon`.
>It will monitor for any changes in your node.js
>application and automatically restart the server. Once installed, instead of `node app.js` use `nodemon app.js`.
>It is a big time saver in the long run.


## TODO
- Tweaks

## Contributing
If something is unclear, confusing, or needs to be refactored, please let me know. Please open an issue before submitting a pull request

## Authors

**David Boclé** - http://github.com/bcldvd


## Credits

- [hackathon-starter](https://github.com/sahat/hackathon-starter) by [@sahat](https://github.com/sahat)
- [animate.css](https://github.com/daneden/animate.css) by [@daneden](https://github.com/daneden)
- [bootswatch](https://github.com/thomaspark/bootswatch) by [@thomaspark](https://github.com/thomaspark)


## Copyright and license

    The MIT License

    Copyright (c) 2014 David Boclé

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
