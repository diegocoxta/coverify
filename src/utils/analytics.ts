export function logCoverEdit(action: string, value?: string): void {
  window.gtag('event', 'cover_edit', {
    action,
    value,
  });
}

export function logCoverDownload(): void {
  window.gtag('event', 'cover_download');
}
