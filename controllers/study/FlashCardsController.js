const express = require('express');
const router = express.Router();
const FlashCardsModel = require('../../models/study/FlashCardsModels');
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");



router.post('/admin/study/create', auth, (req,res)=>{

 const list  = [
  
    {
     "english": "be – “Will you be my friend?”",
     "portuguese": "ser - \"Você será meu amigo?\"",
     "title": "1000 palavras mais usadas no inglês "
    },
    {
     "english": "and – “You and I will always be friends.”",
     "portuguese": "e - “Você e eu sempre seremos amigos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "of – “Today is the first of November.”",
     "portuguese": "de - “Hoje é primeiro de novembro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "a – “I saw a bear today.”",
     "portuguese": "a - “Eu vi um urso hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "in – “She is in her room.”",
     "portuguese": "in - \"Ela está no quarto dela.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "to – “Let’s go to the park.”",
     "portuguese": "para - “Vamos para o parque.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "have – “I have a few questions.”",
     "portuguese": "tem - “Tenho algumas perguntas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "too – “I like her too.”",
     "portuguese": "também - \"Eu também gosto dela.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "it – “It is sunny outside.”",
     "portuguese": "it - \"Está ensolarado lá fora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "I – “I really like it here.”",
     "portuguese": "Eu - “Eu realmente gosto daqui.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "that – “That door is open.”",
     "portuguese": "que - \"Essa porta está aberta.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "for – “This letter is for you.”",
     "portuguese": "para - \"Esta carta é para você.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "you – “You are really nice.”",
     "portuguese": "você - \"Você é muito legal.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "he – “He is my brother.”",
     "portuguese": "ele - \"Ele é meu irmão.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "with – “I want to go with you.”",
     "portuguese": "com - “Eu quero ir com você.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "on – “I watch movies on my iPad.”",
     "portuguese": "ligado - “Eu assisto filmes no meu iPad.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "do – “What will you do now?”",
     "portuguese": "fazer - “O que você vai fazer agora?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "say – “Can I say something?”",
     "portuguese": "diga - “Posso dizer algo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "this – “This is my favorite cookie.”",
     "portuguese": "este - “Este é o meu cookie favorito.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "they – “They are here!”",
     "portuguese": "eles - “Eles estão aqui!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "at – “Can you pick me up at the mall?”",
     "portuguese": "em - \"Você pode me pegar no shopping?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "but – “I’m sorry but she’s away.”",
     "portuguese": "mas - \"Sinto muito, mas ela está fora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "we – “We are going to watch a movie.”",
     "portuguese": "nós - “Nós vamos assistir a um filme.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "his – “This is his box.”",
     "portuguese": "dele - \"Esta é a caixa dele.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "from – “This card came from my cousin.”",
     "portuguese": "from - “Este cartão veio do meu primo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "that – “That’s a really cool trick!”",
     "portuguese": "que - \"Esse é um truque muito legal!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "not – “That’s not what I want.”",
     "portuguese": "não - \"Isso não é o que eu quero.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "can’t – “I can’t open it.”",
     "portuguese": "não posso - \"Não consigo abri-lo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "won’t – “I won’t open it.”",
     "portuguese": "não vai - \"Eu não vou abri-lo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "by – “Will you come by and see me?”",
     "portuguese": "por - “Você virá me ver?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "she – “She is very happy.”",
     "portuguese": "ela - “Ela está muito feliz.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "or – “Do you like blue or yellow?”",
     "portuguese": "ou - “Você gosta de azul ou amarelo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "as – “Her role as an English teacher is very important.”",
     "portuguese": "as - “O papel dela como professora de inglês é muito importante.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "what – “What are you thinking of?”",
     "portuguese": "o que - “No que você está pensando?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "go – “I want to go there.”",
     "portuguese": "go - “Eu quero ir lá.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "their – “This is their house.”",
     "portuguese": "seus - \"Esta é a casa deles.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "can – “What can I do for you?”",
     "portuguese": "pode - “O que posso fazer por você?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "who – “Who can help me?”",
     "portuguese": "quem - “Quem pode me ajudar?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "get – “Can you get me my eyeglasses?”",
     "portuguese": "get - \"Você pode me pegar meus óculos?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "if – “What if I fail?”",
     "portuguese": "if - “E se eu falhar?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "would – “Would you help me out?”",
     "portuguese": "seria - \"Você poderia me ajudar?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "her – “I have her book.”",
     "portuguese": "ela - \"Eu tenho o livro dela.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "all – “All my favorite books are on this shelf.”",
     "portuguese": "all - “Todos os meus livros favoritos estão nesta estante.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "my – “My mom is coming to visit.”",
     "portuguese": "meu - \"Minha mãe está vindo para visitar.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "make – “Can we make our projects together?”",
     "portuguese": "make - “Podemos fazer nossos projetos juntos?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "about – “What is this movie about?”",
     "portuguese": "sobre - “Sobre o que é este filme?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "know – “Do you know where this place is?”",
     "portuguese": "sabe - “Você sabe onde é esse lugar?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "will – “I will help you find that place.”",
     "portuguese": "vai - \"Vou ajudá-lo a encontrar esse lugar.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "as – “As soon as she’s here, I’ll talk to her.”",
     "portuguese": "como - “Assim que ela estiver aqui, vou falar com ela”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "up – “I live up in the mountains.”",
     "portuguese": "up - “Eu moro nas montanhas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "one – “She is one of my English teachers.”",
     "portuguese": "um - “Ela é uma das minhas professoras de inglês.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "time – “There was a time I liked to play golf.”",
     "portuguese": "tempo - “Houve um tempo em que gostava de jogar golfe.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "there – “There are so many things I want to learn.”",
     "portuguese": "lá - “Há tantas coisas que quero aprender.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "year – “This is the year I’m finally going to learn English.”",
     "portuguese": "ano - “Este é o ano em que finalmente vou aprender inglês.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "so – “I am so sorry.”",
     "portuguese": "então - \"Eu sinto muito.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "think – “I think I need to lie down.”",
     "portuguese": "pense - “Acho que preciso deitar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "when – “When will I see you again?”",
     "portuguese": "quando - \"Quando vou te ver de novo?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "which – “Which of these slippers are yours?”",
     "portuguese": "qual - “Quais destes chinelos são seus?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "them – “Please give this to them.”",
     "portuguese": "eles - \"Por favor, dê isso a eles.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "some – “Please give them some of the apples I brought home.”",
     "portuguese": "alguns - \"Por favor, dê a eles algumas das maçãs que eu trouxe para casa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "me – “Can you give me some apples?”",
     "portuguese": "eu - \"Você pode me dar algumas maçãs?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "people – “There are so many people at the mall today.”",
     "portuguese": "pessoas - “Há tantas pessoas no shopping hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "take – “Please take home some of these apples”",
     "portuguese": "pegue - “Por favor, leve para casa algumas dessas maçãs”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "out – “Please throw the trash out.”",
     "portuguese": "fora - “Por favor, jogue o lixo fora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "into – “My puppy ran into the woods.”",
     "portuguese": "em - “Meu cachorro correu para a floresta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "just – “Just close your eyes.”",
     "portuguese": "apenas - \"Apenas feche os olhos.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "see – “Did you see that?”",
     "portuguese": "veja - “Você viu isso?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "him – “I heard him singing earlier.”",
     "portuguese": "ele - \"Eu o ouvi cantando mais cedo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "your – “Your mom is here.”",
     "portuguese": "seu - \"Sua mãe está aqui.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "come – “Can your mom and dad come to the party?”",
     "portuguese": "venha - \"Sua mãe e seu pai podem vir para a festa?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "could – “Could you help me with my project?”",
     "portuguese": "poderia - “Você poderia me ajudar com meu projeto?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "now – “I want to watch this now.”",
     "portuguese": "agora - “Eu quero assistir isso agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "than – “I like this cake better than the other one you showed me.”",
     "portuguese": "do que - “Gosto mais deste bolo do que do outro que você me mostrou”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "like – “I like this bag better than the other one you showed me.”",
     "portuguese": "tipo - “Gosto mais dessa bolsa do que da outra que você me mostrou”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "other – “I like these shoes better than the other ones you showed me.”",
     "portuguese": "outro - “Gosto mais desses sapatos do que dos outros que você me mostrou”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "how – “How do I turn this on?”",
     "portuguese": "como - “Como faço para ativar isso?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "then – “We had breakfast and then we went to church.”",
     "portuguese": "então - “Tomamos café da manhã e depois fomos para a igreja”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "its – “I need to read its manual.”",
     "portuguese": "its - “Eu preciso ler seu manual.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "our – “This is our home now.”",
     "portuguese": "nosso - “Esta é a nossa casa agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "two – “Two cheeseburgers, please.”",
     "portuguese": "dois - \"Dois cheeseburgers, por favor.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "more – “Can I have some more milk shake?”",
     "portuguese": "mais - “Posso tomar mais milk-shake?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "these – “Do you like these ribbons?”",
     "portuguese": "estes - \"Você gosta dessas fitas?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "want – “Do you want these ribbons?”",
     "portuguese": "quer - \"Você quer essas fitas?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "way – “Can you look this way?”",
     "portuguese": "caminho - \"Você pode olhar para este lado?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "look – “Please look this way.”",
     "portuguese": "olhe - “Por favor, olhe para cá.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "first – “She was my very first teacher.”",
     "portuguese": "primeiro - “Ela foi minha primeira professora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "also – “She was also my best friend.”",
     "portuguese": "também - “Ela também era minha melhor amiga.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "new – “I have new shoes.”",
     "portuguese": "novo - “Tenho sapatos novos”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "because – “I am crying because I’m sad.”",
     "portuguese": "porque - “Estou chorando porque estou triste”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "day – “Today is National Friendship day.”",
     "portuguese": "dia - “Hoje é o Dia Nacional da Amizade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "more – “I have more stickers at home.”",
     "portuguese": "mais - “Tenho mais adesivos em casa”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "use – “How do I use this?”",
     "portuguese": "use - “Como faço para usar isso?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "no – “There’s no electricity now.”",
     "portuguese": "não - “Não há eletricidade agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "man – “There’s a man outside looking for you.”",
     "portuguese": "homem - \"Há um homem lá fora procurando por você.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "find – “Where can I find rare furniture?”",
     "portuguese": "find - “Onde posso encontrar móveis raros?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "here – “My mom is here.”",
     "portuguese": "aqui - “Minha mãe está aqui.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "thing – “One thing led to another.”",
     "portuguese": "coisa - “Uma coisa levou a outra”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "give – “Give her these pearls.”",
     "portuguese": "dar - \"Dê a ela essas pérolas.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "many – “We shared many dreams together.”",
     "portuguese": "muitos - “Compartilhamos muitos sonhos juntos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "well – “You know me so well.”",
     "portuguese": "bem - \"Você me conhece tão bem.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "only – “You are my only friend here.”",
     "portuguese": "apenas - \"Você é meu único amigo aqui.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "those – “Those boots belong to my friend.”",
     "portuguese": "aquelas - \"Essas botas pertencem ao meu amigo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "tell – “Can you tell me which way to go?”",
     "portuguese": "diga - \"Você pode me dizer qual caminho seguir?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "one – “She’s the one he’s been waiting for.”",
     "portuguese": "um - \"Ela é quem ele está esperando.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "very – “I’m very upset right now.”",
     "portuguese": "muito - \"Estou muito chateado agora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "her – “Her grandmother is sick.”",
     "portuguese": "ela - \"A avó dela está doente.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "even – “She can’t even stand on her own.”",
     "portuguese": "até mesmo - \"Ela não consegue nem ficar em pé sozinha.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "back – “I’ll be right back.”",
     "portuguese": "de volta - “Já volto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "any – “Have you had any luck on your research?”",
     "portuguese": "any - “Você teve alguma sorte em sua pesquisa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "good – “You’re a good person.”",
     "portuguese": "bom - \"Você é uma boa pessoa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "woman – “That woman looks so polished.”",
     "portuguese": "mulher - \"Essa mulher parece tão polida.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "through – “Your faith will see you through tough times.”",
     "portuguese": "através - “Sua fé o ajudará em tempos difíceis.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "us – “Do you want to go with us?”",
     "portuguese": "nós - “Você quer ir conosco?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "life – “This is the best day of my life.”",
     "portuguese": "vida - “Este é o melhor dia da minha vida.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "child – “I just saw a child cross the street by herself.”",
     "portuguese": "criança - “Acabei de ver uma criança atravessar a rua sozinha.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "there – “Did you go there?”",
     "portuguese": "lá - “Você foi lá?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "work – “I have to go to work.”",
     "portuguese": "trabalho - “Eu tenho que ir trabalhar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "down – “Let’s go down.”",
     "portuguese": "para baixo - “Vamos descer.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "may – “You may take your seats.”",
     "portuguese": "pode - “Você pode sentar-se.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "after – “Let’s have dinner after work.”",
     "portuguese": "depois - \"Vamos jantar depois do trabalho.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "should – “Should I buy this dress?”",
     "portuguese": "deveria - “Devo comprar este vestido?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "call – “Call me when you get home, okay?”",
     "portuguese": "ligue - “Me ligue quando chegar em casa, ok?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "world – “I want to travel and see the world.”",
     "portuguese": "mundo - “Eu quero viajar e ver o mundo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "over – “I can’t wait for this day to be over.”",
     "portuguese": "mais - “Mal posso esperar por este dia acabar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "school – “My cousin goes to school here.”",
     "portuguese": "escola - “Meu primo estuda aqui.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "still – “I still think you should go.”",
     "portuguese": "ainda - \"Eu ainda acho que você deveria ir.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "try – “Can you try to be nicer to him?”",
     "portuguese": "tente - \"Você pode tentar ser mais legal com ele?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "in – “What’s in that box?”",
     "portuguese": "in - “O que há nessa caixa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "as – “As soon as I get home, I’m going to start watching that series.”",
     "portuguese": "como - “Assim que eu chegar em casa, vou começar a assistir aquela série.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "last – “This is my last slice of cake, I promise!”",
     "portuguese": "último - “Esta é a minha última fatia de bolo, eu prometo!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ask – “Can you ask the waiter to bring us some wine?”",
     "portuguese": "pergunte - \"Você pode pedir ao garçom para nos trazer um pouco de vinho?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "need – “I need some wine tonight!”",
     "portuguese": "precisa - \"Eu preciso de um pouco de vinho esta noite!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "too – “I need some wine, too!”",
     "portuguese": "também - \"Eu também preciso de um pouco de vinho!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "feel – “I feel so tired, I just need to relax and unwind.”",
     "portuguese": "sinta - \"Estou me sentindo tão cansado, só preciso relaxar e descontrair.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "three – “I have three sisters.”",
     "portuguese": "três - “Eu tenho três irmãs.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "when – “When was the last time you saw them?”",
     "portuguese": "quando - \"Quando foi a última vez que você os viu?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "state – “Check out the state of that shed, it’s falling apart.”",
     "portuguese": "estado - “Verifique o estado daquele galpão, está caindo aos pedaços.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "never – “I’m never going to drink wine again.”",
     "portuguese": "nunca - “Nunca mais vou beber vinho.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "become – “Over the years we’ve become really close.”",
     "portuguese": "tornou - se - “Com o passar dos anos, nos tornamos muito próximos”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "between – “This is just between you and me.”",
     "portuguese": "entre - \"Isso é apenas entre você e eu.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "high – “Give me a high five!”",
     "portuguese": "alto - “Dê-me mais cinco!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "really – “I really like your painting!”",
     "portuguese": "realmente - “Eu realmente gosto da sua pintura!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "something – “I have something for you.”",
     "portuguese": "algo - \"Eu tenho algo para você.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "most – “She’s the most beautiful girl I’ve ever seen.”",
     "portuguese": "a maioria - “Ela é a garota mais bonita que eu já vi.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "another – “I’ll have another glass of wine, please.”",
     "portuguese": "outro - \"Vou tomar outra taça de vinho, por favor.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "much – “I love you guys so much.”",
     "portuguese": "muito - \"Eu amo muito vocês.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "family – “You are like family to me.”",
     "portuguese": "família - “Você é como uma família para mim.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "own – “I want to get my own place.”",
     "portuguese": "próprio - “Eu quero ter meu próprio lugar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "out – “Get out of my room.”",
     "portuguese": "out  - “Saia do meu quarto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "leave – “I want you to leave.”",
     "portuguese": "sair - \"Eu quero que você saia.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "put – “Please put down that book and listen to me.”",
     "portuguese": "coloque - “Por favor, largue esse livro e me escute.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "old – “I feel so old!”",
     "portuguese": "velho - “Eu me sinto tão velho!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "while – “I can wait for you here while you shop.”",
     "portuguese": "enquanto - “Eu posso esperar por você aqui enquanto faz compras.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "mean – “I didn’t mean to sound so angry.”",
     "portuguese": "quer dizer - \"Eu não queria parecer tão zangado.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "on – “Can you turn on the lights?”",
     "portuguese": "ligado - “Você pode ligar as luzes?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "keep – “Can we keep the lights on tonight?”",
     "portuguese": "keep - “Podemos manter as luzes acesas hoje à noite?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "student – “I’ve always been a diligent student.”",
     "portuguese": "aluno - “Sempre fui um aluno diligente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "why – “This is why I don’t go out anymore.”",
     "portuguese": "porque - “É por isso que eu não saio mais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "let – “Why won’t you let him know how you feel?”",
     "portuguese": "vamos - \"Por que você não vai deixá-lo saber como você se sente?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "great – “This ice cream place is great for families with kids!”",
     "portuguese": "ótimo - “Esta sorveteria é ótima para famílias com crianças!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "same – “Hey, we’re wearing the same shirt!”",
     "portuguese": "mesmo - \"Ei, estamos usando a mesma camisa!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "big – “I have this big crush on Brad Pitt.”",
     "portuguese": "grande - “Tenho uma grande queda por Brad Pitt”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "group – “The group sitting across our table is so noisy.”",
     "portuguese": "grupo - “O grupo sentado em nossa mesa é tão barulhento.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "begin – “Where do I begin with this huge project?”",
     "portuguese": "begin - “Onde eu começo com este grande projeto?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "seem – “She may seem quiet, but she’s really outgoing once you get to know her.”",
     "portuguese": "parece - \"Ela pode parecer quieta, mas ela é realmente extrovertida quando você a conhece.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "country – “Japan is such a beautiful country!”",
     "portuguese": "país - “O Japão é um país tão bonito!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "help – “I need help with my Math homework.”",
     "portuguese": "help - “Preciso de ajuda com meu dever de matemática.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "talk – “Can we talk in private?”",
     "portuguese": "conversa - “Podemos conversar em particular?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "where – “Where were you last night?”",
     "portuguese": "onde - \"Onde você estava ontem à noite?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "turn – “If only I could turn back time.”",
     "portuguese": "turn - “Se eu pudesse voltar no tempo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "problem – “The problem is we think we have plenty of time.”",
     "portuguese": "problema - “O problema é que achamos que temos muito tempo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "every – “Every person has his own big goal to fulfill.”",
     "portuguese": "every - “Cada pessoa tem seu próprio grande objetivo a cumprir.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "start – “This is a great to start to learn the English language.”",
     "portuguese": "start - “Este é um ótimo começo para aprender a língua inglesa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hand – “Don’t let go of my hand.”",
     "portuguese": "mão - \"Não solte minha mão.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "might – “This might actually work.”",
     "portuguese": "pode - “Isso pode realmente funcionar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "American – “The American culture is so dynamic.”",
     "portuguese": "Americano - “A cultura americana é tão dinâmica.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "show – “Can you show me how to use this vacuum cleaner?”",
     "portuguese": "show - “Você pode me mostrar como usar este aspirador de pó?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "part – “This is my favorite part of the movie!”",
     "portuguese": "parte - “Esta é a minha parte favorita do filme!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "about – “What is the story about?”",
     "portuguese": "sobre - “Sobre o que é a história?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "against – “I am so against domestic abuse!”",
     "portuguese": "contra - “Eu sou contra a violência doméstica!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "place – “This place is wonderful!”",
     "portuguese": "lugar - “Este lugar é maravilhoso!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "over – “She kept saying this over and over again.”",
     "portuguese": "mais - \"Ela ficava dizendo isso continuamente.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "such – “He is such an annoying person.”",
     "portuguese": "tal - \"Ele é uma pessoa tão irritante.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "again – “Can we play that game again?”",
     "portuguese": "novamente - “Podemos jogar aquele jogo de novo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "few – “Just a few more errands and I’m done!”",
     "portuguese": "poucos - “Só mais algumas tarefas e pronto!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "case – “What an interesting case you are working on now!”",
     "portuguese": "case - “Que caso interessante você está trabalhando agora!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "most – “That’s the most interesting story I’ve ever heard.”",
     "portuguese": "a maioria - “Essa é a história mais interessante que já ouvi.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "week – “I had a rough week.”",
     "portuguese": "semana - “Tive uma semana difícil.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "company – “Will you keep me company?”",
     "portuguese": "empresa - \"Você me fará companhia?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "where – “Where are we going?”",
     "portuguese": "onde - “Para onde estamos indo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "system – “What’s wrong with the airport’s system?”",
     "portuguese": "sistema - “O que há de errado com o sistema do aeroporto?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "each – “Can you give each of them an apple?”",
     "portuguese": "cada um - \"Você pode dar a cada um deles uma maçã?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "right – “I’m right this time.”",
     "portuguese": "certo - \"Estou certo desta vez.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "program – “This community program for teens is really helpful.”",
     "portuguese": "programa - “Este programa comunitário para adolescentes é realmente útil.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hear – “Did you hear that?”",
     "portuguese": "ouvir - \"Você ouviu isso?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "so – “I’m so sleepy.”",
     "portuguese": "então - \"Estou com tanto sono.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "question – “I have a question for you.”",
     "portuguese": "pergunta - “Eu tenho uma pergunta para você.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "during – “During the session, I saw him fall asleep.”",
     "portuguese": "durante - “Durante a sessão, eu o vi adormecer.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "work – “I have to work this weekend.”",
     "portuguese": "trabalho - “Tenho que trabalhar este fim de semana.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "play – “We can play soccer next weekend instead.”",
     "portuguese": "play - “Podemos jogar futebol no próximo fim de semana.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "government – “I hope the government does something about the poverty in this country.”",
     "portuguese": "governo - “Espero que o governo faça algo sobre a pobreza neste país.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "run – “If you see a bear here, run for your life.”",
     "portuguese": "corra - “Se você ver um urso aqui, corra para salvar sua vida.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "small – “I have a small favor to ask you.”",
     "portuguese": "pequeno - “Tenho um pequeno favor para lhe pedir.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "number – “I have a number of favors to ask you.”",
     "portuguese": "número - \"Tenho uma série de favores para lhe pedir.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "off – “Please turn off the television.”",
     "portuguese": "off - “Por favor, desligue a televisão.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "always – “I always bring pepper spray with me.”",
     "portuguese": "sempre - “Sempre levo spray de pimenta comigo”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "move – “Let’s move on to the next tourist spot.”",
     "portuguese": "mover - “Vamos passar para o próximo ponto turístico.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "like – “I really like you.”",
     "portuguese": "tipo - “Eu realmente gosto de você”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "night – “The night is young.”",
     "portuguese": "noite - “A noite é jovem.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "live – “I’m going to live like there’s no tomorrow.”",
     "portuguese": "ao vivo - “Vou viver como se não houvesse amanhã”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "Mr. – “Mr. Morris is here.”",
     "portuguese": "Sr. - “Sr. Morris está aqui. ”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "point – “You have a point.”",
     "portuguese": "ponto - \"Você tem razão.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "believe – “I believe in you.”",
     "portuguese": "acredite  - \"Eu acredito em você.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hold – “Just hold my hand.”",
     "portuguese": "segure - “Apenas segure minha mão.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "today – “I’m going to see you today.”",
     "portuguese": "hoje - “Eu vou te ver hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "bring – “Please bring a pen.”",
     "portuguese": "trazer - “Por favor, traga uma caneta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "happen – “What will happen if you don’t submit your report on time?”",
     "portuguese": "acontecer  - “O que acontecerá se você não enviar seu relatório a tempo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "next – “This is the next best thing.”",
     "portuguese": "próximo - “Esta é a próxima melhor coisa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "without – “I can’t live without my phone.”",
     "portuguese": "sem - “Não consigo viver sem meu telefone.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "before – “Before I go to bed I always wash my face.”",
     "portuguese": "antes - “Antes de ir para a cama, sempre lavo o rosto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "large – “There’s a large amount of data online about that topic.”",
     "portuguese": "grande - “Há uma grande quantidade de dados on-line sobre esse tópico.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "all – “That’s all I know about Dinosaurs.”",
     "portuguese": "tudo - \"Isso é tudo que sei sobre dinossauros.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "million – “I have a million questions about this book.”",
     "portuguese": "milhão - “Tenho um milhão de perguntas sobre este livro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "must – “We must watch this movie together.”",
     "portuguese": "deve - “Devemos assistir a este filme juntos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "home – “Can we go home now?”",
     "portuguese": "home - “Podemos ir para casa agora?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "under – “I hid it under my bed.”",
     "portuguese": "sob - \"Eu escondi debaixo da minha cama.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "water – “I filled the tub with water.”",
     "portuguese": "água - “Enchi a banheira com água.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "room – “His room is at the end of the corridor.”",
     "portuguese": "quarto - “O quarto dele fica no final do corredor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "write – “Can you write me a prescription for this?”",
     "portuguese": "escreva - \"Você pode me prescrever uma receita para isso?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "mother – “His mother is a very lovely woman.”",
     "portuguese": "mãe - “A mãe dele é uma mulher muito adorável.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "area – “This area of this house needs to be fixed.”",
     "portuguese": "area - “Esta área desta casa precisa ser consertada.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "national – “That virus has become a national concern.”",
     "portuguese": "nacional - “Esse vírus se tornou uma preocupação nacional.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "money – “She needs money to buy her medicine.”",
     "portuguese": "dinheiro - “Ela precisa de dinheiro para comprar seu remédio”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "story – “She shared her story to the media.”",
     "portuguese": "história - “Ela compartilhou sua história com a mídia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "young – “She is so young and so hopeful.”",
     "portuguese": "jovem - “Ela é tão jovem e tão esperançosa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fact – “It’s a fact: shopping can improve your mood.”",
     "portuguese": "fato - “É um fato: fazer compras pode melhorar seu humor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "month – “It’s that time of the month!”",
     "portuguese": "mês - “É aquela época do mês!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "different – “Just because she’s different, it doesn’t mean she’s bad.”",
     "portuguese": "diferente - “Só porque ela é diferente, não significa que ela é ruim”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "lot – “You have a lot of explaining to do.”",
     "portuguese": "lote - \"Você tem muito o que explicar.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "right – “Turn right when you reach the corner.”",
     "portuguese": "direita - “Vire à direita quando chegar à esquina.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "study – “Let’s study our English lessons together.",
     "portuguese": "estudo - “Vamos estudar nossas aulas de inglês juntos.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "book – “Can I borrow your English book?”",
     "portuguese": "livro - “Posso pegar emprestado seu livro de inglês?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "eye – “She has the pink eye.”",
     "portuguese": "olho - \"Ela tem o olho rosa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "job – “I love my job.”",
     "portuguese": "job - “Eu amo meu trabalho.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "word – “Describe yourself in one word.”",
     "portuguese": "palavra - “Descreva-se em uma palavra.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "though – “Though you are angry now, I’m sure you will forget about this later.”",
     "portuguese": "embora - \"Embora você esteja com raiva agora, tenho certeza que vai esquecer isso mais tarde.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "business – “His business is thriving.”",
     "portuguese": "negócio - \"Seu negócio está prosperando.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "issue – “This is not an issue for me.”",
     "portuguese": "problema - “Isso não é um problema para mim.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "side – “Whose side are you on, anyway?”",
     "portuguese": "lado - \"De que lado você está, afinal?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "kind – “Always be kind, even to strangers.”",
     "portuguese": "kind - “Sempre seja gentil, mesmo com estranhos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "four – “There are four seasons in a year.”",
     "portuguese": "quatro - “Há quatro estações em um ano.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "head – “Let’s head back, it’s freezing out here.”",
     "portuguese": "cabeça - \"Vamos voltar, está congelando aqui.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "far – “We’ve gone too far and now we’re lost.”",
     "portuguese": "longe - “Fomos longe demais e agora estamos perdidos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "black – “She has long, black hair.”",
     "portuguese": "preto - \"Ela tem cabelo preto comprido.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "long – “She has long, brown hair.”",
     "portuguese": "longo - \"Ela tem cabelo castanho comprido.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "both – “They both love chocolate ice cream.”",
     "portuguese": "ambos - “Os dois adoram sorvete de chocolate”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "little – “I have two little boys with me now.”",
     "portuguese": "pequeno - “Eu tenho dois meninos comigo agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "house – “The house is so quiet without you.”",
     "portuguese": "casa - “A casa está tão quieta sem você.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "yes – “I hope you say yes.”",
     "portuguese": "sim - “Espero que você diga sim”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "after – “After all this time, he has finally learned to love.”",
     "portuguese": "depois - “Depois de todo esse tempo, ele finalmente aprendeu a amar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "since – “Ever since his mom died, he has been cranky and angry at the world.”",
     "portuguese": "desde - “Desde que sua mãe morreu, ele tem estado mal-humorado e com raiva do mundo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "long – “That was such a long time ago.”",
     "portuguese": "long - \"Isso foi há muito tempo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "provide – “Please provide me with a list of your services.”",
     "portuguese": "fornecer - “Forneça-me uma lista de seus serviços.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "service – “Do you have a specific dental service to treat this?”",
     "portuguese": "atendimento - “Você tem algum serviço odontológico específico para tratar isso?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "around – “We went around the block.”",
     "portuguese": "ao redor - \"Nós demos a volta no quarteirão.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "friend – “You’re a good friend.”",
     "portuguese": "amigo - “Você é um bom amigo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "important – “You’re important to me.”",
     "portuguese": "importante - \"Você é importante para mim.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "father – “My father is so important to me.”",
     "portuguese": "pai - “Meu pai é tão importante para mim.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sit – “Let’s sit outside together.”",
     "portuguese": "sentar - \"Vamos sentar lá fora juntos.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "away – “He’s away right now.”",
     "portuguese": "distância - \"Ele está fora agora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "until – “Until when will you be away?”",
     "portuguese": "até - “Até quando você estará fora?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "power – “With great power comes great responsibility.”",
     "portuguese": "poder - “Com grande poder vem grande responsabilidade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hour – “I’ve been checking his temperature every hour.”",
     "portuguese": "hora - \"Tenho verificado a temperatura dele a cada hora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "game – “Let’s play a game.”",
     "portuguese": "jogo - “Vamos jogar um jogo”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "often – “I buy from his bakery as often as I can.”",
     "portuguese": "frequentemente - “Compro na padaria dele sempre que posso”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "yet – “He’s not yet home.”",
     "portuguese": "ainda - \"Ele ainda não está em casa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "line – “There’s a long line at the grocery cashier.”",
     "portuguese": "linha - “Há uma longa fila no caixa do supermercado.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "political – “I stay away from political discussions.”",
     "portuguese": "político - “Eu fico longe de discussões políticas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "end – “It’s the end of an era.”",
     "portuguese": "fim - “É o fim de uma era.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "among – “Among all my pets, he’s my most favorite.”",
     "portuguese": "entre - “Entre todos os meus animais de estimação, ele é o meu favorito.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ever – “Have you ever tried this cake?”",
     "portuguese": "alguma vez - “Você já experimentou este bolo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "stand – “Can you stand still for a minute?”",
     "portuguese": "ficar - \"Você pode ficar parado por um minuto?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "bad – “What you did was so bad.”",
     "portuguese": "ruim - \"O que você fez foi tão ruim.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "lose – “I can’t lose you.”",
     "portuguese": "perder - \"Eu não posso perder você.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "however – “I want to buy this bag, however, I need to save up for it first.”",
     "portuguese": "no entanto - “Eu quero comprar esta bolsa, no entanto, preciso economizar para ela primeiro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "member – “She’s a member of the babysitter’s club.”",
     "portuguese": "membro - “Ela é membro do clube da babá.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "pay – “Let’s pay for our groceries.”",
     "portuguese": "pagar - “Vamos pagar nossos mantimentos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "law – “There’s a law against jay-walking.”",
     "portuguese": "lei - “Há uma lei contra o jay-walking.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "meet – “I want you to meet my aunt.”",
     "portuguese": "atender - “Eu quero que você conheça minha tia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "car – “Let’s go inside my car.”",
     "portuguese": "carro - “Vamos entrar no meu carro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "city – “This is the city that never sleeps.”",
     "portuguese": "cidade - “Esta é a cidade que nunca dorme.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "almost – “I’m almost done with my report.”",
     "portuguese": "quase - “Estou quase terminando meu relatório.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "include – “Did you remember to include the summary in your report?”",
     "portuguese": "incluir - “Você se lembrou de incluir o resumo em seu relatório?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "continue – “Can we continue working tomorrow?”",
     "portuguese": "continue - “Podemos continuar trabalhando amanhã?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "set – “Great, let me set an appointment for you.”",
     "portuguese": "set - “Ótimo, deixe-me marcar um encontro para você.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "later – “I’ll finish it later.”",
     "portuguese": "mais tarde - “Vou terminar mais tarde.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "community – “Our community is very tight knit.”",
     "portuguese": "comunidade - “Nossa comunidade é muito unida.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "much – “There’s so much to learn in the English language.”",
     "portuguese": "muito - “Há muito o que aprender na língua inglesa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "name – “What’s your name?”",
     "portuguese": "nome - “Qual é o seu nome?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "five – “I can give you five reasons why you need to watch that video.”",
     "portuguese": "cinco - “Posso apresentar cinco motivos pelos quais você precisa assistir a esse vídeo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "once – “I once had a puppy named Bark.”",
     "portuguese": "uma vez  - “Uma vez tive um cachorrinho chamado Bark.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "white – “I love my white sneakers.”",
     "portuguese": "branco - “Eu amo meus tênis brancos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "least – “She’s the least productive among all the employees.”",
     "portuguese": "menos - “Ela é a menos produtiva entre todos os funcionários.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "president  – “She was our class president back in high school.”",
     "portuguese": "presidente  - “Ela era a presidente de nossa classe no colégio”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "learn – “I’d love to learn more about the English language.”",
     "portuguese": "learn - “Adoraria aprender mais sobre a língua inglesa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "real – “What is her real name?”",
     "portuguese": "real - “Qual é o nome verdadeiro dela?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "change – “What can we change so that things will get better?”",
     "portuguese": "mudança - “O que podemos mudar para que as coisas melhorem?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "team – “They hired a team to do the design of their new office.”",
     "portuguese": "equipe - “Eles contrataram uma equipe para fazer o design de seu novo escritório.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "minute – “She’s laughing every minute of every day.”",
     "portuguese": "minuto - \"Ela está rindo a cada minuto de cada dia.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "best – “This is the best potato salad I’ve ever tasted.”",
     "portuguese": "best - “Esta é a melhor salada de batata que já provei.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "several – “I have several old clothes I need to donate.”",
     "portuguese": "vários - “Tenho várias roupas velhas que preciso doar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "idea – “It was your idea to go to the beach, remember?”",
     "portuguese": "ideia - “Foi ideia sua ir à praia, lembra?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "kid – “I loved that toy when I was a kid.”",
     "portuguese": "garoto - “Eu adorava aquele brinquedo quando era criança.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "body – “She worked out hard to achieve a toned body.”",
     "portuguese": "corpo - “Ela trabalhou duro para conseguir um corpo tonificado.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "information – “This is the information I need.”",
     "portuguese": "informações - “Estas são as informações de que preciso”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "nothing – “There’s nothing we can do now. “",
     "portuguese": "nada - “Não há nada que possamos fazer agora. “",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ago – “Three years ago, I visited Japan for the first time.”",
     "portuguese": "ago - “ Há três anos, visitei o Japão pela primeira vez.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "right – “You’re right, I want to go back there.”",
     "portuguese": "certo - \"Você está certo, eu quero voltar para lá.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "lead – “Just lead the way and I’ll follow.”",
     "portuguese": "conduzir - “Apenas mostre o caminho e eu o seguirei.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "social – “I feel awkward in these social gatherings.”",
     "portuguese": "social - “Eu me sinto estranho nessas reuniões sociais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "understand – “I understand how you feel.”",
     "portuguese": "entenda - “Eu entendo como você se sente”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "whether – “Whether in big groups or small groups, I always feel a little shy at first.”",
     "portuguese": "seja - “Seja em grupos grandes ou pequenos, sempre me sinto um pouco tímido no início”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "back – “Looking back, I knew I was always an introvert.”",
     "portuguese": "back - “Olhando para trás, eu sabia que sempre fui um introvertido.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "watch – “Let’s watch the sun set on the horizon.”",
     "portuguese": "assistir - “Vamos assistir ao pôr do sol no horizonte.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "together – “They’re together now.”",
     "portuguese": "juntos - \"Eles estão juntos agora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "follow – “I’ll follow you home.”",
     "portuguese": "siga - \"Eu vou te seguir até em casa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "around – “You’ll always have me around.”",
     "portuguese": "ao redor - \"Você sempre me terá por perto.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "parent – “Every parent is trying hard and doing their best.”",
     "portuguese": "pai - “Todos os pais estão se esforçando e fazendo o melhor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "only – “You are only allowed to go out today.”",
     "portuguese": "apenas - \"Você só tem permissão para sair hoje.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "stop – “Please stop that.”",
     "portuguese": "pare - “Por favor, pare com isso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "face – “Why is your face so red?”",
     "portuguese": "rosto - “Por que seu rosto está tão vermelho?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "anything – “You can ask me for anything.”",
     "portuguese": "qualquer coisa - \"Você pode me pedir qualquer coisa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "create – “Did you create that presentation? It was so good.”",
     "portuguese": "criar - “Você criou essa apresentação? Foi tão bom.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "public – “This is public property.”",
     "portuguese": "público - “Isso é propriedade pública.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "already – “I already asked him to resend his report.”",
     "portuguese": "já - “Já pedi para ele reenviar seu relatório.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "speak – “Could you speak a little louder?”",
     "portuguese": "fale - “Você poderia falar um pouco mais alto?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "others – “The others haven’t arrived yet.”",
     "portuguese": "outros - “Os outros ainda não chegaram”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "read – “I read somewhere that this house is haunted.”",
     "portuguese": "leia - “Li em algum lugar que esta casa é mal-assombrada”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "level – “What level are you in that game?”",
     "portuguese": "nível - “Em que nível você está nesse jogo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "allow – “Do you allow your kids to play outside the house?”",
     "portuguese": "permitir - \"Você permite que seus filhos brinquem fora de casa?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "add – “Is it okay if we add a bit of sugar to the tea?”",
     "portuguese": "adicione - “Tudo bem se adicionarmos um pouco de açúcar ao chá?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "office – “Welcome to my office.”",
     "portuguese": "escritório - “Bem-vindo ao meu escritório.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "spend – “How much did you spend on your last shopping spree?”",
     "portuguese": "gastar - “Quanto você gastou nas suas últimas compras?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "door – “You left the door open.”",
     "portuguese": "porta - \"Você deixou a porta aberta.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "health – “You must take good care of your health.”",
     "portuguese": "saúde - “Você deve cuidar bem da sua saúde.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "person – “You are a good person.”",
     "portuguese": "pessoa - \"Você é uma boa pessoa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "art – “This is my work of art.”",
     "portuguese": "arte - “Esta é a minha obra de arte.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sure – “Are you sure you want to do this alone?”",
     "portuguese": "claro - “Tem certeza de que deseja fazer isso sozinho?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "such – “You are such a brave little boy.”",
     "portuguese": "tal - \"Você é um menino tão corajoso.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "war – “The war has finally ended.”",
     "portuguese": "guerra - “A guerra finalmente acabou.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "history – “She is my history professor.”",
     "portuguese": "história - “Ela é minha professora de história”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "party – “Are you going to her party tonight?”",
     "portuguese": "festa - \"Você vai à festa dela hoje à noite?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "within – “We support everyone within our small community.”",
     "portuguese": "dentro - “Apoiamos todos em nossa pequena comunidade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "grow – “We want everyone to grow and thrive in their careers.”",
     "portuguese": "crescer - “Queremos que todos cresçam e prosperem em suas carreiras”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "result – “The result of this outreach program is amazing.”",
     "portuguese": "resultado - “O resultado deste programa de divulgação é incrível.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "open – “Are you open to teaching on weekends?”",
     "portuguese": "aberto - “Você está aberto para ensinar nos fins de semana?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "change – “Where can we change her diaper?”",
     "portuguese": "mudança - “Onde podemos trocar a fralda dela?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "morning – “It’s such a beautiful morning!”",
     "portuguese": "manhã - “É uma manhã tão linda!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "walk – “Come take a walk with me.”",
     "portuguese": "ande - “Venha dar um passeio comigo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "reason – “You are the reason I came home.”",
     "portuguese": "razão - “Você é a razão de eu voltar para casa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "low – “Her blood pressure has gotten really low.”",
     "portuguese": "baixo - “A pressão arterial dela caiu muito.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "win – “We can win this match if we work together.”",
     "portuguese": "vitória - “Podemos vencer esta partida se trabalharmos juntos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "research – “How is your research going?”",
     "portuguese": "pesquisa - “Como vai sua pesquisa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "girl – “That girl is in my class.”",
     "portuguese": "menina  - \"Essa menina é da minha classe.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "guy – “I’ve seen that guy in school before.”",
     "portuguese": "cara - \"Eu já vi aquele cara na escola antes.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "early – “I come to work so early every day.”",
     "portuguese": "cedo - “Venho trabalhar tão cedo todos os dias.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "food – “Let’s buy some food, I’m hungry!”",
     "portuguese": "comida - “Vamos comprar comida, estou com fome!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "before – “Can I talk to you before you go home?”",
     "portuguese": "antes - “Posso falar com você antes de ir para casa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "moment – “The moment she walked in the room, her puppy started to jump and dance again.”",
     "portuguese": "momento - “No momento em que ela entrou na sala, seu cachorro começou a pular e dançar novamente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "himself – “He cooked this Turkey himself.”",
     "portuguese": "ele mesmo - \"Ele mesmo cozinhou este peru.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "air – “I am loving the cold night air here.”",
     "portuguese": "ar - “Estou adorando o ar frio da noite aqui.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "teacher – “You are the best teacher ever.”",
     "portuguese": "professor - “Você é o melhor professor de todos os tempos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "force – “Don’t force him to play with other kids.”",
     "portuguese": "force - “Não o force a brincar com outras crianças.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "offer – “Can I offer you a ride home?”",
     "portuguese": "oferta - “Posso oferecer uma carona para casa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "enough – “Boys, that’s enough playing for today.”",
     "portuguese": "o suficiente - \"Rapazes, já chega de jogar por hoje.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "both – “You both need to change into your sleep clothes now.”",
     "portuguese": "ambos - \"Vocês dois precisam colocar suas roupas de dormir agora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "education – “I just want you to get the best education.”",
     "portuguese": "educação - “Eu só quero que você tenha a melhor educação.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "across – “Your dog ran across the park.”",
     "portuguese": "transversalmente - \"Seu cachorro correu pelo parque.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "although – “Although she felt tired, she still couldn’t sleep.”",
     "portuguese": "embora - \"Embora ela se sentisse cansada, ela ainda não conseguia dormir.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "remember – “Do you think she will still remember me after ten years?”",
     "portuguese": "lembre-se  - \"Você acha que ela ainda vai se lembrar de mim depois de dez anos?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "foot – “Her foot got caught in one of the ropes.”",
     "portuguese": "pé - “O pé dela ficou preso em uma das cordas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "second – “This is the second time she got late this month.”",
     "portuguese": "segundo - “Esta é a segunda vez que ela se atrasou este mês.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "boy – “There’s a boy in her class who keeps pulling her hair.”",
     "portuguese": "menino - “Tem um menino na classe dela que fica puxando o cabelo dela.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "maybe – “Maybe we can have ice cream for dessert.”",
     "portuguese": "talvez - “Talvez possamos comer sorvete de sobremesa”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "toward – “He took a step toward her.”",
     "portuguese": "em direção a - \"Ele deu um passo em sua direção.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "able – “Will you be able to send me your report today?”",
     "portuguese": "capaz - “Você poderá me enviar seu relatório hoje?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "age – “What is the average marrying age these days?”",
     "portuguese": "idade - “Qual é a idade média de casamento hoje em dia?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "off – “The cat ran off with the dog.”",
     "portuguese": "off - “O gato fugiu com o cachorro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "policy – “They have a generous return policy.”",
     "portuguese": "política - “Eles têm uma política de devolução generosa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "everything – “Everything is on sale.”",
     "portuguese": "tudo - “Tudo está à venda.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "love – “I love what you’re wearing!”",
     "portuguese": "amor - “Eu amo o que você está vestindo!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "process – “Wait, give me time to process everything you’re telling me.”",
     "portuguese": "processo - \"Espere, me dê tempo para processar tudo o que você está me dizendo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "music – “I love music.”",
     "portuguese": "música - “Eu amo música.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "including – “Around 20 people attended, including Bob and Beth.”",
     "portuguese": "incluindo - “Cerca de 20 pessoas compareceram, incluindo Bob e Beth.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "consider – “I hope you consider my project proposal.”",
     "portuguese": "considere - “Espero que você considere minha proposta de projeto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "appear – “How did that appear out of nowhere?”",
     "portuguese": "aparecer - “Como isso apareceu do nada?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "actually – “I’m actually just heading out.”",
     "portuguese": "na verdade - \"Na verdade, estou apenas saindo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "buy – “I’m going to buy these shoes.”",
     "portuguese": "comprar - “Vou comprar estes sapatos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "probably – “He’s probably still asleep.”",
     "portuguese": "provavelmente - \"Ele provavelmente ainda está dormindo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "human – “Give him a break, he is only human.”",
     "portuguese": "humano - \"Dê um tempo a ele, ele é apenas humano.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "wait – “Is it alright if you wait for a few minutes?”",
     "portuguese": "aguarde - “Tudo bem se você esperar alguns minutos?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "serve – “This blow dryer has served me well for years.”",
     "portuguese": "servir - “Este secador tem me servido bem por anos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "market – “Let’s visit the Sunday market.”",
     "portuguese": "mercado - “Vamos visitar o mercado de domingo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "die – “I don’t want my cat to die, let’s take him to the vet please.”",
     "portuguese": "morrer - \"Eu não quero que meu gato morra, vamos levá-lo ao veterinário, por favor.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "send – “Please send the package to my address.”",
     "portuguese": "enviar - “Por favor, envie o pacote para o meu endereço.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "expect – “You can’t expect much from their poor service.”",
     "portuguese": "esperar - “Você não pode esperar muito do serviço ruim deles.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "home – “I can’t wait to go home!”",
     "portuguese": "home - “Mal posso esperar para ir para casa!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sense – “I did sense that something was not okay.”",
     "portuguese": "sentido - \"Eu senti que algo não estava bem.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "build – “He is going to build his dream house.”",
     "portuguese": "construir - “Ele vai construir a casa dos seus sonhos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "stay – “You can stay with me for a few weeks.”",
     "portuguese": "ficar - \"Você pode ficar comigo por algumas semanas.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fall – “Be careful, you might fall.”",
     "portuguese": "queda - “Cuidado, você pode cair.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "oh – “Oh no, I left my phone at home!”",
     "portuguese": "oh - “Oh não, deixei meu telefone em casa!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "nation – “We have to act as one nation.”",
     "portuguese": "nação - “Temos que agir como uma nação.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "plan – “What’s your plan this time?”",
     "portuguese": "plano - “Qual é o seu plano desta vez?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cut – “Don’t cut your hair.”",
     "portuguese": "corte - “Não corte o cabelo”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "college – “We met in college.”",
     "portuguese": "faculdade - “Nós nos conhecemos na faculdade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "interest – “Music is an interest of mine.”",
     "portuguese": "interesse - “A música é um interesse meu.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "death – “Death is such a heavy topic for me.”",
     "portuguese": "morte - “A morte é um assunto muito pesado para mim.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "course – “What course did you take up in college?”",
     "portuguese": "curso - “Que curso você fez na faculdade?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "someone – “Is there someone who can go with you?”",
     "portuguese": "alguém - “Há alguém que possa ir com você?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "experience – “What an exciting experience!”",
     "portuguese": "experiência - “Que experiência emocionante!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "behind – “I’m scared to check what’s behind that door.”",
     "portuguese": "atrás - \"Estou com medo de verificar o que está atrás daquela porta.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "reach – “I can’t reach him, he won’t answer his phone.”",
     "portuguese": "alcance - “Não consigo alcançá-lo, ele não atende ao telefone”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "local – “This is a local business.”",
     "portuguese": "local - “Este é um negócio local”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "kill – “Smoking can kill you.”",
     "portuguese": "matar - “Fumar pode matar você”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "six – “I have six books about Psychology.”",
     "portuguese": "seis - “Tenho seis livros sobre psicologia”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "remain – “These remain on the top shelf.”",
     "portuguese": "permanecer - “Estes permanecem na prateleira de cima.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "effect – “Wow, the effect of that mascara is great!”",
     "portuguese": "efeito - “Uau, o efeito daquele rímel é ótimo!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "use – “Can I use your phone?”",
     "portuguese": "use - “Posso usar seu telefone?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "yeah – “Yeah, he did call me earlier.”",
     "portuguese": "sim - \"Sim, ele me ligou mais cedo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "suggest – “He did suggest that to me.”",
     "portuguese": "sugira - \"Ele sugeriu isso para mim.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "class – “We were in the same English class.”",
     "portuguese": "classe - “Estávamos na mesma aula de inglês.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "control – “Where’s the remote control?”",
     "portuguese": "controle - “Onde está o controle remoto?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "raise – “It’s so challenging to discipline kids these days.”",
     "portuguese": "aumentar - “É tão difícil disciplinar as crianças hoje em dia”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "care – “I don’t care about what you think.”",
     "portuguese": "cuidado - “Eu não me importo com o que você pensa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "perhaps – “Perhaps we can arrive at a compromise.”",
     "portuguese": "talvez - “Talvez possamos chegar a um acordo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "little – “There’s a little bird outside my window.”",
     "portuguese": "pequeno - \"Há um passarinho fora da minha janela.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "late – “I am running late for my doctor’s appointment.”",
     "portuguese": "atrasado - “Estou atrasado para a minha consulta médica.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hard – “That test was so hard.”",
     "portuguese": "difícil - \"Esse teste foi tão difícil.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "field – “He’s over there, by the soccer field.”",
     "portuguese": "campo - “Ele está ali, perto do campo de futebol.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "else – “Is anyone else coming?”",
     "portuguese": "mais - \"Tem mais alguém vindo?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "pass – “Can we pass by the grocery store?”",
     "portuguese": "passar - “Podemos passar na mercearia?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "former – “She was my former housemate.”",
     "portuguese": "ex - \"Ela era minha ex-colega de casa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sell – “We can sell your old couch online.”",
     "portuguese": "vender - “Podemos vender seu sofá antigo online.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "major – “It’s a major issue for the project.”",
     "portuguese": "major - “É um grande problema para o projeto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sometimes – “Sometimes I forget to turn off the porch lights.”",
     "portuguese": "às vezes - “Às vezes me esqueço de desligar as luzes da varanda”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "require – “They’ll require you to show your I.D.”",
     "portuguese": "require - “Eles exigirão que você mostre sua identidade”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "along – “Can I tag along your road trip?”",
     "portuguese": "junto - “Posso marcar ao longo de sua viagem?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "development – “This news development is really interesting.”",
     "portuguese": "desenvolvimento - “Este desenvolvimento de notícias é realmente interessante.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "themselves – “They can take care of themselves.”",
     "portuguese": "si próprios - “Eles podem cuidar de si próprios.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "report – “I read her report and it was great!”",
     "portuguese": "relatório - “Eu li o relatório dela e foi ótimo!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "role – “She’s going to play the role of Elsa.”",
     "portuguese": "papel - \"Ela vai fazer o papel de Elsa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "better – “Your singing has gotten so much better!”",
     "portuguese": "melhor - “Seu canto ficou muito melhor!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "economic – “Some countries are facing an economic crisis.”",
     "portuguese": "econômico - “Alguns países estão enfrentando uma crise econômica.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "effort – “The government must make an effort to solve this.”",
     "portuguese": "esforço - “O governo deve se esforçar para resolver isso”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "up – “His grades have gone up.”",
     "portuguese": "para cima - “As notas dele subiram.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "decide – “Please decide where to eat.”",
     "portuguese": "decida - “Por favor, decida onde comer.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "rate – “How would you rate the hotel’s service?”",
     "portuguese": "taxa - “Como você avaliaria o serviço do hotel?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "strong – “They have strong customer service here!”",
     "portuguese": "forte - “Eles têm um ótimo atendimento ao cliente aqui!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "possible – “Maybe it’s possible to change their bathroom amenities.”",
     "portuguese": "possível - “Talvez seja possível mudar suas amenidades de banho.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "heart – “My heart is so full.”",
     "portuguese": "coração - “Meu coração está tão cheio”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "drug – “She got the patent for the drug she has created to cure cancer.”",
     "portuguese": "medicamento - “Ela conseguiu a patente do medicamento que criou para curar o câncer”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "show – “Can you show me how to solve this puzzle?”",
     "portuguese": "show - “Você pode me mostrar como resolver esse quebra-cabeça?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "leader – “You are a wonderful leader.”",
     "portuguese": "líder - “Você é um líder maravilhoso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "light – “Watch her face light up when you mention his name.”",
     "portuguese": "luz - \"Observe o rosto dela se iluminar quando você menciona o nome dele.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "voice – “Hearing his mom’s voice is all he need right now.”",
     "portuguese": "voz - \"Ouvir a voz de sua mãe é tudo que ele precisa agora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "wife – “My wife is away for the weekend.”",
     "portuguese": "esposa - “Minha esposa está fora no fim de semana.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "whole – “I have the whole house to myself.”",
     "portuguese": "todo - \"Eu tenho a casa inteira para mim.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "police – “The police have questioned him about the incident.”",
     "portuguese": "polícia - “A polícia interrogou-o sobre o incidente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "mind – “This relaxation technique really eases my mind.”",
     "portuguese": "mente - “Esta técnica de relaxamento realmente acalma minha mente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "finally – “I can finally move out from my old apartment.”",
     "portuguese": "finalmente - \"Eu posso finalmente sair do meu antigo apartamento.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "pull – “My baby niece likes to pull my hair.”",
     "portuguese": "puxar - \"Minha sobrinha bebê gosta de puxar meu cabelo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "return – “I give her tickles in return.”",
     "portuguese": "retorno - “Eu dou cócegas em troca.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "free – “The best things in life are free.”",
     "portuguese": "grátis - “As melhores coisas da vida são de graça.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "military – “His dad is in the military.”",
     "portuguese": "militar - “O pai dele está no exército.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "price – “This is the price you pay for lying.”",
     "portuguese": "preço - “Este é o preço que você paga por mentir.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "report – “Did you report this to the police?”",
     "portuguese": "relatório - “Você denunciou isso à polícia?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "less – “I am praying for less stress this coming new year.”",
     "portuguese": "less - “Estou orando por menos estresse neste próximo ano.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "according – “According to the weather report, it’s going to rain today.”",
     "portuguese": "acordo - “De acordo com o boletim meteorológico, vai chover hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "decision – “This is a big decision for me.”",
     "portuguese": "decisão - “Esta é uma grande decisão para mim.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "explain – “I’ll explain everything later, I promise.”",
     "portuguese": "explique - “Vou explicar tudo mais tarde, eu prometo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "son – “His son is so cute!”",
     "portuguese": "filho - “O filho dele é tão fofo!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hope – “I hope I’ll have a son one day.”",
     "portuguese": "espero - “Espero ter um filho um dia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "even – “Even if they’ve broken up, they still remain friends.”",
     "portuguese": "até mesmo - “Mesmo que eles tenham terminado, eles ainda permanecem amigos”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "develop – “That rash could develop into something more serious.”",
     "portuguese": "desenvolver - “Essa erupção pode evoluir para algo mais sério.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "view – “This view is amazing!”",
     "portuguese": "view - “Esta vista é incrível!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "relationship – “They’ve taken their relationship to the next level.”",
     "portuguese": "relacionamento - “Eles levaram seu relacionamento para o próximo nível.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "carry – “Can you carry my bag for me?”",
     "portuguese": "carry - \"Você pode carregar minha bolsa para mim?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "town – “This town is extremely quiet.”",
     "portuguese": "cidade - “Esta cidade é extremamente tranquila.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "road – “There’s a road that leads to the edge of the woods.”",
     "portuguese": "estrada - “Há uma estrada que leva à orla da floresta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "drive – “You can’t drive there, you need to walk.”",
     "portuguese": "drive - “Você não pode dirigir lá, você precisa andar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "arm – “He broke his arm during practice.”",
     "portuguese": "braço - “Ele quebrou o braço durante o treino.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "true – “It’s true, I’m leaving the company.”",
     "portuguese": "verdade - “É verdade, estou saindo da empresa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "federal – “Animal abuse is now a federal felony!”",
     "portuguese": "federal - “O abuso de animais agora é um crime federal!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "break – “Don’t break the law.”",
     "portuguese": "break - “Não infrinja a lei.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "better – “You better learn how to follow rules.”",
     "portuguese": "melhor - “É melhor você aprender a seguir as regras.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "difference – “What’s the difference between happiness and contentment?”",
     "portuguese": "diferença - “Qual é a diferença entre felicidade e contentamento?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "thank – “I forgot to thank her for the pie she sent us.”",
     "portuguese": "obrigado - “Esqueci de agradecê-la pela torta que ela nos enviou”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "receive – “Did you receive the pie I sent you?”",
     "portuguese": "receber - “Você recebeu a torta que eu enviei para você?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "value – “I value our friendship so much.”",
     "portuguese": "valor - “Valorizo ??muito a nossa amizade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "international  – “Their brand has gone international!”",
     "portuguese": "internacional  - “A marca deles tornou-se internacional!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "building – “This building is so tall!”",
     "portuguese": "edifício  - “Este edifício é tão alto!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "action – “You next action is going to be critical.”",
     "portuguese": "ação  - “Sua próxima ação será crítica.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "full – “My work load is so full now.”",
     "portuguese": "full  - “Minha carga de trabalho está tão cheia agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "model – “A great leader is a great model of how to do things.”",
     "portuguese": "modelo  - “Um grande líder é um ótimo modelo de como fazer as coisas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "join – “He wants to join the soccer team.”",
     "portuguese": "entrar  - “Ele quer entrar para o time de futebol.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "season – “Christmas is my favorite season!”",
     "portuguese": "temporada  - “O Natal é minha época favorita!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "society – “Their society is holding a fund raiser.”",
     "portuguese": "sociedade  - “A sociedade deles está realizando uma arrecadação de fundos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "because – “I’m going home because my mom needs me.”",
     "portuguese": "porque - \"Estou indo para casa porque minha mãe precisa de mim.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "tax – “How much is the current income tax?”",
     "portuguese": "imposto  - “Quanto é o imposto de renda atual?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "director – “The director yelled ‘Cut!'”",
     "portuguese": "diretor  - “O diretor gritou 'Corta!'”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "early – “I’m too early for my appointment.”",
     "portuguese": "cedo  - “Cheguei muito cedo para o meu compromisso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "position  – “Please position your hand properly when drawing.”",
     "portuguese": "posição  - \"Por favor, posicione sua mão corretamente ao desenhar.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "player – “That basketball player is cute.”",
     "portuguese": "jogador  - “Aquele jogador de basquete é fofo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "agree – “I agree! He is cute!”",
     "portuguese": "concordo  - “Eu concordo! Ele é bonito!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "especially – “I especially like his blue eyes.”",
     "portuguese": "especialmente  - “Gosto especialmente dos olhos azuis dele”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "record  – “Can we record the minutes of this meeting, please?”",
     "portuguese": "registro  - “Podemos registrar a ata desta reunião, por favor?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "pick – “Did you pick a color theme already?”",
     "portuguese": "pick - “Você já escolheu um tema de cor?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "wear  – “Is that what you’re going to wear for the party?”",
     "portuguese": "vestir  - \"É isso que você vai vestir para a festa?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "paper – “You can use a special paper for your invitations.”",
     "portuguese": "papel  - “Você pode usar um papel especial para seus convites.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "special – “Some special paper are even scented!”",
     "portuguese": "especial  - “Alguns papéis especiais são até perfumados!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "space – “Please leave some space to write down your phone number.”",
     "portuguese": "espaço - “Deixe algum espaço para anotar seu número de telefone.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ground  – “The ground is shaking.”",
     "portuguese": "chão  - “O chão está tremendo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "form – “A new island was formed after that big earthquake.”",
     "portuguese": "forma - “Uma nova ilha foi formada após aquele grande terremoto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "support  – “I need your support for this project.”",
     "portuguese": "suporte  - “Preciso do seu apoio para este projeto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "event – “We’re holding a big event tonight.”",
     "portuguese": "evento - “Estamos realizando um grande evento esta noite.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "official – “Our official wedding photos are out!”",
     "portuguese": "oficial - “Nossas fotos oficiais do casamento foram publicadas!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "whose  – “Whose umbrella is this?”",
     "portuguese": "de quem  - “De quem é esse guarda-chuva?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "matter – “What does it matter anyway?”",
     "portuguese": "importa  - “O que isso importa, afinal?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "everyone  – “Everyone thinks I stole that file.”",
     "portuguese": "todos  - \"Todos pensam que eu roubei aquele arquivo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "center – “I hate being the center of attention.”",
     "portuguese": "center  - “Eu odeio ser o centro das atenções.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "couple – “The couple is on their honeymoon now.”",
     "portuguese": "casal  - “O casal está em lua de mel agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "site – “This site is so big!”",
     "portuguese": "site - “Este site é tão grande!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "project – “This project file is due tomorrow.”",
     "portuguese": "projeto  - “Este arquivo de projeto vence amanhã.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hit  – “He hit the burglar with a bat.”",
     "portuguese": "hit  - “Ele bateu no ladrão com um bastão.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "base – “All moms are their child’s home base.”",
     "portuguese": "base - “Todas as mães são a base domiciliar de seus filhos”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "activity – “What musical activity can you suggest for my toddler?”",
     "portuguese": "atividade  - “Que atividade musical você pode sugerir para meu filho?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "star – “My son can draw a star!”",
     "portuguese": "estrela - “Meu filho pode desenhar uma estrela!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "table  – “I saw him draw it while he was writing on the table.”",
     "portuguese": "mesa  - “Eu o vi desenhar enquanto escrevia na mesa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "need  – “I need to enroll him to a good preschool.”",
     "portuguese": "necessidade  - “Eu preciso matriculá-lo em uma boa pré-escola.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "court – “There’s a basketball court near our house.”",
     "portuguese": "quadra - “Há uma quadra de basquete perto de nossa casa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "produce  – “Fresh farm produce is the best.”",
     "portuguese": "produtos  - “Os produtos agrícolas frescos são os melhores.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "eat – “I could eat that all day.”",
     "portuguese": "comer  - \"Eu poderia comer isso o dia todo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "American – “My sister is dating an American.”",
     "portuguese": "Americano  - “Minha irmã está namorando um americano.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "teach – “I love to teach English lessons.”",
     "portuguese": "ensinar  - “Amo dar aulas de inglês.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "oil  – “Could you buy me some cooking oil at the store?”",
     "portuguese": "óleo  - \"Você poderia me comprar um pouco de óleo de cozinha na loja?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "half – “Just half a liter please.”",
     "portuguese": "meio  - “Só meio litro, por favor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "situation – “The situation is getting out of hand.”",
     "portuguese": "situação - “A situação está saindo do controle.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "easy – “I thought you said this was going to be easy?”",
     "portuguese": "fácil - \"Achei que você disse que ia ser fácil?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cost – “The cost of fuel has increased!”",
     "portuguese": "custo  - “O custo do combustível aumentou!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "industry – “The fuel industry is hiking prices.”",
     "portuguese": "indústria - “A indústria de combustíveis está aumentando os preços.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "figure – “Will our government figure out how to fix this problem?”",
     "portuguese": "figura - “Nosso governo descobrirá como resolver este problema?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "face  – “I can’t bear to face this horrendous traffic again and again.”",
     "portuguese": "cara  - “Não suporto enfrentar esse trânsito horrível de novo e de novo”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "street  – “Let’s cross the street.”",
     "portuguese": "rua  - “Vamos atravessar a rua.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "image – “There’s an image of him stored inside my mind.”",
     "portuguese": "imagem - “Há uma imagem dele armazenada em minha mente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "itself  – “The bike itself is pretty awesome.”",
     "portuguese": "em si  - “A bicicleta em si é incrível.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "phone  – “Plus, it has a phone holder.”",
     "portuguese": "telefone  - “Além disso, tem um suporte para telefone.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "either – “I either walk or commute to work.”",
     "portuguese": "ou - \"Eu ando ou vou para o trabalho\".",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "data – “How can we simplify this data?”",
     "portuguese": "dados  - “Como podemos simplificar esses dados?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cover  – “Could you cover for me during emergencies?”",
     "portuguese": "capa  - “Você poderia me cobrir durante emergências?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "quite – “I’m quite satisfied with their work.”",
     "portuguese": "bastante - “Estou bastante satisfeito com o trabalho deles”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "picture  – “Picture this: a lake, a cabin, and lots of peace and quiet.",
     "portuguese": "picture  - “Imagine isso: um lago, uma cabana e muita paz e sossego.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "clear – “That picture is so clear inside my head.”",
     "portuguese": "claro - \"Essa imagem é tão clara dentro da minha cabeça.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "practice – “Let’s practice our dance number.”",
     "portuguese": "prática - “Vamos praticar nosso número de dança.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "piece – “That’s a piece of cake!”",
     "portuguese": "pedaço  - \"Isso é moleza!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "land – “Their plane is going to land soon.”",
     "portuguese": "terra - “O avião deles vai pousar em breve.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "recent – “This is her most recent social media post.”",
     "portuguese": "recente - “Esta é a postagem mais recente dela nas redes sociais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "describe – “Describe yourself in one word.”",
     "portuguese": "descreva - “Descreva-se em uma palavra.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "product – “This is my favorite product in their new line of cosmetics.”",
     "portuguese": "produto - “Este é meu produto favorito em sua nova linha de cosméticos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "doctor – “The doctor is in.”",
     "portuguese": "médico - “O médico está dentro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "wall – “Can you post this up on the wall?”",
     "portuguese": "parede - “Você pode postar isso na parede?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "patient  – “The patient is in so much pain now.”",
     "portuguese": "paciente  - \"O paciente está com muitas dores agora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "worker – “She’s a factory worker.”",
     "portuguese": "trabalhador - “Ela é uma operária de fábrica.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "news  – “I saw that on the news.”",
     "portuguese": "news  - “Eu vi isso no noticiário.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "test – “I have to pass this English test.”",
     "portuguese": "teste - “Eu tenho que passar neste teste de inglês.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "movie – “Let’s watch a movie later.”",
     "portuguese": "filme - “Vamos assistir a um filme mais tarde.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "certain  – “There’s a certain kind of magic in the air now.”",
     "portuguese": "certo  - \"Há um certo tipo de magia no ar agora.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "north – “Santa lives up north.”",
     "portuguese": "norte - “Papai Noel mora ao norte.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "love – ” l love Christmas!”",
     "portuguese": "amor - \"Eu amo o Natal!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "personal  – “This letter is very personal.”",
     "portuguese": "pessoal  - “Esta carta é muito pessoal.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "open – “Why did you open and read it?”",
     "portuguese": "aberto - “Por que você abriu e leu?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "support – “Will you support him?”",
     "portuguese": "apoio  - “Você vai apoiá-lo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "simply – “I simply won’t tolerate bad behavior.”",
     "portuguese": "simplesmente - “Eu simplesmente não tolerarei mau comportamento.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "third – “This is the third time you’ve lied to me.”",
     "portuguese": "terceiro - \"Esta é a terceira vez que você mentiu para mim.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "technology – “Write about the advantages of technology.”",
     "portuguese": "tecnologia - “Escreva sobre as vantagens da tecnologia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "catch – “Let’s catch up soon, please!”",
     "portuguese": "catch - “Vamos conversar logo, por favor!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "step – “Watch your step.”",
     "portuguese": "etapa - “Cuidado com o passo”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "baby – “Her baby is so adorable.”",
     "portuguese": "bebê - \"O bebê dela é tão adorável.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "computer – “Can you turn on the computer, please?”",
     "portuguese": "computador - “Pode ligar o computador, por favor?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "type  – “You need to type in your password.”",
     "portuguese": "digite  - “Você precisa digitar sua senha.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "attention – “Can I have your attention, please?”",
     "portuguese": "atenção - \"Posso ter sua atenção, por favor?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "draw – “Can you draw this for me?”",
     "portuguese": "desenhar - \"Você pode desenhar isso para mim?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "film – “That film is absolutely mind-blowing.”",
     "portuguese": "filme - “Esse filme é absolutamente alucinante.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "Republican – “He is a Republican candidate.”",
     "portuguese": "Republicano - “Ele é um candidato republicano”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "tree – “That tree has been there for generations.”",
     "portuguese": "árvore - \"Essa árvore está lá há gerações.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "source – “You are my source of strength.”",
     "portuguese": "fonte - “Você é minha fonte de força.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "red – “I’ll wear a red dress tonight.”",
     "portuguese": "vermelho - \"Vou usar um vestido vermelho esta noite.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "nearly – “He nearly died in that accident!”",
     "portuguese": "quase - \"Ele quase morreu naquele acidente!\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "organization – “Their organization is doing great things for street kids.”",
     "portuguese": "organização - “A organização deles está fazendo grandes coisas para as crianças de rua”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "choose – “Let me choose a color.”",
     "portuguese": "escolha - “Deixe-me escolher uma cor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cause – “We have to see the cause and effect of this experiment.”",
     "portuguese": "causa - “Temos que ver a causa e o efeito desta experiência.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hair – “I’ll cut my hair short for a change.”",
     "portuguese": "cabelo  - “Vou cortar meu cabelo curto para variar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "look – “Can you look at the items I bought?”",
     "portuguese": "olha -  “Você pode olhar os itens que comprei?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "point  “What is the point of all this?",
     "portuguese": "ponto  “Qual é o objetivo de tudo isso?",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "century – “We’re living in the 21st century, Mary.”",
     "portuguese": "século  - “Estamos vivendo no século 21, Maria.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "evidence – “The evidence clearly shows that he is guilty.”",
     "portuguese": "evidência - “A evidência mostra claramente que ele é culpado.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "window  – “I’ll buy window curtains next week.”",
     "portuguese": "janela  - “Vou comprar cortinas de janela na próxima semana.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "difficult  “Sometimes, life can be difficult.”",
     "portuguese": "difícil  “Às vezes, a vida pode ser difícil.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "listen – “You have to listen to your teacher.”",
     "portuguese": "ouça - “Você tem que ouvir o seu professor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "soon  – “I will launch my course soon.”",
     "portuguese": "em breve  - “Vou lançar meu curso em breve.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "culture  – “I hope they understand our culture better.”",
     "portuguese": "cultura  - “Espero que eles entendam melhor nossa cultura.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "billion  – “My target is to have 1 billion dollars in my account by the end of the year.”",
     "portuguese": "bilhões  - “Minha meta é ter 1 bilhão de dólares em minha conta até o final do ano.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "chance – “Is there any chance that you can do this for me?”",
     "portuguese": "chance  - “Existe alguma chance de você fazer isso por mim?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "brother – “My brother always have my back.”",
     "portuguese": "irmão  - “Meu irmão sempre me protege.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "energy  – “Now put that energy into walking.”",
     "portuguese": "energia  - “Agora coloque essa energia em andar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "period – “They covered a period of twenty years.”",
     "portuguese": "período  - “Eles cobriram um período de vinte anos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "course  – “Have seen my course already?”",
     "portuguese": "curso  - “Já viu o meu curso?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "summer – “I’ll go to the beach in summer.”",
     "portuguese": "verão - “Vou para a praia no verão”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "less – “Sometimes, less is more.”",
     "portuguese": "menos  - “Às vezes, menos é mais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "realize – “I just realize that I have a meeting today.”",
     "portuguese": "perceber  - “Acabei de perceber que tenho uma reunião hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hundred – “I have a hundred dollars that I can lend you.”",
     "portuguese": "cem  - “Eu tenho cem dólares que posso te emprestar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "available – “I am available to work on your project.”",
     "portuguese": "disponível  - “Estou disponível para trabalhar em seu projeto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "plant – “Plant a seed.”",
     "portuguese": "plantar  - “Plantar uma semente”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "likely – “It was likely a deer trail.”",
     "portuguese": "provável  - “Provavelmente era uma trilha de cervos”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "opportunity – “It was the perfect opportunity to test her theory.”",
     "portuguese": "oportunidade  - “Foi a oportunidade perfeita para testar a teoria dela.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "term  – “I’m sure there’s a Latin term for it.”",
     "portuguese": "termo  - “Tenho certeza de que existe um termo latino para isso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "short  – “It was just a short stay at the hotel.”",
     "portuguese": "curta  - “Foi apenas uma curta estadia no hotel.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "letter – “I already passed my letter of intent.”",
     "portuguese": "carta  - “Já passei minha carta de intenções.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "condition – “Do you know the condition I am in?”",
     "portuguese": "condição  - “Você sabe em que condição estou?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "choice – “I have no choice.”",
     "portuguese": "escolha  - “Não tenho escolha.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "place – “Let’s meet out at meeting place.”",
     "portuguese": "local  - “Vamos nos encontrar no local de reunião.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "single – “I am a single parent.”",
     "portuguese": "solteiro  - “Eu sou um pai solteiro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "rule – “It’s the rule of the law.”",
     "portuguese": "regra  - “É a regra da lei”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "daughter – “My daughter knows how to read now.”",
     "portuguese": "filha  - “Minha filha sabe ler agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "administration – “I will take this up with the administration.”",
     "portuguese": "administração  - \"Vou tratar disso com a administração.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "south – “I am headed south.”",
     "portuguese": "sul  - \"Estou indo para o sul.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "husband – “My husband just bought me a ring for my birthday.”",
     "portuguese": "marido  - “Meu marido acabou de me comprar um anel de aniversário.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "Congress – “It will be debated at the Congress.”",
     "portuguese": "Congresso  - “Será debatido no Congresso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "floor – “She is our floor manager.”",
     "portuguese": "floor  - “Ela é nossa gerente de chão.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "campaign – “I handled their election campaign.”",
     "portuguese": "campanha  - “Eu liderei a campanha eleitoral deles.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "material – “She had nothing material to report.”",
     "portuguese": "material  - “Ela não tinha nada de  material para relatar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "population – “The population of the nearest big city was growing.”",
     "portuguese": "população  - “A população da cidade grande mais próxima estava crescendo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "well – “I wish you well.”",
     "portuguese": "bem  - \"Desejo-lhe tudo de bom.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "call – ” I am going to call the bank.”",
     "portuguese": "ligue  - \"Vou ligar para o banco.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "economy – “The economy is booming.”",
     "portuguese": "economia  - “A economia está crescendo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "medical -“She needs medical assistance.”",
     "portuguese": "médico  - “Ela precisa de assistência médica.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hospital – “I’ll take her to the nearest hospital.”",
     "portuguese": "hospital  - “Vou levá-la ao hospital mais próximo”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "church – “I saw you in church last Sunday.”",
     "portuguese": "igreja  - \"Eu vi você na igreja no domingo passado.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "close -“Please close the door.”",
     "portuguese": "fechar  - “Por favor, feche a porta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "thousand – “There are a thousand reasons to learn English!”",
     "portuguese": "mil - “Existem mil razões para aprender inglês!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "risk – “Taking a risk can be rewarding.”",
     "portuguese": "risco - “Assumir um risco pode ser recompensador.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "current – “What is your current address?”",
     "portuguese": "atual - “Qual é o seu endereço atual?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fire – “Make sure your smoke alarm works in case of fire.”",
     "portuguese": "incêndio - “Certifique-se de que seu alarme de fumaça funcione em caso de incêndio”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "future -“The future is full of hope.”",
     "portuguese": "futuro  - “O futuro está cheio de esperança.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "wrong – “That is the wrong answer.”",
     "portuguese": "errado  - \"Essa é a resposta errada.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "involve – “We need to involve the police.”",
     "portuguese": "envolver  - “Precisamos envolver a polícia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "defense – “What is your defense or reason you did this?”",
     "portuguese": "defesa  - “Qual é a sua defesa ou a razão pela qual você fez isso?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "anyone – “Does anyone know the answer?”",
     "portuguese": "alguém  - “Alguém sabe a resposta?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "increase – “Let’s increase your test score.”",
     "portuguese": "aumentar  - “Vamos aumentar sua pontuação no teste”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "security – “Some apartment buildings have security.”",
     "portuguese": "segurança  - “Alguns prédios de apartamentos têm segurança.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "bank – “I need to go to the bank to withdraw some money.”",
     "portuguese": "banco  - “Eu preciso ir ao banco para sacar algum dinheiro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "myself – “I can clean up by myself.”",
     "portuguese": "eu mesmo  - “Eu posso limpar sozinho.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "certainly – “I can certainly help clean up.”",
     "portuguese": "certamente  - “Eu certamente posso ajudar a limpar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "west – “If you drive West, you will arrive in California.”",
     "portuguese": "oeste  - “Se você dirigir para o oeste, chegará na Califórnia”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sport – “My favorite sport is soccer.”",
     "portuguese": "esporte  - “Meu esporte favorito é futebol.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "board – “Can you see the board?”",
     "portuguese": "placa  - \"Você pode ver a placa?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "seek – “Seek and you will find.”",
     "portuguese": "procurar  - “Busque e você encontrará.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "per – “Lobster is $20 per pound.”",
     "portuguese": "por  - “A lagosta custa $ 20 por libra.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "subject – “My favorite subject is English!”",
     "portuguese": "assunto  - “Meu assunto favorito é Inglês!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "officer – “Where can I find a police officer?”",
     "portuguese": "oficial  - “Onde posso encontrar um policial?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "private – “This is a private party.”",
     "portuguese": "privado  - “Esta é uma festa privada.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "rest – “Let’s take a 15 minute rest.”",
     "portuguese": "descanso  - “Vamos fazer um descanso de 15 minutos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "behavior – “This dog’s behavior is excellent.”",
     "portuguese": "comportamento - “O comportamento  deste cão é excelente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "deal – “A used car can be a good deal.”",
     "portuguese": "negócio  - “Um carro usado pode ser um bom negócio.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "performance – “Your performance can be affected by your sleep.”",
     "portuguese": "desempenho  - “Seu desempenho pode ser afetado por seu sono.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fight – “I don’t want to fight with you.”",
     "portuguese": "luta  - “Eu não quero brigar com você”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "throw – “Throw me the ball!”",
     "portuguese": "jogue  - “Jogue a bola para mim!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "top – “You are a top student.”",
     "portuguese": "início  - “Você é um excelente aluno.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "quickly – “Let’s finish reading this quickly.”",
     "portuguese": "rapidamente - “Vamos terminar de ler isso rapidamente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "past – “In the past, my English was not as good as it is today.”",
     "portuguese": "passado - “No passado, meu inglês não era tão bom quanto é hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "goal – “My goal is to speak English fluently.”",
     "portuguese": "objetivo  - “Meu objetivo é falar inglês fluentemente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "second – “My second goal is to increase my confidence.”",
     "portuguese": "segundo  - “Meu segundo objetivo é aumentar minha confiança.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "bed – “I go to bed around 10pm.”",
     "portuguese": "cama  - “Vou para a cama por volta das 22h”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "order – “I would like to order a book.”",
     "portuguese": "pedido  - “Eu gostaria de pedir um livro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "author – “The author of this series is world-famous.”",
     "portuguese": "autor  - “O autor desta série é mundialmente famoso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fill – “I need to fill (up) my gas tank.”",
     "portuguese": "fill  - “Preciso encher (encher) meu tanque de gasolina.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "represent – “I represent my family.”",
     "portuguese": "representar  - “Eu represento minha família.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "focus – “Turn off your phone and the TV and focus on your studies!”",
     "portuguese": "foco  - “Desligue o telefone e a TV e concentre-se nos estudos!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "foreign – “It’s great having foreign friends.”",
     "portuguese": "estrangeiro  - “É ótimo ter amigos estrangeiros.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "drop – “Please don’t drop the eggs!”",
     "portuguese": "drop  - “Por favor, não deixe cair os ovos!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "plan – “Let’s make a plan.”",
     "portuguese": "plano  - “Vamos fazer um plano”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "blood – “The hospital needs people to give blood.”",
     "portuguese": "sangue  - “O hospital precisa de pessoas para doar sangue.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "upon – “Once upon a time, a princess lived in a castle.”",
     "portuguese": "sobre  - \"Era uma vez, uma princesa vivia em um castelo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "agency – “Let’s contract an agency to help with marketing.”",
     "portuguese": "agência  - “Vamos contratar uma agência para ajudar no marketing.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "push – “The door says ‘push,’ not ‘pull.'”",
     "portuguese": "empurrar  - “A porta diz 'empurrar', não 'puxar'”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "nature – “I love walking in nature!”",
     "portuguese": "natureza  - “Eu adoro caminhar na natureza!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "color – “My favorite color is blue.”",
     "portuguese": "color -  “Minha cor favorita é azul.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "no – “‘No’ is one of the shortest complete sentences.”",
     "portuguese": "não  - “'Não' é uma das frases completas mais curtas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "recently – “I cleaned the bathroom most recently, so I think it’s your turn this time.”",
     "portuguese": "recentemente  - “Limpei o banheiro mais recentemente, então acho que é a sua vez desta vez.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "store – “I’m going to the store to buy some bread.”",
     "portuguese": "store  - “Vou à loja comprar pão.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "reduce – “Reduce, reuse, and recycle are the ways to help the environment.”",
     "portuguese": "reduzir  - “Reduzir, reutilizar e reciclar são as maneiras de ajudar o meio ambiente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sound – “I like the sound of wind chimes.”",
     "portuguese": "som  - \"Eu gosto do som dos sinos de vento.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "note – “Please take notes during the lesson.”",
     "portuguese": "nota  - “Por favor, faça anotações durante a aula.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fine – “I feel fine.”",
     "portuguese": "bem  - \"Eu me sinto bem.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "before – “Before the movie, let’s buy popcorn!”",
     "portuguese": "antes  - “Antes do filme, vamos comprar pipoca!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "near – “Near, far, wherever you are, I do believe that the heart goes on.”",
     "portuguese": "próximo  - \"Perto, longe, onde quer que você esteja, eu acredito que o coração continua.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "movement – “The environmental movement is an international movement.”",
     "portuguese": "movimento  - “O movimento ambientalista é um movimento internacional.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "page – “Please turn to page 62.”",
     "portuguese": "página  - “Por favor, vá para a página 62.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "enter – “You can enter the building on the left.”",
     "portuguese": "entrar  - “Você pode entrar no prédio à esquerda.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "share – “Let me share my idea.”",
     "portuguese": "compartilhar  - “Deixe-me compartilhar minha ideia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "than – “Ice cream has more calories than water.”",
     "portuguese": "do que  - “O sorvete tem mais calorias do que a água”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "common – “Most people can find something in common with each other.”",
     "portuguese": "comum  - “A maioria das pessoas pode encontrar algo em comum entre si.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "poor – “We had a poor harvest this year because it was so dry.”",
     "portuguese": "pobre - “Tivemos uma colheita ruim este ano porque estava muito seco.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "other  – “This pen doesn’t work, try the other one.”",
     "portuguese": "outro  - “Esta caneta não funciona, experimente a outra.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "natural – “This cleaner is natural, there aren’t any chemicals in it.”",
     "portuguese": "natural - “Este limpador é natural, não contém nenhum produto químico”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "race – “We watched the car race on TV.”",
     "portuguese": "corrida - “Assistimos à corrida de carros na TV.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "concern – “Thank you for your concern, but I’m fine.”",
     "portuguese": "preocupação - “Obrigado pela sua preocupação, mas estou bem.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "series – “What is your favorite TV series?”",
     "portuguese": "série - “Qual é a sua série de TV favorita?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "significant – “His job earns a significant amount of money.”",
     "portuguese": "significativo - \"Seu trabalho rende uma quantia significativa de dinheiro.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "similar – “These earrings don’t match, but they are similar.”",
     "portuguese": "semelhantes - “Esses brincos não combinam, mas são semelhantes.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hot – “Don’t touch the stove, it’s still hot.”",
     "portuguese": "quente - “Não toque no fogão, ainda está quente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "language – “Learning a new language is fun.”",
     "portuguese": "idioma - “Aprender um novo idioma é divertido.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "each – “Put a flower in each vase.”",
     "portuguese": "cada um - “Coloque uma flor em cada vaso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "usually – “I usually shop at the corner store.”",
     "portuguese": "normalmente - \"Eu geralmente compro na loja da esquina.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "response – “I didn’t expect his response to come so soon.”",
     "portuguese": "resposta - “Eu não esperava que sua resposta viesse tão cedo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "dead – “My phone is dead, let me charge it.”",
     "portuguese": "morto - \"Meu telefone está morto, deixe-me carregá-lo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "rise – “The sun will rise at 7:00 a.m.”",
     "portuguese": "nascer - “O sol nascerá às 7h”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "animal – “What kind of animal is that?”",
     "portuguese": "animal - “Que tipo de animal é esse?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "factor – “Heredity is a factor in your overall health.”",
     "portuguese": "fator - “A hereditariedade é um fator em sua saúde geral.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "decade – “I’ve lived in this city for over a decade.”",
     "portuguese": "década - “Moro nesta cidade há mais de uma década.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "article – “Did you read that newspaper article?”",
     "portuguese": "artigo - “Você leu aquele artigo de jornal?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "shoot – “He wants to shoot arrows at the target.”",
     "portuguese": "atirar - “Ele quer atirar flechas no alvo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "east – “Drive east for three miles.”",
     "portuguese": "leste - “Dirija para o leste por três milhas”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "save – “I save all my cans for recycling.”",
     "portuguese": "salvar - “Guardo todas as minhas latas para reciclagem”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "seven – “There are seven slices of pie left.”",
     "portuguese": "sete - “Restam sete fatias de torta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "artist – “Taylor Swift is a recording artist.”",
     "portuguese": "artista - “Taylor Swift é uma artista musical.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "away – “I wish that mosquito would go away.”",
     "portuguese": "para longe - “Eu gostaria que aquele mosquito fosse embora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "scene – “He painted a colorful street scene.”",
     "portuguese": "cena - “Ele pintou uma cena de rua colorida.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "stock – “That shop has a good stock of postcards.”",
     "portuguese": "estoque - “Essa loja tem um bom estoque de cartões postais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "career – “Retail sales is a good career for some people.”",
     "portuguese": "carreira - “Vendas no varejo é uma boa carreira para algumas pessoas”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "despite – “Despite the rain, we will still have the picnic.”",
     "portuguese": "apesar - “Apesar da chuva, ainda teremos o piquenique.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "central – “There is good shopping in central London.”",
     "portuguese": "central - “Há boas lojas no centro de Londres.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "eight – “That recipe takes eight cups of flour.”",
     "portuguese": "oito - “Essa receita leva oito xícaras de farinha.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "thus – “We haven’t had any problems thus far.”",
     "portuguese": "portanto - “Não tivemos problemas até agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "treatment – “I will propose a treatment plan for your injury.”",
     "portuguese": "tratamento - “Vou propor um plano de tratamento para sua lesão”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "beyond – “The town is just beyond those mountains.”",
     "portuguese": "além - “A cidade fica logo além dessas montanhas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "happy – “Kittens make me happy.”",
     "portuguese": "feliz - “Os gatinhos me fazem feliz.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "exactly – “Use exactly one teaspoon of salt in that recipe.”",
     "portuguese": "exatamente - “Use exatamente uma colher de chá de sal nessa receita.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "protect – “A coat will protect you from the cold weather.”",
     "portuguese": "proteger - “Um casaco irá protegê-lo do frio.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "approach – “The cat slowly approached the bird.”",
     "portuguese": "abordagem - “O gato lentamente se aproximou do pássaro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "lie – “Teach your children not to lie.”",
     "portuguese": "mentir - \"Ensine seus filhos a não mentir.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "size – “What size is that shirt?",
     "portuguese": "tamanho - “Que tamanho é essa camisa?",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "dog – “Do you think a dog is a good pet?”",
     "portuguese": "cachorro  - “Você acha que um cachorro é um bom animal de estimação?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fund – “I have a savings fund for college.”",
     "portuguese": "fundo  - “Eu tenho um fundo de poupança para a faculdade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "serious – “She is so serious, she never laughs.”",
     "portuguese": "sério - “Ela é tão séria que nunca ri”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "occur – “Strange things occur in that empty house.”",
     "portuguese": "ocorrer - “Coisas estranhas acontecem naquela casa vazia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "media – “That issue has been discussed in the media.”",
     "portuguese": "mídia - “Esse assunto foi discutido na mídia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ready – “Are you ready to leave for work?”",
     "portuguese": "pronto - “Você está pronto para sair para o trabalho?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sign – “That store needs a bigger sign.”",
     "portuguese": "placa - “Essa loja precisa de uma placa maior.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "thought – “I’ll have to give it some thought.”",
     "portuguese": "pensei - \"Vou ter que pensar um pouco.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "list – “I made a list of things to do.”",
     "portuguese": "lista - “Fiz uma lista de coisas a fazer.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "individual – “You can buy an individual or group membership.”",
     "portuguese": "individual - “Você pode comprar uma assinatura individual ou em grupo”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "simple – “The appliance comes with simple instructions.”",
     "portuguese": "simples - “O aparelho vem com instruções simples.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "quality – “I paid a little more for quality shoes.”",
     "portuguese": "qualidade - “Paguei um pouco mais por sapatos de qualidade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "pressure – “There is no pressure to finish right now.”",
     "portuguese": "pressão - “Não há pressão para terminar agora.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "accept – “Will you accept my credit card?”",
     "portuguese": "aceitar - “Você aceita meu cartão de crédito?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "answer – “Give me your answer by noon tomorrow.”",
     "portuguese": "resposta - “Dê-me a sua resposta ao meio-dia de amanhã.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hard – “That test was very hard.”",
     "portuguese": "difícil - \"Esse teste foi muito difícil.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "resource – “The library has many online resources.”",
     "portuguese": "resource - “A biblioteca tem muitos recursos online.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "identify – “I can’t identify that plant.”",
     "portuguese": "identificar - “Não consigo identificar essa planta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "left – “The door is on your left as you approach.”",
     "portuguese": "esquerda - \"A porta está à sua esquerda quando você se aproxima.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "meeting – “We’ll have a staff meeting after lunch.”",
     "portuguese": "reunião - “Teremos uma reunião de equipe após o almoço.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "determine – “Eye color is genetically determined.”",
     "portuguese": "determinar - “A cor dos olhos é geneticamente determinada.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "prepare – “I’ll prepare breakfast tomorrow.”",
     "portuguese": "prepare - \"Vou preparar o café da manhã amanhã.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "disease – “Face masks help prevent disease.”",
     "portuguese": "doença - “Máscaras faciais ajudam a prevenir doenças.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "whatever – “Choose whatever flavor you like the best.”",
     "portuguese": "seja qual for - “Escolha o sabor que você mais gosta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "success – “Failure is the back door to success.”",
     "portuguese": "sucesso - “O fracasso é a porta dos fundos para o sucesso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "argue – “It’s not a good idea to argue with your boss.”",
     "portuguese": "argumentar - “Não é uma boa ideia discutir com seu chefe”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cup – “Would you like a cup of coffee?”",
     "portuguese": "xícara - “Quer uma xícara de café?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "particularly – “It’s not particularly hot outside, just warm.”",
     "portuguese": "particularmente - “Não está particularmente quente lá fora, apenas quente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "amount – “It take a large amount of food to feed an elephant.”",
     "portuguese": "quantidade - “É necessária uma grande quantidade de comida para alimentar um elefante.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ability – “He has the ability to explain things well.”",
     "portuguese": "habilidade - “Ele tem a habilidade de explicar bem as coisas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "staff – “There are five people on staff here.”",
     "portuguese": "equipe - “Há cinco pessoas na equipe aqui.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "recognize – “Do you recognize the person in this photo?”",
     "portuguese": "reconhecer - “Você reconhece a pessoa nesta foto?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "indicate – “Her reply indicated that she understood.”",
     "portuguese": "indique - “A resposta dela indicou que ela entendeu.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "character – “You can trust people of good character.”",
     "portuguese": "personagem - “Você pode confiar em pessoas de bom caráter.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "growth – “The company has seen strong growth this quarter.”",
     "portuguese": "crescimento - “A empresa teve um forte crescimento neste trimestre.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "loss – “The farmer suffered heavy losses after the storm.”",
     "portuguese": "perda - “O fazendeiro sofreu pesadas perdas após a tempestade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "degree – “Set the oven to 300 degrees.”",
     "portuguese": "graus - “Defina o forno para 300 graus.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "wonder – “I wonder if the Bulls will win the game.”",
     "portuguese": "pergunto - “Eu me pergunto se os Bulls vão ganhar o jogo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "attack – “The army will attack at dawn.”",
     "portuguese": "ataque - “O exército vai atacar ao amanhecer.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "herself – “She bought herself a new coat.”",
     "portuguese": "ela mesma - “Ela comprou um casaco novo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "region – “What internet services are in your region?”",
     "portuguese": "região - “Quais serviços de Internet estão em sua região?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "television – “I don’t watch much television.”",
     "portuguese": "televisão - “Eu não assisto muita televisão”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "box – “I packed my dishes in a strong box.”",
     "portuguese": "caixa - “Eu coloquei meus pratos em uma caixa forte.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "TV – “There is a good movie on TV tonight.”",
     "portuguese": "TV - “Há um bom filme na TV esta noite.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "training – “The company will pay for your training.”",
     "portuguese": "treinamento - “A empresa pagará pelo seu treinamento”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "pretty – “That is a pretty dress.”",
     "portuguese": "bonito - \"Esse vestido é bonito.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "trade – “The stock market traded lower today.”",
     "portuguese": "comércio - “O mercado de ações negociou em baixa hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "deal – “I got a good deal at the store.”",
     "portuguese": "negócio - “Fiz um bom negócio na loja.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "election – “Who do you think will win the election?”",
     "portuguese": "eleição - “Quem você acha que vai ganhar a eleição?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "everybody – “Everybody likes ice cream.”",
     "portuguese": "todo mundo - \"Todo mundo gosta de sorvete.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "physical – “Keep a physical distance of six feet.”",
     "portuguese": "físico - “Mantenha uma distância física de seis pés.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "lay – “Lay the baby in her crib, please.”",
     "portuguese": "lay - “Coloque o bebê no berço, por favor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "general – “My general impression of the restaurant was good.”",
     "portuguese": "general - “Minha impressão geral do restaurante foi boa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "feeling – “I have a good feeling about this.”",
     "portuguese": "sentimento - “Tenho um bom pressentimento sobre isso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "standard – “The standard fee is $10.00.”",
     "portuguese": "padrão - “A taxa padrão é $ 10,00.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "bill – “The electrician will send me a bill.”",
     "portuguese": "bill - “O eletricista vai me enviar uma conta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "message – “You have a text message on your phone.”",
     "portuguese": "mensagem - “Você tem uma mensagem de texto no seu telefone”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fail – “I fail to see what is so funny about that.”",
     "portuguese": "falha - “Não consigo ver o que há de tão engraçado nisso”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "outside – “The cat goes outside sometimes.”",
     "portuguese": "fora - \"O gato sai às vezes.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "arrive – “When will your plane arrive?”",
     "portuguese": "chegar - “Quando seu avião chegará?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "analysis – “I’ll give you my analysis when I’ve seen everything.”",
     "portuguese": "análise - “Vou dar-lhe a minha análise quando tiver visto tudo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "benefit – “There are many health benefits to quinoa.”",
     "portuguese": "benefício - “A quinoa traz muitos benefícios à saúde”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sex – “Do you know the sex of your baby yet?”",
     "portuguese": "sexo - “Você já sabe o sexo do seu bebê?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "forward – “Move the car forward a few feet.”",
     "portuguese": "forward - “ Avance o carro alguns metros.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "lawyer – “My lawyer helped me write a will.”",
     "portuguese": "advogado - “Meu advogado me ajudou a escrever um testamento.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "present – “If everyone is present, the meeting can begin.”",
     "portuguese": "presente - “Se todos estiverem presentes, a reunião pode começar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "section – “What section of the stadium are you sitting in?”",
     "portuguese": "seção - “Em qual seção do estádio você está sentado?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "environmental – “Environmental issues are in the news.”",
     "portuguese": "ambiental - “As questões ambientais estão na mídia”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "glass – “Glass is much heavier than plastic.”",
     "portuguese": "vidro - “O vidro é muito mais pesado que o plástico”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "answer – “Could you answer a question for me?”",
     "portuguese": "resposta - “Você poderia responder uma pergunta para mim?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "skill – “His best skill is woodworking.”",
     "portuguese": "habilidade - “Sua melhor habilidade é trabalhar com madeira”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sister – “My sister lives close to me.”",
     "portuguese": "irmã - “Minha irmã mora perto de mim.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "PM – “The movie starts at 7:30 PM.”",
     "portuguese": "PM - “O filme começa às 19h30.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "professor – “Dr. Smith is my favorite professor.”",
     "portuguese": "professor - “Dr. Smith é meu professor favorito. ”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "operation – “The mining operation employs thousands of people.”",
     "portuguese": "operação - “A operação de mineração emprega milhares de pessoas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "financial – “I keep my accounts at my financial institution.”",
     "portuguese": "financeiro - “Eu mantenho minhas contas na minha instituição financeira.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "crime – “The police fight crime.”",
     "portuguese": "crime - “A polícia luta contra o crime”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "stage – “A caterpillar is the larval stage of a butterfly.”",
     "portuguese": "estágio - “Uma lagarta é o estágio larval de uma borboleta”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ok – “Would it be ok to eat out tonight?”",
     "portuguese": "ok - “Seria bom comer fora esta noite?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "compare – “We should compare cars before we buy one.”",
     "portuguese": "compare - “Devemos comparar carros antes de comprar um.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "authority – “City authorities make the local laws.”",
     "portuguese": "autoridade - “As autoridades municipais fazem as leis locais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "miss – “I miss you, when will I see you again?”",
     "portuguese": "senhorita - “Estou com saudades, quando te verei de novo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "design – “We need to design a new logo.”",
     "portuguese": "design - “Precisamos criar um novo logotipo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sort – “Let’s sort these beads according to color.”",
     "portuguese": "sort - \"Vamos classificar essas contas de acordo com a cor.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "one – “I only have one cat.”",
     "portuguese": "um - “Eu só tenho um gato.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "act – “I’ll act on your information today.”",
     "portuguese": "agir - “Vou agir de acordo com suas informações hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ten – “The baby counted her ten toes.”",
     "portuguese": "dez - “O bebê contou os dez dedos dos pés.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "knowledge – “Do you have the knowledge to fix that?”",
     "portuguese": "conhecimento - “Você tem o conhecimento para consertar isso?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "gun – “Gun ownership is a controversial topic.”",
     "portuguese": "arma - “A posse de armas é um tema controverso.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "station – “There is a train station close to my house.”",
     "portuguese": "estação - “Há uma estação de trem perto da minha casa.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "blue – “My favorite color is blue.”",
     "portuguese": "azul - “Minha cor favorita é azul.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "state – “After the accident I was in a state of shock.”",
     "portuguese": "estado - “Após o acidente, fiquei em estado de choque.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "strategy – “Our new corporate strategy is written here.”",
     "portuguese": "estratégia - “Nossa nova estratégia corporativa está escrita aqui.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "little – “I prefer little cars.”",
     "portuguese": "pouco - “Eu prefiro carros pequenos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "clearly – “The instructions were clearly written.”",
     "portuguese": "claramente - \"As instruções foram escritas com clareza.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "discuss – “We’ll discuss that at the meeting.”",
     "portuguese": "discutir - “Vamos discutir isso na reunião.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "indeed – “Your mother does indeed have hearing loss.”",
     "portuguese": "de fato - “Sua mãe realmente tem perda auditiva”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "force – “It takes a lot of force to open that door.”",
     "portuguese": "force - “É preciso muita força para abrir essa porta.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "truth – “Please tell me the truth.”",
     "portuguese": "verdade - \"Por favor, me diga a verdade.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "song – “That’s a beautiful song.”",
     "portuguese": "música - “Essa é uma bela música.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "example – “I need an example of that grammar point, please.”",
     "portuguese": "exemplo - “Eu preciso de um exemplo desse ponto de gramática, por favor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "democratic – “Does Australia have a democratic government?”",
     "portuguese": "democrático - “A Austrália tem um governo democrático?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "check – “Please check my work to be sure it’s correct.”",
     "portuguese": "verifique - “Por favor, verifique meu trabalho para ter certeza de que está correto.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "environment – “We live in a healthy environment.”",
     "portuguese": "meio ambiente - “Vivemos em um ambiente saudável.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "leg – “The boy broke his leg.”",
     "portuguese": "perna - “O menino quebrou a perna.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "dark – “Turn on the light, it’s dark in here.”",
     "portuguese": "escuro - \"Acenda a luz, está escuro aqui.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "public – “Masks must be worn in public places.”",
     "portuguese": "público - “As máscaras devem ser usadas em locais públicos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "various – “That rug comes in various shades of gray.”",
     "portuguese": "vários - “Esse tapete vem em vários tons de cinza.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "rather – “Would you rather have a hamburger than a hot dog?”",
     "portuguese": "em vez disso - “Você prefere um hambúrguer do que um cachorro-quente?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "laugh – “That movie always makes me laugh.”",
     "portuguese": "rir - “Esse filme sempre me faz rir.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "guess – “If you don’t know, just guess.”",
     "portuguese": "adivinhe - “Se você não sabe, adivinhe”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "executive – “The company’s executives are paid well.”",
     "portuguese": "executivo - “Os executivos da empresa são bem pagos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "set – “Set the glass on the table, please.”",
     "portuguese": "set - “Coloque o copo na mesa, por favor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "study – “He needs to study for the test.”",
     "portuguese": "estudo - “Ele precisa estudar para o teste.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "prove – “The employee proved his worth.”",
     "portuguese": "provar - “O funcionário provou seu valor”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "hang – “Please hang your coat on the hook.”",
     "portuguese": "pendurar - “Por favor, pendure seu casaco no cabide.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "entire – “He ate the entire meal in 10 minutes.”",
     "portuguese": "inteiro - “Ele comeu a refeição inteira em 10 minutos.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "rock – “There are decorative rocks in the garden.”",
     "portuguese": "rock - “Existem pedras decorativas no jardim.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "design – “The windows don’t open by design.”",
     "portuguese": "design - “As janelas não abrem por design.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "enough – “Have you had enough coffee?”",
     "portuguese": "o suficiente - \"Você já bebeu café suficiente?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "forget – “Don’t forget to stop at the store.”",
     "portuguese": "esqueça - “Não se esqueça de parar na loja”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "since – “She hasn’t eaten since yesterday.”",
     "portuguese": "desde - \"Ela não comeu desde ontem.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "claim – “I made an insurance claim for my car accident.”",
     "portuguese": "reclamação - “Fiz uma reclamação de seguro para meu acidente de carro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "note – “Leave me a note if you’re going to be late.”",
     "portuguese": "nota - \"Deixe-me um bilhete se você vai se atrasar.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "remove – “Remove the cookies from the oven.”",
     "portuguese": "remove - “Remova os biscoitos do forno.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "manager – “The manager will look at your application.”",
     "portuguese": "gerente - “O gerente analisará seu aplicativo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "help – “Could you help me move this table?”",
     "portuguese": "help - “Você poderia me ajudar a mover esta mesa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "close – “Close the door, please.”",
     "portuguese": "fechar - “Feche a porta, por favor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sound – “The dog did not make a sound.”",
     "portuguese": "som - “O cachorro não fez nenhum som”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "enjoy – “I enjoy soda.”",
     "portuguese": "divirta-se - “Eu gosto de refrigerante.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "network – “Band is the name of our internet network.”",
     "portuguese": "rede - “Banda é o nome de nossa rede de internet.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "legal – “The legal documents need to be signed.”",
     "portuguese": "legal - “Os documentos legais precisam ser assinados.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "religious – “She is very religious, she attends church weekly.”",
     "portuguese": "religiosa - “Ela é muito religiosa, vai à igreja semanalmente.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cold – “My feet are cold.”",
     "portuguese": "frio - \"Meus pés estão frios.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "form – “Please fill out this application form.”",
     "portuguese": "formulário - “Por favor, preencha este formulário de inscrição.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "final – “The divorce was final last month.”",
     "portuguese": "final - “O divórcio foi finalizado no mês passado.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "main – “The main problem is a lack of money.”",
     "portuguese": "main - “O principal problema é a falta de dinheiro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "science – “He studies health science at the university.”",
     "portuguese": "ciência - “Ele estuda ciências da saúde na universidade.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "green – “The grass is green.”",
     "portuguese": "verde - “A grama é verde.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "memory – “He has a good memory.”",
     "portuguese": "memória - “Ele tem uma boa memória.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "card – “They sent me a card for my birthday.”",
     "portuguese": "cartão - “Eles me enviaram um cartão de aniversário.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "above – “Look on the shelf above the sink.”",
     "portuguese": "acima - “Olhe na prateleira acima da pia.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "seat – “That’s a comfortable seat.”",
     "portuguese": "assento - \"É um assento confortável.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cell – “Your body is made of millions of cells.”",
     "portuguese": "célula - “Seu corpo é feito de milhões de células”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "establish – “They established their business in 1942.”",
     "portuguese": "estabelecer - “Eles estabeleceram seus negócios em 1942.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "nice – “That’s a very nice car.”",
     "portuguese": "legal - “É um carro muito bom.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "trial – “They are employing her on a trial basis.”",
     "portuguese": "julgamento - “Eles a estão empregando em caráter experimental.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "expert – “Matt is an IT expert.”",
     "portuguese": "especialista - “Matt é um especialista em TI”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "that – “Did you see that movie?”",
     "portuguese": "que - “Você viu aquele filme?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "spring – “Spring is the most beautiful season.”",
     "portuguese": "primavera - “A primavera é a estação mais bonita.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "firm – “Her ‘no” was very firm, she won’t change her mind.”",
     "portuguese": "firme - “Seu 'não” foi muito firme, ela não mudará de ideia. ”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "Democrat – “The Democrats control the Senate.”",
     "portuguese": "Democrata - “Os democratas controlam o Senado”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "radio – “I listen to the radio in the car.”",
     "portuguese": "rádio - “Eu ouço rádio no carro”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "visit – “We visited the museum today.”",
     "portuguese": "visita - “Nós visitamos o museu hoje.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "management – “That store has good management.”",
     "portuguese": "gestão - “Essa loja tem uma boa gestão.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "care – “She cares for her mother at home.”",
     "portuguese": "care - “Ela cuida da mãe em casa”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "avoid – “You should avoid poison ivy.”",
     "portuguese": "evitar - \"Você deve evitar a hera venenosa.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "imagine – “Can you imagine if pigs could fly?”",
     "portuguese": "imagine - “Você pode imaginar se porcos pudessem voar?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "tonight – “Would you like to go out tonight?”",
     "portuguese": "esta noite - \"Você gostaria de sair esta noite?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "huge – “That truck is huge!”",
     "portuguese": "enorme - “Esse caminhão é enorme!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "ball – “He threw the ball to the dog.”",
     "portuguese": "bola - “Ele jogou a bola para o cachorro”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "no – “I said ‘no,’ please don’t ask again.”",
     "portuguese": "não - \"Eu disse 'não', por favor, não pergunte de novo.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "close – “Close the window, please.”",
     "portuguese": "close - “Feche a janela, por favor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "finish – “Did you finish your homework?”",
     "portuguese": "terminar - “Você terminou sua lição de casa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "yourself – “You gave yourself a haircut?”",
     "portuguese": "você mesmo - “Você cortou o cabelo?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "talk – “He talks a lot.”",
     "portuguese": "fale - “Ele fala muito.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "theory – “In theory, that’s a good plan.”",
     "portuguese": "teoria - “Em teoria, é um bom plano.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "impact – “The drought had a big impact on the crops.”",
     "portuguese": "impacto - “A seca teve um grande impacto nas colheitas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "respond – “He hasn’t responded to my text yet.”",
     "portuguese": "responder - “Ele ainda não respondeu à minha mensagem.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "statement – “The police chief gave a statement to the media.”",
     "portuguese": "declaração - “O chefe de polícia prestou depoimento à mídia”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "maintain – “Exercise helps you maintain a healthy weight.”",
     "portuguese": "manter - “O exercício ajuda a manter um peso saudável.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "charge – “I need to charge my phone.”",
     "portuguese": "carga - “Preciso carregar meu telefone.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "popular – “That’s a popular restaurant.”",
     "portuguese": "popular - “Esse é um restaurante popular.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "traditional – “They serve traditional Italian food there.”",
     "portuguese": "tradicional - “Lá eles servem comida tradicional italiana.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "onto – “Jump onto the boat and we’ll go fishing.”",
     "portuguese": "em - “Pule no barco e vamos pescar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "reveal – “Washing off the dirt revealed the boy’s skinned knee.”",
     "portuguese": "revelar - “Lavar a sujeira revelou o joelho esfolado do menino.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "direction – “What direction is the city from here?”",
     "portuguese": "direção - “Qual direção é a cidade a partir daqui?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "weapon – “No weapons are allowed in government buildings.”",
     "portuguese": "arma - “Não são permitidas armas em edifícios governamentais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "employee – “That store only has three employees.”",
     "portuguese": "funcionário - “Essa loja tem apenas três funcionários.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "cultural – “There is cultural significance to those old ruins.”",
     "portuguese": "cultural - “Há um significado cultural para essas ruínas antigas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "contain – “The carton contains a dozen egges.”",
     "portuguese": "contêm - “A embalagem contém uma dúzia de egges.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "peace – “World leaders gathered for peace talks.”",
     "portuguese": "paz - “Líderes mundiais se reuniram para negociações de paz”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "head – “My head hurts.”",
     "portuguese": "cabeça - “Minha cabeça dói.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "control – “Keep control of the car.”",
     "portuguese": "controle - “Mantenha o controle do carro”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "base – “The glass has a heavy base so it won’t fall over.”",
     "portuguese": "base - “O vidro tem uma base pesada, por isso não vai cair.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "pain – “I have chest pain.”",
     "portuguese": "dor - \"Eu tenho dor no peito.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "apply – “Maria applied for the job.”",
     "portuguese": "candidatar - se - “Maria candidatou-se ao emprego.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "play – “The children play at the park.”",
     "portuguese": "brincar - “As crianças brincam no parque.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "measure – “Measure twice, cut once.”",
     "portuguese": "medir - “Meça duas vezes, corte uma vez.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "wide – “The doorway was very wide.”",
     "portuguese": "ampla - \"A porta era muito larga.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "shake – “Don’t shake the can of soda.”",
     "portuguese": "shake - “Não agite a lata de refrigerante.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fly – “We can fly to France next year.”",
     "portuguese": "fly - “Podemos voar para a França no próximo ano.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "interview – “My job interview went well.”",
     "portuguese": "entrevista - “Minha entrevista de emprego correu bem.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "manage – “Did you manage to find the keys?”",
     "portuguese": "gerenciar - “Você conseguiu encontrar as chaves?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "chair – “The table has six matching chairs.”",
     "portuguese": "cadeira - “A mesa tem seis cadeiras iguais.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fish – “I don’t enjoy eating fish.”",
     "portuguese": "peixe - “Não gosto de comer peixe”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "particular – “That particular style looks good on you.”",
     "portuguese": "particular - “Esse estilo particular fica bem em você”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "camera – “I use the camera on my phone.”",
     "portuguese": "câmera - “Eu uso a câmera no meu telefone.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "structure – “The building’s structure is solid.”",
     "portuguese": "estrutura - “A estrutura do edifício é sólida.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "politics – “Mitch is very active in politics.”",
     "portuguese": "política - “Mitch é muito ativo na política.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "perform – “The singer will perform tonight.”",
     "portuguese": "performance - “O cantor vai se apresentar hoje à noite.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "bit – “It rained a little bit last night.”",
     "portuguese": "bit - \"Choveu um pouco na noite passada.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "weight – “Keep track of your pet’s weight.”",
     "portuguese": "peso - “Acompanhe o peso do seu animal de estimação”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "suddenly – “The storm came up suddenly.”",
     "portuguese": "de repente - \"A tempestade veio de repente.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "discover – “You’ll discover treasures at that thrift store.”",
     "portuguese": "descubra - “Você descobrirá tesouros naquela loja de artigos usados”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "candidate – “There are ten candidates for the position.”",
     "portuguese": "candidato - “Existem dez candidatos para o cargo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "top – “The flag flies on the top of that building.”",
     "portuguese": "topo - “A bandeira tremula no topo daquele edifício.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "production – “Factory production has improved over the summer.”",
     "portuguese": "produção - “A produção da fábrica melhorou durante o verão.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "treat – “Give yourself a treat for a job well done.”",
     "portuguese": "mimo - \"Dê a si mesmo um mimo por um trabalho bem feito.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "trip – “We are taking a trip to Florida in January.”",
     "portuguese": "trip - “Vamos viajar para a Flórida em janeiro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "evening – “I’m staying home this evening.”",
     "portuguese": "noite - \"Vou ficar em casa esta noite.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "affect – “My bank account will affect how much I can buy.”",
     "portuguese": "afeta - “Minha conta bancária afetará o quanto eu posso comprar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "inside – “The cat stays inside.”",
     "portuguese": "dentro - “O gato fica dentro.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "conference – “There will be expert presenters at the conference.”",
     "portuguese": "conferência - “Haverá apresentadores especialistas na conferência.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "unit – “A foot is a unit of measure.”",
     "portuguese": "unidade - “Um pé é uma unidade de medida.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "best – “Those are the best glasses to buy.”",
     "portuguese": "best - “Esses são os melhores óculos para comprar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "style – “My dress is out of style.”",
     "portuguese": "estilo - “Meu vestido está fora de moda”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "adult – “Adults pay full price, but children are free.”",
     "portuguese": "adulto - “Os adultos pagam o preço total, mas as crianças são gratuitas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "worry – “Don’t worry about tomorrow.”",
     "portuguese": "se preocupe - “Não se preocupe com o amanhã.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "range – My doctor offered me a range of options.",
     "portuguese": "gama  - Meu médico ofereceu-me uma gama de opções.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "mention – “Can you mention me in your story?”",
     "portuguese": "menção  - “Você pode me mencionar em sua história?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "rather – “Rather than focusing on the bad things, let’s be grateful for the good things.”",
     "portuguese": "em vez disso  - “Em vez de nos concentrarmos nas coisas ruins, vamos ser gratos pelas coisas boas.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "far – “I don’t want to move far from my family.”",
     "portuguese": "longe  - “Eu não quero me mudar para longe da minha família.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "deep – “That poem about life is deep.”",
     "portuguese": "deep  - “Aquele poema sobre a vida é profundo.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "front – “Please face front.”",
     "portuguese": "frente -  \"Por favor, olhe para a frente.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "edge – “Please do not stand so close to the edge of the cliff.”",
     "portuguese": "borda  - “Por favor, não fique tão perto da borda do penhasco.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "individual – “These potato chips are in an individual serving size package.”",
     "portuguese": "individual  - “Estas batatas fritas estão em um pacote de tamanho de porção individual.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "specific – “Could you be more specific?”",
     "portuguese": "específico  - “Você poderia ser mais específico?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "writer – “You are a good writer.”",
     "portuguese": "escritor  - “Você é um bom escritor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "trouble – “Stay out of trouble.”",
     "portuguese": "problemas  - “Fique longe de problemas”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "necessary – “It is necessary to sleep.”",
     "portuguese": "necessário  - “É preciso dormir.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "throughout – “Throughout my life I have always enjoyed reading.”",
     "portuguese": "ao longo  - “Ao longo da minha vida, sempre gostei de ler.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "challenge – “I challenge you to do better.”",
     "portuguese": "desafio  - “Eu te desafio a fazer melhor.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "fear – “Do you have any fears?”",
     "portuguese": "medo  - \"Você tem algum medo?\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "shoulder – “You do not have to shoulder all the work on your own.”",
     "portuguese": "ombro  - “Você não tem que arcar com todo o trabalho sozinho.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "institution – “Have you attended any institution of higher learning?”",
     "portuguese": "instituição  - “Você frequentou alguma instituição de ensino superior?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "middle – “I am a middle child with one older brother and one younger sister.”",
     "portuguese": "meio  - \"Eu sou um filho do meio com um irmão mais velho e uma irmã mais nova.\"",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "sea – “I want to sail the seven seas.”",
     "portuguese": "mar  - “Eu quero navegar os sete mares.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "dream – “I have a dream.”",
     "portuguese": "sonho  - “Eu tenho um sonho.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "bar – “A bar is a place where alcohol is served.”",
     "portuguese": "bar - “Um bar é um lugar onde o álcool é servido.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "beautiful – “You are beautiful.”",
     "portuguese": "linda  - “Você é linda.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "property – “Do you own property, like a house?”",
     "portuguese": "propriedade  - “Você possui uma propriedade, como uma casa?”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "instead – “Instead of eating cake I will have fruit.”",
     "portuguese": "em vez disso  - “Em vez de comer bolo, terei frutas”.",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "improve – “I am always looking for ways to improve.”",
     "portuguese": "melhorar  - “Estou sempre procurando maneiras de melhorar.”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "stuff – “When I moved, I realized I have a lot of stuff!”",
     "portuguese": "coisas  - “Quando me mudei, percebi que tenho um monte de coisas!”",
     "title": "1000 palavras mais usadas no inglês"
    },
    {
     "english": "claim – “I claim to be a fast reader, but actually I am average.”",
     "portuguese": "afirmação  - “Eu alego ser um leitor rápido, mas na verdade sou mediano.”",
     "title": "1000 palavras mais usadas no inglês"
    }
   ]


list.map((item)=>{

    FlashCardsModel.create({
                        title:item.title,
                        english:item.english,
                        portuguese:item.portuguese,
                        userId:req.user.id,
                        level:0
                    })
                })
                .then(()=>{res.status(200).json({success:'study Add'})})
                .catch((error)=>{res.status(400).json(error)})
                

});

router.post('/admin/study/', auth, (req,res)=>{

    const {title, img, country,link}  = req.body;

    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && country !== undefined &link !== undefined){
        
            FlashCardsModel.create({
                        title:title,
                        img:img,
                        country:country,
                        link:link
                    }).then(()=>{res.status(200).json({success:'study Add'})}).catch((error)=>{res.status(400).json(error)})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
router.get('/study/flashcard',(req,res)=>{


    FlashCardsModel.findAll({      
        order:[
            ["level","DESC"]
        ],
        //limit : [((1)), 1],
        limit : [((getRandomInt(1,7))), 1],
    }).then((data)=>{res.status(200).json(data)}).catch((error)=>{res.status(400).json(error)})

});

router.patch('/study', auth, (req,res)=>{

    const {questionId,level}  = req.body


        if(questionId !== undefined ){
        
            FlashCardsModel.update({
                        level:level,
                    },{
                        where:{[Op.and]: [{ id: questionId }, { userId: req.user.id }]}                    
                    
                    }).then(()=>{res.status(200).json({success:'study Update'})}).catch((error)=>{res.status(400).json(error)})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } 

);


router.delete('/admin/study/', auth, (req,res)=>{

    const {title, img, country,link,id}  = req.body;


    if(req.user.category == '2'){

        if(id!== undefined){
        
            FlashCardsModel.destroy({where:{id:id}}).then(()=>{res.status(200).json({success:'study Delete'})}).catch((error)=>{res.status(400).json(error)})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});




module.exports = router;