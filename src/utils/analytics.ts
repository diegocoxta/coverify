export enum LogCoverEditEvent {
  title_changed = 'title_changed',
  title_color_changed = 'title_color_changed',
  color_changed = 'color_changed',
  image_changed = 'image_changed',
  spotify_logo_changed = 'spotify_logo_changed',
  view_changed = 'view_changed',
}

export function logCoverEdit(action: LogCoverEditEvent, value?: string): void {
  window.gtag('event', 'cover_edit', {
    action,
    value,
  });
}

export function logCoverDownload(): void {
  window.gtag('event', 'cover_download');
}

type onPerfEntryType = {
  name: string;
  delta: number;
  id: string;
};

export function reportWebVitals(): void {
  function onPerfEntry(entry: onPerfEntryType): void {
    window.gtag('event', 'web_vitals', {
      action: entry.name,
      value: Math.round(entry.name === 'CLS' ? entry.delta * 1000 : entry.delta),
    });
  }

  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
}
