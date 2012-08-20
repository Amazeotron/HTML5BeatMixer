
define(['easel/models/SoundBoard'], function(soundBoard) {
	
	var loadSoundsByName = function(name) {
		if (name == "Percussion") {
			loadPercussion();
		} else if (name == "Steel Drums") {
			loadSteel();
		} else if (name == "Flutes") {
			loadFlute();
		} else if (name == "Synth 1") {
			loadSynth1();
		} else if (name == "Synth 2") {
			loadSynth2();
		} else if (name == "Horns") {
			loadHorns();
		} else {
			loadFarts();
		}
	}
	
	var loadSteel = function() {
		soundBoard.loadSounds([
		                      { path: 'sounds/_steeldrums/1.mp3', name: 'Steel 1' }, 
		                      { path: 'sounds/_steeldrums/2.mp3', name: 'Steel 2' }, 
		                      { path: 'sounds/_steeldrums/3.mp3', name: 'Steel 3' }, 
		                      { path: 'sounds/_steeldrums/4.mp3', name: 'Steel 4' }, 
		                      { path: 'sounds/_steeldrums/5.mp3', name: 'Steel 5' }, 
		                      { path: 'sounds/_steeldrums/6.mp3', name: 'Steel 6' }, 
		                      { path: 'sounds/_steeldrums/7.mp3', name: 'Steel 7' }, 
		                      { path: 'sounds/_steeldrums/8.mp3', name: 'Steel 8' }, 
		                      { path: 'sounds/_steeldrums/9.mp3', name: 'Steel 9' }, 
		                      { path: 'sounds/_steeldrums/10.mp3', name: 'Steel 10' }, 
		                      { path: 'sounds/_steeldrums/11.mp3', name: 'Steel 11' }, 
		                      { path: 'sounds/_steeldrums/12.mp3', name: 'Steel 12' },
		                      { path: 'sounds/_steeldrums/13.mp3', name: 'Steel 13' }, 
		                      { path: 'sounds/_steeldrums/14.mp3', name: 'Steel 14' }, 
		                      { path: 'sounds/_steeldrums/15.mp3', name: 'Steel 15' }
		                      ]);
	}
	
	var loadPercussion = function() {
		soundBoard.loadSounds([
		                      { path: 'sounds/_perc1/1.mp3', name: 'Perc 1' }, 
		                      { path: 'sounds/_perc1/2.mp3', name: 'Perc 2' }, 
		                      { path: 'sounds/_perc1/3.mp3', name: 'Perc 3' }, 
		                      { path: 'sounds/_perc1/4.mp3', name: 'Perc 4' }, 
		                      { path: 'sounds/_perc1/5.mp3', name: 'Perc 5' }, 
		                      { path: 'sounds/_perc1/6.mp3', name: 'Perc 6' }, 
		                      { path: 'sounds/_perc1/7.mp3', name: 'Perc 7' }, 
		                      { path: 'sounds/_perc1/8.mp3', name: 'Perc 8' }, 
		                      { path: 'sounds/_perc1/9.mp3', name: 'Perc 9' }, 
		                      { path: 'sounds/_perc1/10.mp3', name: 'Perc 10' }, 
		                      { path: 'sounds/_perc1/11.mp3', name: 'Perc 11' }, 
		                      { path: 'sounds/_perc1/12.mp3', name: 'Perc 12' }, 
		                      { path: 'sounds/_perc1/13.mp3', name: 'Perc 13' }
		                      ]);
	}
	
	var loadFlute = function() {
		soundBoard.loadSounds([
		                      { path: 'sounds/_flute1/1.mp3', name: 'Flute 1' }, 
		                      { path: 'sounds/_flute1/2.mp3', name: 'Flute 2' }, 
		                      { path: 'sounds/_flute1/3.mp3', name: 'Flute 3' }, 
		                      { path: 'sounds/_flute1/4.mp3', name: 'Flute 4' }, 
		                      { path: 'sounds/_flute1/5.mp3', name: 'Flute 5' }, 
		                      { path: 'sounds/_flute1/6.mp3', name: 'Flute 6' }, 
		                      { path: 'sounds/_flute1/7.mp3', name: 'Flute 7' }, 
		                      { path: 'sounds/_flute1/8.mp3', name: 'Flute 8' }, 
		                      { path: 'sounds/_flute1/9.mp3', name: 'Flute 9' }, 
		                      { path: 'sounds/_flute1/10.mp3', name: 'Flute 10' }, 
		                      { path: 'sounds/_flute1/11.mp3', name: 'Flute 11' }, 
		                      { path: 'sounds/_flute1/12.mp3', name: 'Flute 12' }, 
		                      { path: 'sounds/_flute1/13.mp3', name: 'Flute 13' }
		                      ]);
	}
	
	var loadSynth1 = function() {
		soundBoard.loadSounds([
		                      { path: 'sounds/_synth1/1.mp3', name: 'Synth 1' },
		                      { path: 'sounds/_synth1/2.mp3', name: 'Synth 2' },
		                      { path: 'sounds/_synth1/3.mp3', name: 'Synth 3' },
		                      { path: 'sounds/_synth1/4.mp3', name: 'Synth 4' },
		                      { path: 'sounds/_synth1/5.mp3', name: 'Synth 5' },
		                      { path: 'sounds/_synth1/6.mp3', name: 'Synth 6' }, 
		                      { path: 'sounds/_synth1/7.mp3', name: 'Synth 7' }, 
		                      { path: 'sounds/_synth1/8.mp3', name: 'Synth 8' }, 
		                      { path: 'sounds/_synth1/9.mp3', name: 'Synth 9' }
		                      ]);
	}
	
	var loadSynth2 = function() {
		soundBoard.loadSounds([
		                      { path: 'sounds/_synth2/1.mp3', name: 'Synth 1' }, 
		                      { path: 'sounds/_synth2/2.mp3', name: 'Synth 2' }, 
		                      { path: 'sounds/_synth2/3.mp3', name: 'Synth 3' }, 
		                      { path: 'sounds/_synth2/4.mp3', name: 'Synth 4' }, 
		                      { path: 'sounds/_synth2/5.mp3', name: 'Synth 5' }, 
		                      { path: 'sounds/_synth2/6.mp3', name: 'Synth 6' }, 
		                      { path: 'sounds/_synth2/7.mp3', name: 'Synth 7' }, 
		                      { path: 'sounds/_synth2/8.mp3', name: 'Synth 8' }, 
		                      { path: 'sounds/_synth2/9.mp3', name: 'Synth 9' }, 
		                      { path: 'sounds/_synth2/10.mp3', name: 'Synth 10' }, 
		                      { path: 'sounds/_synth2/11.mp3', name: 'Synth 11' }, 
		                      { path: 'sounds/_synth2/12.mp3', name: 'Synth 12' }, 
		                      { path: 'sounds/_synth2/13.mp3', name: 'Synth 13' }
		                      ]);
	}
	
	var loadHorns = function() {
		soundBoard.loadSounds([
		                      { path: 'sounds/_horns1/1.mp3', name: 'Horns 1' }, 
		                      { path: 'sounds/_horns1/2.mp3', name: 'Horns 2' }, 
		                      { path: 'sounds/_horns1/3.mp3', name: 'Horns 3' }, 
		                      { path: 'sounds/_horns1/4.mp3', name: 'Horns 4' }, 
		                      { path: 'sounds/_horns1/5.mp3', name: 'Horns 5' }, 
		                      { path: 'sounds/_horns1/6.mp3', name: 'Horns 6' }, 
		                      { path: 'sounds/_horns1/7.mp3', name: 'Horns 7' }, 
		                      { path: 'sounds/_horns1/8.mp3', name: 'Horns 8' }, 
		                      { path: 'sounds/_horns1/9.mp3', name: 'Horns 9' }, 
		                      { path: 'sounds/_horns1/10.mp3', name: 'Horns 10' }, 
		                      { path: 'sounds/_horns1/11.mp3', name: 'Horns 11' }, 
		                      { path: 'sounds/_horns1/12.mp3', name: 'Horns 12' }, 
		                      { path: 'sounds/_horns1/13.mp3', name: 'Horns 13' }
		                      ])
	}
	
	var loadFarts = function() {
		soundBoard.loadSounds([
		                      { path: 'sounds/_farts/fart_1.mp3', name: 'F1' },
		                      { path: 'sounds/_farts/fart_2.mp3', name: 'F2' },
		                      { path: 'sounds/_farts/fart_3.mp3', name: 'F3' },
		                      { path: 'sounds/_farts/fart_4.mp3', name: 'F4' },
		                      { path: 'sounds/_farts/fart_5.mp3', name: 'F5' },
		                      { path: 'sounds/_farts/fart_6.mp3', name: 'F6' }
		                      ]);
	}
	
	
	return {
		loadSoundsByName: loadSoundsByName,
		loadSteel: loadSteel,
		loadPercussion: loadPercussion,
		loadFlute: loadFlute,
		loadSynth1: loadSynth1,
		loadSynth2: loadSynth2,
		loadHorns: loadHorns,
		loadFarts: loadFarts
	}
});