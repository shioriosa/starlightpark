'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpb3Jpb3NhIiwiYSI6ImNqb3hmam5rZjI4NXEzcHB0MHRja213azEifQ.0LM_5mPLzwG7yq6QHBJqxQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shioriosa/cjuz1h9ik0mj41fnyq6tg03v3',
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')

// this is an event handler
geolocate.on('geolocate', function(event) {
    console.log(event.coords)
})

geolocate.on('geolocate', function(event) {

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})


let data = [
    {
        location: [-66.467950355, 18.338021202],
        reference:'1',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/36043373_1573341209443302_4920440540048130048_o.jpg?_nc_cat=105&_nc_ht=scontent-lga3-1.xx&oh=04cfc5080f7c4037714c32fa33d401b6&oe=5D2EA165" /><br>Estancia Verde Luz',
        content: 'Municipality: Ciales',
        note: 'Note: Established in 2013 <a href=\"https://www.facebook.com/pg/estancia.verdeluz/about/?ref=page_internal\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: Heirloom tomatoes, Berenjenas'

    },
    {
        location: [-67.183041, 18.38135],
        reference:'2',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/58383927_862113494128700_4419529989058199552_o.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=dbec117798d11ddb0b3fe4ba30810640&oe=5D319AFC"/><br>SANA FARMS',
        content: 'Municipality: Rincon',
        note: 'Note: We do not use chemical fertilizers or pesticides. We do not use herbicides. Our seeds are organic. <a href=\"https://www.facebook.com/PRODUCTOSSANAPR/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce:tomatoes, eggplants, mango, zucchini'
    },

    {
        location: [-66.216163, 18.369977],
        reference:'3',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/58461943_2119512594827103_7555130602203119616_o.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=f4a3bdbcb9837ebbdc59ae498b3745f1&oe=5D2A4900"/><p></p>Proyecto Agroecológico El Josco Bravo',
        content: 'Municipality: Toa Alta',
        note: 'Note: <a href=\"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/58461943_2119512594827103_7555130602203119616_o.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=f4a3bdbcb9837ebbdc59ae498b3745f1&oe=5D2A4900\">Link</a>',
        produce: 'What they produce: lettuce, cabbage, arugula, cabbage, Beet, <br>carrot, radishes, turnips, Chives, parsley, coriander, basil'
    },

    {
        location: [-66.819242, 18.210033],
        reference:'4',
        name: '<img src="https://sandrafarms.com/wp-content/uploads/2019/02/sandraphoto2b.jpg"/><br>Sandra Farms',
        content: 'Municipality: Adjuntas',
        note: 'Note: Use modern and ecologically sound methods in green <br>bean production, Uphold Fair Trade standards and meet U.S. requirements for employees <a href=\"https://sandrafarms.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: Coffee'
    },

    {
        location: [-66.806888, 18.227385],
        reference:'5',
        name: '<img src="https://static.wixstatic.com/media/644aaf_1f8b0b66c80f4df1b37fa349ad49ea44~mv2.jpg/v1/fill/w_660,h_440,al_c,lg_1,q_90,usm_4.00_1.00_0.00/644aaf_1f8b0b66c80f4df1b37fa349ad49ea44~mv2.webp"/><br>Hacienda Tres Angeles',
        content: 'Municipality: Adjuntas',
        note: 'Note: Hacienda Tres Angeles is the first  Agro-tourism Certified farm by the Puerto Rico Tourism Company. <a href=\"https://www.haciendatresangeles.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: Coffee'
    },

    {
        location: [-66.777532, 18.189019],
        reference:'6',
        name: '<img src="https://haciendamontealto.com/wp-content/uploads/2015/06/Misty-mts.jpg"/><br>Hacienda Monte Alto',
        content: 'Municipality: Adjuntas',
        note: 'Note: Our business includes coffee nurseries, coffee farming, coffee processing and coffee roasting. <a href=\"https://haciendamontealto.com/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: Coffee'
    },
    {
        location: [-66.298272, 18.158235],
        reference:'7',
        name: '<img src="http://1.bp.blogspot.com/-HUiH3YhVXT0/UhfZHcN-AiI/AAAAAAAABKY/gMgbuKy0rFs/s760/blog1.jpg"/><br>Siembra Tres Vidas',
        content: 'Municipality: Aibonito',
        note: 'Note: Our agricultural methods is not only harmonize with <br>nature to produce ecologically healthy food, <br>but also improve the quality of the land. <a href=\"https://www.facebook.com/Caf%C3%A9-Tureygua-Finca-Gripi%C3%B1as-157311901083927/\" target=\"_blank\" title=\"Opens in a new window\">Link</a></p>',
        produce: 'What they produce: tomates, radish, cabagge, eggplants, broccoli'
    },

    {
        location: [-66.09528, 18.368632],
        reference:'8',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/466525_417031598344546_806210741_o.jpg?_nc_cat=110&_nc_ht=scontent-lga3-1.xx&oh=22329775ec11cf5ebb761b1e82fbf58c&oe=5D3595F8"/><br>Viveros PJ',
        content: 'Municipality:Guayanabo',
        note: 'Note:<a href=\"https://www.facebook.com/Caf%C3%A9-Tureygua-Finca-Gripi%C3%B1as-157311901083927/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: cocoa tree '
    },

    {
        location: [-66.578932, 18.201522],
        reference:'9',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/13653337_632109333604179_8733366597475239866_o.jpg?_nc_cat=108&_nc_ht=scontent-lga3-1.xx&oh=278fbc23fc5fc57d2217083d46707394&oe=5D3BB4FA"/><br>Finca Gripiñas',
        content:'Municipality: Jayuya',
        note: 'Note: <a href=\"https://www.facebook.com/Caf%C3%A9-Tureygua-Finca-Gripi%C3%B1as-157311901083927/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: Coffee, mango, banana, pepper, papaya'
    },

    {
        location: [-67.063093, 18.202332],
        reference:'10',
        name: '<img src="http://www.organicfarm.net/Virtual_Tour/130416-1.jpg"/><br>Govardhan Gardens',
        content:'Municipality: Mayaguez',
        note: 'Note: Has not recovered yet from hurricane . 10.5 acres of land: environmentally sound and sustainable eco-organic cultivation. <a href=\"www.organicfarm.net\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: bamboo, tropical fruits'
    },

    {
        location: [-66.954659, 18.384436],
        reference:'11',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/57333576_416313988945411_7087680831451299840_n.jpg?_nc_cat=105&_nc_ht=scontent-lga3-1.xx&oh=5d216e0eb1ccf927ecc38088a2dac278&oe=5D2EDF62"/><br>Siembra Hojas Verdes',
        content:'Municipality: Cayey',
        note: 'Note: Founded in 2018 <a href=\"https://www.facebook.com/siembrahojasverdes/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: tomatos, bananas, mint '
    },

    {
        location: [-67.05167, 18.20805],
        reference:'12',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13700060_1757013111206441_1025983897073485570_n.jpg?_nc_cat=101&_nc_ht=scontent-lga3-1.xx&oh=f442a8cef5515dc75d909472a99e62fe&oe=5D2FCB87"/><br>Finca Familia',
        content:'Municipality: Mayaguez',
        note: 'Note: Finca Familia is a permaculture-based project <br>focused on intentional community and local food security. <a href=\"https://www.facebook.com/pg/FincaFamiliaPuertoRico/about/?ref=page_internal\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce: orange, rambutan, cassava, zucchini, <br>granadilla, grapefruit #passionfruit, avocado'
    },

    {
        location: [-65.838853, 18.31625],
        reference:'13',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/47684042_2194816297209145_8322939582131732480_n.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=df920ceba48ecd94b5656d6b1183f5fd&oe=5D2E552C"/><br>Finca Sueño con Paracelso',
        content:'Municipality: Rio Grande',
        note: 'Note: Hosted an event to help rebuild farm in December 2018 <a href=\"https://www.facebook.com/events/r%C3%ADo-grande-puerto-rico/brigada-finca-sue%C3%B1os-con-paracelso/1085304271630618/\" target=\"_blank\" title=\"Opens in a new window\">Link</a>',
        produce: 'What they produce:  '
    },

    {
        location: [-67.058464, 18.099917],
        reference:'14',
        name: '<img src="https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/8124.jpg"/><br>Conuco del Coto',
        content:'Municipality: San German',
        note: 'Note: 2009: last presence online, Family farm <a href=\"https://www.localharvest.org/conuco-del-coto-M32590">Link</a>',
        produce: 'What they produce: '
    },

    {
        location: [-67.01335, 18.461339],
        reference:'15',
        name: '<img src="https://static.wixstatic.com/media/0f7c29_f7d16885f01841d79616cd81c42a82f4.jpg/v1/fill/w_824,h_618,al_c,q_85,usm_0.66_1.00_0.01/20130402_114910.webp"/><br>Desde Mi Huerta',
        content:'Municipality: Isabela',
        note: 'Note:  <a href=\"https://www.desdemihuerto.com/">Link</a>',
        produce: 'What they produce: zucchini, watermelon, <br>peanuts, sunflower, okura, corn, beans'
    },

    {
        location: [-66.040129, 18.432712],
        reference:'16',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/16904699_876352365838525_1294609562132168636_o.jpg?_nc_cat=102&_nc_ht=scontent-lga3-1.xx&oh=95426561cff33a7ec70bab734781086e&oe=5D31C7FC"/><br>El Huerto para Mi Escuela',
        content:'Municipality: San Juan',
        note: 'Note:  <a href=\"https://www.facebook.com/ElHuertoParaMiEscuela/">Link</a>',
        produce: 'What they produce: tomatoes, aloe, pampkin'
    },

    {
        location: [-66.700856, 18.268971],
        reference:'17',
        name: '<img src="https://fh-sites.imgix.net/sites/315/2016/09/09203329/Screen-Shot-2016-07-12-at-2.39.09-PM-1.png?auto=compress%2Cformat&fit=crop&crop=faces&w=629&h=354"/><br>Hacienda Horizonte',
        content:'Municipality: San Juan',
        note: 'Note: A unique 100 acre farm that offers interpretative <br>talks exploring the forest, organic crops, and the Charca Tanamá. <a href=\"https://bateydelcemi.com/activities/hacienda-horizonte-farm-tour/">Link</a>',
        produce: 'What they produce: coffee, oranges, <br>raspberries, lemons, bananas, platanos'
    },

    {
        location: [-66.048252, 18.401453],
        reference:'18',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/25075227_1738564522844858_1884618063860914343_o.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=82b8128ab4bd61025063ef3e255bd346&oe=5D6C6776"/><br>Huerto Semilla UPRRP',
        content:'Municipality: Utuado',
        note: 'Note: Founded 2010 out of student protest <a href=\"https://www.facebook.com/huertosemillauprrp/">Link</a>',
        produce: 'What they produce: Orchard'
    },

    {
        location: [-66.4925, 18.4294],
        reference:'19',
        name: '<img src="http://www.frutosdelguacabo.com/29386846_10155759829593411_6328058136498274304_n.jpg"/><br>Frutos del Guaycabo',
        content:'Municipality: Manati',
        note: 'Note: Our mission is to be a leading company in the generation <br>and distribution of high quality agricultural products for the culinary <br>Fmarket and raise awareness about the importance of local food production. <a href=\"https://www.frutosdelguacabo.com/">Link</a>',
        produce: 'What they produce: painapple, zucchini, pampkin, <br>Fpepper, cassava, Eggplants, Rambutan, Cannon, Passion fruit'
    },

    {
        location: [-65.428621, 18.130001],
        reference:'20',
        name: '<img src="https://fincaconciencia.com/imagenes/finca-conciencia-8.jpg"/><br>Finca Conciencia',
        content:'Municipality: Viequez',
        note: 'Note: farm and apiary doing signficant community work <a href=\"https://fincaconciencia.com/">Link</a>',
        produce: 'What they produce: beekeeping '
    },

    {
        location: [-66.581392, 18.458428],
        reference:'21',
        name: '<img src="https://www-kiva-org-3.global.ssl.fastly.net/img/w960/c315436644bda9d6c32d9475e9789615.jpg"/><br>Finca La Yuca',
        content:'Municipality: Arecibo',
        note: 'Note: Small farm with unique techniques <a href=\"https://www.kiva.org/lend/1243541">Link</a>',
        produce: 'What they produce: Limoncello, basil, rosemary, <br>aloe, Jamaica flower, kale, mizuna, peppers, tuna, turmeric'
    },

    {
        location: [-66.707082, 18.266872],
        reference:'22',
        name: 'MARIA VIC CAFÉ',
        content:'Municipality: Utuado',
        note: 'Note: ',
        produce: 'What they produce: '
    },

    {
        location: [-66.74441, 18.269958],
        reference:'23',
        name: 'CASA DON IRIZARRY',
        content:'Municipality: Utuado',
        note: 'Note: Private home with some land for growing',
        produce: 'What they produce: '
    },

    {
        location: [-66.750057, 18.270754],
        reference:'24',
        name: '<img src="http://www.organicfarm.net/Virtual_Tour/130416-1.jpg"/><br>CASA DON HERNAN MUY MAL',
        content:'Municipality: Utuado',
        note: 'Note: Home had lost roof and some walls; <br>elder gentleman alone, little food',
        produce: 'What they produce: '
    },

    {
        location: [-66.749639, 18.270649],
        reference:'25',
        name: 'CASA DON HERNAN MUY MAL',
        content:'Municipality: Utuado',
        note: 'Note: private home with some land for growing <br>(had received rations boxes)',
        produce: 'What they produce: '
    },

    {
        location: [-66.714684, 18.222927],
        reference:'26',
        name: 'POZO CTRA 123',
        content:'Municipality: Utuado',
        note: 'Note: Carretera 123',
        produce: 'What they produce: '
    },

    {
        location: [-66.73067, 18.195824],
        reference:'27',
        name: 'POST DECO NO LUZ',
        content:'Municipality: Adjuntas',
        note: 'Note: home where broken light post was decorated <br>for christmas, no electricity',
        produce: 'What they produce: ',
    },

    {
        location: [-66.769441, 18.188066],
        reference:'28',
        name: 'GREENHOUSES',
        content:'Municipality: Adjuntas',
        note: 'Note: commercial farm with severely impacted greenhouses',
        produce: 'What they produce: '
    },

    {
        location: [-66.789894, 18.195859],
        reference:'29',
        name: 'FINCA GRANDE PLATANO',
        content:'Municipality: Adjuntas',
        note: 'Note: farm where platanos were beginning to recover',
        produce: 'What they produce: '
    },

    {
        location: [-66.807051, 18.227476],
        reference:'30',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10155192_827269303994033_4789195250497340056_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=63ac630cdd0c3af780743f7496e72f61&oe=5D736B6F"/><br>Hacienda Tres Angeles',
        content:'Municipality: Adjuntas',
        note: 'Note: The first Agro-tourism Certified farm by the <br>Puerto Rico Tourism Company. Saturday 10 am coffee tours. <a href=\"https://www.haciendatresangeles.com/?fbclid=IwAR2A89FiLBWO5hCcIt2YZiWUor61nA7wOc37MU9YhIonKjkpn4GkcpySjGw">Link</a>',
        produce: 'What they produce: Coffee'
    },

    {
        location: [-66.291976, 18.158555],
        reference:'31',
        name: '<img src="https://static.wixstatic.com/media/570abe_af40536a53364fbe88b0ac81a177ec21~mv2.jpg/v1/fill/w_408,h_253,al_c,q_80,usm_0.66_1.00_0.01/570abe_af40536a53364fbe88b0ac81a177ec21~mv2.jpg"/><br>Finca Hidroponicos El LLano',
        content:'Municipality: Aibonito',
        note: 'Note: Hydroponic system producing tropical microgreens <br>for Puerto Rico gastronomy and kitchens <a href=\"https://www.hidroelllano.com/">Link</a>',
        produce: 'What they produce: Microgreens, celery, kohlrabi, <br>carrots, cauliflower, cilantro, amaranth, popcorn, and more'
    },

    {
        location: [-66.782472, 18.429537],
        reference:'32',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1012021_552605868143158_1606955863_n.png?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=efd96ccafd210ce61f16d0fc37029264&oe=5D325A50"/><br>Finca Pajuil, Inc.',
        content:'Municipality: Hatillo',
        note: 'Note: Once a monoculture sugar cane field, now an <br>eco-educational, holistic farm producing Puerto Rican <br>medicinal extractions or ayurriqueñas and also yoga classes. <a href=\"https://www.facebook.com/FincaPajuil/">Link</a>',
        produce: 'What they produce: Herbal extractions, mangos, cashew apple, platanos'
    },

    {
        location: [-67.115431, 18.504223],
        reference:'33',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/51991376_2423280897705928_1976335527741227008_n.jpg?_nc_cat=110&_nc_ht=scontent-lga3-1.xx&oh=d374adcc46931319494e7acd2a2dc755&oe=5D6FDC79"/><br>Auguadilla Farmers Market',
        content:'Municipality: Aguadilla',
        note: 'Note: Open Saturdays 8am-12:30pm <a href=\"https://www.facebook.com/AguadillaFarmersMarket">Link</a>',
        produce: 'What they produce: Local produce, "made-to-order" foods, <br>hand-crafted bodycare, and artesenal products'
    },

    {
        location: [-66.117468, 18.468203],
        reference:'34',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50601008_10156370703876429_479779225994264576_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=b5cd3f557c90239163c66d5f42c0f9bd&oe=5D29357E"/><br>Mercado Agricola Natural Viejo San Juan',
        content:'Municipality: San Juan',
        note: 'Note: Open Saturdays 8am-1pm <a href=\"https://www.facebook.com/mercadovsj/">Link</a>',
        produce: 'What they produce: Vegetales naturales y orgánicos, <br>frutas naturales, ﬂores, panes, y mucho más'
    },

    {
        location: [-66.070497, 18.450485],
        reference:'35',
        name: '<img src="https://lh3.googleusercontent.com/idoqrETi7W_NnVfYwgGxFDtfmCVbasiow_JMaMKsf_Br58ytx88NW6I-p1u5Lw-BE0_7lFOl-Q=w600-h0"/><br>La Plaza del Mercado de Santurce',
        content:'Municipality: San Juan',
        note: 'Note: Open daily and lively weekends <a href=\"https://la-plaza-del-mercado-de-santurce.business.site/">Link</a>',
        produce: 'What they produce: Local produce, medicinal herbs, <br>natural juices, and souvenirs'
    },

    
    {
        location: [-66.613266772461, 18.009264742906],
        reference:'37',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/55765413_1114002915437291_1748986914305736704_o.jpg?_nc_cat=101&_nc_ht=scontent-lga3-1.xx&oh=8ed9783aa59a0496a4740dfab63c9b1e&oe=5D74E573"/><br>Mercado Agrícola Natural de Ponce',
        content:'Municipality: Rincón ',
        note: 'Note: Open Sundays 8am-12:30pm <a href=\"https://www.facebook.com/Mercado-agroecologico-de-Rinc%C3%B3n-209770412527217/">Link</a>',
        produce: 'What they produce: Local produce, dairy, <br>artisanal breads, jellies, and oils'
    },


    {
        location: [-66.065423, 18.416633],
        reference:'38',
        name: 'Mercado Orgánico Placita Roosevelt',
        content:'<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10155605_759492614074547_920193970_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=33e8f2524aa3555d90c8118edf6668bb&oe=5D69ECF5"/><br>Municipality: Ponce ',
        note: 'Note: Open Saturdays 10am-3pm <a href=\"http://manponce.com/?fbclid=IwAR0HBon66j6awv0CUXhzstGQ4cfS1Gc22_VNze8J4hNoVdsIMELrU5lEtmc">Link</a>',
        produce: 'What they produce: Organic Agriculture, vegetarian food, <br>soaps, oils, breads, honey, dairy, pastry.'
    },


    {
        location: [-66.0584678, 18.436065],
        reference:'39',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/42773402_334482840636574_807450918185336832_n.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=78bce020ef6d435b8f257975b825aea4&oe=5D720A5F"/><br>Mercado AgroArtesanal de Barrio Obrero',
        content:'Municipality: San Juan ',
        note: 'Note: Open Sundays 10am-4pm <a href=\"https://www.facebook.com/Mercado-AgroArtesanal-de-Barrio-Obrero-261600397924819/">Link</a>',
        produce: 'What they produce: Agricultural products, artesanal crafts, <br>educational workshops, and entertainment for the family'
    },

    {
        location: [-65.724286, 18.380719],
        reference:'40',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/58461753_10215892461799207_4443733491275792384_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=35e59e3692c1e9cf794707c64b19daeb&oe=5D3449FD"/><br>Feria Agrícola y Artesanal de Luquillo',
        content:'Municipality: Luquillo ',
        note: 'Note: Luquillo Art and Culture Center, 2nd and 4th saturday <br>of the month, 8:30am-1:30pm <a href=\"https://www.facebook.com/groups/feriaagricoladeluquillo/">Link</a>',
        produce: 'What they produce: Local produce, small artisans, and small businesses'
    },

    {
        location: [-66.06705840395, 18.343683113843],
        reference:'41',
        name: '<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/58708061_2273931949546981_6841091520443973632_o.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=33569471e01d6dc294084bd283cb537a&oe=5D3C03AD"/><br>Mercado Agrícola de Caimito Haydée Colón',
        content:'Municipality: San Juan ',
        note: 'Note: Open 4th Sunday of every month, 9am-4pm <a href=\"https://www.facebook.com/pg/caimitoagricola/events/?ref=page_internal">Link</a>',
        produce: 'What they produce: Fresh agricultural products, <br>crafts, talks, music, dominoes and food.'
    },

    {
        location: [-66.047318, 18.419941],
        reference:'42',
        name: 'Calle Loiza Farmers Market',
        content:'Municipality: San Juan ',
        note: 'Note: ',
        produce: 'What they produce: '
    },

    {
        location: [-65.957683, 18.380603],
        reference:'43',
        name: 'Carolina Farmers Market',
        content:'Municipality: San Juan ',
        note: 'Note: ',
        produce: 'What they produce: '
    },

    {
        location: [-66.154121159606, 18.398917246668],
        reference:'44',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/19905065_1551161924954023_1434446940224167812_n.png?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=111017e5dccbecd32df5f4d7168bdbf4&oe=5D6EF0B7"/><br>Mercado El Chicharrón',
        content:'Municipality: Bayamon ',
        note: 'Note: Created in November 2017 to provide exposure to local producers. <br>Held held every third Sunday of the month from 10am . <br>Serving local coffee and fresh sandwiches. <a href=\"https://www.facebook.com/events/2025890817454179/">Link</a>',
        produce: 'What they produce: '
    },

    {
        location: [-67.1304481, 18.4998599],
        reference:'45',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/19905065_1551161924954023_1434446940224167812_n.png?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=111017e5dccbecd32df5f4d7168bdbf4&oe=5D6EF0B7"/><br>Levain Artisan Breads',
        content:'Municipality: San Juan ',
        note: 'Note: A Puerto Rican company dedicated to the traditional <br>production of European classic breads. Serving local coffee <br>and fresh sandwiches. <a href=\"https://www.facebook.com/LevainArtisanBreads/">Link</a>',
        produce: 'What they produce: breads'
    },

    {
        location: [-67.168043, 18.321891],
        reference:'46',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/18057970_1297642193676292_6657017727257399126_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=f96d4496a985e7b11c0731ad6dbdf876&oe=5D3DBBFD"/><br>Jean Marie Chocolat',
        content:'Municipality:  ',
        note: 'Note: Artisan Organic Cholocate, Workshops & Classes <a href=\"http://www.jeanmariechocolat.com/">Link</a>',
        produce: 'What they produce: chocolate'
    },

    {
        location: [-67.013296, 18.461341],
        reference:'47',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23473128_1660188380718739_2195284952604806997_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=3ec5b59d07a07ee514f736ef6fe5fc51&oe=5D358CCB"/><br>Desde Mi Huerta',
        content:'Municipality: Isabela',
        note: 'Note: Seed Company, farm and store. <br>Open Monday- Saturday 8am-3pm <a href=\"https://www.desdemihuerto.com/">Link</a>',
        produce: 'What they produce: chocolate'
    },

    {
        location: [-66.061704, 18.451448],
        reference:'48',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/42794256_556102544803005_1306489666593095680_n.png?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=b1f992fd8f1fa92b5301141ad30bb5bc&oe=5D2AB43B"/><br>Puerto Rico Produce',
        content:'Municipality: San Juan ',
        note: 'Note: Company delivery local produce to neighborhoods!<a href=\"https://www.puertoricoproduce.com/box/?fbclid=IwAR1LHk7uPJdXrbz57oLMPpDAkcQIpMtmO7VMmho5BE560Efx6bAHVRe5vaQ">Link</a>',
        produce: 'What they produce: '
    },

    {
        location: [-66.061704, 18.451448],
        reference:'49',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/41519860_10156750554199680_7688475485474390016_n.png?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=ad055dc852e378446de706135b6096ca&oe=5D6F4111"/><br>EcoTienda La Chiwinha',
        content:'Municipality: San Juan ',
        note: 'Note: Social and Solidary micro enterprise offering eco-friendly Puerto Rican <br>food specialty items such as coffee, chocolate, salts, marmalades and soaps!<a href=\"https://ecotiendalachiwi.com/">Link</a>',
        produce: 'What they produce: '
    },

    {
        location: [-66.09226, 18.38802],
        reference:'50',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11831677_10153222663443411_3924403470310988492_n.jpg?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=4a5f4e05c504c691f6a9f5746d6b88b0&oe=5D6A8FAE"/><br>Frutos del Guaycabo',
        content:'Municipality: Manati',
        note: 'Note: Specialty grocer, farm, and distributer center for local produce. <br>Also hosts educational workshops.<a href=\"https://www.frutosdelguacabo.com/">Link</a>',
        produce: 'What they produce: '
    },

    {
        location: [-66.09226, 18.38803],
        reference:'51',
        name: '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37711333_1768126216555768_5434017585249124352_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=236e0f63bcf9e1d9dbfadffec8fd8125&oe=5D2989B7"/><br>El Pretexto',
        content:'Municipality: Cayey',
        note: 'Note: Puerto Ricos First Culinary Farm Lodge. <br>Hosting events and culinary pop-ups. <br>Also hosts educational workshops.<a href=\"https://www.elpretextopr.com/welcome">Link</a>',
        produce: 'What they produce: '
    },



    ]

    data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML('<h3>' + d.name +'</h3><p>' + d.content + '</p>' + '<p>' + d.note + '</p>'  + '<p>' + d.produce + '</p>' )
    marker.setPopup(popup)

})