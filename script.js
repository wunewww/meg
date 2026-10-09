const toggle = document.querySelector('.scene-toggle');
const label = toggle.querySelector('.scene-label');
const icon = toggle.querySelector('.scene-icon');

function setScene(night) {
  document.body.classList.toggle('night', night);
  toggle.setAttribute('aria-pressed', String(night));
  toggle.setAttribute('aria-label', night ? '切换到白日场景' : '切换到夜间场景');
  label.textContent = night ? '夜间模式' : '白日模式';
  icon.textContent = night ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').content = night ? '#23212b' : '#f9f6ef';
}

try { setScene(localStorage.getItem('meg-scene') === 'night'); } catch {}
toggle.addEventListener('click', () => {
  const night = !document.body.classList.contains('night');
  setScene(night);
  try { localStorage.setItem('meg-scene', night ? 'night' : 'day'); } catch {}
});
