
define(['easel/models/SoundBoard'], function(soundBoard) {
	
	var init = function() {
		
		soundBoard.loadSounds([
		                        { path: 'sounds/drum_1.mp3', name: 'Drum 1' },
		                        { path: 'sounds/drum_2.wav', name: 'Drum 2' },
		                        { path: 'sounds/hihat.wav', name: 'Hi Hat' },
		                        // { path: 'sounds/snare1.wav', name: 'Snare 1' },
		                        { path: 'sounds/snare2.wav', name: 'Snare 2' },
		                        // { path: 'sounds/fart_1.mp3', name: 'F1' },
		                        // { path: 'sounds/fart_2.mp3', name: 'F2' },
		                        // { path: 'sounds/fart_3.mp3', name: 'F3' },
		                        // { path: 'sounds/fart_4.mp3', name: 'F4' },
		                        // { path: 'sounds/fart_5.mp3', name: 'F5' },
		                        // { path: 'sounds/fart_6.mp3', name: 'F6' },
		                        // { path: 'sounds/sangban.wav', name: 'Sangban' },
		                        // { path: 'sounds/tambourine.wav', name: 'Tambourine' }, 
		                        { path: 'sounds/pop1.wav', name: 'Pop 1' },
		                        { path: 'sounds/pop2.wav', name: 'Pop 2' },
		                        // { path: 'sounds/maracas1.wav', name: 'Maracas' },
		                        { path: 'sounds/cowbell.wav', name: 'Cowbell' },
		                        // { path: 'sounds/marimba.mp3', name: 'Marimba 1' },
		                        // { path: 'sounds/marimba2.wav', name: 'Marimba 2' },
		                        // { path: 'sounds/sitar_1.mp3', name: 'Sitar' },
		                        { path: 'sounds/robotic_1.mp3', name: 'Robotic 1' },
		                        { path: 'sounds/robotic_2.mp3', name: 'Robotic 2' },
		                        { path: 'sounds/robotic_3.mp3', name: 'Robotic 3' },
		                        { path: 'sounds/robotic_4.mp3', name: 'Robotic 4' },
		                        { path: 'sounds/robotic_5.mp3', name: 'Robotic 5' },
		                        { path: 'sounds/tuba.mp3', name: 'Tuba' },
		                        // { path: 'sounds/horn_1.mp3', name: 'Horn 1' },
		                        { path: 'sounds/horn_2.mp3', name: 'Horn 2' },
		                        // { path: 'sounds/horn_3.mp3', name: 'Horn 3' },
		                        { path: 'sounds/strum_1.mp3', name: 'Strum 1' },
		                        { path: 'sounds/strum_2.mp3', name: 'Strum 2' },
		                        // { path: 'sounds/kiss_1.mp3', name: 'Kiss' },
		                        // { path: 'sounds/mandolin_01.mp3', name: 'Mandolin 1' },
		                        // { path: 'sounds/mandolin_02.mp3', name: 'Mandolin 2' },
		                        // { path: 'sounds/mandolin_03.mp3', name: 'Mandolin 3' },
		                        // { path: 'sounds/mandolin_04.mp3', name: 'Mandolin 4' },
		                        // { path: 'sounds/mandolin_05.mp3', name: 'Mandolin 5' },
		                        // { path: 'sounds/mandolin_06.mp3', name: 'Mandolin 6' },
		                        // { path: 'sounds/mandolin_07.mp3', name: 'Mandolin 7' },
		                        // { path: 'sounds/mandolin_08.mp3', name: 'Mandolin 8' },
		                        // { path: 'sounds/mandolin_09.mp3', name: 'Mandolin 9' },
		                        // { path: 'sounds/mandolin_10.mp3', name: 'Mandolin 10' },
		                        // { path: 'sounds/mandolin_11.mp3', name: 'Mandolin 11' },
		                        // { path: 'sounds/mandolin_12.mp3', name: 'Mandolin 12' },
		                        // { path: 'sounds/mandolin_13.mp3', name: 'Mandolin 13' },
		                        // { path: 'sounds/mandolin_14.mp3', name: 'Mandolin 14' },
		                        // { path: 'sounds/mandolin_15.mp3', name: 'Mandolin 15' },
		                        // { path: 'sounds/mandolin_16.mp3', name: 'Mandolin 16' },
		                        // { path: 'sounds/mandolin_17.mp3', name: 'Mandolin 17' },
		                        // { path: 'sounds/mandolin_18.mp3', name: 'Mandolin 18' },
		                        // { path: 'sounds/rip_1.mp3', name: 'Cloth Rip 1' },
		                        // { path: 'sounds/rip_2.mp3', name: 'Cloth Rip 2' },
		                        // { path: 'sounds/plywood.mp3', name: 'Plywood' },
		                        // { path: 'sounds/clarinet.wav', name: 'Clarinet' },
		                        // { path: 'sounds/spooky.mp3', name: 'Spooky' }
		                       ]);
		
	}
	
	
	return {
		init: init
	}
});