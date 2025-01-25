import { argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities';

export class Theme {
	constructor(color) {
		this.theme = themeFromSourceColor(argbFromHex(color));

		// Print out the theme as JSON
		console.log(JSON.stringify(this.theme, null, 2));
	}

	apply = () => {
		const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		applyTheme(this.theme, { target: document.body, dark: systemDark });

		return this;
	};

	setColor = (color) => {
		this.theme = themeFromSourceColor(argbFromHex(color));

		return this;
	};
}
