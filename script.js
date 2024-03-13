//function for file  upload
document.getElementById('upload-input').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.querySelector('.design-gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function() {
                const img = document.createElement('img');
                img.src = reader.result;

                const card = document.createElement('div');
                card.classList.add('design-card');
                card.appendChild(img);

                gallery.appendChild(card);
            }
            reader.readAsDataURL(file);
        }
    }
});