let data = [];
let data2 = [];
let data3 = [];



function getting() {
    $.ajax({
        url: "https://myjson.dit.upm.es/api/bins/6ui7",
        type: "GET",
        success: (value) => {
            data = value;
            mapping(data)
        }
    })
}
getting()

function mapping(value) {
    $("#row").html("")
    value.map((val, ind) => {
        let col = `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="m-2 text-center p-2" id="mcard">
                <img src="img.png" alt="">
                <h5 class="text-primary">${val.name}</h5>
                <button onclick="Basket(${ind})" class="btn btn-primary rounded-pill px-5">Корзина</button>
                <span id="heart" class="fs-4"><i class="bi bi-heart"></i></span>
            </div>
        </div>
        `
        $("#row").append(col)
    })
}
function getting2() {
    $.ajax({
        url: "https://myjson.dit.upm.es/api/bins/2rwf",
        type: "GET",
        success: (value) => {
            data2 = value;
            mapping2(data2)
        }
    })
}
getting2()

function mapping2(value) {
    $("#row2").html("")
    value.map((val, ind) => {
        let col = `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="m-2 text-center p-2" id="mcard">
                <img src="Image.png" alt="">
                <h5 class="text-primary">${val.name}</h5>
                <p class="fs-5"><span class="text-warning"><i class="bi bi-star-fill"></i></span>  4.7</p>
                <button onclick="Basket2(${ind})" class="btn btn-primary rounded-pill px-5">Корзина</button>
                <span id="heart" class="fs-4"><i class="bi bi-heart"></i></span>
            </div>
        </div>
        `
        $("#row2").append(col)
    })
}

function getting3() {
    $.ajax({
        url: "https://myjson.dit.upm.es/api/bins/bk9b",
        type: "GET",
        success: (value) => {
            data3 = value;
            mapping3(data3);
        }
    })
}
getting3()

function mapping3(value) {
    $("#row3").html("")
    value.map((val, ind) => {
        let col = `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="m-2 text-center p-2" id="mcard">
                <img src="Image3.png" alt="">
                <h5 class="text-primary">${val.name}</h5>
                <p class="fs-5"><span class="text-warning"><i class="bi bi-star-fill"></i></span> 4.7</p>
                <button onclick="Basket3(${ind})" class="btn btn-primary rounded-pill px-5">Корзина</button>
                <span id="heart" class="fs-4"><i class="bi bi-heart"></i></span>
            </div>
        </div>
        `
        $("#row3").append(col)
    })
}


let Korzina =[];

function Basket(index) {
    Korzina.push({
        name: data[index].name
    })
    console.log(index.name);
}
function Basket2(index) {
    Korzina.push({
        name: data2[index].name
    })
}
function Basket3(index) {
    Korzina.push({
        name: data3[index].name
    })
}

function AddKorzina(){
    Korzina.map((val,ind)=>{
        let k = `
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card text-center">
                    <h4>${val.name}</h4>
                </div>
            </div>
        </div>
    </div>
    `
    $("#korzinka").append(k)
    })
}
AddKorzina()

$("#Search").on("input", ()=>{
    let searching = data.filter(item=>{
        return item.name.toLowerCase().includes($("#Search").val());
    })
    mapping(searching);
})
$("#Search").on("input", ()=>{
    let searching = data2.filter(item=>{
        return item.name.toLowerCase().includes($("#Search").val());
    })
    mapping2(searching);
})
$("#Search").on("input", ()=>{
    let searching = data3.filter(item=>{
        return item.name.toLowerCase().includes($("#Search").val());
    })
    mapping3(searching);
})