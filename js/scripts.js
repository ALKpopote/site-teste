const canvas = document.getElementById('footerCanvas');
const ctx = canvas.getContext('2d');

// Redimensionner le canvas en fonction de la taille de l'écran
canvas.width = window.innerWidth;
canvas.height = 100;

let triangles = [];
let circles = [];
let numTriangles = 3;
let numCircles = 3;

// Fonction pour dessiner un triangle
function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// Fonction pour dessiner un cercle
function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
}

// Générer des formes géométriques (triangles et cercles)
function generateShapes() {
    // Créer des triangles
    for (let i = 0; i < numTriangles; i++) {
        let size = Math.random() * 30 + 20;
        let x1 = Math.random() * canvas.width;
        let y1 = Math.random() * canvas.height;
        let x2 = x1 + size;
        let y2 = y1 + size;
        let x3 = x1 - size;
        let y3 = y1 + size;
        let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`;
        triangles.push({x1, y1, x2, y2, x3, y3, color});
    }

    // Créer des cercles
    for (let i = 0; i < numCircles; i++) {
        let radius = Math.random() * 20 + 15;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`;
        circles.push({x, y, radius, color});
    }
}

// Animer les formes sur le canvas
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas à chaque frame

    // Déplacer les triangles et dessiner
    triangles.forEach(triangle => {
        triangle.x1 += Math.sin(Math.random()) * 2;
        triangle.y1 += Math.cos(Math.random()) * 2;
        triangle.x2 += Math.sin(Math.random()) * 2;
        triangle.y2 += Math.cos(Math.random()) * 2;
        triangle.x3 += Math.sin(Math.random()) * 2;
        triangle.y3 += Math.cos(Math.random()) * 2;
        triangle.x6 += Math.sin(Math.random()) * 2;
        triangle.y4 += Math.cos(Math.random()) * 2;
        triangle.x8 += Math.sin(Math.random()) * 2;
        triangle.y9 += Math.cos(Math.random()) * 2;
        triangle.x7 += Math.sin(Math.random()) * 2;
        triangle.y3 += Math.cos(Math.random()) * 2;
        drawTriangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3, triangle.color);
    });

    // Déplacer les cercles et dessiner
    circles.forEach(circle => {
        circle.x += Math.sin(Math.random()) * 2;
        circle.y += Math.cos(Math.random()) * 2;
        drawCircle(circle.x, circle.y, circle.radius, circle.color);
    });

    // Re-générer les formes lorsque le canvas est presque rempli
    if (Math.random() < 0.01) {
        triangles = [];
        circles = [];
        generateShapes();
    }

    requestAnimationFrame(animate); // Répéter l'animation
}

// Initialiser les formes
generateShapes();

// Lancer l'animation
animate();



/*******marche arrière******** */
// Fonction pour revenir à la page précédente dans l'historique du navigateur
function goBack() {
    window.history.back();
}
