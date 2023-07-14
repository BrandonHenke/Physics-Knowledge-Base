window.MathJax = {
	section: 1,
	loader: {
		load: [
			'[tex]/ams',
			'[tex]/physics'
		]
	},
	tex: {
		packages: {
			'[+]': [
				'ams',
				'physics'
			],
		},
		tagformat: {
			number: (n) => MathJax.config.section + '.' + n,
			id: (tag) => 'eqn-id:' + tag
		}
	},
	
	startup: {
		ready() {
			MathJax.startup.defaultReady();
			MathJax.startup.input[0].preFilters.add(({math}) => {
				if (math.inputData.recompile) {
					MathJax.config.section = math.inputData.recompile.section;
				}
			});
			MathJax.startup.input[0].postFilters.add(({math}) => {
				if (math.inputData.recompile) {
					math.inputData.recompile.section = MathJax.config.section;
				}
			});
		}
	}
};
// (function () {
// 	var script = document.createElement('script');
// 	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
// 	script.async = true;
// 	document.head.appendChild(script);
// })();
