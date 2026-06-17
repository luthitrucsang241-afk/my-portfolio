document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('darkModeBtn');

    if (btn) {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    document.querySelectorAll('.project').forEach(project => {
        project.classList.add('hidden');
        observer.observe(project);
    });

});
