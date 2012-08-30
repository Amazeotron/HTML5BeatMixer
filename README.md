# HTML5 BeatMixer
HTML5 BeatMixer is an HTML5 webkitAudioContext and Canvas experiment. It's just a basic beat mixer with controls to start / stop playback, and change the playback speed. I'm planning on adding features as I go (like loading sound collections). Since it using WebKit only at this point, you have to run it in a WebKit browser (Chrome or Safari).

I built this as a way to learn the webkitAudioContext API, so don't expect anything amazing here. Maybe if you're learning, you can get something out of my code.

Right now, the code isn't very well commented. I'll be adding comments soon.

Dependencies:
-	<a href="http://requirejs.org/" alt="RequireJS" title="RequireJS">RequireJS</a>
-	<a href="http://www.createjs.com/#!/EaselJS" alt="EaselJS" title="EaselJS">CreateJS (EaselJS)</a>
-	<a href="http://www.kineticjs.com/">KineticJS</a> (didn't get very far with this implementation yet)
-	<a href="https://www.google.com/intl/en/chrome/browser/" alt="Chrome" title="Chrome">Browser that supports webkitAudioContext and Canvas</a>

Notes: 
- If you try to run it by just opening the index.html file from your local machine, you will most likely get Cross Domain errors in Chrome. Run it from a server to avoid errors.
- Refresh the browser window a few times at first to make sure you see the whole UI. There seems to be a bug in CreateJS where images don't get loaded before they are rendered in the chain.