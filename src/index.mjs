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
  if (alert.id && alert.severity === 'accessibility' && alert.stations.length === 1) {
    const stationAccessCopy = new Map([['Bell Street', 'east']])
    const entrance = stationAccessCopy.get(alert.stations[0])
    if (entrance && /step-free access/i.test(display.body)) {
      display.title = 'Step-free access at ' + alert.stations[0]
      display.body = 'Use the ' + entrance + ' entrance for step-free access.'
    }
  }
  return display
}
