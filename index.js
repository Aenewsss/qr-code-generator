const button = document.getElementById('btn-generate');
const input = document.getElementById('input-qr-code');
const image = document.getElementById('image-qr-code')

button.addEventListener('click', () => {
    if(!input.value) alert('Insira um valor válido para gerar o QR CODE')

    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
})