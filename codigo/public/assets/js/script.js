// Função para carregar os carros e seus comentários
window.onload = function() {
    loadCars();
};

// Carregar os carros do localStorage e exibir
function loadCars() {
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    const carGrid = document.getElementById('carGrid');
    carGrid.innerHTML = ''; // Limpar o grid antes de preencher

    cars.forEach(function(car, index) {
        const carCard = document.createElement('div');
        carCard.classList.add('col-md-4', 'mb-4');
        carCard.innerHTML = `
            <div class="card car-card" data-bs-toggle="modal" data-bs-target="#carModal" onclick="showCarDetails(${index})">
                <img src="${getCarImage(car)}" class="card-img-top" alt="Imagem do Carro">
                <div class="card-body">
                    <h5 class="card-title">${car.model}</h5>
                </div>
            </div>
        `;
        carGrid.appendChild(carCard);
    });
}

// Função para garantir que a imagem seja carregada corretamente
function getCarImage(car) {
    if (car.photos && car.photos.length > 0) {
        return car.photos[0];  // Retorna a URL de dados da foto (ou a URL salva no LocalStorage)
    }
    return 'https://via.placeholder.com/300x300'; // Caso não tenha foto, usa uma imagem padrão
}

// Exibir detalhes do carro no modal
function showCarDetails(index) {
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    const car = cars[index];

    const carDetails = document.getElementById('carDetails');
    carDetails.innerHTML = `
        <div class="card-details">
            <div class="detail-card">
                <h6>Modelo</h6>
                <p>${car.model}</p>
            </div>
            <div class="detail-card">
                <h6>Ano</h6>
                <p>${car.year}</p>
            </div>
            <div class="detail-card">
                <h6>Marca</h6>
                <p>${car.brand}</p>
            </div>
            <div class="detail-card">
                <h6>Preço</h6>
                <p>R$ ${car.price}</p>
            </div>
        </div>

        <h6>Status de Conservação</h6>
        <p>${car.condition}</p>
        
        <h6>Descrição</h6>
        <p>${car.description || 'Nenhuma descrição fornecida.'}</p>

        <h6>Fotos</h6>
        <div class="gallery">
            ${car.photos ? car.photos.map(photo => `<img src="${photo}" alt="Imagem do carro" class="img-fluid">`).join('') : 'Nenhuma foto disponível.'}
        </div>
    `;

    updateComments(index);
    document.getElementById('carModal').setAttribute('data-car-index', index);
}

// Atualizar as avaliações (comentários) dos usuários
function updateComments(index) {
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    const car = cars[index];
    const commentsSection = document.getElementById('carComments');
    
    commentsSection.innerHTML = '';

    if (car.comments && car.comments.length > 0) {
        car.comments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.classList.add('comment-card');
            commentCard.innerHTML = `
                <div class="comment-header">${comment.username}</div>
                <div class="comment-body">${comment.comment}</div>
            `;
            commentsSection.appendChild(commentCard);
        });
    } else {
        commentsSection.innerHTML = '<p>Nenhum comentário ainda. Seja o primeiro a avaliar!</p>';
    }
}

// Adicionar comentário ao carro
function addComment() {
    const index = document.getElementById('carModal').getAttribute('data-car-index');
    const commentInput = document.getElementById('carCommentInput');
    const usernameInput = document.getElementById('usernameInput');
    const comment = commentInput.value.trim();
    const username = usernameInput.value.trim();

    if (comment && username) {
        let cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars[index].comments = cars[index].comments || [];
        cars[index].comments.push({ username: username, comment: comment });

        localStorage.setItem('cars', JSON.stringify(cars));
        updateComments(index);

        commentInput.value = '';
        usernameInput.value = '';
    } else {
        alert('Por favor, escreva um comentário e insira seu nome antes de adicionar.');
    }
}
