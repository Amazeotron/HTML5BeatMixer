
define(["models/SoundBoard"], function(soundBoard) {
	
	var init = function() {
		
		soundBoard.loadSounds([
		                        { path: 'sounds/bassdrum.wav', name: 'Bass Drum' },
		                        { path: 'sounds/hihat.wav', name: 'Hi Hat' },
		                        { path: 'sounds/snare1.wav', name: 'Snare 1' },
		                        { path: 'sounds/snare2.wav', name: 'Snare 2' },
		                        { path: 'sounds/sangban.wav', name: 'Sangban' },
		                        { path: 'sounds/tambourine.wav', name: 'Tambourine' }, 
		                        { path: 'sounds/pop1.wav', name: 'Pop 1' },
		                        { path: 'sounds/pop2.wav', name: 'Pop 2' },
		                        { path: 'sounds/maracas1.wav', name: 'Maracas' },
		                        { path: 'sounds/cowbell.wav', name: 'Cowbell' },
		                        { path: 'sounds/marimba.mp3', name: 'Marimba 1' },
		                        { path: 'sounds/sitar_1.mp3', name: 'Sitar' },
		                        { path: 'sounds/robotic_1.mp3', name: 'Robotic 1' },
		                        { path: 'sounds/robotic_2.mp3', name: 'Robotic 2' },
		                        // { path: 'sounds/marimba2.wav', name: 'Marimba 2' },
		                        // { path: 'sounds/mandolin_01.mp3', name: 'Mandolin 1' },
		                        // { path: 'sounds/mandolin_02.mp3', name: 'Mandolin 2' },
		                        // { path: 'sounds/mandolin_03.mp3', name: 'Mandolin 3' },
		                        // { path: 'sounds/mandolin_04.mp3', name: 'Mandolin 4' },
		                        // { path: 'sounds/mandolin_05.mp3', name: 'Mandolin 5' },
		                        // { path: 'sounds/mandolin_06.mp3', name: 'Mandolin 6' },
		                        // { path: 'sounds/mandolin_07.mp3', name: 'Mandolin 7' },
		                        // { path: 'sounds/mandolin_08.mp3', name: 'Mandolin 8' },
		                        // { path: 'sounds/mandolin_09.mp3', name: 'Mandolin 9' },
		                        { path: 'sounds/mandolin_10.mp3', name: 'Mandolin 10' },
		                        // { path: 'sounds/clarinet.wav', name: 'Clarinet' },
		                        // { path: 'sounds/spooky.mp3', name: 'Spooky' }
		                       ]);
		
	}
	
	
	return {
		init: init
	}
});