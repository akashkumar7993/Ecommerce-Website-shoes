let sortby_btn = document.getElementById('sortby_btn')
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sortby_btn.addEventListener("click", ()=> {
    sortby_opt.classList.toggle('sortby_opt_active');
});

let newest = document.getElementById('newest');
let all_shoes = document.getElementById('all_shoes');
let low = document.getElementById('low');
let high = document.getElementById('high');


// Fetching Images and details from json file

let url ="json.json";
let main_shoes_bx = document.getElementsByClassName('main_shoes_bx')[0];

fetch(url).then((Response => Response.json())).then((data) => {
    const all_shoes_array = [...data];
    const low_array = [...data];
    const high_array = [...data];
    const newest_array = [...data].splice(0,8);

    data.forEach((el, i) => {
        const{Img, Name, Category, MRP, Price, Tag, Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `<img src="${Img}" alt="${Name}">
        <h5 class="card_title" title="${Name}">${Name}</h5>
        <p>${Category} Shoes</p>
        <div class="price">
            <h5>Rs ${Price}</h5>
            <h5>MRP: <del>Rs ${MRP}</del></h5>
        </div>
        <div class="color_tag">
            <h6>Color ${Color}</h6>
            <h6>${Tag}</h6>
        </div>`;
        main_shoes_bx.appendChild(card);
    });

        newest.addEventListener("click", ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = ` <h5>Sort By: newest</h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        newest_array.forEach((el, i) => {
            const{Img, Name, Category, MRP, Price, Tag, Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs ${Price}</h5>
                <h5>MRP: <del>Rs ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_bx.appendChild(card);
        });
    
    })

    all_shoes.addEventListener("click", ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = ` <h5>Sort By: All Shoes</h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        all_shoes_array.forEach((el, i) => {
            const{Img, Name, Category, MRP, Price, Tag, Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs ${Price}</h5>
                <h5>MRP: <del>Rs ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_bx.appendChild(card);
        });
    
    })


    low.addEventListener("click", ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = ` <h5>Sort By: low</h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        low_array.sort (({Price : a}, {Price : b}) => a-b)

        low_array.forEach((el, i) => {
            const{Img, Name, Category, MRP, Price, Tag, Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs ${Price}</h5>
                <h5>MRP: <del>Rs ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_bx.appendChild(card);
        });
    
    })

        high.addEventListener("click", ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML = ` <h5>Sort By: High</h5>
        <i class="bi bi-chevron-down"></i>`;
        sortby_opt.classList.toggle('sortby_opt_active');

        high_array.sort (({Price : a}, {Price : b}) => a-b)
                high_array.reverse();
        high_array.forEach((el, i) => {
            const{Img, Name, Category, MRP, Price, Tag, Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `<img src="${Img}" alt="${Name}">
            <h5 class="card_title" title="${Name}">${Name}</h5>
            <p>${Category} Shoes</p>
            <div class="price">
                <h5>Rs ${Price}</h5>
                <h5>MRP: <del>Rs ${MRP}</del></h5>
            </div>
            <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
            </div>`;
            main_shoes_bx.appendChild(card);
        });
    
    })

    // Boots Shoes part

    let boots_array = all_shoes_array.filter((el) =>{
        return el.Type === 'Boots';
    })

    let All_Main_filter_array = [];
    let boots = document.getElementById('boots');

        boots.addEventListener('click', ()=>{
        if (boots.title === "boots_filter_on") {
            main_shoes_bx.innerHTML ='';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = "boots_filter_off";

            All_Main_filter_array = All_Main_filter_array.concat(boots_array);

            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }else{
            main_shoes_bx.innerHTML ='';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = "boots_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return boots_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }        
    })

    // loafers shoes part 

    let loafers_array = all_shoes_array.filter((el) =>{
        return el.Type === 'Loafer';
    })

    let loafers = document.getElementById('loafers');

    loafers.addEventListener('click', ()=>{
        if (loafers.title === "loafers_filter_on") {
            main_shoes_bx.innerHTML ='';
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = "loafers_filter_off";

            All_Main_filter_array = All_Main_filter_array.concat(loafers_array);

            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }else{
            main_shoes_bx.innerHTML ='';
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = "loafers_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return loafers_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }        
    })

    // icons Brand name 

    // Air force shoes grid

    let airforce_array = all_shoes_array.filter((el) =>{
        return el.Type === 'Air Force';
    })

    let airforce = document.getElementById('airforce');

    airforce.addEventListener('click', ()=>{
        if (airforce.title === "airforce_filter_on") {
            main_shoes_bx.innerHTML ='';
            airforce.classList.toggle('i_active');
            airforce.classList.toggle('bi-toggle2-off');
            airforce.classList.toggle('bi-toggle2-on');
            airforce.title = "airforce_filter_off";

            All_Main_filter_array = All_Main_filter_array.concat(airforce_array);

            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }else{
            main_shoes_bx.innerHTML ='';
            airforce.classList.toggle('i_active');
            airforce.classList.toggle('bi-toggle2-off');
            airforce.classList.toggle('bi-toggle2-on');
            airforce.title = "airforce_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return airforce_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }        
    })

    // Air Max Shoes Collection area

    let airmax_array = all_shoes_array.filter((el) =>{
        return el.Type === 'Air Max';
    })

    let airmax = document.getElementById('airmax');

    airmax.addEventListener('click', ()=>{
        if (airmax.title === "airmax_filter_on") {
            main_shoes_bx.innerHTML ='';
            airmax.classList.toggle('i_active');
            airmax.classList.toggle('bi-toggle2-off');
            airmax.classList.toggle('bi-toggle2-on');
            airmax.title = "airmax_filter_off";

            All_Main_filter_array = All_Main_filter_array.concat(airmax_array);

            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }else{
            main_shoes_bx.innerHTML ='';
            airmax.classList.toggle('i_active');
            airmax.classList.toggle('bi-toggle2-off');
            airmax.classList.toggle('bi-toggle2-on');
            airmax.title = "airmax_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return airmax_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }        
    })

    // zoom_rival Shoes Collection area
    let zoom_rival_array = all_shoes_array.filter((el) =>{
        return el.Type === 'Zoom Rival';
    })

    let zoom_rival = document.getElementById('zoom_rival');

    zoom_rival.addEventListener('click', ()=>{
        if (zoom_rival.title === "zoom_rival_filter_on") {
            main_shoes_bx.innerHTML ='';
            zoom_rival.classList.toggle('i_active');
            zoom_rival.classList.toggle('bi-toggle2-off');
            zoom_rival.classList.toggle('bi-toggle2-on');
            zoom_rival.title = "zoom_rival_filter_off";

            All_Main_filter_array = All_Main_filter_array.concat(zoom_rival_array);

            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }else{
            main_shoes_bx.innerHTML ='';
            zoom_rival.classList.toggle('i_active');
            zoom_rival.classList.toggle('bi-toggle2-off');
            zoom_rival.classList.toggle('bi-toggle2-on');
            zoom_rival.title = "zoom_rival_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return zoom_rival_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }        
    })

    // pegasus Shoes Collection area
    let pegasus_array = all_shoes_array.filter((el) =>{
        return el.Type === 'Pegasus';
    })

    let pegasus = document.getElementById('pegasus');

    pegasus.addEventListener('click', ()=>{
        if (pegasus.title === "pegasus_filter_on") {
            main_shoes_bx.innerHTML ='';
            pegasus.classList.toggle('i_active');
            pegasus.classList.toggle('bi-toggle2-off');
            pegasus.classList.toggle('bi-toggle2-on');
            pegasus.title = "pegasus_filter_off";

            All_Main_filter_array = All_Main_filter_array.concat(pegasus_array);

            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }else{
            main_shoes_bx.innerHTML ='';
            pegasus.classList.toggle('i_active');
            pegasus.classList.toggle('bi-toggle2-off');
            pegasus.classList.toggle('bi-toggle2-on');
            pegasus.title = "pegasus_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return pegasus_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }        
    })

    // Nike Dunke Shoes Collection area
    let nike_dunk_array = all_shoes_array.filter((el) =>{
        return el.Type === 'Nike Dunk';
    })

    let nike_dunk = document.getElementById('nike_dunk');

    nike_dunk.addEventListener('click', ()=>{
        if (nike_dunk.title === "nike_dunk_filter_on") {
            main_shoes_bx.innerHTML ='';
            nike_dunk.classList.toggle('i_active');
            nike_dunk.classList.toggle('bi-toggle2-off');
            nike_dunk.classList.toggle('bi-toggle2-on');
            nike_dunk.title = "nike_dunk_filter_off";

            All_Main_filter_array = All_Main_filter_array.concat(nike_dunk_array);

            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }else{
            main_shoes_bx.innerHTML ='';
            nike_dunk.classList.toggle('i_active');
            nike_dunk.classList.toggle('bi-toggle2-off');
            nike_dunk.classList.toggle('bi-toggle2-on');
            nike_dunk.title = "nike_dunk_filter_on";
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return nike_dunk_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const{Img, Name, Category, MRP, Price, Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `<img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>Rs ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>`;
                main_shoes_bx.appendChild(card);
            });        
        }        
    })











});
