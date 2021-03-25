(function() {
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){
		var map = L.map('mapa').setView([9.529579, -69.2292], 16);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
			}).addTo(map); 

			L.marker([9.529579, -69.2292]).addTo(map);
		}
	)
})();