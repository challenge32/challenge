const tabLinks = document.querySelectorAll('.tablink');
const tabContents = document.querySelectorAll('.tab-content');

if (tabLinks && tabContents) {
  tabLinks.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      tabLinks.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(tab).classList.add('active');
    });
  });
}