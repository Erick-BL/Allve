/* ══════════════════════════════════════
   i18n
══════════════════════════════════════ */
const STRINGS = {
  pt: {
    'nav.home':'Início','nav.restaurants':'Restaurantes','nav.map':'Mapa','nav.how':'Como funciona',
    'nav.login':'Entrar','nav.signup':'Cadastrar',
    'hero.badge':'Vegano & Vegetariano • Uberlândia',
    'hero.title':'Tudo <em>vegano e vegetariano,</em><br>tudo aqui.',
    'hero.subtitle':'Descubra restaurantes, docerias e deliveries com opções veganas e vegetarianas em Uberlândia, com cardápios separados e informações claras.',
    'hero.cta1':'Ver Restaurantes','hero.cta2':'Criar conta grátis →',
    'hero.stat1':'Restaurantes','hero.stat2':'Avaliação média','hero.stat3':'Entrega média',
    'search.sortRating':'Melhor avaliação','search.sortTime':'Mais rápido','search.sortAZ':'A–Z',
    'cat.all':'Todos','cat.burger':'Burgers','cat.pizza':'Pizzas','cat.bowl':'Bowls',
    'cat.japanese':'Japonesa','cat.dessert':'Sobremesas','cat.juice':'Sucos',
    'section.partners':'Nossos Parceiros',
    'how.title':'Como funciona','how.sub':'Encontrar comida vegana e vegetariana nunca foi tão simples.',
    'how.step1.title':'Explore','how.step1.desc':'Navegue por restaurantes, docerias e deliveries com opções veganas ou vegetarianas.',
    'how.step2.title':'Peça','how.step2.desc':'Adicione seus pratos ao carrinho e finalize em segundos.',
    'how.step3.title':'Rastreie','how.step3.desc':'Acompanhe seu pedido em tempo real até a sua porta.',
    'how.step4.title':'Aproveite','how.step4.desc':'Coma bem e cuide do planeta. Cada pedido planta uma muda.',
    'map.title':'Restaurantes em Uberlândia',
    'map.sub':'Clique em um marcador ou na lista para ver o cardápio',
    'map.locate':'Perto de mim','map.openNow':'Abertos agora',
    'map.freeDelivery':'Entrega grátis','map.reset':'Resetar',
    'map.visible':'Visíveis','map.open':'Abertos','map.free':'Grátis',
    'footer.desc':'Conectando você aos melhores sabores veganos e vegetarianos de Uberlândia, com 2+ opções por local e mapa inteligente.',
    'footer.links':'Links','footer.account':'Conta','footer.contact':'Contato','footer.settings':'Configurações',
    'footer.copy':'© 2025 Allve. Todos os direitos reservados.',
    'form.email':'E-mail','form.password':'Senha','form.firstName':'Nome','form.lastName':'Sobrenome',
    'form.createAccount':'Criar Conta','form.or':'ou',
    'form.noAccount':'Não tem conta?','form.signupFree':'Cadastre-se grátis','form.hasAccount':'Já tem conta?',
    'err.email':'E-mail inválido.','err.credentials':'E-mail ou senha incorretos.',
    'err.required':'Campo obrigatório.','err.phone':'Telefone inválido.','err.cpf':'CPF inválido.',
    'err.passMin':'Mínimo 6 caracteres.','err.passMatch':'As senhas não coincidem.',
    'stats.orders':'Pedidos','stats.spent':'Gasto','stats.trees':'Mudas','auth.logout':'Sair',
    'settings.title':'Configurações','settings.profile':'Perfil','settings.delivery':'Entrega',
    'settings.notifications':'Notificações','settings.appearance':'Aparência','settings.about':'Sobre',
    'settings.profileInfo':'Informações Pessoais','settings.save':'Salvar',
    'settings.addresses':'Endereços','settings.home':'Casa','settings.addAddress':'+ Adicionar novo endereço',
    'settings.pushNotif':'Notificações Push','settings.orderUpdates':'Atualizações de pedido',
    'settings.orderUpdatesDesc':'Confirmação, preparo e entrega','settings.promotions':'Promoções',
    'settings.themeColor':'Cor do tema','settings.language':'Idioma',
    'about.version':'Versão 1.0.0 · 2025',
    'about.desc':'O Allve conecta você a restaurantes, docerias e deliveries com opções veganas e vegetarianas em Uberlândia.',
    'cart.title':'Carrinho','cart.empty':'Seu carrinho está vazio','cart.subtotal':'Subtotal',
    'cart.delivery':'Entrega','cart.total':'Total','cart.checkout':'Finalizar pedido',
    'toast.loggedIn':'Bem-vindo de volta, {name}!','toast.registered':'Conta criada! Bem-vindo(a), {name}! 🌱',
    'toast.loggedOut':'Você saiu da conta.','toast.saved':'Configurações salvas!',
    'toast.addedToCart':'{item} adicionado ao carrinho!','toast.orderPlaced':'Pedido realizado com sucesso! 🌿',
    'toast.mustLogin':'Faça login para adicionar ao carrinho.',
    'results':'{n} restaurantes','menu.addBtn':'+ Adicionar',
    'popup.viewMenu':'Ver Cardápio','popup.open':'Aberto','popup.closed':'Fechado',
    'popup.free':'Grátis','popup.min':'Mín. pedido',
    'map.noResults':'Nenhum restaurante encontrado', 'map.locating':'Localizando...',
    'map.locateErr':'Não foi possível obter sua localização.', 'map.locateSuccess':'Mostrando restaurantes perto de você!',
  },
  en: {
    'nav.home':'Home','nav.restaurants':'Restaurants','nav.map':'Map','nav.how':'How it works',
    'nav.login':'Sign in','nav.signup':'Sign up',
    'hero.badge':'Vegan & Vegetarian • Uberlândia',
    'hero.title':'All <em>vegan and vegetarian,</em><br>all here.',
    'hero.subtitle':'Find restaurants, bakeries and deliveries with vegan and vegetarian options in Uberlândia, with clear menu labels.',
    'hero.cta1':'Browse Restaurants','hero.cta2':'Create free account →',
    'hero.stat1':'Restaurants','hero.stat2':'Average rating','hero.stat3':'Avg delivery',
    'search.sortRating':'Best rated','search.sortTime':'Fastest','search.sortAZ':'A–Z',
    'cat.all':'All','cat.burger':'Burgers','cat.pizza':'Pizzas','cat.bowl':'Bowls',
    'cat.japanese':'Japanese','cat.dessert':'Desserts','cat.juice':'Juices',
    'section.partners':'Our Partners',
    'how.title':'How it works','how.sub':'Finding vegan and vegetarian food has never been this simple.',
    'how.step1.title':'Explore','how.step1.desc':'Browse restaurants, bakeries and deliveries with vegan or vegetarian options.',
    'how.step2.title':'Order','how.step2.desc':'Add dishes to your cart and check out in seconds.',
    'how.step3.title':'Track','how.step3.desc':'Follow your order in real time right to your door.',
    'how.step4.title':'Enjoy','how.step4.desc':'Eat well and protect the planet. Every order plants a seedling.',
    'map.title':'Restaurants in Uberlândia',
    'map.sub':'Click a pin or list item to view the menu',
    'map.locate':'Near me','map.openNow':'Open now',
    'map.freeDelivery':'Free delivery','map.reset':'Reset',
    'map.visible':'Visible','map.open':'Open','map.free':'Free',
    'footer.desc':'Connecting you to vegan and vegetarian flavors in Uberlândia with clear information and a smart map.',
    'footer.links':'Links','footer.account':'Account','footer.contact':'Contact','footer.settings':'Settings',
    'footer.copy':'© 2025 Allve. All rights reserved.',
    'form.email':'Email','form.password':'Password','form.firstName':'First name','form.lastName':'Last name',
    'form.createAccount':'Create Account','form.or':'or',
    'form.noAccount':'No account?','form.signupFree':'Sign up free','form.hasAccount':'Already have an account?',
    'err.email':'Invalid email.','err.credentials':'Email or password incorrect.',
    'err.required':'Required field.','err.phone':'Invalid phone.','err.cpf':'Invalid CPF.',
    'err.passMin':'Minimum 6 characters.','err.passMatch':'Passwords do not match.',
    'stats.orders':'Orders','stats.spent':'Spent','stats.trees':'Seedlings','auth.logout':'Sign Out',
    'settings.title':'Settings','settings.profile':'Profile','settings.delivery':'Delivery',
    'settings.notifications':'Notifications','settings.appearance':'Appearance','settings.about':'About',
    'settings.profileInfo':'Personal Information','settings.save':'Save',
    'settings.addresses':'Addresses','settings.home':'Home','settings.addAddress':'+ Add new address',
    'settings.pushNotif':'Push Notifications','settings.orderUpdates':'Order updates',
    'settings.orderUpdatesDesc':'Confirmation, preparation and delivery','settings.promotions':'Promotions',
    'settings.themeColor':'Theme color','settings.language':'Language',
    'about.version':'Version 1.0.0 · 2025',
    'about.desc':'Allve connects you to restaurants, bakeries and deliveries in Uberlândia with at least 2 vegan/vegetarian options each.',
    'cart.title':'Cart','cart.empty':'Your cart is empty','cart.subtotal':'Subtotal',
    'cart.delivery':'Delivery','cart.total':'Total','cart.checkout':'Checkout',
    'toast.loggedIn':'Welcome back, {name}!','toast.registered':'Account created! Welcome, {name}! 🌱',
    'toast.loggedOut':'You have signed out.','toast.saved':'Settings saved!',
    'toast.addedToCart':'{item} added to cart!','toast.orderPlaced':'Order placed successfully! 🌿',
    'toast.mustLogin':'Please sign in to add to cart.',
    'results':'{n} restaurants','menu.addBtn':'+ Add',
    'popup.viewMenu':'View Menu','popup.open':'Open','popup.closed':'Closed',
    'popup.free':'Free','popup.min':'Min. order',
    'map.noResults':'No restaurants found','map.locating':'Locating...',
    'map.locateErr':'Could not get your location.','map.locateSuccess':'Showing restaurants near you!',
  }
};
Object.assign(STRINGS.pt, {
  'hero.stat1':'Locais',
  'section.partners':'Nossos <span>Parceiros</span>',
  'map.title':'Restaurantes em <span>Uberlândia</span>',
  'results':'{n} locais',
  'heroCard.open':'Aberto agora','heroCard.freeDelivery':'Entrega R$0','heroCard.mostOrdered':'Mais pedido','heroCard.discount':'–20% hoje','heroCard.fast':'Super rápido','heroCard.new':'Novo!',
  'premium.title':'Um guia vegano e vegetariano com cara de app grande, mapa inteligente e só locais com 2+ opções corretas.',
  'premium.text':'O Allve mostra locais de Uberlândia com pelo menos 2 pratos veganos/vegetarianos, separa cada item por selo e evita colocar prato duvidoso no cardápio.',
  'premium.discover':'Descobrir meu pedido','premium.map':'Explorar mapa','premium.openNow':'Abertos agora','premium.freeDelivery':'Com entrega grátis','premium.total':'Locais mapeados','premium.favorites':'Favoritos salvos',
  'smart.open':'Abertos agora','smart.free':'Entrega grátis','smart.fav':'Favoritos','smart.cheap':'Pedido econômico','smart.eco':'Mais sustentável','smart.vegan':'Com prato vegano','smart.vegetarian':'Vegetarianos',
  'search.note':'Dica: busque por “tofu”, “marmita”, “pizza”, “sobremesa”, bairro ou estilo de comida.',
  'discover.kicker':'Guia inteligente','discover.title':'Não sabe o que pedir? O Allve escolhe com você.','discover.copy':'Escolha seu momento e o app recomenda o restaurante e o prato com melhor combinação de tempo, preço, avaliação e estilo.','discover.generate':'Gerar recomendação','discover.choice':'Escolha do Allve',
  'mood.fast':'Rápido','mood.fastSub':'quero comer logo','mood.cheap':'Econômico','mood.cheapSub':'bom e barato','mood.healthy':'Saudável','mood.healthySub':'leve e nutritivo','mood.comfort':'Conforto','mood.comfortSub':'pizza, massa ou doce',
  'rec.initial':'Recomendação inicial','rec.loading':'Carregando melhor opção...','rec.defaultDesc':'O app vai analisar restaurantes, cardápios, tempo e avaliação.','rec.tagVeg':'vegano/vegetariano','rec.viewMenu':'Ver cardápio recomendado','rec.viewAll':'Ver todos','rec.suggestion':'Sugestão','rec.special':'Prato especial',
  'rec.label.rapido':'Mais rápido','rec.label.barato':'Melhor custo-benefício','rec.label.saudavel':'Mais leve e nutritivo','rec.label.conforto':'Mais sabor conforto',
  'impact.title':'Impacto positivo','impact.desc':'Estimativa visual baseada nos seus pedidos no app.','impact.co2':'CO₂ evitado em escolhas vegetais','club.title':'Allve Club','club.desc':'Ganhe pontos a cada pedido e desbloqueie benefícios.','trust.title':'Confiança no cardápio','trust.desc':'Cards com informação clara de prato, preço, tempo, entrega e localização no mapa.','trust.focus':'Experiência focada em mostrar somente locais com 2+ pratos veganos, vegetarianos ou opções claramente adaptáveis.',
  'map.legendTitle':'Mapa melhorado','map.legendOpen':'Aberto agora','map.legendClosed':'Fechado','map.legendSelected':'Selecionado',
  'footer.discover':'Descobrir','footer.impact':'Impacto',
  'order.confirmed':'Pedido confirmado','order.simulation':'Simulação de acompanhamento para deixar o app com experiência completa de delivery.','order.step1':'Pedido recebido','order.step1Desc':'O restaurante já recebeu seu pedido.','order.step2':'Preparando','order.step2Desc':'Seu prato veg está sendo preparado.','order.step3':'Saiu para entrega','order.step3Desc':'Em breve o entregador aparece no mapa.','order.step4':'Entregue','order.step4Desc':'Bom apetite!','order.close':'Fechar acompanhamento',
  'floating.food':'Comida','floating.guide':'Guia','auth.welcome':'Bem-vindo','auth.welcomeBack':'Sua conta','auth.signIn':'Entrar','auth.signUp':'Cadastrar',
  'form.phone':'Telefone','form.confirmPassword':'Confirmar senha','form.emailPlaceholder':'seu@email.com','form.firstNamePlaceholder':'João','form.lastNamePlaceholder':'Silva','form.phonePlaceholder':'(34) 99999-9999','form.passwordPlaceholder':'Mín. 6 caracteres','form.repeatPasswordPlaceholder':'Repita a senha','form.enterPassword':'Informe a senha.','err.emailExists':'E-mail já cadastrado.',
  'diet.vegan':'Vegano','diet.vegetarian':'Vegetariano','diet.both':'Vegano/Vegetariano','diet.options':'opções veg',
  'restaurants.minimize':'Minimizar lista','restaurants.show':'Mostrar lista','restaurants.collapsed':'Lista de restaurantes minimizada','restaurants.collapsedDesc':'Clique em “Mostrar lista” para ver os cards novamente.'
});
Object.assign(STRINGS.en, {
  'hero.stat1':'Places',
  'section.partners':'Our <span>Partners</span>',
  'map.title':'Restaurants in <span>Uberlândia</span>',
  'results':'{n} places',
  'heroCard.open':'Open now','heroCard.freeDelivery':'R$0 delivery','heroCard.mostOrdered':'Most ordered','heroCard.discount':'–20% today','heroCard.fast':'Super fast','heroCard.new':'New!',
  'premium.title':'A vegan and vegetarian guide with a premium app feel, a smart map and only places with 2+ verified options.',
  'premium.text':'Allve shows places in Uberlândia with at least 2 vegan/vegetarian dishes, labels each item clearly and avoids questionable menu items.',
  'premium.discover':'Find my order','premium.map':'Explore map','premium.openNow':'Open now','premium.freeDelivery':'Free delivery','premium.total':'Mapped places','premium.favorites':'Saved favorites',
  'smart.open':'Open now','smart.free':'Free delivery','smart.fav':'Favorites','smart.cheap':'Budget order','smart.eco':'Most sustainable','smart.vegan':'Has vegan dish','smart.vegetarian':'Vegetarian options',
  'search.note':'Tip: search for “tofu”, “lunchbox”, “pizza”, “dessert”, neighborhood or food style.',
  'discover.kicker':'Smart guide','discover.title':'Not sure what to order? Allve helps you choose.','discover.copy':'Pick your mood and the app recommends the best restaurant and dish based on time, price, rating and style.','discover.generate':'Generate recommendation','discover.choice':'Allve pick',
  'mood.fast':'Fast','mood.fastSub':'I want to eat soon','mood.cheap':'Budget','mood.cheapSub':'good and affordable','mood.healthy':'Healthy','mood.healthySub':'light and nutritious','mood.comfort':'Comfort','mood.comfortSub':'pizza, pasta or dessert',
  'rec.initial':'Initial recommendation','rec.loading':'Loading best option...','rec.defaultDesc':'The app will analyze restaurants, menus, time and rating.','rec.tagVeg':'vegan/vegetarian','rec.viewMenu':'View recommended menu','rec.viewAll':'View all','rec.suggestion':'Suggestion','rec.special':'Special dish',
  'rec.label.rapido':'Fastest option','rec.label.barato':'Best value','rec.label.saudavel':'Light and nutritious','rec.label.conforto':'Best comfort food',
  'impact.title':'Positive impact','impact.desc':'Visual estimate based on your app orders.','impact.co2':'CO₂ avoided through plant-based choices','club.title':'Allve Club','club.desc':'Earn points with every order and unlock benefits.','trust.title':'Menu confidence','trust.desc':'Cards with clear dish, price, time, delivery and map information.','trust.focus':'An experience focused on showing only places with 2+ vegan, vegetarian or clearly adaptable options.',
  'map.legendTitle':'Improved map','map.legendOpen':'Open now','map.legendClosed':'Closed','map.legendSelected':'Selected',
  'footer.discover':'Discover','footer.impact':'Impact',
  'order.confirmed':'Order confirmed','order.simulation':'Tracking simulation to make the app feel like a complete delivery experience.','order.step1':'Order received','order.step1Desc':'The restaurant has received your order.','order.step2':'Preparing','order.step2Desc':'Your veg dish is being prepared.','order.step3':'Out for delivery','order.step3Desc':'The courier will appear on the map soon.','order.step4':'Delivered','order.step4Desc':'Enjoy your meal!','order.close':'Close tracking',
  'floating.food':'Food','floating.guide':'Guide','auth.welcome':'Welcome','auth.welcomeBack':'Your account','auth.signIn':'Sign in','auth.signUp':'Sign up',
  'form.phone':'Phone','form.confirmPassword':'Confirm password','form.emailPlaceholder':'you@email.com','form.firstNamePlaceholder':'John','form.lastNamePlaceholder':'Silva','form.phonePlaceholder':'(34) 99999-9999','form.passwordPlaceholder':'Min. 6 characters','form.repeatPasswordPlaceholder':'Repeat password','form.enterPassword':'Enter your password.','err.emailExists':'Email already registered.',
  'diet.vegan':'Vegan','diet.vegetarian':'Vegetarian','diet.both':'Vegan/Vegetarian','diet.options':'veg options',
  'restaurants.minimize':'Minimize list','restaurants.show':'Show list','restaurants.collapsed':'Restaurant list minimized','restaurants.collapsedDesc':'Click “Show list” to see the cards again.'
});
let LANG = localStorage.getItem('allve_lang') || 'pt';
function t(key, vars={}) {
  let s = (STRINGS[LANG]||STRINGS.pt)[key] || key;
  Object.entries(vars).forEach(([k,v])=>{ s=s.replace(`{${k}}`,v); });
  return s;
}

function getRestaurantTotal() {
  return (typeof RESTAURANTS !== 'undefined' && Array.isArray(RESTAURANTS)) ? RESTAURANTS.length : 28;
}
function dietLabel(diet, dietEn) {
  if (LANG === 'en') {
    const d = (diet || '').toLowerCase();
    if (dietEn) return dietEn;
    if (d.includes('vegano/vegetariano')) return t('diet.both');
    if (d.includes('vegano')) return t('diet.vegan');
    if (d.includes('vegetariano')) return t('diet.vegetarian');
    return t('diet.options');
  }
  return diet || t('diet.options');
}
function popularItemName(r) {
  const item = r?.menu?.[0]?.items?.[0];
  if (LANG === 'en' && item?.nameEn) return item.nameEn;
  return item?.name || r?.popular || t('rec.special');
}
function updateStaticCounts() {
  const total = getRestaurantTotal();
  const hero = document.getElementById('hero-total-count');
  const premium = document.getElementById('premium-total-count');
  if(hero) hero.textContent = total;
  if(premium) premium.textContent = total;
}
function applyTranslations() {
  document.documentElement.lang = LANG==='en' ? 'en' : 'pt-BR';
  updateStaticCounts();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    const s = t(k);
    if (s.includes('<')) el.innerHTML = s; else el.textContent = s;
  });
  document.querySelectorAll('[data-i18n-badge]').forEach(el => {
    el.querySelector('span').textContent = t('hero.badge');
  });
  const heroTitle = document.querySelector('.hero h1');
  if(heroTitle) heroTitle.innerHTML = t('hero.title');
  const heroCta1 = document.querySelector('.btn-hero-primary');
  if(heroCta1) { heroCta1.childNodes.forEach(n=>{ if(n.nodeType===3) n.textContent=' '+t('hero.cta1'); }); }
  const heroCta2 = document.querySelector('.btn-hero-secondary');
  if(heroCta2) heroCta2.textContent = t('hero.cta2');
  const rc = document.getElementById('results-count');
  if(rc) rc.textContent = t('results',{n: (typeof filteredRestaurants !== 'undefined' ? filteredRestaurants.length : getRestaurantTotal())});
  // search input placeholder
  const si = document.getElementById('search-input');
  if(si) si.placeholder = LANG==='en'?'Search restaurants, dishes...':'Buscar restaurantes, pratos...';
  const ms = document.getElementById('map-search');
  if(ms) ms.placeholder = LANG==='en'?'Search on map...':'Buscar no mapa...';
  if (typeof renderLoggedInNav === 'function') renderLoggedInNav();
  if (typeof refreshAuthTexts === 'function') refreshAuthTexts();
  renderRestaurants();
  syncRestaurantMinimizeUI();
  renderMapList();
  updateMapMarkers();
  generateRecommendation();
  updatePremiumStats();
}
function setLang(lang) {
  LANG = lang;
  localStorage.setItem('allve_lang', lang);
  document.getElementById('lang-pt').classList.toggle('active', lang==='pt');
  document.getElementById('lang-en').classList.toggle('active', lang==='en');
  const spt = document.getElementById('s-lang-pt');
  const sen = document.getElementById('s-lang-en');
  if(spt) spt.style.opacity = lang==='pt'?'1':'.5';
  if(sen) sen.style.opacity = lang==='en'?'1':'.5';
  applyTranslations();
}

/* ══════════════════════════════════════
   RESTAURANT DATA — with coordinates in Uberlândia
══════════════════════════════════════ */
const RESTAURANTS = [
  {
    "id": 1,
    "emoji": "🍕",
    "name": "WIBIO Empório Vegano",
    "nameEn": "WIBIO Vegan Emporium",
    "desc": "Empório, restaurante e pizzaria vegana com refeições, saladas, sobremesas, bebidas e burgers sem nada de origem animal.",
    "descEn": "Vegan emporium, restaurant and pizzeria with meals, salads, desserts, drinks and burgers without animal ingredients.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.5,
    "time": "30-45",
    "deliveryFee": 5,
    "minOrder": 30,
    "category": "pizza",
    "badge": "EMPÓRIO VEGANO",
    "badgeEn": "VEGAN EMPORIUM",
    "badgeClass": "promo",
    "color": "linear-gradient(135deg,#f59e0b,#d97706)",
    "lat": -18.907641,
    "lng": -48.267949,
    "hours": {
      "open": 11,
      "close": 23
    },
    "address": "R. Natal, 851 – Nossa Sra. Aparecida",
    "tags": [
      "pizza",
      "empório",
      "sem origem animal"
    ],
    "ecoScore": 96,
    "bestFor": [
      "conforto",
      "rapido"
    ],
    "reviews": 310,
    "popular": "Pizza Vegana",
    "menu": [
      {
        "cat": "Refeições veganas",
        "catEn": "Vegan meals",
        "items": [
          {
            "emoji": "🥗",
            "name": "Refeição Vegana",
            "nameEn": "Vegan Meal",
            "desc": "Prato do empório com base vegetal, salada e acompanhamentos.",
            "descEn": "Plant-based meal with salad and sides.",
            "price": 32,
            "diet": "Vegano"
          },
          {
            "emoji": "🥬",
            "name": "Salada Vegana",
            "nameEn": "Vegan Salad",
            "desc": "Salada do cardápio vegano da casa.",
            "descEn": "Salad from the house vegan menu.",
            "price": 24,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Pizzas e burgers",
        "catEn": "Pizzas & burgers",
        "items": [
          {
            "emoji": "🍕",
            "name": "Pizza Vegana",
            "nameEn": "Vegan Pizza",
            "desc": "Pizza sem ingredientes de origem animal.",
            "descEn": "Pizza without animal-derived ingredients.",
            "price": 48,
            "diet": "Vegano"
          },
          {
            "emoji": "🍔",
            "name": "Burger Vegano",
            "nameEn": "Vegan Burger",
            "desc": "Hambúrguer vegetal do empório.",
            "descEn": "Plant-based burger from the emporium.",
            "price": 29,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 4
  },
  {
    "id": 2,
    "emoji": "🌯",
    "name": "Bistrô Vegano",
    "nameEn": "Vegan Bistro",
    "desc": "Bistrô Vegano com opções vegetarianas e veganas com pizzas, burritos, esfihas, pratos, porções, sobremesas e drinks.",
    "descEn": "Vegan Bistro with vegetarian and vegan options with pizzas, burritos, esfihas, meals, portions, desserts and drinks.",
    "diet": "vegano e vegetariano",
    "dietEn": "vegan and vegetarian",
    "rating": 4.6,
    "time": "30-45",
    "deliveryFee": 5,
    "minOrder": 30,
    "category": "pizza",
    "badge": "BISTRÔ VEG",
    "badgeEn": "VEG BISTRO",
    "color": "linear-gradient(135deg,#ef4444,#f97316)",
    "lat": -18.9105,
    "lng": -48.2475,
    "hours": {
      "open": 18,
      "close": 23
    },
    "address": "Av. Ortízio Borges, 850 – Uberlândia",
    "tags": [
      "pizza",
      "burrito",
      "esfiha"
    ],
    "ecoScore": 93,
    "bestFor": [
      "conforto",
      "barato"
    ],
    "reviews": 240,
    "popular": "Pizza de Frango Veg",
    "menu": [
      {
        "cat": "Pizzas veganas",
        "catEn": "Vegan pizzas",
        "items": [
          {
            "emoji": "🍕",
            "name": "Pizza de Frango Veg com Catupiry de Castanha",
            "nameEn": "Veg Chicken Pizza with Cashew Catupiry",
            "desc": "Pizza com frango vegetal, catupiry de castanha de caju, tomate, azeitona e orégano.",
            "descEn": "Pizza with plant-based chicken, cashew catupiry, tomato, olive and oregano.",
            "price": 43,
            "diet": "Vegano"
          },
          {
            "emoji": "🍕",
            "name": "Pizza Vegana do Bistrô Vegano",
            "nameEn": "Vegan Bistro Vegan Pizza",
            "desc": "Pizza vegetal da casa.",
            "descEn": "House plant-based pizza.",
            "price": 42,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Lanches e pratos",
        "catEn": "Wraps & meals",
        "items": [
          {
            "emoji": "🌯",
            "name": "Burrito Veg",
            "nameEn": "Veg Burrito",
            "desc": "Burrito vegetariano/vegano do Bistrô Vegano.",
            "descEn": "Bistro vegetarian/vegan burrito.",
            "price": 28,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🥟",
            "name": "Esfiha Veg",
            "nameEn": "Veg Esfiha",
            "desc": "Esfiha com recheio vegetal.",
            "descEn": "Esfiha with plant-based filling.",
            "price": 12,
            "diet": "Vegano/Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 4
  },
  {
    "id": 3,
    "emoji": "🍜",
    "name": "Pu Ti Lin Restaurante Vegetariano",
    "nameEn": "Pu Ti Lin Vegetarian Restaurant",
    "desc": "Restaurante vegetariano com opções veganas, comida oriental, saladas e pratos por quilo.",
    "descEn": "Vegetarian restaurant with vegan options, eastern food, salads and kilo buffet dishes.",
    "diet": "vegetariano com opções veganas",
    "dietEn": "vegetarian with vegan options",
    "rating": 4.4,
    "time": "20-35",
    "deliveryFee": 0,
    "minOrder": 22,
    "category": "japanese",
    "badge": "VEGETARIANO",
    "badgeEn": "VEGETARIAN",
    "color": "linear-gradient(135deg,#06b6d4,#0891b2)",
    "lat": -18.9188,
    "lng": -48.2732,
    "hours": {
      "open": 11,
      "close": 15
    },
    "address": "Rua Machado de Assis, 675 – Centro",
    "tags": [
      "yakissoba",
      "sushi vegano",
      "por quilo"
    ],
    "ecoScore": 95,
    "bestFor": [
      "saudavel",
      "barato"
    ],
    "reviews": 210,
    "popular": "Yakissoba Vegetariano",
    "menu": [
      {
        "cat": "Oriental vegetariano",
        "catEn": "Vegetarian eastern",
        "items": [
          {
            "emoji": "🍜",
            "name": "Yakissoba Vegetariano",
            "nameEn": "Vegetarian Yakisoba",
            "desc": "Yakissoba vegetariano da casa.",
            "descEn": "House vegetarian yakisoba.",
            "price": 32,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🍚",
            "name": "Yakimeshi Vegetariano",
            "nameEn": "Vegetarian Yakimeshi",
            "desc": "Arroz oriental vegetariano.",
            "descEn": "Vegetarian eastern rice.",
            "price": 29,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🍣",
            "name": "Sushi Vegano",
            "nameEn": "Vegan Sushi",
            "desc": "Sushi vegano informado no cardápio da casa.",
            "descEn": "Vegan sushi listed by the restaurant.",
            "price": 36,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Pratos por quilo",
        "catEn": "Buffet by kilo",
        "items": [
          {
            "emoji": "🍄",
            "name": "Couve-flor com Shimeji",
            "nameEn": "Cauliflower with Shimeji",
            "desc": "Couve-flor refogada com cogumelo shimeji.",
            "descEn": "Sauteed cauliflower with shimeji mushroom.",
            "price": 30,
            "diet": "Vegano"
          },
          {
            "emoji": "🥟",
            "name": "Empada de Nabo",
            "nameEn": "Turnip Pie",
            "desc": "Empada vegetariana de nabo.",
            "descEn": "Vegetarian turnip pie.",
            "price": 12,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 5
  },
  {
    "id": 4,
    "emoji": "🍛",
    "name": "Ganesha Comida Caseira Vegetariana/Vegana",
    "nameEn": "Ganesha Vegetarian/Vegan Homemade Food",
    "desc": "Comida caseira vegetariana e vegana com refeições, saladas, sucos, tortas e sobremesas.",
    "descEn": "Vegetarian and vegan homemade food with meals, salads, juices, pies and desserts.",
    "diet": "vegetariano com opções veganas",
    "dietEn": "vegetarian with vegan options",
    "rating": 4.8,
    "time": "25-35",
    "deliveryFee": 0,
    "minOrder": 20,
    "category": "bowl",
    "badge": "CASEIRO VEG",
    "badgeEn": "HOMEMADE VEG",
    "color": "linear-gradient(135deg,#10b981,#059669)",
    "lat": -18.9153576,
    "lng": -48.2533726,
    "hours": {
      "open": 11,
      "close": 15
    },
    "address": "R. Euler Lannes Bernardes, 428 – Santa Mônica",
    "tags": [
      "marmita",
      "caseiro",
      "saladas"
    ],
    "ecoScore": 96,
    "bestFor": [
      "rapido",
      "saudavel"
    ],
    "reviews": 330,
    "popular": "Refeição Vegana Caseira",
    "menu": [
      {
        "cat": "Comida caseira",
        "catEn": "Homemade food",
        "items": [
          {
            "emoji": "🍱",
            "name": "Refeição Vegana Caseira",
            "nameEn": "Homemade Vegan Meal",
            "desc": "Refeição com arroz, feijão, legumes, proteína vegetal e salada.",
            "descEn": "Meal with rice, beans, vegetables, plant protein and salad.",
            "price": 28,
            "diet": "Vegano"
          },
          {
            "emoji": "🥗",
            "name": "Salada da Casa",
            "nameEn": "House Salad",
            "desc": "Salada preparada no estilo da casa.",
            "descEn": "House-style salad.",
            "price": 18,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Tortas, sucos e sobremesas",
        "catEn": "Pies, juices & desserts",
        "items": [
          {
            "emoji": "🥧",
            "name": "Torta Vegetariana",
            "nameEn": "Vegetarian Pie",
            "desc": "Torta vegetariana da casa.",
            "descEn": "House vegetarian pie.",
            "price": 16,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🧃",
            "name": "Suco Natural",
            "nameEn": "Fresh Juice",
            "desc": "Suco natural para acompanhar a refeição.",
            "descEn": "Fresh juice to pair with the meal.",
            "price": 9,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 4
  },
  {
    "id": 5,
    "emoji": "🥗",
    "name": "Arquitetura do Sabor",
    "nameEn": "Arquitetura do Sabor",
    "desc": "Restaurante no Santa Mônica com opções para vegetarianos e veganos, como saladas, sanduíches e sucos detox.",
    "descEn": "Restaurant in Santa Mônica with vegetarian and vegan options such as salads, sandwiches and detox juices.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.3,
    "time": "25-40",
    "deliveryFee": 4,
    "minOrder": 22,
    "category": "bowl",
    "badge": "OPÇÕES VEG",
    "badgeEn": "VEG OPTIONS",
    "color": "linear-gradient(135deg,#22c55e,#14b8a6)",
    "lat": -18.924,
    "lng": -48.247,
    "hours": {
      "open": 10,
      "close": 20
    },
    "address": "Av. Belarmino Cotta Pacheco, 2500 – Santa Mônica",
    "tags": [
      "salada",
      "sucos detox",
      "sanduíches"
    ],
    "ecoScore": 88,
    "bestFor": [
      "saudavel",
      "rapido"
    ],
    "reviews": 160,
    "popular": "Salada Veg",
    "menu": [
      {
        "cat": "Opções veg",
        "catEn": "Veg options",
        "items": [
          {
            "emoji": "🥗",
            "name": "Salada Veg",
            "nameEn": "Veg Salad",
            "desc": "Salada vegetariana/vegana do restaurante.",
            "descEn": "Restaurant vegetarian/vegan salad.",
            "price": 24,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🥪",
            "name": "Sanduíche Veg",
            "nameEn": "Veg Sandwich",
            "desc": "Sanduíche com recheios vegetarianos ou veganos.",
            "descEn": "Sandwich with vegetarian or vegan fillings.",
            "price": 22,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🧃",
            "name": "Suco Detox",
            "nameEn": "Detox Juice",
            "desc": "Suco detox natural.",
            "descEn": "Fresh detox juice.",
            "price": 12,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Vegetariano",
        "catEn": "Vegetarian",
        "items": [
          {
            "emoji": "🍳",
            "name": "Omelete Vegetariano",
            "nameEn": "Vegetarian Omelet",
            "desc": "Omelete vegetariano do cardápio.",
            "descEn": "Vegetarian omelet from the menu.",
            "price": 24,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 4
  },
  {
    "id": 6,
    "emoji": "☕",
    "name": "Tatá Cozinha Vegana / Tudo Veganim",
    "nameEn": "Tatá Vegan Kitchen / Tudo Veganim",
    "desc": "Cozinha vegana com lasanhas, pães de beijo, pavês, iogurtes, presuntos, linguiças e queijos vegetais.",
    "descEn": "Vegan kitchen with lasagnas, vegan cheese breads, pavês, yogurts, plant-based hams, sausages and cheeses.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.4,
    "time": "30-50",
    "deliveryFee": 6,
    "minOrder": 30,
    "category": "bowl",
    "badge": "DELIVERY VEGANO",
    "badgeEn": "VEGAN DELIVERY",
    "color": "linear-gradient(135deg,#78716c,#57534e)",
    "lat": -18.911,
    "lng": -48.243,
    "hours": {
      "open": 10,
      "close": 19
    },
    "address": "Uberlândia – delivery/encomendas",
    "tags": [
      "congelados",
      "queijos vegetais",
      "lasanha"
    ],
    "ecoScore": 95,
    "bestFor": [
      "rapido",
      "conforto"
    ],
    "reviews": 135,
    "popular": "Lasanha Vegana",
    "menu": [
      {
        "cat": "Congelados e refeições",
        "catEn": "Frozen & meals",
        "items": [
          {
            "emoji": "🍝",
            "name": "Lasanha Vegana",
            "nameEn": "Vegan Lasagna",
            "desc": "Lasanha 100% vegetal.",
            "descEn": "100% plant-based lasagna.",
            "price": 32,
            "diet": "Vegano"
          },
          {
            "emoji": "🥐",
            "name": "Pão de Beijo",
            "nameEn": "Vegan Cheese Bread",
            "desc": "Pão de queijo vegano, sem leite e sem ovos.",
            "descEn": "Vegan cheese bread, without milk and eggs.",
            "price": 18,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Laticínios vegetais",
        "catEn": "Plant-based dairy",
        "items": [
          {
            "emoji": "🥛",
            "name": "Iogurte Vegano",
            "nameEn": "Vegan Yogurt",
            "desc": "Iogurte vegetal.",
            "descEn": "Plant-based yogurt.",
            "price": 14,
            "diet": "Vegano"
          },
          {
            "emoji": "🧀",
            "name": "Queijo Vegetal",
            "nameEn": "Plant-Based Cheese",
            "desc": "Queijo vegetal da cozinha.",
            "descEn": "Plant-based cheese from the kitchen.",
            "price": 22,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 4
  },
  {
    "id": 7,
    "emoji": "🥧",
    "name": "Vegnutri",
    "nameEn": "Vegnutri",
    "desc": "Produtor vegano em Uberlândia com chocotone, trufas, empadão de palmito, copo da felicidade, coxinha, pão integral, tofu e tortas.",
    "descEn": "Vegan producer in Uberlândia with vegan chocotone, truffles, palm-heart pie, dessert cups, coxinha, whole-grain bread, tofu and pies.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.5,
    "time": "30-55",
    "deliveryFee": 6,
    "minOrder": 20,
    "category": "dessert",
    "badge": "PRODUTOR VEGANO",
    "badgeEn": "VEGAN PRODUCER",
    "color": "linear-gradient(135deg,#a855f7,#7e22ce)",
    "lat": -18.921,
    "lng": -48.26,
    "hours": {
      "open": 9,
      "close": 19
    },
    "address": "Uberlândia – encomendas",
    "tags": [
      "tofu",
      "coxinha",
      "doces"
    ],
    "ecoScore": 96,
    "bestFor": [
      "barato",
      "conforto"
    ],
    "reviews": 90,
    "popular": "Coxinha Vegana",
    "menu": [
      {
        "cat": "Salgados veganos",
        "catEn": "Vegan savory",
        "items": [
          {
            "emoji": "🥟",
            "name": "Coxinha Vegana",
            "nameEn": "Vegan Coxinha",
            "desc": "Coxinha 100% vegetal.",
            "descEn": "100% plant-based coxinha.",
            "price": 9,
            "diet": "Vegano"
          },
          {
            "emoji": "🥧",
            "name": "Empadão de Palmito",
            "nameEn": "Palm-Heart Pie",
            "desc": "Empadão vegano de palmito.",
            "descEn": "Vegan palm-heart pie.",
            "price": 18,
            "diet": "Vegano"
          },
          {
            "emoji": "🧈",
            "name": "Tofu",
            "nameEn": "Tofu",
            "desc": "Tofu vegano para consumo ou preparo.",
            "descEn": "Vegan tofu for cooking or eating.",
            "price": 18,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Doces veganos",
        "catEn": "Vegan sweets",
        "items": [
          {
            "emoji": "🍫",
            "name": "Trufas Veganas",
            "nameEn": "Vegan Truffles",
            "desc": "Trufas sem ingredientes de origem animal.",
            "descEn": "Truffles without animal-derived ingredients.",
            "price": 8,
            "diet": "Vegano"
          },
          {
            "emoji": "🍨",
            "name": "Copo da Felicidade Vegano",
            "nameEn": "Vegan Dessert Cup",
            "desc": "Sobremesa vegana em copo.",
            "descEn": "Vegan cup dessert.",
            "price": 16,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 5
  },
  {
    "id": 8,
    "emoji": "🍰",
    "name": "Nutri São",
    "nameEn": "Nutri São",
    "desc": "Comidas veganas em Uberlândia com bolos, doces e hambúrgueres veganos.",
    "descEn": "Vegan food in Uberlândia with vegan cakes, sweets and burgers.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.4,
    "time": "30-50",
    "deliveryFee": 5,
    "minOrder": 18,
    "category": "dessert",
    "badge": "DOCES & BURGERS",
    "badgeEn": "SWEETS & BURGERS",
    "color": "linear-gradient(135deg,#ec4899,#db2777)",
    "lat": -18.9225,
    "lng": -48.2625,
    "hours": {
      "open": 9,
      "close": 19
    },
    "address": "Uberlândia – delivery/encomendas",
    "tags": [
      "bolos",
      "doces",
      "hambúrguer"
    ],
    "ecoScore": 94,
    "bestFor": [
      "conforto",
      "barato"
    ],
    "reviews": 80,
    "popular": "Bolo Vegano",
    "menu": [
      {
        "cat": "Doces veganos",
        "catEn": "Vegan sweets",
        "items": [
          {
            "emoji": "🎂",
            "name": "Bolo Vegano",
            "nameEn": "Vegan Cake",
            "desc": "Bolo sem leite e sem ovos.",
            "descEn": "Cake without milk and eggs.",
            "price": 14,
            "diet": "Vegano"
          },
          {
            "emoji": "🍬",
            "name": "Doces Veganos",
            "nameEn": "Vegan Sweets",
            "desc": "Doces 100% vegetais.",
            "descEn": "100% plant-based sweets.",
            "price": 10,
            "diet": "Vegano"
          }
        ]
      },
      {
        "cat": "Lanches veganos",
        "catEn": "Vegan snacks",
        "items": [
          {
            "emoji": "🍔",
            "name": "Hambúrguer Vegano",
            "nameEn": "Vegan Burger",
            "desc": "Hambúrguer vegetal.",
            "descEn": "Plant-based burger.",
            "price": 25,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 9,
    "emoji": "🎂",
    "name": "Maria Fuê",
    "nameEn": "Maria Fuê",
    "desc": "Doceria vegana de Uberlândia com bolos confeitados e docinhos.",
    "descEn": "Vegan bakery in Uberlândia with decorated cakes and sweets.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.5,
    "time": "35-60",
    "deliveryFee": 6,
    "minOrder": 25,
    "category": "dessert",
    "badge": "DOCERIA VEGANA",
    "badgeEn": "VEGAN BAKERY",
    "color": "linear-gradient(135deg,#f472b6,#be185d)",
    "lat": -18.924,
    "lng": -48.264,
    "hours": {
      "open": 9,
      "close": 18
    },
    "address": "Uberlândia – encomendas",
    "tags": [
      "bolos",
      "docinhos",
      "festa"
    ],
    "ecoScore": 94,
    "bestFor": [
      "conforto"
    ],
    "reviews": 70,
    "popular": "Bolo Confeitado Vegano",
    "menu": [
      {
        "cat": "Doceria vegana",
        "catEn": "Vegan bakery",
        "items": [
          {
            "emoji": "🎂",
            "name": "Bolo Confeitado Vegano",
            "nameEn": "Decorated Vegan Cake",
            "desc": "Bolo confeitados vegano sob encomenda.",
            "descEn": "Decorated vegan cake by order.",
            "price": 60,
            "diet": "Vegano"
          },
          {
            "emoji": "🍬",
            "name": "Docinhos Veganos",
            "nameEn": "Vegan Party Sweets",
            "desc": "Docinhos veganos para festas e pedidos.",
            "descEn": "Vegan sweets for parties and orders.",
            "price": 20,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 10,
    "emoji": "🍫",
    "name": "ChocoTha",
    "nameEn": "ChocoTha",
    "desc": "Chocolates veganos artesanais com castanhas ou recheados, feitos de forma sustentável.",
    "descEn": "Artisanal vegan chocolates with nuts or fillings, made sustainably.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.6,
    "time": "35-60",
    "deliveryFee": 6,
    "minOrder": 20,
    "category": "dessert",
    "badge": "CHOCOLATE VEGANO",
    "badgeEn": "VEGAN CHOCOLATE",
    "color": "linear-gradient(135deg,#7c2d12,#451a03)",
    "lat": -18.9255,
    "lng": -48.2655,
    "hours": {
      "open": 9,
      "close": 18
    },
    "address": "Uberlândia – encomendas",
    "tags": [
      "chocolate",
      "castanhas",
      "artesanal"
    ],
    "ecoScore": 95,
    "bestFor": [
      "conforto"
    ],
    "reviews": 65,
    "popular": "Chocolate com Castanhas",
    "menu": [
      {
        "cat": "Chocolates veganos",
        "catEn": "Vegan chocolates",
        "items": [
          {
            "emoji": "🍫",
            "name": "Chocolate com Castanhas",
            "nameEn": "Chocolate with Nuts",
            "desc": "Chocolate vegano artesanal com castanhas.",
            "descEn": "Artisanal vegan chocolate with nuts.",
            "price": 18,
            "diet": "Vegano"
          },
          {
            "emoji": "🍬",
            "name": "Chocolate Recheado Vegano",
            "nameEn": "Filled Vegan Chocolate",
            "desc": "Chocolate vegano recheado.",
            "descEn": "Filled vegan chocolate.",
            "price": 20,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 11,
    "emoji": "🍰",
    "name": "Massala Vegan",
    "nameEn": "Massala Vegan",
    "desc": "Doceria vegana em Uberlândia, focada em doces sem ingredientes de origem animal.",
    "descEn": "Vegan bakery in Uberlândia focused on sweets without animal-derived ingredients.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.5,
    "time": "35-60",
    "deliveryFee": 6,
    "minOrder": 18,
    "category": "dessert",
    "badge": "DOCERIA VEGANA",
    "badgeEn": "VEGAN SWEETS",
    "color": "linear-gradient(135deg,#f97316,#c2410c)",
    "lat": -18.927,
    "lng": -48.267,
    "hours": {
      "open": 10,
      "close": 19
    },
    "address": "Uberlândia – delivery/encomendas",
    "tags": [
      "doceria",
      "sobremesa",
      "vegano"
    ],
    "ecoScore": 95,
    "bestFor": [
      "conforto"
    ],
    "reviews": 75,
    "popular": "Doces Veganos",
    "menu": [
      {
        "cat": "Doces veganos",
        "catEn": "Vegan sweets",
        "items": [
          {
            "emoji": "🍰",
            "name": "Doces Veganos",
            "nameEn": "Vegan Sweets",
            "desc": "Doces de doceria em versão vegana.",
            "descEn": "Bakery sweets in vegan version.",
            "price": 14,
            "diet": "Vegano"
          },
          {
            "emoji": "🧁",
            "name": "Sobremesa Vegana",
            "nameEn": "Vegan Dessert",
            "desc": "Sobremesa vegana da doceria.",
            "descEn": "Vegan dessert from the bakery.",
            "price": 16,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 12,
    "emoji": "🌿",
    "name": "No Jardim Restaurante",
    "nameEn": "No Jardim Restaurant",
    "desc": "Restaurante em Uberlândia com opções vegetarianas e veganas como jiló defumado e Chuchu Beleza.",
    "descEn": "Restaurant in Uberlândia with vegetarian and vegan options such as smoked jiló and Chuchu Beleza.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.5,
    "time": "30-45",
    "deliveryFee": 5,
    "minOrder": 20,
    "category": "bowl",
    "badge": "OPÇÕES NATURAIS",
    "badgeEn": "NATURAL OPTIONS",
    "color": "linear-gradient(135deg,#65a30d,#3f6212)",
    "lat": -18.927,
    "lng": -48.265,
    "hours": {
      "open": 11,
      "close": 22
    },
    "address": "Saraiva – Uberlândia",
    "tags": [
      "jiló",
      "chuchu",
      "natural"
    ],
    "ecoScore": 86,
    "bestFor": [
      "saudavel",
      "barato"
    ],
    "reviews": 160,
    "popular": "Chuchu Beleza",
    "menu": [
      {
        "cat": "Opções vegetais",
        "catEn": "Plant options",
        "items": [
          {
            "emoji": "🍆",
            "name": "Jiló Defumado",
            "nameEn": "Smoked Jiló",
            "desc": "Jiló defumado com molho de iogurte caseiro.",
            "descEn": "Smoked jiló with homemade yogurt sauce.",
            "price": 20,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🥒",
            "name": "Chuchu Beleza",
            "nameEn": "Chuchu Beleza",
            "desc": "Prato vegano/vegetariano listado no cardápio.",
            "descEn": "Vegan/vegetarian dish listed on the menu.",
            "price": 25,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🍟",
            "name": "Batatinha Frita",
            "nameEn": "French Fries",
            "desc": "Porção vegetal simples.",
            "descEn": "Simple plant-based side.",
            "price": 18,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 13,
    "emoji": "🧆",
    "name": "Akkar Restaurante",
    "nameEn": "Akkar Restaurant",
    "desc": "Restaurante árabe em Uberlândia com opções veganas e vegetarianas como salada mista e tabule.",
    "descEn": "Arabic restaurant in Uberlândia with vegan and vegetarian options such as mixed salad and tabbouleh.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.4,
    "time": "30-50",
    "deliveryFee": 6,
    "minOrder": 25,
    "category": "bowl",
    "badge": "ÁRABE VEG",
    "badgeEn": "ARABIC VEG",
    "color": "linear-gradient(135deg,#0f766e,#115e59)",
    "lat": -18.895,
    "lng": -48.26,
    "hours": {
      "open": 11,
      "close": 22
    },
    "address": "Tibery – Uberlândia",
    "tags": [
      "árabe",
      "tabule",
      "salada"
    ],
    "ecoScore": 84,
    "bestFor": [
      "saudavel",
      "barato"
    ],
    "reviews": 170,
    "popular": "Tabule 500g",
    "menu": [
      {
        "cat": "Árabe veg",
        "catEn": "Arabic veg",
        "items": [
          {
            "emoji": "🥗",
            "name": "Salada Mista Individual",
            "nameEn": "Individual Mixed Salad",
            "desc": "Salada mista individual do cardápio.",
            "descEn": "Individual mixed salad from the menu.",
            "price": 41,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🌿",
            "name": "Tabule 500g",
            "nameEn": "Tabbouleh 500g",
            "desc": "Tabule em porção de 500g.",
            "descEn": "Tabbouleh 500g portion.",
            "price": 35,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 14,
    "emoji": "🥟",
    "name": "Divina Coxinha",
    "nameEn": "Divina Coxinha",
    "desc": "Coxinharia em Santa Mônica com coxinhas vegetarianas e veganas em variedade de sabores.",
    "descEn": "Coxinha shop in Santa Mônica with vegetarian and vegan coxinhas in several flavors.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.4,
    "time": "25-45",
    "deliveryFee": 5,
    "minOrder": 15,
    "category": "burger",
    "badge": "COXINHAS VEG",
    "badgeEn": "VEG COXINHAS",
    "color": "linear-gradient(135deg,#fb923c,#ea580c)",
    "lat": -18.9175,
    "lng": -48.2525,
    "hours": {
      "open": 10,
      "close": 22
    },
    "address": "Santa Mônica – Uberlândia",
    "tags": [
      "coxinha",
      "salgados",
      "vegano"
    ],
    "ecoScore": 83,
    "bestFor": [
      "barato",
      "rapido"
    ],
    "reviews": 180,
    "popular": "Coxinha Vegana",
    "menu": [
      {
        "cat": "Salgados veg",
        "catEn": "Veg savory snacks",
        "items": [
          {
            "emoji": "🥟",
            "name": "Coxinha Vegana",
            "nameEn": "Vegan Coxinha",
            "desc": "Coxinha vegana crocante e recheada.",
            "descEn": "Crunchy filled vegan coxinha.",
            "price": 10,
            "diet": "Vegano"
          },
          {
            "emoji": "🥟",
            "name": "Coxinha Vegetariana",
            "nameEn": "Vegetarian Coxinha",
            "desc": "Coxinha vegetariana da casa.",
            "descEn": "House vegetarian coxinha.",
            "price": 10,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 15,
    "emoji": "🌯",
    "name": "Burritos Hermanos",
    "nameEn": "Burritos Hermanos",
    "desc": "Fast-food mexicano em Uberlândia com burritos vegetarianos; versão vegana pode ser pedida retirando queijo quando indicado.",
    "descEn": "Mexican fast-food in Uberlândia with vegetarian burritos; vegan version can be requested without cheese when indicated.",
    "diet": "opções vegetarianas; vegano sob ajuste",
    "dietEn": "vegetarian options; vegan by adjustment",
    "rating": 4.3,
    "time": "25-45",
    "deliveryFee": 5,
    "minOrder": 25,
    "category": "burger",
    "badge": "MEXICANO VEG",
    "badgeEn": "MEXICAN VEG",
    "color": "linear-gradient(135deg,#dc2626,#991b1b)",
    "lat": -18.915,
    "lng": -48.291,
    "hours": {
      "open": 11,
      "close": 23
    },
    "address": "Osvaldo Rezende – Uberlândia",
    "tags": [
      "burrito",
      "mexicano",
      "vegetariano"
    ],
    "ecoScore": 81,
    "bestFor": [
      "conforto",
      "barato"
    ],
    "reviews": 190,
    "popular": "Sonho Vegetariano",
    "menu": [
      {
        "cat": "Mexicano vegetariano",
        "catEn": "Vegetarian Mexican",
        "items": [
          {
            "emoji": "🌯",
            "name": "Sonho Vegetariano",
            "nameEn": "Vegetarian Dream",
            "desc": "Combo com 2 burritos vegetarianos e 1 chimichanga doce; para veganizar, pedir sem queijo quando disponível.",
            "descEn": "Combo with 2 vegetarian burritos and 1 sweet chimichanga; request without cheese when available to veganize.",
            "price": 38,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🌯",
            "name": "Burrito Vegetariano",
            "nameEn": "Vegetarian Burrito",
            "desc": "Burrito sem carne.",
            "descEn": "Meat-free burrito.",
            "price": 25,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 16,
    "emoji": "🫓",
    "name": "Amiri Império das Esfirras",
    "nameEn": "Amiri Império das Esfirras",
    "desc": "Restaurante árabe com linha de wraps e esfihas veganas/vegetarianas, incluindo opções de carne vegetal, vegetais e zaatar.",
    "descEn": "Arabic restaurant in Uberlândia with vegan and vegetarian tagged items, including Arabic bread with garlic cream.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.2,
    "time": "30-50",
    "deliveryFee": 6,
    "minOrder": 20,
    "category": "pizza",
    "badge": "ÁRABE VEG",
    "badgeEn": "VEG ARABIC",
    "color": "linear-gradient(135deg,#92400e,#78350f)",
    "lat": -18.918,
    "lng": -48.285,
    "hours": {
      "open": 18,
      "close": 23
    },
    "address": "Brasil – Uberlândia",
    "tags": [
      "árabe",
      "esfiha vegana",
      "wrap vegano"
    ],
    "ecoScore": 92,
    "bestFor": [
      "barato",
      "rapido"
    ],
    "reviews": 130,
    "popular": "Esfiha Vegana Diamante Verde",
    "menu": [
      {
        "cat": "Linha vegana",
        "catEn": "Vegan line",
        "items": [
          {
            "emoji": "🌯",
            "name": "Super X-Tudo Vegano Ouro do Deserto",
            "nameEn": "Vegan Super X-Tudo",
            "desc": "Wrap vegano com tomate seco e recheio vegetal.",
            "descEn": "Vegan wrap with sun-dried tomato and plant-based filling.",
            "price": 47.99,
            "diet": "Vegano"
          },
          {
            "emoji": "🥟",
            "name": "Esfiha Vegana de Carne Vegetal",
            "nameEn": "Plant-Based Meat Vegan Esfiha",
            "desc": "Esfiha vegana com carne vegetal, vegetais e tomate seco.",
            "descEn": "Vegan esfiha with plant-based meat, vegetables and sun-dried tomato.",
            "price": 12.99,
            "diet": "Vegano"
          },
          {
            "emoji": "🍆",
            "name": "Esfiha de Berinjela, Pimentão e Tomate",
            "nameEn": "Eggplant, Pepper and Tomato Esfiha",
            "desc": "Esfiha vegetal com berinjela assada, pimentão, tomate e uva-passa.",
            "descEn": "Plant-based esfiha with roasted eggplant, pepper, tomato and raisins.",
            "price": 11.99,
            "diet": "Vegano"
          },
          {
            "emoji": "🌿",
            "name": "Pão Árabe com Creme de Alho",
            "nameEn": "Arabic Bread with Garlic Cream",
            "desc": "Pão árabe perfumado com creme de alho, marcado como vegano/vegetariano.",
            "descEn": "Arabic bread with garlic cream, listed as vegan/vegetarian.",
            "price": 26.96,
            "diet": "Vegano/Vegetariano"
          }
        ]
      }
    ],
    "sourceNote": "iFood lista itens veganos/vegetarianos como Super X-Tudo Vegano e esfirras veganas.",
    "vegItemCount": 4
  },
  {
    "id": 17,
    "emoji": "🍲",
    "name": "Cozinha da Terra Delivery",
    "nameEn": "Cozinha da Terra Delivery",
    "desc": "Delivery/self-service com marmitas vegetarianas e veganas e grande variedade diária de saladas, grãos, legumes e proteínas vegetais.",
    "descEn": "Delivery cited for vegetarian and vegan options in Uberlândia.",
    "diet": "opções vegetarianas e veganas",
    "dietEn": "vegetarian and vegan options",
    "rating": 4.3,
    "time": "30-55",
    "deliveryFee": 5,
    "minOrder": 25,
    "category": "bowl",
    "badge": "30+ OPÇÕES",
    "badgeEn": "30+ OPTIONS",
    "color": "linear-gradient(135deg,#15803d,#166534)",
    "lat": -18.92,
    "lng": -48.258,
    "hours": {
      "open": 11,
      "close": 20
    },
    "address": "Uberlândia – delivery",
    "tags": [
      "marmita",
      "self-service",
      "vegetariano",
      "vegano"
    ],
    "ecoScore": 94,
    "bestFor": [
      "saudavel",
      "rapido"
    ],
    "reviews": 110,
    "popular": "Marmita Vegetariana Completa",
    "menu": [
      {
        "cat": "Marmitas e self-service",
        "catEn": "Lunchboxes and buffet",
        "items": [
          {
            "emoji": "🍱",
            "name": "Marmita Vegetariana Completa",
            "nameEn": "Complete Vegetarian Lunchbox",
            "desc": "Arroz, feijão, legumes, verduras, grãos e proteína vegetal.",
            "descEn": "Rice, beans, vegetables, greens, grains and plant protein.",
            "price": 28,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🌱",
            "name": "Marmita Vegana do Dia",
            "nameEn": "Daily Vegan Lunchbox",
            "desc": "Montagem sem ingredientes de origem animal, conforme opções do dia.",
            "descEn": "No animal-derived ingredients, based on daily options.",
            "price": 30,
            "diet": "Vegano"
          },
          {
            "emoji": "🥗",
            "name": "Saladas e Grãos do Buffet",
            "nameEn": "Buffet Salads and Grains",
            "desc": "Combinação de saladas frescas, grãos e legumes.",
            "descEn": "Combination of fresh salads, grains and vegetables.",
            "price": 24,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🍛",
            "name": "Prato de Proteína Vegetal",
            "nameEn": "Plant Protein Plate",
            "desc": "Prato com proteína vegetal e acompanhamentos vegetarianos.",
            "descEn": "Plate with plant protein and vegetarian sides.",
            "price": 32,
            "diet": "Vegano/Vegetariano"
          }
        ]
      }
    ],
    "sourceNote": "Página pública informa marmitas vegetarianas e mais de 30 opções diariamente.",
    "vegItemCount": 4
  },
  {
    "id": 18,
    "emoji": "🍨",
    "name": "Açaí do Mato - After Job",
    "nameEn": "Açaí do Mato - After Job",
    "desc": "Açaí e bebidas em Uberlândia com itens marcados como orgânicos, veganos e vegetarianos.",
    "descEn": "Açaí and drinks in Uberlândia with items tagged organic, vegan and vegetarian.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.2,
    "time": "20-40",
    "deliveryFee": 5,
    "minOrder": 18,
    "category": "juice",
    "badge": "AÇAÍ VEG",
    "badgeEn": "VEG AÇAÍ",
    "color": "linear-gradient(135deg,#6d28d9,#4c1d95)",
    "lat": -18.924,
    "lng": -48.277,
    "hours": {
      "open": 10,
      "close": 23
    },
    "address": "Vigilato Pereira – Uberlândia",
    "tags": [
      "açaí",
      "bebida",
      "vegano"
    ],
    "ecoScore": 82,
    "bestFor": [
      "rapido",
      "barato"
    ],
    "reviews": 150,
    "popular": "Açaí Vegano",
    "menu": [
      {
        "cat": "Açaí e bebidas",
        "catEn": "Açaí & drinks",
        "items": [
          {
            "emoji": "🍨",
            "name": "Açaí Vegano",
            "nameEn": "Vegan Açaí",
            "desc": "Açaí marcado como vegano/vegetariano no cardápio.",
            "descEn": "Açaí tagged vegan/vegetarian on the menu.",
            "price": 22,
            "diet": "Vegano"
          },
          {
            "emoji": "🥤",
            "name": "Bebida Energética Natural",
            "nameEn": "Natural Energy Drink",
            "desc": "Bebida com proposta vegetal/vegana.",
            "descEn": "Plant-based/vegan drink option.",
            "price": 16,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 19,
    "emoji": "🍰",
    "name": "Buba Cake",
    "nameEn": "Buba Cake",
    "desc": "Confeitaria artesanal, afetiva e inclusiva em Uberlândia, com opções veganas em bolos e doces sob encomenda.",
    "descEn": "Artisanal, inclusive bakery in Uberlândia with vegan options.",
    "diet": "com opções veganas",
    "dietEn": "with vegan options",
    "rating": 4.4,
    "time": "35-60",
    "deliveryFee": 6,
    "minOrder": 25,
    "category": "dessert",
    "badge": "CONFEITARIA INCLUSIVA",
    "badgeEn": "INCLUSIVE BAKERY",
    "color": "linear-gradient(135deg,#f43f5e,#be123c)",
    "lat": -18.929,
    "lng": -48.269,
    "hours": {
      "open": 10,
      "close": 19
    },
    "address": "Uberlândia – encomendas",
    "tags": [
      "bolo vegano",
      "doces veganos",
      "confeitaria"
    ],
    "ecoScore": 83,
    "bestFor": [
      "conforto"
    ],
    "reviews": 95,
    "popular": "Bolo Vegano de Frutas",
    "menu": [
      {
        "cat": "Doces e bolos veganos",
        "catEn": "Vegan sweets and cakes",
        "items": [
          {
            "emoji": "🎂",
            "name": "Bolo Vegano de Frutas",
            "nameEn": "Vegan Fruit Cake",
            "desc": "Bolo vegano de frutas com cobertura de chantilly vegetal.",
            "descEn": "Vegan fruit cake with plant-based whipped topping.",
            "price": 95,
            "diet": "Vegano"
          },
          {
            "emoji": "🍰",
            "name": "Bolo Simples Vegano",
            "nameEn": "Simple Vegan Cake",
            "desc": "Versão simples vegana para café ou encomenda.",
            "descEn": "Simple vegan version for coffee or pre-order.",
            "price": 35,
            "diet": "Vegano"
          },
          {
            "emoji": "🧁",
            "name": "Docinhos Veganos",
            "nameEn": "Vegan Sweets",
            "desc": "Docinhos veganos artesanais sob encomenda.",
            "descEn": "Handmade vegan sweets by pre-order.",
            "price": 18,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "sourceNote": "Veganizze lista Buba Cake como confeitaria com opções veganas; postagem pública cita diversas opções veganas de bolo de festa e bolo simples.",
    "vegItemCount": 3
  },
  {
    "id": 20,
    "emoji": "🥐",
    "name": "Paniveg",
    "nameEn": "Paniveg",
    "desc": "Venda de comidas veganas em Uberlândia, com renda revertida para ajudar animais em situação de rua.",
    "descEn": "Vegan food seller in Uberlândia, with proceeds helping stray animals.",
    "diet": "100% vegano",
    "dietEn": "100% vegan",
    "rating": 4.6,
    "time": "30-50",
    "deliveryFee": 5,
    "minOrder": 25,
    "category": "dessert",
    "badge": "SOLIDÁRIO VEGANO",
    "badgeEn": "VEGAN CAUSE",
    "color": "linear-gradient(135deg,#fb7185,#be123c)",
    "lat": -18.918,
    "lng": -48.276,
    "hours": {
      "open": 10,
      "close": 19
    },
    "address": "Uberlândia – atendimento por encomenda",
    "tags": [
      "vegano",
      "encomenda",
      "causa animal"
    ],
    "ecoScore": 96,
    "bestFor": [
      "conforto",
      "saudavel"
    ],
    "reviews": 80,
    "popular": "Pães e Salgados Veganos",
    "sourceNote": "Veganizze lista Paniveg em Uberlândia como venda de comidas veganas.",
    "menu": [
      {
        "cat": "Comidas veganas por encomenda",
        "catEn": "Vegan foods by order",
        "items": [
          {
            "emoji": "🥐",
            "name": "Pães Veganos",
            "nameEn": "Vegan Breads",
            "desc": "Pães sem ingredientes de origem animal.",
            "descEn": "Breads without animal-derived ingredients.",
            "price": 18,
            "diet": "Vegano"
          },
          {
            "emoji": "🥟",
            "name": "Salgados Veganos",
            "nameEn": "Vegan Savories",
            "desc": "Salgados vegetais preparados sob encomenda.",
            "descEn": "Plant-based savory snacks by order.",
            "price": 22,
            "diet": "Vegano"
          },
          {
            "emoji": "🍰",
            "name": "Doces Veganos",
            "nameEn": "Vegan Sweets",
            "desc": "Doces veganos para encomenda.",
            "descEn": "Vegan sweets for pre-order.",
            "price": 20,
            "diet": "Vegano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 21,
    "emoji": "🍱",
    "name": "Naturalchefudi",
    "nameEn": "Naturalchefudi",
    "desc": "Delivery de marmitas saudáveis em Uberlândia com linha de marmitas vegetarianas, legumes, verduras, grãos e proteína vegetal.",
    "descEn": "Healthy lunchbox delivery in Uberlândia with vegetarian lunchboxes, vegetables, grains and plant protein.",
    "diet": "marmitas vegetarianas",
    "dietEn": "vegetarian lunchboxes",
    "rating": 4.8,
    "time": "30-50",
    "deliveryFee": 6,
    "minOrder": 10,
    "category": "bowl",
    "badge": "10 MARMITAS VEG",
    "badgeEn": "10 VEG MEALS",
    "color": "linear-gradient(135deg,#65a30d,#3f6212)",
    "lat": -18.919,
    "lng": -48.281,
    "hours": {
      "open": 8,
      "close": 18
    },
    "address": "Fundinho – Uberlândia",
    "tags": [
      "marmita",
      "saudável",
      "vegetariano"
    ],
    "ecoScore": 94,
    "bestFor": [
      "saudavel",
      "barato"
    ],
    "reviews": 160,
    "popular": "Marmita Vegetariana",
    "sourceNote": "iFood informa “São dez marmitas vegetariana” com arroz, feijão, legumes, verduras, grãos e proteína vegetal.",
    "menu": [
      {
        "cat": "Marmitas vegetarianas",
        "catEn": "Vegetarian lunchboxes",
        "items": [
          {
            "emoji": "🍱",
            "name": "Marmita Vegetariana Tradicional",
            "nameEn": "Traditional Vegetarian Lunchbox",
            "desc": "Arroz, feijão, legumes, verduras, grãos e proteína vegetal.",
            "descEn": "Rice, beans, vegetables, greens, grains and plant protein.",
            "price": 24,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🥦",
            "name": "Marmita Vegetariana Low Carb",
            "nameEn": "Low-Carb Vegetarian Lunchbox",
            "desc": "Legumes, verduras, grãos e proteína vegetal.",
            "descEn": "Vegetables, greens, grains and plant protein.",
            "price": 25,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🌱",
            "name": "Marmita Vegetariana Congelada",
            "nameEn": "Frozen Vegetarian Lunchbox",
            "desc": "Versão congelada da linha vegetariana.",
            "descEn": "Frozen version of the vegetarian line.",
            "price": 22,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 22,
    "emoji": "🥟",
    "name": "Pastelaria do Ronaldo",
    "nameEn": "Ronaldo's Pastel Shop",
    "desc": "Pastelaria em Santa Mônica com pastéis veganos/vegetarianos de palmito, milho, tomate, azeitona e combinações sem carne.",
    "descEn": "Pastel shop in Santa Mônica with vegan/vegetarian pastels filled with hearts of palm, corn, tomato, olives and meat-free combinations.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.9,
    "time": "25-40",
    "deliveryFee": 5,
    "minOrder": 20,
    "category": "burger",
    "badge": "PASTEL VEG",
    "badgeEn": "VEG PASTEL",
    "color": "linear-gradient(135deg,#f59e0b,#b45309)",
    "lat": -18.9172,
    "lng": -48.2526,
    "hours": {
      "open": 18,
      "close": 23
    },
    "address": "Santa Mônica – Uberlândia",
    "tags": [
      "pastel",
      "palmito",
      "vegetariano"
    ],
    "ecoScore": 88,
    "bestFor": [
      "barato",
      "conforto"
    ],
    "reviews": 180,
    "popular": "Pastel Palmito, Milho, Tomate e Azeitona",
    "sourceNote": "iFood lista Pastel Vegano/Vegetariano e Pastel de Palmito, Milho, Tomate e Azeitona.",
    "menu": [
      {
        "cat": "Pastéis veganos/vegetarianos",
        "catEn": "Vegan/vegetarian pastels",
        "items": [
          {
            "emoji": "🥟",
            "name": "Pastel Palmito, Milho, Tomate e Azeitona",
            "nameEn": "Heart of Palm, Corn, Tomato and Olive Pastel",
            "desc": "Pastel sem carne com recheio vegetal.",
            "descEn": "Meat-free pastel with plant-based filling.",
            "price": 26.9,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🧀",
            "name": "Pastel Queijo com Palmito, Milho e Tomate",
            "nameEn": "Cheese, Heart of Palm, Corn and Tomato Pastel",
            "desc": "Opção vegetariana com queijo e vegetais.",
            "descEn": "Vegetarian option with cheese and vegetables.",
            "price": 28.99,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🌽",
            "name": "Pastel Vegano/Vegetariano da Casa",
            "nameEn": "House Vegan/Vegetarian Pastel",
            "desc": "Pastel do cardápio marcado como vegano/vegetariano.",
            "descEn": "Menu pastel listed as vegan/vegetarian.",
            "price": 26.9,
            "diet": "Vegano/Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 23,
    "emoji": "🧆",
    "name": "Alibaba Árabe",
    "nameEn": "Alibaba Arabic",
    "desc": "Restaurante árabe em Uberlândia com pratos montáveis e clássicos vegetarianos como homus, pastas e acompanhamentos sem carne.",
    "descEn": "Arabic restaurant in Uberlândia with customizable plates and vegetarian classics like hummus, dips and meat-free sides.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.6,
    "time": "30-45",
    "deliveryFee": 6,
    "minOrder": 25,
    "category": "bowl",
    "badge": "ÁRABE VEG",
    "badgeEn": "VEG ARABIC",
    "color": "linear-gradient(135deg,#d97706,#78350f)",
    "lat": -18.9148,
    "lng": -48.2855,
    "hours": {
      "open": 11,
      "close": 22
    },
    "address": "Martins – Uberlândia",
    "tags": [
      "árabe",
      "homus",
      "monte seu prato"
    ],
    "ecoScore": 91,
    "bestFor": [
      "saudavel",
      "conforto"
    ],
    "reviews": 170,
    "popular": "Monte seu Prato Vegetariano",
    "sourceNote": "iFood lista “Monte seu prato” como vegano/vegetariano e homus no cardápio do Alibaba Árabe.",
    "menu": [
      {
        "cat": "Árabe vegano/vegetariano",
        "catEn": "Vegan/vegetarian Arabic",
        "items": [
          {
            "emoji": "🍽️",
            "name": "Monte seu Prato Vegetariano",
            "nameEn": "Build Your Vegetarian Plate",
            "desc": "Prato montável com opções marcadas como veganas/vegetarianas.",
            "descEn": "Customizable plate with items listed as vegan/vegetarian.",
            "price": 26.96,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🧆",
            "name": "Homus com Pão Árabe",
            "nameEn": "Hummus with Arabic Bread",
            "desc": "Pasta de grão-de-bico com tahine.",
            "descEn": "Chickpea and tahini dip.",
            "price": 22,
            "diet": "Vegano"
          },
          {
            "emoji": "🥗",
            "name": "Tabule / Salada Árabe",
            "nameEn": "Tabbouleh / Arabic Salad",
            "desc": "Salada árabe fresca sem carne.",
            "descEn": "Fresh meat-free Arabic salad.",
            "price": 19,
            "diet": "Vegano/Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 24,
    "emoji": "🍣",
    "name": "Mitsui Sushi Bar",
    "nameEn": "Mitsui Sushi Bar",
    "desc": "Sushi bar no Centro com opções veganas e vegetarianas como harumaki, manga maki e rolinhos primavera.",
    "descEn": "Sushi bar downtown with vegan and vegetarian options like harumaki, mango maki and spring rolls.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.6,
    "time": "35-55",
    "deliveryFee": 7,
    "minOrder": 40,
    "category": "japanese",
    "badge": "JAPONÊS VEG",
    "badgeEn": "VEG JAPANESE",
    "color": "linear-gradient(135deg,#0f766e,#134e4a)",
    "lat": -18.9201,
    "lng": -48.2762,
    "hours": {
      "open": 18,
      "close": 23
    },
    "address": "Centro – Uberlândia",
    "tags": [
      "sushi",
      "harumaki",
      "manga maki"
    ],
    "ecoScore": 90,
    "bestFor": [
      "conforto",
      "saudavel"
    ],
    "reviews": 190,
    "popular": "Manga Maki",
    "sourceNote": "iFood mostra itens como Harumaki/Rolinho Primavera e Manga Maki com marcação vegano/vegetariano.",
    "menu": [
      {
        "cat": "Sushi vegano/vegetariano",
        "catEn": "Vegan/vegetarian sushi",
        "items": [
          {
            "emoji": "🍣",
            "name": "Manga Maki - 10 unidades",
            "nameEn": "Mango Maki - 10 pieces",
            "desc": "Sushi com manga listado como vegano/vegetariano.",
            "descEn": "Mango sushi listed as vegan/vegetarian.",
            "price": 22.9,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🥢",
            "name": "Harumaki / Rolinho Primavera",
            "nameEn": "Harumaki / Spring Roll",
            "desc": "Rolinho primavera sem carne.",
            "descEn": "Meat-free spring roll.",
            "price": 24.9,
            "diet": "Vegano/Vegetariano"
          },
          {
            "emoji": "🥒",
            "name": "Uramaki Vegetariano",
            "nameEn": "Vegetarian Uramaki",
            "desc": "Uramaki com vegetais.",
            "descEn": "Uramaki with vegetables.",
            "price": 29.9,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 25,
    "emoji": "🥙",
    "name": "Jeronimo - Uberlândia",
    "nameEn": "Jeronimo - Uberlândia",
    "desc": "Rede de lanches com opção vegetariana de falafel em sanduíche e combo com batata e refrigerante.",
    "descEn": "Snack chain with vegetarian falafel sandwich and combo with fries and soda.",
    "diet": "opções vegetarianas",
    "dietEn": "vegetarian options",
    "rating": 4.8,
    "time": "25-40",
    "deliveryFee": 6,
    "minOrder": 30,
    "category": "burger",
    "badge": "FALAFEL",
    "badgeEn": "FALAFEL",
    "color": "linear-gradient(135deg,#eab308,#a16207)",
    "lat": -18.914,
    "lng": -48.268,
    "hours": {
      "open": 11,
      "close": 23
    },
    "address": "Cazeca – Uberlândia",
    "tags": [
      "falafel",
      "lanche",
      "combo"
    ],
    "ecoScore": 86,
    "bestFor": [
      "rapido",
      "barato"
    ],
    "reviews": 260,
    "popular": "Combo Falafel Vegetariano",
    "sourceNote": "iFood lista Combo Falafel Vegetariano + Coca e sanduíche de falafel.",
    "menu": [
      {
        "cat": "Falafel vegetariano",
        "catEn": "Vegetarian falafel",
        "items": [
          {
            "emoji": "🥙",
            "name": "Sanduíche de Falafel",
            "nameEn": "Falafel Sandwich",
            "desc": "Sanduíche vegetariano de falafel.",
            "descEn": "Vegetarian falafel sandwich.",
            "price": 32,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🍟",
            "name": "Combo Falafel Vegetariano + Coca",
            "nameEn": "Vegetarian Falafel Combo + Coke",
            "desc": "Sanduíche de falafel, batata frita e refrigerante.",
            "descEn": "Falafel sandwich, fries and soda.",
            "price": 39.9,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 2
  },
  {
    "id": 26,
    "emoji": "🧆",
    "name": "Sahtten",
    "nameEn": "Sahtten",
    "desc": "Restaurante árabe tradicional no Centro com pastas, saladas e opções vegetarianas como homus, babaganush e coalhada seca.",
    "descEn": "Traditional Arabic restaurant downtown with dips, salads and vegetarian options like hummus, babaganoush and labneh.",
    "diet": "opções vegetarianas",
    "dietEn": "vegetarian options",
    "rating": 4.2,
    "time": "25-40",
    "deliveryFee": 6,
    "minOrder": 30,
    "category": "bowl",
    "badge": "ÁRABE CLÁSSICO",
    "badgeEn": "CLASSIC ARABIC",
    "color": "linear-gradient(135deg,#92400e,#451a03)",
    "lat": -18.9203,
    "lng": -48.2767,
    "hours": {
      "open": 11,
      "close": 22
    },
    "address": "Av. João Pinheiro, 220 – Centro",
    "tags": [
      "árabe",
      "homus",
      "saladas"
    ],
    "ecoScore": 89,
    "bestFor": [
      "conforto",
      "saudavel"
    ],
    "reviews": 320,
    "popular": "Homus Tahine",
    "sourceNote": "Fontes públicas citam Homus Tahine, Coalhada Seca, Babaganush e opções vegetarianas no Sahtten.",
    "menu": [
      {
        "cat": "Árabe vegetariano",
        "catEn": "Vegetarian Arabic",
        "items": [
          {
            "emoji": "🧆",
            "name": "Homus Tahine",
            "nameEn": "Hummus Tahini",
            "desc": "Pasta de grão-de-bico com tahine.",
            "descEn": "Chickpea paste with tahini.",
            "price": 28,
            "diet": "Vegano"
          },
          {
            "emoji": "🍆",
            "name": "Babaganush",
            "nameEn": "Babaganoush",
            "desc": "Pasta de berinjela típica árabe.",
            "descEn": "Traditional Arabic eggplant dip.",
            "price": 29,
            "diet": "Vegano"
          },
          {
            "emoji": "🥛",
            "name": "Coalhada Seca",
            "nameEn": "Labneh",
            "desc": "Pasta árabe vegetariana à base de leite.",
            "descEn": "Vegetarian Arabic dairy dip.",
            "price": 29,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🥗",
            "name": "Salada Marroquina",
            "nameEn": "Moroccan Salad",
            "desc": "Salada árabe fresca sem carne.",
            "descEn": "Fresh meat-free Arabic salad.",
            "price": 24,
            "diet": "Vegano/Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 4
  },
  {
    "id": 27,
    "emoji": "🍝",
    "name": "Coco Bambu Uberlândia",
    "nameEn": "Coco Bambu Uberlândia",
    "desc": "Restaurante no Center Shopping com cardápio amplo e opções veganas/vegetarianas como massas e pratos com cogumelos.",
    "descEn": "Restaurant at Center Shopping with a broad menu and vegan/vegetarian options like pasta and mushroom dishes.",
    "diet": "opções veganas e vegetarianas",
    "dietEn": "vegan and vegetarian options",
    "rating": 4.9,
    "time": "35-55",
    "deliveryFee": 8,
    "minOrder": 45,
    "category": "bowl",
    "badge": "MENU INCLUSIVO",
    "badgeEn": "INCLUSIVE MENU",
    "color": "linear-gradient(135deg,#0284c7,#075985)",
    "lat": -18.9132,
    "lng": -48.2572,
    "hours": {
      "open": 11,
      "close": 23
    },
    "address": "Center Shopping Uberlândia – Tibery",
    "tags": [
      "massa",
      "cogumelos",
      "vegetariano"
    ],
    "ecoScore": 84,
    "bestFor": [
      "conforto"
    ],
    "reviews": 2620,
    "popular": "Espaguete com Vegetais",
    "sourceNote": "Portal Coco Bambu e matérias públicas citam pratos veganos/vegetarianos no cardápio, incluindo espaguete com vegetais.",
    "menu": [
      {
        "cat": "Pratos veganos/vegetarianos",
        "catEn": "Vegan/vegetarian dishes",
        "items": [
          {
            "emoji": "🍝",
            "name": "Espaguete com Vegetais",
            "nameEn": "Spaghetti with Vegetables",
            "desc": "Espaguete com brócolis e tomate cereja salteados.",
            "descEn": "Spaghetti with sautéed broccoli and cherry tomatoes.",
            "price": 59,
            "diet": "Vegano"
          },
          {
            "emoji": "🍄",
            "name": "Polenta com Cogumelos",
            "nameEn": "Polenta with Mushrooms",
            "desc": "Prato vegetal com polenta e cogumelos.",
            "descEn": "Plant-based dish with polenta and mushrooms.",
            "price": 65,
            "diet": "Vegano"
          },
          {
            "emoji": "🍆",
            "name": "Lasanha de Berinjela",
            "nameEn": "Eggplant Lasagna",
            "desc": "Lasanha vegetariana de berinjela.",
            "descEn": "Vegetarian eggplant lasagna.",
            "price": 85,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  },
  {
    "id": 28,
    "emoji": "🍄",
    "name": "Barolo Restaurante",
    "nameEn": "Barolo Restaurant",
    "desc": "Restaurante italiano em Uberlândia com opções vegetarianas, incluindo risotos de cogumelos e pratos de massa sem carne.",
    "descEn": "Italian restaurant in Uberlândia with vegetarian options including mushroom risottos and meat-free pasta dishes.",
    "diet": "opções vegetarianas",
    "dietEn": "vegetarian options",
    "rating": 4.3,
    "time": "35-55",
    "deliveryFee": 8,
    "minOrder": 45,
    "category": "pizza",
    "badge": "ITALIANO VEG",
    "badgeEn": "VEG ITALIAN",
    "color": "linear-gradient(135deg,#7c2d12,#dc2626)",
    "lat": -18.9135,
    "lng": -48.2578,
    "hours": {
      "open": 11,
      "close": 23
    },
    "address": "Center Shopping Uberlândia – Tibery",
    "tags": [
      "risoto",
      "massa",
      "vegetariano"
    ],
    "ecoScore": 85,
    "bestFor": [
      "conforto"
    ],
    "reviews": 1433,
    "popular": "Risoto de 3 Cogumelos",
    "sourceNote": "Fontes do Barolo citam opções vegetarianas, incluindo Risoto de 3 Cogumelos.",
    "menu": [
      {
        "cat": "Italiano vegetariano",
        "catEn": "Vegetarian Italian",
        "items": [
          {
            "emoji": "🍄",
            "name": "Risoto de 3 Cogumelos",
            "nameEn": "Three-Mushroom Risotto",
            "desc": "Risoto com shiitake, shimeji e funghi.",
            "descEn": "Risotto with shiitake, shimeji and funghi.",
            "price": 68,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🍝",
            "name": "Massa ao Molho de Tomate e Manjericão",
            "nameEn": "Pasta with Tomato and Basil Sauce",
            "desc": "Massa sem carne com molho de tomate e manjericão.",
            "descEn": "Meat-free pasta with tomato and basil sauce.",
            "price": 54,
            "diet": "Vegetariano"
          },
          {
            "emoji": "🥗",
            "name": "Buffet de Saladas Frescas",
            "nameEn": "Fresh Salad Buffet",
            "desc": "Saladas frescas do buffet da casa.",
            "descEn": "Fresh salads from the house buffet.",
            "price": 35,
            "diet": "Vegetariano"
          }
        ]
      }
    ],
    "vegItemCount": 3
  }
];

let filteredRestaurants = [...RESTAURANTS];
let currentCategory = 'all';

let smartFilters = { open:false, free:false, fav:false, cheap:false, eco:false, vegan:false, vegetarian:false };
let currentMood = 'rapido';
let recommendedRestaurantId = null;

function enrichRestaurantData() {
  RESTAURANTS.forEach((r, idx) => {
    r.tags = r.tags || [];
    r.ecoScore = r.ecoScore || 88;
    r.bestFor = r.bestFor || ['rapido'];
    r.reviews = r.reviews || 80;
    r.popular = r.popular || (r.menu?.[0]?.items?.[0]?.name) || 'Opção veg';
    r.popularEn = r.popularEn || (r.menu?.[0]?.items?.[0]?.nameEn) || 'Veg option';
    r.diet = r.diet || 'opções veg';
    r.dietEn = r.dietEn || 'veg options';
  });
}
enrichRestaurantData();

function updatePremiumStats() {
  const openEl = document.getElementById('premium-open-count');
  const freeEl = document.getElementById('premium-free-count');
  const favEl = document.getElementById('premium-fav-count');
  if(openEl) openEl.textContent = RESTAURANTS.filter(r=>isOpen(r)).length;
  if(freeEl) freeEl.textContent = RESTAURANTS.filter(r=>r.deliveryFee===0).length;
  if(favEl) favEl.textContent = getFavs().length;
  updateStaticCounts();
  updateImpactDashboard();
}

function toggleSmartFilter(btn, key) {
  smartFilters[key] = !smartFilters[key];
  btn.classList.toggle('active', smartFilters[key]);
  filterRestaurants();
}

function setSmartPreference(btn, mood) {
  document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  currentMood = mood;
  generateRecommendation();
}

function scoreRestaurantForMood(r, mood) {
  const fast = 60 - parseInt(r.time);
  const cheap = 80 - r.minOrder - r.deliveryFee;
  const rating = r.rating * 14;
  const eco = r.ecoScore || 90;
  let score = rating + fast + eco/4;
  if(mood === 'rapido') score += fast * 1.5 + (isOpen(r) ? 22 : -18);
  if(mood === 'barato') score += cheap * 1.7 + (r.deliveryFee === 0 ? 18 : 0);
  if(mood === 'saudavel') score += (r.tags||[]).some(t=>/salada|leve|self|tofu|marmita/.test(t)) ? 42 : 0;
  if(mood === 'conforto') score += (r.category==='pizza'||r.category==='dessert'||(r.tags||[]).includes('sobremesa')) ? 48 : 0;
  if((r.bestFor||[]).includes(mood)) score += 26;
  return score;
}

function generateRecommendation() {
  if(!RESTAURANTS.length) return;
  const ranked = [...RESTAURANTS].sort((a,b)=>scoreRestaurantForMood(b,currentMood)-scoreRestaurantForMood(a,currentMood));
  const r = ranked[0];
  recommendedRestaurantId = r.id;
  const name = LANG==='en'&&r.nameEn?r.nameEn:r.name;
  const desc = LANG==='en'&&r.descEn?r.descEn:r.desc;
  const popular = LANG==='en' ? (r.popularEn || popularItemName(r)) : (r.popular || popularItemName(r));
  const box = document.getElementById('recommendation-box');
  if(!box) return;
  box.innerHTML = `
    <div class="rec-icon" style="background:${r.color}">${r.emoji}</div>
    <div>
      <div class="rec-label">${t('rec.label.'+currentMood)}</div>
      <div class="rec-name">${name}</div>
      <p class="rec-desc">${desc}. ${t('rec.suggestion')}: <strong>${popular}</strong>. ⭐ ${r.rating} · ${r.time} min · EcoScore ${r.ecoScore}/100.</p>
      <div class="rec-tags">${(r.tags||[]).slice(0,4).map(tag=>`<span class="rec-tag">${tag}</span>`).join('')}</div>
    </div>`;
}

function openRecommendedMenu() {
  if(!recommendedRestaurantId) generateRecommendation();
  if(recommendedRestaurantId) openMenu(recommendedRestaurantId);
}

function updateImpactDashboard() {
  const session = getSession ? getSession() : null;
  const orders = session?.orders || 0;
  const spent = session?.spent || 0;
  const cartItems = cart ? cart.reduce((s,i)=>s+i.qty,0) : 0;
  const points = Math.round(spent * 1.2 + orders * 35 + cartItems * 8);
  const co2 = (orders * 1.8 + cartItems * .35).toFixed(1).replace('.', ',');
  const level = LANG==='en' ? (points >= 900 ? 'Forest Level 🌳' : points >= 350 ? 'Garden Level 🌿' : 'Sprout Level 🌱') : (points >= 900 ? 'Nível Floresta 🌳' : points >= 350 ? 'Nível Jardim 🌿' : 'Nível Broto 🌱');
  const clubPct = Math.min(100, Math.round((points % 350) / 350 * 100));
  const impactPct = Math.min(100, Math.round((orders * 14) + cartItems * 7));
  const co2El = document.getElementById('impact-co2');
  const pointsEl = document.getElementById('club-points');
  const levelEl = document.getElementById('club-level');
  const clubBar = document.getElementById('club-progress');
  const impactBar = document.getElementById('impact-progress');
  if(co2El) co2El.textContent = `${co2} kg`;
  if(pointsEl) pointsEl.textContent = `${points} pts`;
  if(levelEl) levelEl.textContent = level;
  if(clubBar) clubBar.style.width = `${Math.max(8, clubPct)}%`;
  if(impactBar) impactBar.style.width = `${Math.max(12, impactPct)}%`;
}

function openOrderTracking() {
  const code = 'Allve #' + Math.floor(1000 + Math.random()*9000);
  const el = document.getElementById('order-code');
  if(el) el.textContent = code;
  document.getElementById('order-overlay')?.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeOrder() { document.getElementById('order-overlay')?.classList.remove('open'); document.body.style.overflow=''; }
function closeOrderIfBg(e) { if(e.target===document.getElementById('order-overlay')) closeOrder(); }


let restaurantsMinimized = localStorage.getItem('allve_restaurants_minimized') === '1';

function syncRestaurantMinimizeUI() {
  const grid = document.getElementById('restaurant-grid');
  const note = document.getElementById('restaurant-collapsed-note');
  const btn = document.getElementById('restaurant-toggle-btn');
  if (!grid || !note || !btn) return;
  grid.classList.toggle('is-collapsed', restaurantsMinimized);
  note.classList.toggle('hidden', !restaurantsMinimized);
  btn.textContent = restaurantsMinimized ? t('restaurants.show') : t('restaurants.minimize');
}

function toggleRestaurantSection() {
  restaurantsMinimized = !restaurantsMinimized;
  localStorage.setItem('allve_restaurants_minimized', restaurantsMinimized ? '1' : '0');
  syncRestaurantMinimizeUI();
}

/* ══════════════════════════════════════
   RESTAURANT GRID
══════════════════════════════════════ */
function renderRestaurants() {
  const grid = document.getElementById('restaurant-grid');
  if (!grid) return;
  if (filteredRestaurants.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)"><div style="font-size:3rem;margin-bottom:1rem">🌿</div><p>${LANG==='en'?'No restaurants found.':'Nenhum restaurante encontrado.'}</p></div>`;
    return;
  }
  grid.innerHTML = filteredRestaurants.map(r => {
    const name = LANG==='en' && r.nameEn ? r.nameEn : r.name;
    const desc = LANG==='en' && r.descEn ? r.descEn : r.desc;
    const badge = LANG==='en' && r.badgeEn ? r.badgeEn : r.badge;
    const deliveryText = r.deliveryFee===0 ? (LANG==='en'?'Free delivery':'Entrega grátis') : `R$ ${r.deliveryFee},00`;
    return `<div class="restaurant-card" onclick="openMenu(${r.id})">
      <div class="rcard-img" style="background:${r.color}">
        <div class="rcard-img-overlay"></div>
        <span style="position:relative;z-index:1;font-size:3.5rem">${r.emoji}</span>
        <div class="rcard-badge-top ${r.badgeClass||''}">${badge}</div>
        <button class="rcard-fav ${isFav(r.id)?'active':''}" onclick="toggleFav(event,${r.id})" title="Favorito">
          <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
      </div>
      <div class="rcard-body">
        <h3 class="rcard-name">${name}</h3>
        <p class="rcard-desc">${desc}</p>
        <div class="rcard-address">📍 ${r.address || 'Uberlândia'}</div>
        <div class="rcard-status-row">
          <span class="rcard-status ${isOpen(r)?'open':'closed'}">${isOpen(r)?(LANG==='en'?'Open now':'Aberto agora'):(LANG==='en'?'Closed':'Fechado')}</span>
          <span class="rcard-status eco">EcoScore ${r.ecoScore || 90}/100</span>
          <span class="rcard-status diet">${dietLabel(r.diet, r.dietEn)}</span>
        </div>
        <div class="rcard-tags">${(r.tags||[]).slice(0,3).map(tag=>`<span class="rcard-tag">${tag}</span>`).join('')}</div>
        <div class="rcard-meta">
          <div class="rcard-rating"><svg viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>${r.rating}</div>
          <div class="rcard-info"><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>${r.time} min</div>
          <div class="rcard-info"><svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg>${deliveryText}</div>
        </div>
        <div class="rcard-footer">
          <div class="rcard-price">${LANG==='en'?'Min':'Mín'}: <strong>R$ ${r.minOrder},00</strong></div>
          <button class="btn-menu" onclick="openMenu(${r.id});event.stopPropagation()">${LANG==='en'?'Menu':'Cardápio'}</button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('results-count').textContent = t('results',{n: filteredRestaurants.length});
  syncRestaurantMinimizeUI();
}

function filterRestaurants() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const sort = document.getElementById('sort-select').value;
  let res = RESTAURANTS.filter(r => {
    const matchCat = currentCategory==='all' || r.category===currentCategory;
    const name = (LANG==='en'&&r.nameEn?r.nameEn:r.name).toLowerCase();
    const desc = (LANG==='en'&&r.descEn?r.descEn:r.desc).toLowerCase();
    const menuText = r.menu.flatMap(s=>s.items).map(i=>`${i.name} ${i.nameEn||''} ${i.desc||''} ${i.descEn||''}`).join(' ').toLowerCase();
    const tagText = (r.tags||[]).join(' ').toLowerCase();
    const address = (r.address||'').toLowerCase();
    const matchQ = !q || name.includes(q) || desc.includes(q) || menuText.includes(q) || tagText.includes(q) || address.includes(q);
    const matchOpen = !smartFilters.open || isOpen(r);
    const matchFree = !smartFilters.free || r.deliveryFee === 0;
    const matchFav = !smartFilters.fav || isFav(r.id);
    const matchCheap = !smartFilters.cheap || r.minOrder <= 22 || r.deliveryFee === 0;
    const allItems = r.menu.flatMap(s=>s.items);
    const hasVeganItem = allItems.some(i => /vegano|vegan/i.test(i.diet || '') || /vegano|vegan/i.test(i.name + ' ' + (i.desc||'')));
    const hasVegetarianItem = allItems.some(i => /vegetariano|vegetarian/i.test(i.diet || '') || /vegetariano|vegetarian/i.test(i.name + ' ' + (i.desc||'')));
    const matchEco = !smartFilters.eco || (r.ecoScore || 0) >= 93;
    const matchVegan = !smartFilters.vegan || hasVeganItem || /vegano|vegan/i.test(r.diet || '');
    const matchVegetarian = !smartFilters.vegetarian || hasVegetarianItem || /vegetariano|vegetarian/i.test(r.diet || '');
    return matchCat && matchQ && matchOpen && matchFree && matchFav && matchCheap && matchEco && matchVegan && matchVegetarian;
  });
  if(sort==='rating') res.sort((a,b)=>b.rating-a.rating);
  else if(sort==='time') res.sort((a,b)=>parseInt(a.time)-parseInt(b.time));
  else res.sort((a,b)=>(a.name>b.name?1:-1));
  filteredRestaurants = res;
  renderRestaurants();
}

function setCategory(el, cat) {
  document.querySelectorAll('#filter-chips .chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  currentCategory = cat;
  filterRestaurants();
}

/* ══════════════════════════════════════
   FAVORITES
══════════════════════════════════════ */
function getFavs() { return JSON.parse(localStorage.getItem('allve_favs')||'[]'); }
function isFav(id) { return getFavs().includes(id); }
function toggleFav(e, id) {
  e.stopPropagation();
  const favs = getFavs();
  const idx = favs.indexOf(id);
  if(idx===-1) favs.push(id); else favs.splice(idx,1);
  localStorage.setItem('allve_favs', JSON.stringify(favs));
  renderRestaurants();
  updatePremiumStats();
}

/* ══════════════════════════════════════
   LEAFLET MAP
══════════════════════════════════════ */
let deliveryMap = null;
let mapMarkers = {};
let userMarker = null;
let radiusCircle = null;
let userLocation = null;
let selectedMarkerId = null;
let mapFilters = { openOnly: true, freeDelivery: false, category: 'all', search: '' };

function isOpen(r) {
  const now = new Date();
  const h = now.getHours();
  return h >= r.hours.open && h < r.hours.close;
}

function initMap() {
  if (deliveryMap) return;

  const uberlandiaBounds = L.latLngBounds(
    [-18.9850, -48.3600],
    [-18.8500, -48.1850]
  );

  deliveryMap = L.map('delivery-map', {
    center: [-18.9186, -48.2712],
    zoom: 13,
    minZoom: 12,
    maxZoom: 19,
    maxBounds: uberlandiaBounds.pad(0.25),
    maxBoundsViscosity: 0.7,
    zoomControl: false,
  });

  const lightLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap, © CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  });

  const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  });

  lightLayer.addTo(deliveryMap);
  L.control.layers({ 'Mapa claro': lightLayer, 'Ruas detalhadas': streetLayer }, null, { position: 'topleft' }).addTo(deliveryMap);
  L.control.zoom({ position: 'bottomright' }).addTo(deliveryMap);
  L.control.scale({ position: 'bottomleft', metric: true, imperial: false }).addTo(deliveryMap);

  RESTAURANTS.forEach(r => addMarker(r));
  updateMapStats();
  fitMapToVisibleRestaurants(false);

  setTimeout(() => deliveryMap.invalidateSize(), 250);
}

function makeMarkerIcon(r, selected) {
  const open = isOpen(r);
  const cls = selected ? 'selected' : (open ? 'open' : '');
  const label = (LANG==='en'&&r.nameEn?r.nameEn:r.name).split(' ')[0];
  const html = `<div class="map-marker-pin">
    <div class="map-marker-bubble ${cls}">
      <span>${r.emoji}</span>
      <span style="font-size:.72rem">${label}</span>
    </div>
  </div>`;
  return L.divIcon({ html, className: '', iconSize: [90, 44], iconAnchor: [45, 44], popupAnchor: [0, -46] });
}

function addMarker(r) {
  const open = isOpen(r);
  const marker = L.marker([r.lat, r.lng], { icon: makeMarkerIcon(r, false) });

  marker.on('click', () => selectMarker(r.id));
  marker.bindPopup(buildPopup(r), { maxWidth: 280, minWidth: 240, className: 'allve-popup' });

  marker.addTo(deliveryMap);
  mapMarkers[r.id] = marker;
}

function buildPopup(r) {
  const open = isOpen(r);
  const name = LANG==='en'&&r.nameEn?r.nameEn:r.name;
  const desc = LANG==='en'&&r.descEn?r.descEn:r.desc;
  const deliveryText = r.deliveryFee===0 ? t('popup.free') : `R$ ${r.deliveryFee},00`;
  const statusClass = open ? 'map-status-open' : 'map-status-closed';
  const statusText = open ? t('popup.open') : t('popup.closed');
  return `<div class="map-popup">
    <div class="map-popup-header">
      <div class="map-popup-emoji" style="background:${r.color}">${r.emoji}</div>
      <div>
        <div class="map-popup-name">${name}</div>
        <div class="map-popup-desc">${r.address}</div>
      </div>
    </div>
    <div class="map-popup-pills">
      <span class="${statusClass} map-popup-pill">${statusText}</span>
      <span class="map-popup-pill pill-rating">⭐ ${r.rating}</span>
      <span class="map-popup-pill pill-time">🕐 ${r.time} min</span>
      <span class="map-popup-pill pill-delivery">🛵 ${deliveryText}</span>
      <span class="map-popup-pill pill-min">${t('popup.min')}: R$ ${r.minOrder}</span>
      <span class="map-popup-pill pill-delivery">✅ ${dietLabel(r.diet, r.dietEn)}</span>
    </div>
    <button class="map-popup-btn" onclick="openMenu(${r.id})">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8.1 13.34l2.83-2.83L3.91 3.5A1.998 1.998 0 0 0 1 5.5a2 2 0 0 0 .59 1.41zm11.58-9.01A2 2 0 0 0 18 4c-.74 0-1.39.4-1.74.99L9 12.16l2.83 2.83 7.91-7.89a2.003 2.003 0 0 0-.06-2.77zM3.5 15.5a3 3 0 0 0-2.87 2.14L0 21l3.36-.63A2.994 2.994 0 0 0 3.5 15.5z"/></svg>
      ${t('popup.viewMenu')}
    </button>
  </div>`;
}

function selectMarker(id) {
  // Deselect previous
  if (selectedMarkerId && mapMarkers[selectedMarkerId]) {
    const prev = RESTAURANTS.find(r=>r.id===selectedMarkerId);
    if(prev) mapMarkers[selectedMarkerId].setIcon(makeMarkerIcon(prev, false));
  }
  selectedMarkerId = id;
  const r = RESTAURANTS.find(r=>r.id===id);
  if(!r || !mapMarkers[id]) return;
  mapMarkers[id].setIcon(makeMarkerIcon(r, true));
  deliveryMap.flyTo([r.lat, r.lng], 16, { duration: 0.8 });
  mapMarkers[id].openPopup();

  // Highlight sidebar item
  document.querySelectorAll('.map-list-item').forEach(el => {
    el.classList.toggle('selected', parseInt(el.dataset.id) === id);
    if(parseInt(el.dataset.id) === id) el.scrollIntoView({ behavior:'smooth', block:'nearest' });
  });
  updateMapMarkers();
}


function getMapFilteredRestaurants() {
  const q = mapFilters.search.toLowerCase().trim();
  return RESTAURANTS.filter(r => {
    const name = (LANG==='en'&&r.nameEn?r.nameEn:r.name).toLowerCase();
    const address = (r.address || '').toLowerCase();
    const open = isOpen(r);
    const matchOpen = !mapFilters.openOnly || open;
    const matchFree = !mapFilters.freeDelivery || r.deliveryFee === 0;
    const matchCat = mapFilters.category === 'all' || r.category === mapFilters.category;
    const diet = ((LANG==='en'&&r.dietEn?r.dietEn:r.diet)||'').toLowerCase();
    const menuText = r.menu.flatMap(s=>s.items).map(i=>`${i.name} ${i.desc||''} ${i.diet||''}`).join(' ').toLowerCase();
    const matchQ = !q || name.includes(q) || address.includes(q) || diet.includes(q) || menuText.includes(q);
    return matchOpen && matchFree && matchCat && matchQ;
  });
}

function getDistanceKm(a, b) {
  const R = 6371;
  const toRad = v => v * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x = Math.sin(dLat/2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function fitMapToVisibleRestaurants(animate = true) {
  if (!deliveryMap) return;
  const visible = getMapFilteredRestaurants().filter(r => mapMarkers[r.id]);
  if (visible.length === 0) return;
  const points = visible.map(r => [r.lat, r.lng]);
  if (userLocation) points.push([userLocation.lat, userLocation.lng]);
  const bounds = L.latLngBounds(points);
  deliveryMap.fitBounds(bounds.pad(0.25), {
    maxZoom: visible.length === 1 ? 16 : 14,
    animate,
    duration: 0.6,
    padding: [32, 32]
  });
}

function updateMapMarkers() {
  const visibleRests = getMapFilteredRestaurants();
  const visibleIds = visibleRests.map(r => r.id);

  RESTAURANTS.forEach(r => {
    const visible = visibleIds.includes(r.id);
    if(!mapMarkers[r.id]) return;
    if(visible) {
      mapMarkers[r.id].addTo(deliveryMap);
      mapMarkers[r.id].setIcon(makeMarkerIcon(r, r.id === selectedMarkerId));
    } else {
      if(deliveryMap.hasLayer(mapMarkers[r.id])) deliveryMap.removeLayer(mapMarkers[r.id]);
    }
  });

  const openCount = visibleRests.filter(r=>isOpen(r)).length;
  const freeCount = visibleRests.filter(r=>r.deliveryFee===0).length;
  document.getElementById('map-stat-visible').textContent = visibleRests.length;
  document.getElementById('map-stat-open').textContent = openCount;
  document.getElementById('map-stat-free').textContent = freeCount;
}

function updateMapStats() { updateMapMarkers(); }

/* MAP LIST */
function renderMapList() {
  const list = document.getElementById('map-list');
  let results = getMapFilteredRestaurants();

  if (userLocation) {
    results = results.map(r => ({ ...r, distanceKm: getDistanceKm(userLocation, { lat: r.lat, lng: r.lng }) }))
      .sort((a, b) => a.distanceKm - b.distanceKm);
  }

  if(results.length === 0) {
    list.innerHTML = `<div class="map-empty-state"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><p>${t('map.noResults')}</p></div>`;
    return;
  }

  list.innerHTML = results.map(r => {
    const name = LANG==='en'&&r.nameEn?r.nameEn:r.name;
    const open = isOpen(r);
    const deliveryText = r.deliveryFee===0 ? (LANG==='en'?'Free':'Grátis') : `R$ ${r.deliveryFee}`;
    const distanceText = userLocation && typeof r.distanceKm === 'number'
      ? `<span class="map-distance-pill">📍 ${r.distanceKm.toFixed(1)} km</span>`
      : '';
    return `<div class="map-list-item ${r.id===selectedMarkerId?'selected':''}" data-id="${r.id}" onclick="selectMarker(${r.id})">
      <div class="map-list-emoji" style="background:${r.color}">${r.emoji}</div>
      <div class="map-list-info">
        <div class="map-list-name">${name}</div>
        <div class="map-list-address">${r.address || 'Uberlândia'}</div>
        <div class="map-list-meta">🕐 ${r.time} min · 🛵 ${deliveryText} ${distanceText}</div>
        <div class="map-list-badges">
          <span class="${open?'map-status-open':'map-status-closed'}">${open?(LANG==='en'?'Open':'Aberto'):(LANG==='en'?'Closed':'Fechado')}</span>
          ${r.deliveryFee===0?`<span class="map-delivery-free">${LANG==='en'?'Free delivery':'Grátis'}</span>`:''}
          <span class="map-delivery-free">${dietLabel(r.diet, r.dietEn)}</span>
        </div>
      </div>
      <div class="map-list-rating"><svg viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>${r.rating}</div>
    </div>`;
  }).join('');
}

function filterMapList() {
  mapFilters.search = document.getElementById('map-search').value;
  renderMapList();
  updateMapMarkers();
  fitMapToVisibleRestaurants();
  // Update popup if open
  if(selectedMarkerId && mapMarkers[selectedMarkerId]) {
    const r = RESTAURANTS.find(r=>r.id===selectedMarkerId);
    if(r) mapMarkers[selectedMarkerId].setPopupContent(buildPopup(r));
  }
}

function setMapCategory(el, cat) {
  document.querySelectorAll('.map-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  mapFilters.category = cat;
  renderMapList();
  updateMapMarkers();
  fitMapToVisibleRestaurants();
}

function toggleOpenOnly(btn) {
  mapFilters.openOnly = !mapFilters.openOnly;
  btn.classList.toggle('active', mapFilters.openOnly);
  renderMapList();
  updateMapMarkers();
  fitMapToVisibleRestaurants();
}

function toggleFreeDelivery(btn) {
  mapFilters.freeDelivery = !mapFilters.freeDelivery;
  btn.classList.toggle('active', mapFilters.freeDelivery);
  renderMapList();
  updateMapMarkers();
  fitMapToVisibleRestaurants();
}

function resetMap() {
  mapFilters = { openOnly: false, freeDelivery: false, category: 'all', search: '' };
  document.getElementById('map-search').value = '';
  document.querySelectorAll('.map-chip').forEach((c,i)=>c.classList.toggle('active',i===0));
  document.getElementById('btn-open-only').classList.remove('active');
  document.getElementById('btn-free-delivery').classList.remove('active');
  if(selectedMarkerId) {
    const prev = RESTAURANTS.find(r=>r.id===selectedMarkerId);
    if(prev && mapMarkers[selectedMarkerId]) mapMarkers[selectedMarkerId].setIcon(makeMarkerIcon(prev, false));
  }
  selectedMarkerId = null;
  if(userMarker) { deliveryMap.removeLayer(userMarker); userMarker=null; }
  if(radiusCircle) { deliveryMap.removeLayer(radiusCircle); radiusCircle=null; }
  userLocation = null;
  document.getElementById('btn-locate').classList.remove('active');
  deliveryMap.flyTo([-18.9186, -48.2712], 14, { duration: 0.8 });
  renderMapList();
  updateMapMarkers();
}

function locateUser() {
  const btn = document.getElementById('btn-locate');
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg> ${t('map.locating')}`;
  if(!navigator.geolocation) {
    showToast(t('map.locateErr'), 'err');
    btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg> ${t('map.locate')}`;
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      userLocation = { lat, lng };
      if(userMarker) deliveryMap.removeLayer(userMarker);
      if(radiusCircle) deliveryMap.removeLayer(radiusCircle);
      const userIcon = L.divIcon({
        html: '<div class="user-location-pulse"></div>',
        className: '', iconSize: [20,20], iconAnchor: [10,10]
      });
      userMarker = L.marker([lat,lng], {icon:userIcon}).addTo(deliveryMap);
      radiusCircle = L.circle([lat,lng], {
        radius: 3000, color: '#16a34a', fillColor: '#16a34a',
        fillOpacity: 0.05, weight: 1.5, dashArray: '6,4'
      }).addTo(deliveryMap);
      renderMapList();
      updateMapMarkers();
      fitMapToVisibleRestaurants();
      btn.classList.add('active');
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg> ${t('map.locate')}`;
      showToast(t('map.locateSuccess'), 'ok');
    },
    () => {
      showToast(t('map.locateErr'), 'err');
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg> ${t('map.locate')}`;
    }
  );
}

// Init map when section scrolls into view
const mapObserver = new IntersectionObserver(entries => {
  if(entries[0].isIntersecting) { initMap(); renderMapList(); mapObserver.disconnect(); }
}, { threshold: 0.1 });
mapObserver.observe(document.getElementById('map'));

/* ══════════════════════════════════════
   MENU MODAL
══════════════════════════════════════ */
let currentRestaurant = null;
function openMenu(id) {
  const r = RESTAURANTS.find(r=>r.id===id);
  if(!r) return;
  currentRestaurant = r;
  const name = LANG==='en'&&r.nameEn?r.nameEn:r.name;
  const desc = LANG==='en'&&r.descEn?r.descEn:r.desc;
  const deliveryText = r.deliveryFee===0?(LANG==='en'?'Free delivery':'Entrega grátis'):`R$ ${r.deliveryFee},00`;
  const open = isOpen(r);
  document.getElementById('menu-title').textContent = name;
  const body = document.getElementById('menu-body');
  body.innerHTML = `
    <div class="menu-restaurant-header">
      <div class="menu-icon" style="background:${r.color}">${r.emoji}</div>
      <div>
        <div class="menu-restaurant-name">${name}</div>
        <div class="menu-restaurant-meta">⭐ ${r.rating} &nbsp;·&nbsp; 🕐 ${r.time} min &nbsp;·&nbsp; ${deliveryText}</div>
        <div class="menu-restaurant-meta" style="color:${open?'var(--green)':'var(--error)'};font-weight:600;margin-top:.2rem">${open?(LANG==='en'?'● Open now':'● Aberto agora'):(LANG==='en'?'● Closed':'● Fechado')}</div>
      </div>
    </div>
    <div class="menu-boost">
      <span class="menu-tag">🌱 EcoScore ${r.ecoScore || 90}/100</span>
      <span class="menu-tag">✅ ${dietLabel(r.diet, r.dietEn)}</span>
      <span class="menu-tag">🔥 ${LANG==='en'?'Most ordered':'Mais pedido'}: ${LANG==='en' ? (r.popularEn || popularItemName(r)) : (r.popular || popularItemName(r))}</span>
      <span class="menu-tag">📍 ${r.address || 'Uberlândia'}</span>
    </div>
    ${r.menu.map(section=>{
      const catName = LANG==='en'&&section.catEn?section.catEn:section.cat;
      return `<div class="menu-category">${catName}</div>
      ${section.items.map(item=>{
        const iName = LANG==='en'&&item.nameEn?item.nameEn:item.name;
        const iDesc = LANG==='en'&&item.descEn?item.descEn:item.desc;
        return `<div class="menu-item" onclick="addToCart('${iName.replace(/'/g,"\\'")}',${item.price})">
          <div class="menu-item-emoji">${item.emoji}</div>
          <div class="menu-item-info"><strong>${iName}</strong><p>${iDesc}</p>${item.diet?`<span class="item-diet">${dietLabel(item.diet, item.dietEn)}</span>`:''}</div>
          <div class="menu-item-right">
            <div class="menu-item-price">R$ ${item.price},00</div>
            <button class="menu-add" onclick="addToCart('${iName.replace(/'/g,"\\'")}',${item.price});event.stopPropagation()">${t('menu.addBtn')}</button>
          </div>
        </div>`;
      }).join('')}`;
    }).join('')}`;
  document.getElementById('menu-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeMenu() { document.getElementById('menu-overlay').classList.remove('open'); document.body.style.overflow=''; }
function closeMenuIfBg(e) { if(e.target===document.getElementById('menu-overlay')) closeMenu(); }

/* ══════════════════════════════════════
   CART
══════════════════════════════════════ */
let cart = JSON.parse(localStorage.getItem('allve_cart')||'[]');
function saveCart() { localStorage.setItem('allve_cart',JSON.stringify(cart)); }
function addToCart(name, price) {
  const session = getSession();
  if(!session) { showToast(t('toast.mustLogin'),'warn'); closeMenu(); openAuth('login'); return; }
  const source = currentRestaurant || RESTAURANTS.find(r=>r.menu.some(s=>s.items.some(i=>i.name===name||i.nameEn===name)));
  const item = cart.find(i=>i.name===name && i.restaurantId===(source?.id||null));
  if(item) item.qty++; else cart.push({name, price, qty:1, restaurantId: source?.id || null, restaurantName: source?.name || 'Allve', deliveryFee: source?.deliveryFee ?? 5, ecoScore: source?.ecoScore || 90});
  saveCart(); updateCartUI(); updateImpactDashboard();
  showToast(t('toast.addedToCart',{item:name}),'ok');
}
function removeFromCart(name) { cart=cart.filter(i=>i.name!==name); saveCart(); updateCartUI(); updateImpactDashboard(); }
function changeQty(name, delta) {
  const item=cart.find(i=>i.name===name); if(!item) return;
  item.qty+=delta; if(item.qty<=0) return removeFromCart(name);
  saveCart(); updateCartUI(); updateImpactDashboard();
}
function updateCartUI() {
  const badge=document.getElementById('cart-badge');
  const total=cart.reduce((s,i)=>s+i.qty,0);
  badge.textContent=total; badge.classList.toggle('show',total>0);
  renderCartItems();
}
function renderCartItems() {
  const empty=document.getElementById('cart-empty'); const itemsEl=document.getElementById('cart-items'); const footer=document.getElementById('cart-footer');
  if(cart.length===0){empty.style.display='block';itemsEl.innerHTML='';footer.style.display='none';return;}
  empty.style.display='none'; footer.style.display='block';
  const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0); const delivery=cart.length?Math.min(...cart.map(i=>Number(i.deliveryFee ?? 5))):0;
  document.getElementById('cart-subtotal').textContent=`R$ ${subtotal.toFixed(2).replace('.',',')}`;
  document.getElementById('cart-delivery').textContent=`R$ ${delivery.toFixed(2).replace('.',',')}`;
  document.getElementById('cart-total').textContent=`R$ ${(subtotal+delivery).toFixed(2).replace('.',',')}`;
  itemsEl.innerHTML=cart.map(i=>`<div class="cart-item">
    <div class="cart-item-emoji">${getEmojiForItem(i.name)}</div>
    <div class="cart-item-info"><strong>${i.name}</strong><span>${i.restaurantName || 'Allve'} · R$ ${i.price},00</span></div>
    <div class="cart-qty"><button class="qty-btn" onclick="changeQty('${i.name.replace(/'/g,"\\'")}', -1)">−</button><span class="qty-num">${i.qty}</span><button class="qty-btn" onclick="changeQty('${i.name.replace(/'/g,"\\'")}', 1)">+</button></div>
    <div class="cart-item-price">R$ ${(i.price*i.qty).toFixed(2).replace('.',',')}</div>
  </div>`).join('');
}
function getEmojiForItem(name) { for(const r of RESTAURANTS) for(const s of r.menu) for(const item of s.items) if(item.name===name||item.nameEn===name) return item.emoji; return '🌿'; }
function openCart() { renderCartItems(); document.getElementById('cart-overlay').classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart() { document.getElementById('cart-overlay').classList.remove('open'); document.body.style.overflow=''; }
function closeCartIfBg(e) { if(e.target===document.getElementById('cart-overlay')) closeCart(); }
function checkout() {
  const session=getSession(); if(!session){showToast(t('toast.mustLogin'),'warn');closeCart();openAuth('login');return;}
  const users=getUsers(); const u=users.find(u=>u.email===session.email);
  if(u){u.orders=(u.orders||0)+1;u.spent=(u.spent||0)+cart.reduce((s,i)=>s+i.price*i.qty,0);u.points=(u.points||0)+Math.round(cart.reduce((s,i)=>s+i.price*i.qty,0)*1.2)+30;saveUsers(users);setSession(u);}
  cart=[];saveCart();updateCartUI();updateImpactDashboard();closeCart();showToast(t('toast.orderPlaced'),'ok');renderLoggedInNav();openOrderTracking();
}

/* ══════════════════════════════════════
   AUTH
══════════════════════════════════════ */
const USERS_KEY='allve_users',SESSION_KEY='allve_session';
const getUsers=()=>JSON.parse(localStorage.getItem(USERS_KEY)||'[]');
const saveUsers=u=>localStorage.setItem(USERS_KEY,JSON.stringify(u));
const getSession=()=>JSON.parse(localStorage.getItem(SESSION_KEY)||'null');
const setSession=u=>localStorage.setItem(SESSION_KEY,JSON.stringify(u));
const clearSession=()=>localStorage.removeItem(SESSION_KEY);
function openAuth(tab='login') {
  const session=getSession();
  document.getElementById('auth-tabs').style.display=session?'none':'block';
  document.getElementById('auth-logged').classList.toggle('hidden',!session);
  if(session) renderLoggedInModal(session); else switchAuth(tab);
  document.getElementById('auth-overlay').classList.add('open'); document.body.style.overflow='hidden';
}
function closeAuth() { document.getElementById('auth-overlay').classList.remove('open'); document.body.style.overflow=''; }
function closeAuthIfBg(e) { if(e.target===document.getElementById('auth-overlay')) closeAuth(); }
function getActiveAuthTab() {
  const reg = document.getElementById('tab-register');
  return reg && reg.classList.contains('active') ? 'register' : 'login';
}
function switchAuth(tab) {
  ['login','register'].forEach(authTab=>{
    document.getElementById(`tab-${authTab}`).classList.toggle('active',authTab===tab);
    document.getElementById(`fp-${authTab}`).classList.toggle('active',authTab===tab);
  });
  const title=document.getElementById('auth-title');
  if(title) title.textContent = tab==='register' ? t('auth.signUp') : t('auth.welcome');
}
function refreshAuthTexts() {
  const session=getSession();
  if(session && document.getElementById('auth-tabs')?.style.display==='none') {
    renderLoggedInModal(session);
  } else {
    switchAuth(getActiveAuthTab());
  }
  const placeholders = {
    'l-email':'form.emailPlaceholder','r-email':'form.emailPlaceholder','r-name':'form.firstNamePlaceholder','r-last':'form.lastNamePlaceholder',
    'r-phone':'form.phonePlaceholder','r-pass':'form.passwordPlaceholder','r-pass2':'form.repeatPasswordPlaceholder'
  };
  Object.entries(placeholders).forEach(([id,key])=>{ const el=document.getElementById(id); if(el) el.placeholder=t(key); });
  const errMap = {
    'l-email-err':'err.email','l-pass-err':'err.credentials','r-name-err':'err.required','r-last-err':'err.required','r-email-err':'err.email',
    'r-phone-err':'err.phone','r-cpf-err':'err.cpf','r-pass-err':'err.passMin','r-pass2-err':'err.passMatch'
  };
  Object.entries(errMap).forEach(([id,key])=>{ const el=document.getElementById(id); if(el && !el.classList.contains('show')) el.textContent=t(key); });
}
function clearErr(...ids) { ids.forEach(id=>{ const e=document.getElementById(`${id}-err`); if(e)e.classList.remove('show'); const f=document.getElementById(id); if(f)f.classList.remove('invalid'); }); refreshAuthTexts(); }
function showErr(id,msg) { const e=document.getElementById(`${id}-err`); if(e){if(msg)e.textContent=msg;e.classList.add('show');} const f=document.getElementById(id); if(f){f.classList.add('invalid');f.focus();} }
function handleLogin() {
  const email=document.getElementById('l-email').value.trim(); const pass=document.getElementById('l-pass').value;
  clearErr('l-email','l-pass'); let ok=true;
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showErr('l-email');ok=false;}
  if(!pass){showErr('l-pass',t('form.enterPassword'));ok=false;}
  if(!ok) return;
  const user=getUsers().find(u=>u.email===email&&u.password===pass);
  if(!user){showErr('l-pass');return;}
  setSession(user);renderLoggedInNav();closeAuth();showToast(t('toast.loggedIn',{name:user.name.split(' ')[0]}),'ok');
}
function handleRegister() {
  const name=document.getElementById('r-name').value.trim(); const last=document.getElementById('r-last').value.trim();
  const email=document.getElementById('r-email').value.trim(); const phone=document.getElementById('r-phone').value.trim();
  const pass=document.getElementById('r-pass').value; const pass2=document.getElementById('r-pass2').value;
  clearErr('r-name','r-last','r-email','r-phone','r-cpf','r-pass','r-pass2'); let ok=true;
  if(!name){showErr('r-name');ok=false;} if(!last){showErr('r-last');ok=false;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showErr('r-email');ok=false;}
  if(phone.replace(/\D/g,'').length<10){showErr('r-phone');ok=false;}
  if(!validateCPF(document.getElementById('r-cpf').value)){showErr('r-cpf');ok=false;}
  if(pass.length<6){showErr('r-pass');ok=false;} if(pass!==pass2){showErr('r-pass2');ok=false;}
  if(!ok) return;
  const users=getUsers();
  if(users.find(u=>u.email===email)){showErr('r-email',t('err.emailExists'));return;}
  const nu={name:`${name} ${last}`,email,phone,password:pass,orders:0,spent:0};
  users.push(nu);saveUsers(users);setSession(nu);renderLoggedInNav();closeAuth();showToast(t('toast.registered',{name}),'ok');
}
function logout() { clearSession();cart=[];saveCart();updateCartUI();renderLoggedInNav();closeAuth();showToast(t('toast.loggedOut'),'ok'); }
function renderLoggedInNav() {
  const session=getSession(); const navArea=document.getElementById('nav-user-area');
  if(session) { navArea.innerHTML=`<button class="btn btn-ghost" onclick="openAuth()" style="gap:.5rem"><span style="background:var(--green);color:#fff;width:26px;height:26px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem">${session.name[0].toUpperCase()}</span>${session.name.split(' ')[0]}</button>`; }
  else { navArea.innerHTML=`<button class="btn btn-outline" onclick="openAuth('login')" data-i18n="nav.login">${t('nav.login')}</button><button class="btn btn-primary" onclick="openAuth('register')" data-i18n="nav.signup">${t('nav.signup')}</button>`; }
}
function renderLoggedInModal(session) {
  const title=document.getElementById('auth-title'); if(title) title.textContent=t('auth.welcomeBack');
  document.getElementById('auth-avatar').textContent=session.name[0].toUpperCase();
  document.getElementById('auth-name').textContent=session.name;
  document.getElementById('auth-email').textContent=session.email;
  document.getElementById('stat-orders').textContent=session.orders||0;
  document.getElementById('stat-trees').textContent='🌱 '+(session.orders||0);
}

/* SETTINGS */
function openSettings() {
  const session=getSession();
  if(session){document.getElementById('s-name').value=session.name.split(' ')[0]||'';document.getElementById('s-last').value=session.name.split(' ').slice(1).join(' ')||'';document.getElementById('s-email').value=session.email||'';document.getElementById('s-phone').value=session.phone||'';}
  document.getElementById('settings-overlay').classList.add('open');document.body.style.overflow='hidden';
}
function closeSettings() { document.getElementById('settings-overlay').classList.remove('open');document.body.style.overflow=''; }
function closeSettingsIfBg(e) { if(e.target===document.getElementById('settings-overlay')) closeSettings(); }
function setSettingsTab(tab, btn) { document.querySelectorAll('.settings-tab').forEach(t=>t.classList.remove('active')); btn.classList.add('active'); document.querySelectorAll('.settings-panel').forEach(p=>p.classList.remove('active')); document.getElementById(`sp-${tab}`).classList.add('active'); }
function saveProfile() {
  const session=getSession(); if(!session){showToast(t('toast.mustLogin'),'warn');return;}
  const firstName=document.getElementById('s-name').value.trim(); const lastName=document.getElementById('s-last').value.trim(); const email=document.getElementById('s-email').value.trim(); const phone=document.getElementById('s-phone').value.trim();
  if(!firstName||!email){showToast(LANG==='en'?'Fill required fields.':'Preencha os campos obrigatórios.','warn');return;}
  const users=getUsers(); const u=users.find(u=>u.email===session.email);
  if(u){u.name=`${firstName} ${lastName}`.trim();u.email=email;u.phone=phone;saveUsers(users);setSession(u);renderLoggedInNav();}
  showToast(t('toast.saved'),'ok');
}
function setThemeColor(green, forest, swatch) {
  document.documentElement.style.setProperty('--green',green);document.documentElement.style.setProperty('--forest',forest);document.documentElement.style.setProperty('--green-light',green);
  document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active')); swatch.classList.add('active');
  // Refresh map markers with new color
  if(deliveryMap) { RESTAURANTS.forEach(r=>{ if(mapMarkers[r.id]) mapMarkers[r.id].setIcon(makeMarkerIcon(r,r.id===selectedMarkerId)); }); }
}

/* FORM */
const EYE_SHOW=`<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
const EYE_HIDE=`<svg viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>`;
function toggleEye(id, btn) { const inp=document.getElementById(id); const isPass=inp.type==='password'; inp.type=isPass?'text':'password'; btn.innerHTML=isPass?EYE_HIDE:EYE_SHOW; }

document.addEventListener('DOMContentLoaded',()=>{
  const phoneInputs=[document.getElementById('r-phone'),document.getElementById('s-phone')].filter(Boolean);
  phoneInputs.forEach(el=>{
    el.addEventListener('input',function(){
      let v=this.value.replace(/\D/g,'').slice(0,11);
      if(v.length>6) v=`(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
      else if(v.length>2) v=`(${v.slice(0,2)}) ${v.slice(2)}`;
      else if(v.length>0) v=`(${v}`;
      this.value=v;
    });
  });
});

function maskCPF(v){v=v.replace(/\D/g,'').slice(0,11);if(v.length>9)v=`${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6,9)}-${v.slice(9)}`;else if(v.length>6)v=`${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6)}`;else if(v.length>3)v=`${v.slice(0,3)}.${v.slice(3)}`;return v;}
function validateCPF(cpf){cpf=cpf.replace(/\D/g,'');if(cpf.length!==11||/^(\d)\1{10}$/.test(cpf))return false;let s=0;for(let i=0;i<9;i++)s+=parseInt(cpf[i])*(10-i);let r=(s*10)%11;if(r>=10)r=0;if(r!==parseInt(cpf[9]))return false;s=0;for(let i=0;i<10;i++)s+=parseInt(cpf[i])*(11-i);r=(s*10)%11;if(r>=10)r=0;return r===parseInt(cpf[10]);}
const cpfInp=document.getElementById('r-cpf'); const cpfSt=document.getElementById('cpf-st');
if(cpfInp){cpfInp.addEventListener('input',function(){this.value=maskCPF(this.value);const d=this.value.replace(/\D/g,'');cpfSt.textContent='';cpfSt.className='cpf-status';if(d.length===11){const ok=validateCPF(d);cpfSt.textContent=ok?'✓':'✗';cpfSt.className='cpf-status '+(ok?'ok':'bad');}});}

/* TOAST */
function showToast(msg, type='ok') {
  const el=document.getElementById('toast-el');
  const icons={ok:`<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,err:`<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`,warn:`<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`};
  const bg=type==='err'?'var(--error)':type==='warn'?'var(--warn)':'var(--forest)';
  el.style.cssText=`position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(60px);background:${bg};color:#fff;padding:.85rem 1.8rem;border-radius:40px;font-size:.88rem;font-weight:500;box-shadow:0 8px 28px rgba(0,0,0,.2);display:flex;align-items:center;gap:.6rem;transition:transform .35s cubic-bezier(.34,1.56,.64,1),opacity .3s;opacity:0;z-index:9999;max-width:90vw;text-align:center;`;
  el.innerHTML=`${icons[type]||icons.ok} ${msg}`;
  requestAnimationFrame(()=>{el.style.transform='translateX(-50%) translateY(0)';el.style.opacity='1';});
  clearTimeout(el._t);el._t=setTimeout(()=>{el.style.transform='translateX(-50%) translateY(60px)';el.style.opacity='0';},3500);
}

/* SCROLL */
window.addEventListener('scroll',()=>{
  document.getElementById('site-header').classList.toggle('scrolled',scrollY>40);
  const sections=['home','restaurants','discover','impact','how','map'];
  let current='home';
  sections.forEach(id=>{const s=document.getElementById(id);if(s&&scrollY>=s.offsetTop-100)current=id;});
  document.querySelectorAll('.nav-links a').forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+current);});
});

function scrollToSection(id) { const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); }

/* INIT */
(function init() {
  setLang(LANG);
  renderRestaurants();
  renderLoggedInNav();
  updateCartUI();
  generateRecommendation();
  updatePremiumStats();
})();

/* =========================================================
   CAMADA EXTRA / MELHORIAS DO ALLVE
   ========================================================= */

/* ══════════════════════════════════════
   ALLVE COMPLETE UPGRADE LAYER
══════════════════════════════════════ */
(function(){
  var dishFilter = 'all';
  var discoverPrefs = { diet:'all', budget:'any', dish:'all' };

  Object.assign(STRINGS.pt, {
    'hero.badge':'Guia Vegano & Vegetariano • Uberlândia',
    'hero.title':'Encontre opções <em>veganas e vegetarianas</em><br>sem perder tempo.',
    'hero.subtitle':'Um guia de Uberlândia com restaurantes, docerias e deliveries que têm 2+ opções veganas/vegetarianas, mapa, pratos separados e aviso de verificação.',
    'hero.cta1':'Ver locais','hero.cta2':'Descobrir meu pedido →','hero.stat1':'Locais mapeados','section.partners':'Guia de <span>locais</span>',
    'premium.title':'Um guia vegano e vegetariano confiável, com filtros por prato, favoritos reais, rotas e páginas completas por local.',
    'premium.text':'O Allve mostra somente locais com 2+ opções veganas/vegetarianas conhecidas e avisa quando cardápios e horários precisam ser confirmados antes do pedido.',
    'discover.copy':'Responda rapidinho o que você quer comer e o app recomenda restaurante e prato combinando preço, tempo, avaliação, tipo de comida e preferência vegana/vegetariana.',
    'notice.main':'Cardápios e horários podem mudar. Antes de pedir, confirme no restaurante, iFood, Instagram ou Google Maps.',
    'dish.title':'Filtrar por tipo de prato','dish.all':'Todos','dish.lanche':'Lanche','dish.marmita':'Marmita','dish.doce':'Doce','dish.pizza':'Pizza','dish.arabe':'Árabe','dish.japones':'Japonês','dish.acai':'Açaí','dish.cafe':'Café','dish.massa':'Massa',
    'rank.title':'Escolhas rápidas','rank.near':'Mais perto de você','rank.cheap':'Mais econômico','rank.vegan':'Mais opções veganas','rank.now':'Melhor para pedir agora','rank.open':'aberto agora','rank.free':'entrega grátis','rank.items':'opções',
    'favorites.title':'Meus favoritos','favorites.copy':'Salvos no navegador. Clique no coração dos cards para guardar seus locais preferidos.','favorites.empty':'Você ainda não favoritou nenhum local. Toque no coração de um restaurante para salvar aqui.',
    'verify.verified':'Verificado','verify.partial':'Informação parcial','verify.check':'Confirmar cardápio',
    'actions.menu':'Cardápio','actions.details':'Detalhes','actions.route':'Ver rota','actions.contact':'Buscar contato','actions.favorite':'Favoritar','actions.unfavorite':'Remover favorito',
    'detail.about':'Sobre o local','detail.menu':'Pratos veganos/vegetarianos','detail.trust':'Confiança','detail.hours':'Horário','detail.delivery':'Entrega','detail.min':'Pedido mínimo','detail.rating':'Avaliação','detail.warning':'Confirme cardápio, preço e horário antes de pedir. O Allve organiza as opções conhecidas, mas o restaurante pode alterar itens.',
    'discover.more':'Preferências rápidas','discover.diet':'Preferência','discover.budget':'Orçamento','discover.food':'Tipo de comida','discover.any':'Tanto faz','discover.vegan':'Vegano','discover.vegetarian':'Vegetariano','discover.low':'Até R$ 25','discover.mid':'Até R$ 45','discover.free':'Entrega grátis',
    'rec.match':'Por que combina','rec.open':'está aberto','rec.budget':'bom preço','rec.food':'tipo escolhido','rec.vegan':'tem opção vegana','rec.veg':'tem opção vegetariana'
  });
  Object.assign(STRINGS.en, {
    'hero.badge':'Vegan & Vegetarian Guide • Uberlândia',
    'hero.title':'Find <em>vegan and vegetarian</em><br>options faster.',
    'hero.subtitle':'An Uberlândia guide with restaurants, dessert shops and deliveries that have 2+ vegan/vegetarian options, map, separated dishes and verification notes.',
    'hero.cta1':'View places','hero.cta2':'Find my order →','hero.stat1':'Mapped places','section.partners':'Local <span>guide</span>',
    'premium.title':'A reliable vegan and vegetarian guide with dish filters, real favorites, routes and full pages for each place.',
    'premium.text':'Allve shows only places with 2+ known vegan/vegetarian options and warns when menus and opening hours should be confirmed before ordering.',
    'discover.copy':'Answer what you want to eat and the app recommends a restaurant and dish based on price, time, rating, food type and vegan/vegetarian preference.',
    'notice.main':'Menus and hours may change. Before ordering, confirm with the restaurant, iFood, Instagram or Google Maps.',
    'dish.title':'Filter by dish type','dish.all':'All','dish.lanche':'Snack','dish.marmita':'Lunchbox','dish.doce':'Sweet','dish.pizza':'Pizza','dish.arabe':'Arabic','dish.japones':'Japanese','dish.acai':'Açaí','dish.cafe':'Coffee','dish.massa':'Pasta',
    'rank.title':'Quick picks','rank.near':'Closest to you','rank.cheap':'Most affordable','rank.vegan':'Most vegan options','rank.now':'Best to order now','rank.open':'open now','rank.free':'free delivery','rank.items':'options',
    'favorites.title':'My favorites','favorites.copy':'Saved in your browser. Tap the heart on cards to keep your favorite places here.','favorites.empty':'No favorites yet. Tap the heart on a restaurant to save it here.',
    'verify.verified':'Verified','verify.partial':'Partial info','verify.check':'Confirm menu',
    'actions.menu':'Menu','actions.details':'Details','actions.route':'Route','actions.contact':'Find contact','actions.favorite':'Favorite','actions.unfavorite':'Remove favorite',
    'detail.about':'About this place','detail.menu':'Vegan/vegetarian dishes','detail.trust':'Trust','detail.hours':'Hours','detail.delivery':'Delivery','detail.min':'Minimum order','detail.rating':'Rating','detail.warning':'Confirm menu, price and hours before ordering. Allve organizes known options, but restaurants may change items.',
    'discover.more':'Quick preferences','discover.diet':'Preference','discover.budget':'Budget','discover.food':'Food type','discover.any':'Any','discover.vegan':'Vegan','discover.vegetarian':'Vegetarian','discover.low':'Up to R$25','discover.mid':'Up to R$45','discover.free':'Free delivery',
    'rec.match':'Why it matches','rec.open':'open now','rec.budget':'good price','rec.food':'chosen food type','rec.vegan':'has vegan option','rec.veg':'has vegetarian option'
  });

  function enhanceRestaurantData(){
    RESTAURANTS.forEach(function(r){
      var itemCount = r.menu.flatMap(function(s){return s.items;}).length;
      r.vegItemCount = r.vegItemCount || itemCount;
      r.verification = r.verification || ((r.diet||'').toLowerCase().includes('100%') || itemCount >= 4 ? 'verified' : 'partial');
      r.trustNote = r.trustNote || (r.verification === 'verified' ? 'Cardápio com opções veg claras no app.' : 'Opções listadas, mas vale confirmar disponibilidade.');
      r.trustNoteEn = r.trustNoteEn || (r.verification === 'verified' ? 'Menu has clear veg options in the app.' : 'Listed options should be confirmed for availability.');
      r.routeUrl = r.routeUrl || ('https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent((r.lat||-18.9186)+','+(r.lng||-48.2712)));
      r.contactUrl = r.contactUrl || ('https://www.google.com/search?q=' + encodeURIComponent(r.name + ' Uberlândia contato cardápio'));
      r.dishTypes = r.dishTypes || inferDishTypes(r);
    });
  }
  function inferDishTypes(r){
    var text = (r.name+' '+r.desc+' '+(r.tags||[]).join(' ')+' '+r.menu.flatMap(function(s){return s.items}).map(function(i){return i.name+' '+(i.desc||'')}).join(' ')).toLowerCase();
    var types=[];
    if(/burger|hamb[úu]rguer|sandu|coxinha|pastel|burrito|esfiha|taco|lanche/.test(text)) types.push('lanche');
    if(/marmita|refei|prato|almo[cç]o|salada|bowl|buffet/.test(text)) types.push('marmita');
    if(/bolo|doce|sobremesa|a[cç]a[ií]|sorvete|brownie|pudim|chocolate|cake/.test(text)) types.push('doce');
    if(/pizza/.test(text)) types.push('pizza');
    if(/[áa]rabe|esfiha|falafel|kibe|homus|hummus/.test(text)) types.push('arabe');
    if(/japon|sushi|yakisoba|temaki|tofu/.test(text)) types.push('japones');
    if(/a[cç]a[ií]/.test(text)) types.push('acai');
    if(/caf[eé]|capuccino|p[ãa]o|padaria/.test(text)) types.push('cafe');
    if(/massa|pasta|macarr|risoto|nhoque/.test(text)) types.push('massa');
    return Array.from(new Set(types.length?types:['marmita']));
  }
  function trustMeta(r){
    var v = r.verification || 'partial';
    if(v==='verified') return {cls:'verified', label:t('verify.verified'), icon:'✅'};
    if(v==='check') return {cls:'check', label:t('verify.check'), icon:'🔎'};
    return {cls:'partial', label:t('verify.partial'), icon:'⚠️'};
  }
  function openExternal(url){ window.open(url, '_blank', 'noopener,noreferrer'); }
  window.openExternal = openExternal;

  function injectEnhancements(){
    if(!document.getElementById('allve-notice')){
      var search = document.querySelector('.search-section');
      var notice = document.createElement('div');
      notice.className='notice-strip'; notice.id='allve-notice';
      notice.innerHTML='<div class="notice-card"><span>🛡️</span><div><strong>Allve Trust</strong><br><span data-upgrade-i18n="notice.main"></span></div></div>';
      search && search.parentNode.insertBefore(notice, search.nextSibling);
    }
    if(!document.getElementById('dish-filter-row')){
      var smart = document.getElementById('smart-filters');
      var row = document.createElement('div'); row.className='dish-filter-row'; row.id='dish-filter-row';
      var defs = [['all','🍽️'],['lanche','🍔'],['marmita','🍱'],['doce','🍰'],['pizza','🍕'],['arabe','🧆'],['japones','🍣'],['acai','🫐'],['cafe','☕'],['massa','🍝']];
      row.innerHTML = defs.map(function(d,i){return '<button class="dish-filter '+(i===0?'active':'')+'" onclick="setDishFilter(this,\''+d[0]+'\')"><span>'+d[1]+'</span> <span data-upgrade-i18n="dish.'+d[0]+'"></span></button>';}).join('');
      smart && smart.parentNode.insertBefore(row, smart.nextSibling);
      var title = document.createElement('p'); title.className='premium-search-note'; title.id='dish-filter-title'; title.innerHTML='🍽️ <span data-upgrade-i18n="dish.title"></span>';
      smart && smart.parentNode.insertBefore(title, row);
    }
    if(!document.getElementById('ranking-section')){
      var main = document.querySelector('.main-layout');
      var ranking = document.createElement('section'); ranking.id='ranking-section'; ranking.className='ranking-section';
      ranking.innerHTML='<div class="section-header"><h2 class="section-title"><span data-upgrade-i18n="rank.title"></span></h2></div><div class="ranking-grid" id="ranking-grid"></div>';
      main && main.parentNode.insertBefore(ranking, main);
    }
    if(!document.getElementById('favorites-section')){
      var ml = document.querySelector('.main-layout');
      var fav = document.createElement('section'); fav.id='favorites-section'; fav.className='favorites-section';
      fav.innerHTML='<div class="favorites-shell"><div class="favorites-intro"><div><h3 data-upgrade-i18n="favorites.title"></h3><p data-upgrade-i18n="favorites.copy"></p></div><button class="detail-action light" onclick="scrollToSection(\'restaurants\')">🌱 <span data-upgrade-i18n="hero.cta1"></span></button></div><div class="favorites-list" id="favorites-list"></div></div>';
      ml && ml.parentNode.insertBefore(fav, ml.nextSibling);
    }
    if(!document.getElementById('discover-extra')){
      var grid = document.getElementById('mood-grid');
      var extra = document.createElement('div'); extra.id='discover-extra'; extra.className='discover-extra';
      extra.innerHTML = '<div class="discover-extra-label" data-upgrade-i18n="discover.more"></div>'+
        '<div class="discover-extra-label" data-upgrade-i18n="discover.diet"></div><div class="choice-row">'+
        '<button class="choice-pill active" onclick="setDiscoverPref(this,\'diet\',\'all\')" data-upgrade-i18n="discover.any"></button><button class="choice-pill" onclick="setDiscoverPref(this,\'diet\',\'vegan\')" data-upgrade-i18n="discover.vegan"></button><button class="choice-pill" onclick="setDiscoverPref(this,\'diet\',\'vegetarian\')" data-upgrade-i18n="discover.vegetarian"></button></div>'+
        '<div class="discover-extra-label" data-upgrade-i18n="discover.budget"></div><div class="choice-row">'+
        '<button class="choice-pill active" onclick="setDiscoverPref(this,\'budget\',\'any\')" data-upgrade-i18n="discover.any"></button><button class="choice-pill" onclick="setDiscoverPref(this,\'budget\',\'low\')" data-upgrade-i18n="discover.low"></button><button class="choice-pill" onclick="setDiscoverPref(this,\'budget\',\'mid\')" data-upgrade-i18n="discover.mid"></button><button class="choice-pill" onclick="setDiscoverPref(this,\'budget\',\'free\')" data-upgrade-i18n="discover.free"></button></div>'+
        '<div class="discover-extra-label" data-upgrade-i18n="discover.food"></div><div class="choice-row">'+
        ['all','lanche','marmita','doce','pizza','arabe','japones','acai','cafe','massa'].map(function(k,i){return '<button class="choice-pill '+(i===0?'active':'')+'" onclick="setDiscoverPref(this,\'dish\',\''+k+'\')" data-upgrade-i18n="dish.'+k+'"></button>';}).join('')+'</div>';
      grid && grid.parentNode.insertBefore(extra, grid.nextSibling);
    }
    updateEnhancedTexts();
  }

  function updateEnhancedTexts(){
    document.querySelectorAll('[data-upgrade-i18n]').forEach(function(el){ el.textContent = t(el.getAttribute('data-upgrade-i18n')); });
    renderRanking();
    renderFavoritesPanel();
  }
  var baseApplyTranslations = applyTranslations;
  applyTranslations = function(){ baseApplyTranslations(); updateEnhancedTexts(); };

  window.setDishFilter = function(btn, key){
    dishFilter = key;
    document.querySelectorAll('.dish-filter').forEach(function(b){b.classList.remove('active')});
    btn.classList.add('active'); filterRestaurants();
  };
  window.setDiscoverPref = function(btn, type, value){
    discoverPrefs[type]=value;
    btn.parentElement.querySelectorAll('.choice-pill').forEach(function(b){b.classList.remove('active')});
    btn.classList.add('active'); generateRecommendation();
  };

  function restaurantHasDish(r, key){ return key==='all' || (r.dishTypes||[]).includes(key); }
  function restaurantHasDiet(r, kind){
    var all = r.menu.flatMap(function(s){return s.items});
    if(kind==='vegan') return all.some(function(i){return /vegano|vegan/i.test((i.diet||'')+' '+i.name+' '+(i.desc||''));}) || /vegano|vegan/i.test(r.diet||'');
    if(kind==='vegetarian') return all.some(function(i){return /vegetariano|vegetarian/i.test((i.diet||'')+' '+i.name+' '+(i.desc||''));}) || /vegetariano|vegetarian/i.test(r.diet||'');
    return true;
  }

  renderRestaurants = function(){
    var grid = document.getElementById('restaurant-grid'); if(!grid) return;
    if(filteredRestaurants.length===0){ grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)"><div style="font-size:3rem;margin-bottom:1rem">🌿</div><p>'+(LANG==='en'?'No places found.':'Nenhum local encontrado.')+'</p></div>'; return; }
    grid.innerHTML = filteredRestaurants.map(function(r){
      var name = LANG==='en'&&r.nameEn?r.nameEn:r.name;
      var desc = LANG==='en'&&r.descEn?r.descEn:r.desc;
      var badge = LANG==='en'&&r.badgeEn?r.badgeEn:r.badge;
      var deliveryText = r.deliveryFee===0 ? (LANG==='en'?'Free delivery':'Entrega grátis') : 'R$ '+r.deliveryFee+',00';
      var trust = trustMeta(r);
      return '<div class="restaurant-card" onclick="openRestaurantDetails('+r.id+')">'+
        '<div class="rcard-img" style="background:'+r.color+'"><div class="rcard-img-overlay"></div><span style="position:relative;z-index:1;font-size:3.5rem">'+r.emoji+'</span><div class="rcard-badge-top '+(r.badgeClass||'')+'">'+badge+'</div><button class="rcard-fav '+(isFav(r.id)?'active':'')+'" onclick="toggleFav(event,'+r.id+')" title="Favorito"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button></div>'+ 
        '<div class="rcard-body"><h3 class="rcard-name">'+name+'</h3><p class="rcard-desc">'+desc+'</p><div class="rcard-address">📍 '+(r.address||'Uberlândia')+'</div>'+ 
        '<div class="rcard-status-row"><span class="verify-pill '+trust.cls+'">'+trust.icon+' '+trust.label+'</span><span class="rcard-status '+(isOpen(r)?'open':'closed')+'">'+(isOpen(r)?(LANG==='en'?'Open now':'Aberto agora'):(LANG==='en'?'Closed':'Fechado'))+'</span><span class="rcard-status diet">'+dietLabel(r.diet,r.dietEn)+'</span></div>'+ 
        '<div class="rcard-tags">'+(r.dishTypes||[]).slice(0,4).map(function(tag){return '<span class="rcard-tag">'+(t('dish.'+tag)||tag)+'</span>';}).join('')+'</div>'+ 
        '<div class="rcard-meta"><div class="rcard-rating">⭐ '+r.rating+'</div><div class="rcard-info">🕐 '+r.time+' min</div><div class="rcard-info">🛵 '+deliveryText+'</div></div>'+ 
        '<div class="rcard-footer"><div class="rcard-price">'+(LANG==='en'?'Min':'Mín')+': <strong>R$ '+r.minOrder+',00</strong></div><button class="btn-menu" onclick="openMenu('+r.id+');event.stopPropagation()">'+t('actions.menu')+'</button></div>'+ 
        '<div class="card-actions"><button class="card-action-btn primary" onclick="openRestaurantDetails('+r.id+');event.stopPropagation()">🔎 '+t('actions.details')+'</button><button class="card-action-btn" onclick="openExternal(\''+r.routeUrl+'\');event.stopPropagation()">🗺️ '+t('actions.route')+'</button></div></div></div>';
    }).join('');
    var rc=document.getElementById('results-count'); if(rc) rc.textContent=t('results',{n:filteredRestaurants.length});
  };

  filterRestaurants = function(){
    var input=document.getElementById('search-input'); var sortEl=document.getElementById('sort-select');
    var q=(input?input.value:'').toLowerCase(); var sort=sortEl?sortEl.value:'rating';
    var res=RESTAURANTS.filter(function(r){
      var matchCat=currentCategory==='all'||r.category===currentCategory;
      var name=(LANG==='en'&&r.nameEn?r.nameEn:r.name).toLowerCase();
      var desc=(LANG==='en'&&r.descEn?r.descEn:r.desc).toLowerCase();
      var menuText=r.menu.flatMap(function(s){return s.items}).map(function(i){return i.name+' '+(i.nameEn||'')+' '+(i.desc||'')+' '+(i.descEn||'')+' '+(i.diet||'')}).join(' ').toLowerCase();
      var tagText=(r.tags||[]).join(' ').toLowerCase()+' '+(r.dishTypes||[]).join(' ');
      var address=(r.address||'').toLowerCase();
      var matchQ=!q || name.includes(q)||desc.includes(q)||menuText.includes(q)||tagText.includes(q)||address.includes(q);
      var matchOpen=!smartFilters.open || isOpen(r);
      var matchFree=!smartFilters.free || r.deliveryFee===0;
      var matchFav=!smartFilters.fav || isFav(r.id);
      var matchCheap=!smartFilters.cheap || r.minOrder<=25 || r.deliveryFee===0;
      var matchEco=!smartFilters.eco || (r.ecoScore||0)>=93;
      var matchVegan=!smartFilters.vegan || restaurantHasDiet(r,'vegan');
      var matchVegetarian=!smartFilters.vegetarian || restaurantHasDiet(r,'vegetarian');
      var matchDish=restaurantHasDish(r,dishFilter);
      return matchCat&&matchQ&&matchOpen&&matchFree&&matchFav&&matchCheap&&matchEco&&matchVegan&&matchVegetarian&&matchDish;
    });
    if(sort==='rating') res.sort(function(a,b){return b.rating-a.rating});
    else if(sort==='time') res.sort(function(a,b){return parseInt(a.time)-parseInt(b.time)});
    else res.sort(function(a,b){return a.name>b.name?1:-1});
    filteredRestaurants=res; renderRestaurants();
  };

  var baseToggleFav = toggleFav;
  toggleFav = function(e,id){ baseToggleFav(e,id); renderFavoritesPanel(); renderRanking(); };

  function chooseItem(r, pref){
    var items = r.menu.flatMap(function(s){return s.items});
    if(pref.diet==='vegan') items = items.filter(function(i){return /vegano|vegan/i.test((i.diet||'')+' '+i.name+' '+(i.desc||''));});
    if(pref.diet==='vegetarian') items = items.filter(function(i){return /vegetariano|vegetarian/i.test((i.diet||'')+' '+i.name+' '+(i.desc||''));});
    if(pref.budget==='low') items = items.filter(function(i){return i.price<=25});
    if(pref.budget==='mid') items = items.filter(function(i){return i.price<=45});
    return items[0] || r.menu.flatMap(function(s){return s.items})[0];
  }
  scoreRestaurantForMood = function(r,mood){
    var fast=60-parseInt(r.time); var cheap=90-r.minOrder-r.deliveryFee; var rating=r.rating*14; var eco=r.ecoScore||90; var score=rating+fast+eco/4;
    if(mood==='rapido') score += fast*1.7+(isOpen(r)?25:-25);
    if(mood==='barato') score += cheap*1.7+(r.deliveryFee===0?20:0);
    if(mood==='saudavel') score += (r.tags||[]).some(function(t){return /salada|leve|self|tofu|marmita|natural/.test(t)})?44:0;
    if(mood==='conforto') score += (r.category==='pizza'||r.category==='dessert'||(r.dishTypes||[]).some(function(d){return ['doce','pizza','massa','lanche'].includes(d)}))?50:0;
    if((r.bestFor||[]).includes(mood)) score+=26;
    if(discoverPrefs.diet!=='all' && restaurantHasDiet(r, discoverPrefs.diet)) score += 35;
    if(discoverPrefs.budget==='low') score += r.minOrder<=25?30:-20;
    if(discoverPrefs.budget==='mid') score += r.minOrder<=45?20:-10;
    if(discoverPrefs.budget==='free') score += r.deliveryFee===0?40:-25;
    if(discoverPrefs.dish!=='all') score += restaurantHasDish(r, discoverPrefs.dish)?42:-35;
    return score;
  };
  generateRecommendation = function(){
    if(!RESTAURANTS.length) return;
    var ranked=[].concat(RESTAURANTS).filter(function(r){
      if(discoverPrefs.diet!=='all' && !restaurantHasDiet(r, discoverPrefs.diet)) return false;
      if(discoverPrefs.dish!=='all' && !restaurantHasDish(r, discoverPrefs.dish)) return false;
      if(discoverPrefs.budget==='free' && r.deliveryFee!==0) return false;
      return true;
    });
    if(!ranked.length) ranked=[].concat(RESTAURANTS);
    ranked.sort(function(a,b){return scoreRestaurantForMood(b,currentMood)-scoreRestaurantForMood(a,currentMood)});
    var r=ranked[0]; recommendedRestaurantId=r.id;
    var item=chooseItem(r, discoverPrefs) || {}; var iName=LANG==='en'&&item.nameEn?item.nameEn:item.name;
    var name=LANG==='en'&&r.nameEn?r.nameEn:r.name; var desc=LANG==='en'&&r.descEn?r.descEn:r.desc; var trust=trustMeta(r);
    var reasons=[]; if(isOpen(r)) reasons.push(t('rec.open')); if(r.minOrder<=30||r.deliveryFee===0) reasons.push(t('rec.budget')); if(discoverPrefs.dish!=='all') reasons.push(t('rec.food')); if(restaurantHasDiet(r,'vegan')) reasons.push(t('rec.vegan')); if(restaurantHasDiet(r,'vegetarian')) reasons.push(t('rec.veg'));
    var box=document.getElementById('recommendation-box'); if(!box) return;
    box.innerHTML='<div class="rec-icon" style="background:'+r.color+'">'+r.emoji+'</div><div><div class="rec-label">'+t('rec.label.'+currentMood)+'</div><div class="rec-name">'+name+'</div><p class="rec-desc">'+desc+'. '+t('rec.suggestion')+': <strong>'+(iName||popularItemName(r))+'</strong>. ⭐ '+r.rating+' · '+r.time+' min · EcoScore '+r.ecoScore+'/100.</p><div class="rec-tags"><span class="rec-tag">'+trust.icon+' '+trust.label+'</span><span class="rec-tag">'+dietLabel(r.diet,r.dietEn)+'</span><span class="rec-tag">R$ '+(item.price||r.minOrder)+',00</span></div><div class="rec-match"><strong style="font-size:.78rem;color:var(--forest)">'+t('rec.match')+':</strong> '+reasons.slice(0,4).map(function(x){return '<span>'+x+'</span>'}).join('')+'</div></div>';
  };

  openMenu = function(id){
    var r=RESTAURANTS.find(function(x){return x.id===id}); if(!r) return; currentRestaurant=r;
    var name=LANG==='en'&&r.nameEn?r.nameEn:r.name; var desc=LANG==='en'&&r.descEn?r.descEn:r.desc; var deliveryText=r.deliveryFee===0?(LANG==='en'?'Free delivery':'Entrega grátis'):'R$ '+r.deliveryFee+',00'; var open=isOpen(r); var trust=trustMeta(r);
    document.getElementById('menu-title').textContent=name;
    var body=document.getElementById('menu-body');
    body.innerHTML='<div class="menu-restaurant-header"><div class="menu-icon" style="background:'+r.color+'">'+r.emoji+'</div><div><div class="menu-restaurant-name">'+name+'</div><div class="menu-restaurant-meta">⭐ '+r.rating+' · 🕐 '+r.time+' min · '+deliveryText+'</div><div class="menu-restaurant-meta" style="color:'+(open?'var(--green)':'var(--error)')+';font-weight:600;margin-top:.2rem">'+(open?(LANG==='en'?'● Open now':'● Aberto agora'):(LANG==='en'?'● Closed':'● Fechado'))+'</div></div></div>'+ 
      '<div class="menu-boost"><span class="verify-pill '+trust.cls+'">'+trust.icon+' '+trust.label+'</span><span class="menu-tag">🌱 EcoScore '+(r.ecoScore||90)+'/100</span><span class="menu-tag">✅ '+dietLabel(r.diet,r.dietEn)+'</span><span class="menu-tag">📍 '+(r.address||'Uberlândia')+'</span></div>'+ 
      '<div class="detail-actions"><button class="detail-action light" onclick="openRestaurantDetails('+r.id+')">🔎 '+t('actions.details')+'</button><button class="detail-action light" onclick="openExternal(\''+r.routeUrl+'\')">🗺️ '+t('actions.route')+'</button><button class="detail-action light" onclick="openExternal(\''+r.contactUrl+'\')">☎️ '+t('actions.contact')+'</button></div>'+ 
      r.menu.map(function(section){ var cat=LANG==='en'&&section.catEn?section.catEn:section.cat; return '<div class="menu-category">'+cat+'</div>'+section.items.map(function(item){ var iName=LANG==='en'&&item.nameEn?item.nameEn:item.name; var iDesc=LANG==='en'&&item.descEn?item.descEn:item.desc; return '<div class="menu-item" onclick="addToCart(\''+iName.replace(/'/g,"\\'")+'\','+item.price+')"><div class="menu-item-emoji">'+item.emoji+'</div><div class="menu-item-info"><strong>'+iName+'</strong><p>'+iDesc+'</p>'+(item.diet?'<span class="item-diet">'+dietLabel(item.diet,item.dietEn)+'</span>':'')+'</div><div class="menu-item-right"><div class="menu-item-price">R$ '+item.price+',00</div><button class="menu-add" onclick="addToCart(\''+iName.replace(/'/g,"\\'")+'\','+item.price+');event.stopPropagation()">'+t('menu.addBtn')+'</button></div></div>'; }).join(''); }).join('')+
      '<div class="detail-warning">⚠️ '+t('detail.warning')+'</div>';
    document.getElementById('menu-overlay').classList.add('open'); document.body.style.overflow='hidden';
  };

  window.openRestaurantDetails = function(id){
    var r=RESTAURANTS.find(function(x){return x.id===id}); if(!r) return;
    var name=LANG==='en'&&r.nameEn?r.nameEn:r.name; var desc=LANG==='en'&&r.descEn?r.descEn:r.desc; var trust=trustMeta(r); var deliveryText=r.deliveryFee===0?(LANG==='en'?'Free delivery':'Entrega grátis'):'R$ '+r.deliveryFee+',00';
    document.getElementById('detail-title').textContent=name;
    var foods=r.menu.flatMap(function(section){return section.items.map(function(item){return Object.assign({}, item, {section: LANG==='en'&&section.catEn?section.catEn:section.cat});});});
    document.getElementById('detail-body').innerHTML='<div class="detail-hero"><div class="detail-icon" style="background:'+r.color+'">'+r.emoji+'</div><div><div class="detail-title">'+name+'</div><p class="detail-desc">'+desc+'</p><span class="verify-pill '+trust.cls+'">'+trust.icon+' '+trust.label+'</span> <span class="verify-pill check">🔎 '+t('verify.check')+'</span></div></div>'+ 
      '<div class="detail-meta-grid"><div class="detail-meta"><small>'+t('detail.rating')+'</small><strong>⭐ '+r.rating+'</strong></div><div class="detail-meta"><small>'+t('detail.hours')+'</small><strong>'+r.hours.open+'h–'+r.hours.close+'h</strong></div><div class="detail-meta"><small>'+t('detail.delivery')+'</small><strong>'+deliveryText+'</strong></div><div class="detail-meta"><small>'+t('detail.min')+'</small><strong>R$ '+r.minOrder+',00</strong></div></div>'+ 
      '<div class="detail-actions"><button class="detail-action" onclick="openMenu('+r.id+')">🍽️ '+t('actions.menu')+'</button><button class="detail-action light" onclick="openExternal(\''+r.routeUrl+'\')">🗺️ '+t('actions.route')+'</button><button class="detail-action light" onclick="openExternal(\''+r.contactUrl+'\')">☎️ '+t('actions.contact')+'</button><button class="detail-action light" onclick="toggleFavFromDetail('+r.id+')">'+(isFav(r.id)?'❤️ '+t('actions.unfavorite'):'🤍 '+t('actions.favorite'))+'</button></div>'+ 
      '<h3 class="detail-section-title">'+t('detail.about')+'</h3><p class="detail-desc">📍 '+(r.address||'Uberlândia')+'<br>🌱 EcoScore '+(r.ecoScore||90)+'/100 · '+dietLabel(r.diet,r.dietEn)+' · '+(r.vegItemCount||foods.length)+' '+t('rank.items')+'</p>'+ 
      '<h3 class="detail-section-title">'+t('detail.menu')+'</h3><div class="detail-menu-grid">'+foods.map(function(item){ var iName=LANG==='en'&&item.nameEn?item.nameEn:item.name; var iDesc=LANG==='en'&&item.descEn?item.descEn:item.desc; return '<div class="detail-food"><strong>'+item.emoji+' '+iName+'</strong><p>'+iDesc+'</p><span class="item-diet">'+dietLabel(item.diet,item.dietEn)+'</span> <span class="rcard-tag">R$ '+item.price+',00</span></div>';}).join('')+'</div>'+ 
      '<div class="detail-warning">⚠️ '+t('detail.warning')+'</div>';
    document.getElementById('detail-overlay').classList.add('open'); document.body.style.overflow='hidden';
  };
  window.closeRestaurantDetails=function(){document.getElementById('detail-overlay').classList.remove('open');document.body.style.overflow='';};
  window.closeDetailIfBg=function(e){ if(e.target===document.getElementById('detail-overlay')) closeRestaurantDetails(); };
  window.toggleFavFromDetail=function(id){ var fake={stopPropagation:function(){}}; toggleFav(fake,id); openRestaurantDetails(id); };

  buildPopup = function(r){
    var open=isOpen(r); var name=LANG==='en'&&r.nameEn?r.nameEn:r.name; var deliveryText=r.deliveryFee===0?t('popup.free'):'R$ '+r.deliveryFee+',00'; var trust=trustMeta(r);
    return '<div class="map-popup"><div class="map-popup-header"><div class="map-popup-emoji" style="background:'+r.color+'">'+r.emoji+'</div><div><div class="map-popup-name">'+name+'</div><div class="map-popup-desc">'+r.address+'</div></div></div><div class="map-popup-pills"><span class="'+(open?'map-status-open':'map-status-closed')+' map-popup-pill">'+(open?t('popup.open'):t('popup.closed'))+'</span><span class="map-popup-pill pill-rating">⭐ '+r.rating+'</span><span class="map-popup-pill pill-time">🕐 '+r.time+' min</span><span class="map-popup-pill pill-delivery">🛵 '+deliveryText+'</span><span class="map-popup-pill pill-delivery">'+trust.icon+' '+trust.label+'</span></div><button class="map-popup-btn" onclick="openRestaurantDetails('+r.id+')">🔎 '+t('actions.details')+'</button><button class="map-popup-btn" style="margin-top:.45rem;background:var(--green)" onclick="openExternal(\''+r.routeUrl+'\')">🗺️ '+t('actions.route')+'</button></div>';
  };

  function renderRanking(){
    var el=document.getElementById('ranking-grid'); if(!el) return;
    var cheapest=[].concat(RESTAURANTS).sort(function(a,b){return (a.minOrder+a.deliveryFee)-(b.minOrder+b.deliveryFee)})[0];
    var mostVegan=[].concat(RESTAURANTS).sort(function(a,b){return (b.vegItemCount||0)-(a.vegItemCount||0)})[0];
    var bestNow=[].concat(RESTAURANTS).sort(function(a,b){return (isOpen(b)?1:0)-(isOpen(a)?1:0) || parseInt(a.time)-parseInt(b.time)})[0];
    var closest=userLocation ? [].concat(RESTAURANTS).sort(function(a,b){return getDistanceKm(userLocation,a)-getDistanceKm(userLocation,b)})[0] : [].concat(RESTAURANTS).sort(function(a,b){return parseInt(a.time)-parseInt(b.time)})[0];
    var cards=[['near',closest,'📍'],['cheap',cheapest,'💸'],['vegan',mostVegan,'🌱'],['now',bestNow,'⚡']];
    el.innerHTML=cards.map(function(c){var r=c[1]; if(!r) return ''; var name=LANG==='en'&&r.nameEn?r.nameEn:r.name; return '<div class="rank-card" onclick="openRestaurantDetails('+r.id+')"><div class="rank-kicker">'+c[2]+' '+t('rank.'+c[0])+'</div><div class="rank-title">'+name+'</div><div class="rank-meta">⭐ '+r.rating+' · '+r.time+' min · '+(r.vegItemCount||0)+' '+t('rank.items')+(isOpen(r)?' · '+t('rank.open'):'')+(r.deliveryFee===0?' · '+t('rank.free'):'')+'</div></div>';}).join('');
  }
  function renderFavoritesPanel(){
    var el=document.getElementById('favorites-list'); if(!el) return;
    var favs=getFavs().map(function(id){return RESTAURANTS.find(function(r){return r.id===id})}).filter(Boolean);
    if(!favs.length){ el.innerHTML='<div class="fav-empty">🤍 '+t('favorites.empty')+'</div>'; return; }
    el.innerHTML=favs.map(function(r){ var name=LANG==='en'&&r.nameEn?r.nameEn:r.name; return '<div class="fav-mini-card" onclick="openRestaurantDetails('+r.id+')"><div style="font-size:1.8rem">'+r.emoji+'</div><strong>'+name+'</strong><div class="rank-meta">⭐ '+r.rating+' · '+r.time+' min</div></div>'; }).join('');
  }

  var baseUpdatePremiumStats = updatePremiumStats;
  updatePremiumStats = function(){ baseUpdatePremiumStats(); renderRanking(); renderFavoritesPanel(); };

  enhanceRestaurantData();
  injectEnhancements();
  filterRestaurants();
  generateRecommendation();
  updatePremiumStats();
})();


/* ══════════════════════════════════════
   MELHORIAS FINAIS — COMPACTO, LIMPAR FILTROS E RESUMO
══════════════════════════════════════ */
(function(){
  var compactCards = localStorage.getItem('allve_compact_cards') === '1';

  function extraT(key){
    var dict = {
      pt: {
        compactOn:'Modo normal', compactOff:'Modo compacto', clear:'Limpar filtros', filtersTitle:'Filtros ativos', noFilters:'Sem filtros ativos', list:'Lista', map:'Mapa', discover:'Descobrir', top:'Topo',
        catAll:'Todos', search:'Busca', open:'Abertos', free:'Entrega grátis', fav:'Favoritos', cheap:'Econômico', eco:'EcoScore alto', vegan:'Prato vegano', vegetarian:'Vegetariano', compactToast:'Visual compacto ativado', normalToast:'Visual normal ativado', cleared:'Filtros limpos!'
      },
      en: {
        compactOn:'Normal mode', compactOff:'Compact mode', clear:'Clear filters', filtersTitle:'Active filters', noFilters:'No active filters', list:'List', map:'Map', discover:'Discover', top:'Top',
        catAll:'All', search:'Search', open:'Open', free:'Free delivery', fav:'Favorites', cheap:'Budget', eco:'High EcoScore', vegan:'Vegan dish', vegetarian:'Vegetarian', compactToast:'Compact view enabled', normalToast:'Normal view enabled', cleared:'Filters cleared!'
      }
    };
    return (dict[LANG] && dict[LANG][key]) || dict.pt[key] || key;
  }

  function syncCompactCardsUI(){
    document.body.classList.toggle('compact-cards', compactCards);
    var btn = document.getElementById('compact-mode-btn');
    if(btn){
      btn.textContent = compactCards ? extraT('compactOn') : extraT('compactOff');
      btn.classList.toggle('active', compactCards);
    }
  }

  window.toggleCompactCards = function(){
    compactCards = !compactCards;
    localStorage.setItem('allve_compact_cards', compactCards ? '1' : '0');
    syncCompactCardsUI();
    if(typeof showToast === 'function') showToast(compactCards ? extraT('compactToast') : extraT('normalToast'), 'success');
  };

  window.clearAllFilters = function(){
    var search = document.getElementById('search-input');
    if(search) search.value = '';
    var sort = document.getElementById('sort-select');
    if(sort) sort.value = 'rating';
    currentCategory = 'all';
    document.querySelectorAll('#filter-chips .chip').forEach(function(c){ c.classList.toggle('active', c.dataset.cat === 'all'); });
    Object.keys(smartFilters).forEach(function(k){ smartFilters[k] = false; });
    document.querySelectorAll('.smart-filter').forEach(function(b){ b.classList.remove('active'); });
    window.dishFilter = 'all';
    document.querySelectorAll('.dish-filter').forEach(function(b, i){ b.classList.toggle('active', i === 0); });
    filterRestaurants();
    updateActiveFilterSummary();
    if(typeof showToast === 'function') showToast(extraT('cleared'), 'success');
  };

  window.updateActiveFilterSummary = function(){
    var box = document.getElementById('active-filter-summary');
    if(!box) return;
    var pills = [];
    var q = document.getElementById('search-input')?.value?.trim();
    if(q) pills.push(extraT('search') + ': ' + q);
    if(currentCategory && currentCategory !== 'all') pills.push(currentCategory);
    Object.keys(smartFilters || {}).forEach(function(k){
      if(smartFilters[k]) pills.push(extraT(k));
    });
    if(window.dishFilter && window.dishFilter !== 'all') pills.push(window.dishFilter);
    if(!pills.length){
      box.classList.remove('show');
      box.innerHTML = '';
      return;
    }
    box.classList.add('show');
    box.innerHTML = '<strong>'+extraT('filtersTitle')+':</strong>' + pills.map(function(p){ return '<span class="active-filter-pill">'+p+'</span>'; }).join('');
  };

  var oldFilterRestaurants = window.filterRestaurants || filterRestaurants;
  window.filterRestaurants = filterRestaurants = function(){
    oldFilterRestaurants();
    updateActiveFilterSummary();
    syncCompactCardsUI();
  };

  var oldSetLang = window.setLang || setLang;
  window.setLang = setLang = function(lang){
    oldSetLang(lang);
    syncCompactCardsUI();
    updateActiveFilterSummary();
    var clear = document.querySelector('.clear-filters-btn');
    if(clear) clear.textContent = extraT('clear');
    document.querySelectorAll('[data-i18n="quickbar.list"]').forEach(function(x){x.textContent=extraT('list')});
    document.querySelectorAll('[data-i18n="quickbar.map"]').forEach(function(x){x.textContent=extraT('map')});
    document.querySelectorAll('[data-i18n="quickbar.discover"]').forEach(function(x){x.textContent=extraT('discover')});
    document.querySelectorAll('[data-i18n="quickbar.top"]').forEach(function(x){x.textContent=extraT('top')});
  };

  document.addEventListener('DOMContentLoaded', function(){
    syncCompactCardsUI();
    updateActiveFilterSummary();
    var clear = document.querySelector('.clear-filters-btn');
    if(clear) clear.textContent = extraT('clear');
  });

  // Corrige textos principais sem depender do HTML antigo.
  Object.assign(STRINGS.pt, {
    'hero.cta2':'Descobrir meu pedido →',
    'restaurants.compact':'Modo compacto',
    'filters.clear':'Limpar filtros',
    'quickbar.list':'Lista',
    'quickbar.map':'Mapa',
    'quickbar.discover':'Descobrir',
    'quickbar.top':'Topo'
  });
  Object.assign(STRINGS.en, {
    'hero.cta2':'Discover my meal →',
    'restaurants.compact':'Compact mode',
    'filters.clear':'Clear filters',
    'quickbar.list':'List',
    'quickbar.map':'Map',
    'quickbar.discover':'Discover',
    'quickbar.top':'Top'
  });
})();
