$(document).ready(function () {
    var marka = ["Asus", "Dell", "Hp", "Lenovo", "Acer"];
    var lu = document.querySelector(".row1 .category");
    var input = document.querySelector("#s");
    var stock = document.querySelector(".stock");
    var stock_div = document.querySelectorAll(".stock .col-3");
    let mehsul;
    var acer = [{
        ad: "Acer",
        tesvir: "Acer1",
        qiymet: "2000 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer2",
        qiymet: "3000 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer3",
        qiymet: "2700 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer4",
        qiymet: "1200 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer5",
        qiymet: "2100 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer6",
        qiymet: "2450 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer7",
        qiymet: "1500 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer8",
        qiymet: "3000 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer9",
        tesvir: "Acer10",
        qiymet: "2000 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer11",
        qiymet: "2700 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    }, {
        ad: "Acer",
        tesvir: "Acer12",
        qiymet: "2700 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: "İntel Core i7 12th gen"
    },
    ];
    var asus = [{
        ad: "asus",
        tesvir: "Asus1",
        qiymet: "2000 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus2",
        qiymet: "2500 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "Asus",
        tesvir: "Asus3",
        qiymet: "1400 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus4",
        qiymet: "1700 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "Asus",
        tesvir: "Asus5",
        qiymet: "3400 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus6",
        qiymet: "1400 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "asus",
        tesvir: "Asus7",
        qiymet: "2800 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "Asus",
        tesvir: "Asus8",
        qiymet: "1700 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "Asus",
        tesvir: "Asus9",
        qiymet: "1900 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    },
    {
        ad: "Asus",
        tesvir: "Asus10",
        qiymet: "2700 AZN",
        telefon: "055-555-6171",
        yeni: "bəli",
        emeliyaddas: "16GB",
        CPU: "Core i9",
        daimiyaddas: "500GB",
        daimitipi: "SSD",
        emeliyyat: "win 10",
        GPU: ""
    }

    ];
    var dell = [
        {
            ad: "Dell",
            tesvir: "Dell 1 decs",
            qiymet: "1700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Dell",
            tesvir: "Dell2 decs",
            qiymet: "2500 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Dell",
            tesvir: "Dell3 decs",
            qiymet: "1700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Dell",
            tesvir: "Dell3 decs",
            qiymet: "1700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Dell",
            tesvir: "Dell4 decs",
            qiymet: "1900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Dell",
            tesvir: "Dell5 decs",
            qiymet: "2000 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Dell",
            tesvir: "Dell6 decs",
            qiymet: "2800 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Dell",
            tesvir: "Dell7 decs",
            qiymet: "2900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Dell",
            tesvir: "Dell8 decs",
            qiymet: "1900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Dell",
            tesvir: "Dell9 decs",
            qiymet: "2900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Dell",
            tesvir: "Dell10 decs",
            qiymet: "1800 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }
    ];
    var lenovo = [
        {
            ad: "Lenovo",
            tesvir: "Lenovo1",
            qiymet: "2785 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 11",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo2",
            qiymet: "2200 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo3",
            qiymet: "1700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo4",
            qiymet: "1900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo5",
            qiymet: "1700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo6",
            qiymet: "2800 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo7",
            qiymet: "1900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo8",
            qiymet: "1800 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo9",
            qiymet: "2000 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "Lenovo10",
            qiymet: "2300 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Lenovo",
            tesvir: "lenovo11",
            qiymet: "1700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Lenovo",
            tesvir: "Lenovo12",
            qiymet: "2400 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Lenovo",
            tesvir: "Lenovo13",
            qiymet: "2400 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Lenovo",
            tesvir: "Lenovo14",
            qiymet: "2300 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 11",
            GPU: "İntel Core i7 12th gen"
        },
        {
            ad: "Lenovo",
            tesvir: "Lenovo15",
            qiymet: "2700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 11",
            GPU: "İntel Core i7 12th gen"
        }
    ];
    var hp = [
        {
            ad: "Hp",
            tesvir: "Hp1",
            qiymet: "2000AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp2",
            qiymet: "3000 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp3",
            qiymet: "2700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp4",
            qiymet: "2700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp5",
            qiymet: "1900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp6",
            qiymet: "1200 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp7",
            qiymet: "2900 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp8",
            qiymet: "1200 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp9",
            qiymet: "2700 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }, {
            ad: "Hp",
            tesvir: "Hp10",
            qiymet: "3200 AZN",
            telefon: "055-555-6171",
            yeni: "bəli",
            emeliyaddas: "16GB",
            CPU: "Core i9",
            daimiyaddas: "500GB",
            daimitipi: "SSD",
            emeliyyat: "win 10",
            GPU: "İntel Core i7 12th gen"
        }
    ];
    let content;



    function kompadd(cat) {
        var js = JSON.parse(localStorage.getItem(`komp`));
        for (var i = 0; i < js.length; i++) {
            if (cat.toLowerCase() == js[i].category.toLowerCase()) {
                if (content == "acer") {
                    mehsul = acer;
                } else if (content == "asus") {
                    mehsul = asus;
                } else if (content == "dell") {
                    mehsul = dell;
                } else if (content == "hp") {
                    mehsul = hp;
                } else if (content == "lenovo") {
                    mehsul = lenovo;
                }
                var col3 = document.createElement("div");
                col3.classList.add("col-3");
                var button = document.createElement("button")
                button.innerHTML = "Ətraflı məlumat";
                button.setAttribute('id', i);
                button.classList.add("etrafli");
                var stockItems = document.createElement("div");
                stockItems.classList.add("stock-items");
    
                var img = document.createElement("img");
                img.src = `${js[i].img}`;
         
    
    
                var p = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                var p4 = document.createElement("p");
                var p5 = document.createElement("p");
                p.innerHTML = `Adı:${js[i].category}`;
                p2.innerHTML = `Təsviri:${js[i].tesvir}`;
                p3.innerHTML = `Qiymət::${js[i].price}`;
                p4.innerHTML = `Yeni::${js[i].yoxla}`;
                p5.innerHTML = `Telefon::${js[i].telefon}`;
                stockItems.appendChild(img);
                stockItems.appendChild(p);
                stockItems.appendChild(p2);
                stockItems.appendChild(p3);
                stockItems.appendChild(p4);
                stockItems.appendChild(p5);
                stockItems.appendChild(button)
                col3.appendChild(stockItems);
                stock.appendChild(col3);

            
            }

        }

 
    document.addEventListener('DOMContentLoaded', function() {
            // etrafli sinfinə malik olan bütün düymələri seç
            var buttons = document.querySelectorAll('.etrafli');
            
            // Hər bir düyməyə klik hadisəsi əlavə et
            buttons.forEach(function(button) {
                button.addEventListener('click', function() {
                    // localStorage-dan məhsul məlumatlarını al
                    var js = JSON.parse(localStorage.getItem('komp'));
                    
                    var productName = document.getElementById('ad');
                    var productDescription = document.getElementById('tesvir');
                    var productImage = document.getElementById('img');
                    var productPrice = document.getElementById('qiymet');
   
                    productName.textContent = js.name;
                    productDescription.textContent = js.description;
                    productImage.src = js.image;
                    productPrice.textContent = js.price;
                    
                    
                    document.getElementById('product-info').style.display = 'block';
                });
            });
        });

    }
    
    
    for (var i = 0; i < marka.length; i++) {
        var li = document.createElement("li");
        li.classList.add("item");
        li.innerText = marka[i];
        lu.appendChild(li);
        var item = document.querySelectorAll(".category .item");
        item[i].addEventListener("click", function () {
            $(".stock").empty();

            content = String(this.innerText);
            content = content.toLowerCase();
            if (content == "acer") {
                mehsul = acer;
            } else if (content == "asus") {
                mehsul = asus;
            } else if (content == "dell") {
                mehsul = dell;
            } else if (content == "hp") {
                mehsul = hp;
            } else if (content == "lenovo") {
                mehsul = lenovo;
            }
            $(".sp").removeClass("d-none")
            kompadd(this.innerHTML);
            setTimeout(() => {
                $(".sp").addClass("d-none");

                for (var i = 0; i < 9; i++) {
                    var col3 = document.createElement("div");
                    col3.classList.add("col-3");
                    var button = document.createElement("button")
                    button.innerHTML = "Ətraflı məlumat";
                    button.setAttribute('id', i);
                    button.classList.add("etrafli");
                    var stockItems = document.createElement("div");
                    stockItems.classList.add("stock-items");
                    var img = document.createElement("img");
                    img.src = `/Project-github/img/${content}.jpg`;
                    var p = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    var p4 = document.createElement("p");
                    var p5 = document.createElement("p");
                    p.innerHTML = `Adı:${mehsul[i].ad}`;
                    p2.innerHTML = `Təsviri:${mehsul[i].tesvir}`;
                    p3.innerHTML = `Qiymət:${mehsul[i].qiymet}`;
                    p4.innerHTML = `Yeni:${mehsul[i].yeni}`;
                    p5.innerHTML = `Telefon:${mehsul[i].telefon}`;
                    stockItems.appendChild(img);
                    stockItems.appendChild(p);
                    stockItems.appendChild(p2);
                    stockItems.appendChild(p3);
                    stockItems.appendChild(p4);
                    stockItems.appendChild(p5);
                    stockItems.appendChild(button)
                    col3.appendChild(stockItems);
                    stock.appendChild(col3);

                }

                $(".etrafli").click(function () {
                    var attr = $(this).attr('id');
                    $(".popup").removeClass("d-none");
                    $("#img").attr('src', `/Project-github/img/${content}.jpg`);
                    $("#ad").text(mehsul[attr].ad);
                    $("#tesvir").text(mehsul[attr].tesvir);
                    $("#qiymet").text(mehsul[attr].qiymet);
                    $("#telfon").text(mehsul[attr].telefon);
                    $("#yeni").text(mehsul[attr].yeni);
                    $("#eyaddas").text(mehsul[attr].emeliyaddas);
                    $("#cpu").text(mehsul[attr].CPU);
                    $("#dyaddas").text(mehsul[attr].daimiyaddas);
                    $("#dtip").text(mehsul[attr].daimitipi);
                    $("#emeliyyat").text(mehsul[attr].emeliyyat);
                    $("#gpu").text(mehsul[attr].GPU);

                })

            }, 500);


        })


    }
    for (var i = 0; i < 9; i++) {
        var col3 = document.createElement("div");
        col3.classList.add("col-3");
        var button = document.createElement("button")
        button.innerHTML = "Ətraflı məlumat";
        button.setAttribute('id', i);
        // button.classList.add(`id${i}`);
        button.classList.add("etrafli");
        var stockItems = document.createElement("div");
        stockItems.classList.add("stock-items");
        var img = document.createElement("img");
        img.src =  `/Project-github/img/acer.jpg`;
        var p = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        p.innerHTML = `Adı:${acer[i].ad}`;
        p2.innerHTML = `Təsviri:${acer[i].tesvir}`;
        p3.innerHTML = `Qiymet::${acer[i].qiymet}`;
        p4.innerHTML = `Yeni::${acer[i].yeni}`;
        p5.innerHTML = `Telefon::${acer[i].telefon}`;
        stockItems.appendChild(img);
        stockItems.appendChild(p);
        stockItems.appendChild(p2);
        stockItems.appendChild(p3);
        stockItems.appendChild(p4);
        stockItems.appendChild(p5);
        stockItems.appendChild(button)
        col3.appendChild(stockItems);
        stock.appendChild(col3);

    }
    //redakte

    $(".etrafli").click(function () {
        var attr = $(this).attr('id');
        $("#img").attr('src', "/Project-github/img/acer.jpg");
        $(".popup").removeClass("d-none");
        $("#ad").text(acer[attr].ad);
        $("#tesvir").text(acer[attr].tesvir);
        $("#qiymet").text(acer[attr].qiymet);
        $("#telfon").text(acer[attr].telefon);
        $("#yeni").text(acer[attr].yeni);
        $("#eyaddas").text(acer[attr].emeliyaddas);
        $("#cpu").text(acer[attr].CPU);
        $("#dyaddas").text(acer[attr].daimiyaddas);
        $("#dtip").text(acer[attr].daimitipi);
        $("#emeliyyat").text(acer[attr].emeliyyat);
        $("#gpu").text(acer[attr].GPU);

    });

    $("#exit").click(function () {
        $(".popup").addClass("d-none");
    })

    input.addEventListener("keyup", function (e) {
        if (e.keyCode > 64 && e.keyCode < 91) {

            var item = document.querySelectorAll(".category .item");
            for (var i = 0; i < item.length; i++) {
                item[i].remove();
            }
            for (var i = 0; i < marka.length; i++) {
                var value = input.value;
                if (marka[i].toLowerCase().includes(value.toLowerCase())) {
                    var li = document.createElement("li");
                    li.classList.add("item");
                    li.innerText = marka[i];
                    li.addEventListener("click", function () {
                        for (var i = 0; i < stock_div.length; i++) {
                            stock.children[0].remove();
                        }
                        var content = String(this.innerText);
                        content = content.toLowerCase();
                        for (var i = 0; i < 9; i++) {
                            var col3 = document.createElement("div");
                            col3.classList.add("col-3");
                            var button = document.createElement("button")
                            button.innerHTML = "Ətraflı məlumat"
                            button.classList.add(`id${i}`);
                            var stockItems = document.createElement("div");
                            stockItems.classList.add("stock-items");
                            var img = document.createElement("img");
                            img.src = `/Project-github/img/${content}.jpg`;
                            var p = document.createElement("p");
                            var p2 = document.createElement("p");
                            var p3 = document.createElement("p");
                            var p4 = document.createElement("p");
                            var p5 = document.createElement("p");
                            p.innerHTML = `Adı:`;
                            p2.innerHTML = `Təsviri:`;
                            p3.innerHTML = `Qiymət:`;
                            p4.innerHTML = `Yeni:`;
                            p5.innerHTML = `Telefon:`;
                            stockItems.appendChild(img);
                            stockItems.appendChild(p);
                            stockItems.appendChild(p2);
                            stockItems.appendChild(p3);
                            stockItems.appendChild(p4);
                            stockItems.appendChild(p5);
                            stockItems.appendChild(button);
                            col3.appendChild(stockItems);
                            stock.appendChild(col3);
                        }
                    })
                    lu.appendChild(li);

                }
            }


            if (lu.children.length == 0) {
                var li = document.createElement("li");
                li.classList.add("item");
                li.innerText = "Nəticə tapılmadı";
                lu.appendChild(li);
                var item = document.querySelectorAll(".category .item");
                item[i].addEventListener("click", function () {
                    for (let i = 0; i < stock_div.length; i++) {
                        
                    }
                    var content = String(this.innerText);
                    content = content.toLowerCase();
                    for (var i = 0; i < 9; i++) {
                        var col3 = document.createElement("div");
                        col3.classList.add("col-3");
                        var button = document.createElement("button")
                        button.innerHTML = "Ətraflı məlumat"
                        var stockItems = document.createElement("div");
                        stockItems.classList.add("stock-items");
                        var img = document.createElement("img");
                        img.src = `/Project-github/img/${content}.jpg`;
                        var p = document.createElement("p");
                        var p2 = document.createElement("p");
                        var p3 = document.createElement("p");
                        var p4 = document.createElement("p");
                        var p5 = document.createElement("p");
                        p.innerHTML = `Adı:`;
                        p2.innerHTML = `Təsviri:`;
                        p3.innerHTML = `qiymet:`;
                        p4.innerHTML = `Yeni:`;
                        p5.innerHTML = `Telefon:`;
                        stockItems.appendChild(img);
                        stockItems.appendChild(p);
                        stockItems.appendChild(p2);
                        stockItems.appendChild(p3);
                        stockItems.appendChild(p4);
                        stockItems.appendChild(p5);
                        stockItems.appendChild(button)
                        col3.appendChild(stockItems);
                        stock.appendChild(col3);


                    }
                })
            }
        } else if (input.value == "") {
            var item = document.querySelectorAll(".category .item");
            for (var i = 0; i < item.length; i++) {
                item[i].remove();
            }
            for (var i = 0; i < marka.length; i++) {
                var li = document.createElement("li");
                li.classList.add("item");
                li.innerText = marka[i];
                lu.appendChild(li);
                var item = document.querySelectorAll(".category .item");
                item[i].addEventListener("click", function () {
                    for (var i = 0; i < stock_div.length; i++) {
                        stock.children[0].remove();
                    }
                    var content = String(this.innerText);
                    content = content.toLowerCase();
                    for (var i = 0; i < 4; i++) {
                        var col3 = document.createElement("div");
                        col3.classList.add("col-3");
                        var button = document.createElement("button")
                        button.innerHTML = "Ətraflı məlumat"
                        var stockItems = document.createElement("div");
                        stockItems.classList.add("stock-items");
                        var img = document.createElement("img");
                        img.src = `/Project-github/img/${content}.jpg`;
                        var p = document.createElement("p");
                        var p2 = document.createElement("p");
                        var p3 = document.createElement("p");
                        var p4 = document.createElement("p");
                        var p5 = document.createElement("p");
                        p.innerHTML = `Adı:`;
                        p2.innerHTML = `Təsviri:`;
                        p3.innerHTML = `qiymet:`;
                        p4.innerHTML = `Yeni:`;
                        p5.innerHTML = `Telefon:`;
                        stockItems.appendChild(img);
                        stockItems.appendChild(p);
                        stockItems.appendChild(p2);
                        stockItems.appendChild(p3);

                        stockItems.appendChild(p4);
                        stockItems.appendChild(p5);
                        stockItems.appendChild(button)
                        col3.appendChild(stockItems);
                        stock.appendChild(col3);


                    }
                    $(".button").click(function () {
                        $(".popup").removeClass("d-none");

                    })
                    $("#exit").click(function () {
                        $(".popup").addClass("d-none");
                    })
                })
            }
        }
    });
    
    

    $('#computerSearchInput').on('keyup', function () {
        let axtar = $(this).val().toLowerCase();
        $(".stock-items").each(function () {
            let adText = $(this).find("#ad").text().toLowerCase();
            let tesvirText = $(this).find("#tesvir").text().toLowerCase();
            if (adText.indexOf(axtar) === -1 && tesvirText.indexOf(axtar) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

    

});


