const button = document.getElementById('myButton');
button.addEventListener('click', async () => {
  const module = await import('./path/to/module');
  // Используйте импортированный модуль здесь
});