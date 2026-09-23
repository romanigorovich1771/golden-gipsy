history.scrollRestoration = 'manual';

const resetHomeScroll = () => {
	if (!window.location.hash) {
		window.scrollTo(0, 0);
	}
};

resetHomeScroll();
window.addEventListener('load', resetHomeScroll);

window.addEventListener('pageshow', resetHomeScroll);
