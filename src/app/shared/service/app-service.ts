import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getTheme(): string {
    let theme = localStorage.getItem('theme');
    if (!theme) {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkThemeMq.matches) {
        theme = 'dark';
        this.setTheme(Mode.dark);
      } else {
        theme = 'light';
        this.setTheme(Mode.light);
      }
      return theme;
    }
  }

  setTheme(theme: any) {
    localStorage.setItem('theme', theme);
  }
}

enum Mode {
  dark = 'dark',
  light = 'light',
}
