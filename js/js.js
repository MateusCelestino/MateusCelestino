 function setMode(mode) {
            document.body.classList.remove('light-mode', 'dark-mode');
            if (mode === 'light') {
                document.body.classList.add('light-mode');
                localStorage.setItem('color-mode', 'light');
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('color-mode', 'dark');
            }
        }
        // Inicialização
        (function() {
            let saved = localStorage.getItem('color-mode') || 'light';
            setMode(saved);
        })();
        document.getElementById('lightBtn').onclick = () => setMode('light');
        document.getElementById('darkBtn').onclick = () => setMode('dark');

        // Filtros de projetos
        document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            document.querySelectorAll('.work-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
            });
        });
        });
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('mouseover', function() {
                this.style.background = '#4158F0';
            });
            btn.addEventListener('mouseout', function() {
                this.style.background = '#41C7F0';
            });
        });

        // Filtros de projetos
        document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            document.querySelectorAll('.work-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
            });
        });
        });
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('mouseover', function() {
                this.style.background = '#4158F0';
            });
            btn.addEventListener('mouseout', function() {
                this.style.background = '#41C7F0';
            });
        });
        // Modo claro/escuro
        function setMode(mode) {
            document.body.classList.remove('light-mode', 'dark-mode');
            if (mode === 'light') {
                document.body.classList.add('light-mode');
                localStorage.setItem('color-mode', 'light');
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('color-mode', 'dark');
            }
        }
        (function() {
            let saved = localStorage.getItem('color-mode') || 'light';
            setMode(saved);
        })();
        document.getElementById('lightBtn').onclick = () => setMode('light');
        document.getElementById('darkBtn').onclick = () => setMode('dark');

        // Troca de idioma (exemplo simples)
        document.getElementById('ptBtn').onclick = () => location.href = 'index.html';
        document.getElementById('enBtn').onclick = () => location.href = 'index-en.html';