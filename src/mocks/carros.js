import logo from '../../assets/logo.png';

import cronos from '../../assets/frutas/cronos.jpg';
import onix from '../../assets/frutas/onix.jpg';
import etios from '../../assets/frutas/etios.jpg';
import hb20 from '../../assets/frutas/hb20.jpg';
import voyage from '../../assets/frutas/voyage.jpg';

const cesta = {
    topo: {
        titulo: "Olá, Isaias",
        descricao: "Bem-Vindo a tela administrativa, escolha um produto para ver ou cadastre um novo",
    },
    itens: {
        titulo: "Listagem de Carros",
        bt: "Ver carro",
        lista: [
            {
                nome: "Fiat Cronos Drive 1.3 ",
                preco: "R$ 60,000",
                imagem: cronos,
                descricao: "Pouco acima da barreira dos R$ 60 mil, o belo Fiat Cronos é o mais caro desta lista. Junto com o novo Onix Plus, é dos modelos que ainda tem um visual bem atual. O porta-malas é de ótimos 525 litros, e o motor é excelente — o econômico e esperto quatro cilindros Firefly 1.3 com até 109 cv.",
                edit: "Editar o Carro ?",
            },
            {
                nome: "Chevrolet Onix Plus LT 1.0",
                preco: "R$ 57.445",
                imagem: onix,
                descricao: "Não achamos uma foto da versão básica, mas garantimos que é nem diferente dessa das fotos. O novo Chevrolet tem vantagens no porte generoso e no novo visual. O porta-malas é um dos menores aqui, com 469 litros (ainda mais que em um SUV compacto; Honda HR-V e Nissan Kicks acomodam 437 litros. O motor 3 cilindros 1.0 aspirado, com até 82 cv, é extremamente econômico, porém o desempenho decepciona. Tem quatro airbags. ",
                edit: "Editar o Carro ?",
            },
            {
                nome: "Toyota Etios X Sedan 1.5 ",
                preco: "R$ 56.829",
                imagem: etios,
                descricao: "O Etios é meio desajeitado e não vem nem mesmo com um rádio, mas conquista no dia a dia com uma dirigibilidade muito bem acertada, um sistema de direção e suspensões impecável (para a categoria) e  e um ótimo motor 1.5 de até 107 cv. Quando se fala em porta-malas, é o campeão deste top 10, com exagerados 562 litros. ",
                edit: "Editar o Carro ?",


            },
            {
                nome: "Hyundai HB20S Vision 1.0",
                preco: "R$ 54.954",
                imagem: hb20,
                descricao: "O design da nova geração não agradou, e a versão básica chegou mais cedo à linha 2021 com a grade preta para disfarçar os traços. O porta-malas não é dos seus pontos mais fortes: são 465 litros. , mas o motor três cilindros tem 80 cv e é econômico, com dirigibilidade muito bem acertada. Já vem com rádio.",
                edit: "Editar o Carro ?",
            },
            {
                nome: "VW – Volkswagen VOYAGE 1.0",
                preco: "R$ 52.956",
                imagem: voyage,
                descricao: "Um dos veteranos da lista, o Voyage ganhou várias reestilizações para parecer mais moderno, mas o espaço interno fica devendo. O porta-malas tem 480 litros de capacidade. Apesar de tudo, a dirigibilidade ainda atrai e o acabamento interno não é dos piores.",
                edit: "Editar o Carro ?",

            }
        ],
    },
    cadastro: {
        titulo: "Cadastro de Carros",
        imagemcarro: "Escolha uma Imagem",
        add: "Cadastrar Carro",
    },

    nbotao: {
        botaoB: "Cadastrar novo Carro",
    },

}

export default cesta;