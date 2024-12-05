function getTheme(): string {
  const theme = localStorage.getItem("theme");
  if (theme == null) {
	  setTheme("l");
	  return "l";
  }
  return theme;
}

function setTheme(theme: string): void {
	if (theme === "l" || theme === "d") {
		localStorage.setItem("theme", theme);
	}
}

function isThemeDark(): boolean {
	const theme = getTheme();
	return theme === "d";
}

function setBackgroundColor(): void {
	document.body.setAttribute("style", `background: ${isThemeDark() ? '#222' : '#fff'};`)
	document.body.classList.add('background-style');
}

export default {
	setTheme,
	getTheme,
	isThemeDark,
	setBackgroundColor,
}
