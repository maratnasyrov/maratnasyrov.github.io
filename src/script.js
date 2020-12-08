function getScreenInfo() {
  const infoWrapper = document.getElementById('info-wrapper');
  const [child] = infoWrapper.children;

  const orientation = window.innerWidth < window.innerHeight ? 'portrait' : 'landscape';
  const pre = document.createElement('pre');
  const {
    innerWidth,
    innerHeight,
    devicePixelRatio,
    screen: { width, height },
  } = window;

  const info = {
    browser: navigator.userAgent.match('CriOS') ? 'Chrome' : 'Safari',
    width,
    height,
    innerWidth,
    innerHeight,
    devicePixelRatio,
    scaleV: innerWidth / (orientation === 'portrait' ? width : height),
    scaleH: innerHeight / (orientation === 'portrait' ? height : width),
  };

  pre.innerHTML = JSON.stringify(info, null, ' ');

  if (child) {
    infoWrapper.removeChild(child);
  }

  infoWrapper.appendChild(pre);
}

window.addEventListener('resize', getScreenInfo);
window.addEventListener('scroll', getScreenInfo);

getScreenInfo();
