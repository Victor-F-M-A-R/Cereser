/*
 * Casa Cereser - Favorites Module
 */

export function initFavorites() {
    let favorites = JSON.parse(localStorage.getItem('casaCereser_favorites')) || [];

    function toggleFavorite(id) {
        const index = favorites.indexOf(id);
        if (index === -1) {
            favorites.push(id);
        } else {
            favorites.splice(index, 1);
        }
        localStorage.setItem('casaCereser_favorites', JSON.stringify(favorites));
        updateFavoriteIcons();
    }

    function isFavorite(id) {
        return favorites.includes(id);
    }

    function updateFavoriteIcons() {
        document.querySelectorAll('.btn-favorite').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            if (isFavorite(id)) {
                btn.classList.add('active');
                btn.querySelector('svg').style.fill = '#D4AF37';
                btn.querySelector('svg').style.stroke = '#D4AF37';
            } else {
                btn.classList.remove('active');
                btn.querySelector('svg').style.fill = 'none';
                btn.querySelector('svg').style.stroke = 'currentColor';
            }
        });
    }

    // Expose toggle to global scope or attach listeners dynamically
    window.toggleFavorite = toggleFavorite;

    return {
        toggleFavorite,
        isFavorite,
        updateFavoriteIcons
    };
}
