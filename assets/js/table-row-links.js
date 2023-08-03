let rows = document.querySelectorAll('tbody tr[data-href]');
rows.forEach(function(row) {
    row.addEventListener('click', function() {
        window.location.href = row.dataset.href;
    });
});