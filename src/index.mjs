export function stationHeading(name, platform) {
  const suffix = platform ? ` · Platform ${platform}` : ''
  return `${name}${suffix}`
}

export function displayAlert(alert) {
  if (!alert || alert.status !== 'active') return null
  const display = {
    title: alert.title.trim(),
    body: alert.body.trim(),
    severity: alert.severity,
    stations: [...alert.stations]
  }
  if (typeof alert.compactTitle === 'string' && alert.compactTitle.trim()) {
    display.compactTitle = alert.compactTitle.trim()
  }
  return display
}
