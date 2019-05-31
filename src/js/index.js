import "./import/blocks.js";

// Сворачивание сайдбара

(function toogleSidebar() {
	const sidebar = document.querySelectorAll('.h-sidebar');
	let i;
	for(i = 0; i < sidebar.length; i++) {
		sidebar[i].addEventListener('click', function() {
			console.log('Привет');
			this.classList.toggle('h-sidebar--open');
		});
	}
})();