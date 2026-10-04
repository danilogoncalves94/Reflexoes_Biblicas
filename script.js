$(document).ready(function () {
    /*ScrollReveal().reveal('.card', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: false,
    })*/

    ScrollReveal().reveal('.catecismo', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: false,
    })

    ScrollReveal().reveal('.catecismo_fonte', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 600,
    easing: 'ease-in-out',
    reset: false,
    })

    ScrollReveal().reveal('.biblia', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 1000,
    easing: 'ease-in-out',
    reset: false,
    })
})

const buscador = document.getElementById('buscador')
const itens = document.querySelectorAll('.card')

buscador.addEventListener('input', function() {
    const termoBusca = buscador.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    console.log(typeof(buscador))

    itens.forEach(function(item) {
        const textoOriginal = item.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (textoOriginal.includes(termoBusca)) {
            item.classList.remove("oculto")
        } else {
            item.classList.add("oculto")
        }
    })
})






// const buscador = document.getElementById('buscador');
// // Seleciona todos os blocos de conteúdo individualmente
// const itens = document.querySelectorAll('.item-busca');

// buscador.addEventListener('input', function () {
//     const termoBusca = buscador.value.toLowerCase().trim();

//     itens.forEach(item => {
//         // Pega o texto original completo dentro do bloco (título + parágrafo)
//         const textoOriginal = item.innerText;
//         const textoMinusculo = textoOriginal.toLowerCase();

//         // Se o termo estiver vazio, limpa os destaques e exibe tudo
//         if (termoBusca === '') {
//             item.style.display = 'block';
//             item.innerHTML = item.innerHTML.replace(/<span class="destaque">(.*?)<\/span>/g, '\$1');
//             return;
//         }

//         // Verifica se o texto do bloco contém a palavra-chave
//         if (textoMinusculo.includes(termoBusca)) {
//             item.style.display = 'block'; // Mostra o item

//             // Lógica opcional para destacar a palavra fisicamente na tela
//             // Usamos uma Expressão Regular para substituir o termo mantendo as maiúsculas originais
//             const regex = new RegExp(`(${termoBusca})`, 'gi');

//             // Nota: Para manter títulos e parágrafos intactos na estrutura real, 
//             // o ideal em projetos grandes é manipular nós de texto, mas este replace resolve para textos simples.
//             item.innerHTML = item.textContent.replace(regex, '<span class="destaque">\$1</span>');
//         } else {
//             item.style.display = 'none'; // Esconde o item que não condiz com a busca
//         }
//     });
// });


