const action = document.querySelector('#action');
const status = document.querySelector('#status');
action.addEventListener('click', () => {
  status.textContent = `Starter action completed at ${new Date().toLocaleTimeString()}. Extend this project with your own features.`;
});
