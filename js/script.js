document.addEventListener('DOMContentLoaded', function() {
	const searchInput = document.getElementById('searchInput');
	if (searchInput) {
		searchInput.addEventListener('input', function() {
			const searchText = this.value.toLowerCase();
			const gameCards = document.querySelectorAll('.game-card');
			gameCards.forEach(function(card) {
				const gameNameElement = card.querySelector('div');
				const gameName = gameNameElement.textContent.toLowerCase();
				if (gameName.includes(searchText)) {
					card.style.display = 'block';
				} else {
					card.style.display = 'none';
				}
			});
		});
	}
});
