document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const gallery = document.getElementById('gallery');
    const images = [
        'static/images/image1.jpg',
        'static/images/image2.jpg',
        'static/images/image3.jpg',
    ];
    const contactoParrafo = document.querySelector('.contacto-parrafo');
    const emojiRegex = /([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{2934}\u{2935}\u{2B05}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E6}-\u{1F1FF}\u{1F201}-\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}-\u{1F251}\u{1F300}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}-\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}-\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}-\u{1F588}\u{1F58A}-\u{1F58D}\u{1F590}-\u{1F590}\u{1F595}-\u{1F596}\u{1F5A4}-\u{1F5A5}\u{1F5A8}-\u{1F5A8}\u{1F5B1}-\u{1F5B2}\u{1F5BC}-\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}-\u{1F5E3}\u{1F5E8}-\u{1F5E8}\u{1F5EF}-\u{1F5EF}\u{1F5F3}-\u{1F5F3}\u{1F5FA}-\u{1F5FA}\u{1F6CB}-\u{1F6CB}\u{1F6CD}-\u{1F6CD}\u{1F6F4}-\u{1F6F6}\u{1F6F9}-\u{1F6F9}\u{1F7E0}-\u{1F7EB}\u{1F90D}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F9FF}\u{1FA70}-\u{1FA73}\u{1FA78}-\u{1FA7A}\u{1FA80}-\u{1FA82}\u{1FA90}-\u{1FA95}\u{1FA96}-\u{1FAA8}\u{1FAB0}-\u{1FAB6}\u{1FAC0}-\u{1FAC2}\u{1FAD0}-\u{1FAD6}\u{1FAD7}-\u{1FAD9}\u{1FAE0}-\u{1FAE7}\u{1FAF0}-\u{1FAF6}])/gu;
    const faqParrafo = document.querySelector('.faq-parrafo');
    const emojiRegex1 = /🔹/g;


    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, 
                behavior: "smooth"
            });
        });
    });

    let currentIndex = 0;

    function showNextImage() {
        gallery.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Mostrar la primera imagen inmediatamente
    showNextImage();

    // Cambiar la imagen cada 5 segundos
    setInterval(showNextImage, 3000);
    contactoParrafo.innerHTML = contactoParrafo.innerHTML.replace(emojiRegex, '<br>$1');
    faqParrafo.innerHTML = faqParrafo.innerHTML.replace(emojiRegex1, '<br>🔹');
    const loginButton = document.getElementById('loginButton');

    const progressCircle = document.querySelector('.progress-circle-fg');
    const progressText = document.querySelector('.progress-text');
    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
        progressText.textContent = `${Math.round(percent)}%`;
    }

    function updateProgressBar() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = (scrollPosition / totalHeight) * 100;
        setProgress(progress);
    }

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar(); // Inicializa la barra de progreso
});