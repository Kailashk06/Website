// JSON DATA START--------------------------------

var data = [
    {
        "prodId":"1",
        "productName":"Pro Fitness Folding Workout Bench",
        "Price" : "€ 200.00",
        "Images":"assets/img/product/product-1.png",
        "userRating":"4.7 / 5",
        "desc":"The ultimate workout package, this Pro Fitness Folding Workout Bench can help you reach your fitness goals. Perfect for weights exercises you can help build and tone a range of muscles including your chest, back, arms and shoulders. It also includes a detachable preacher curl and leg curl station, 1 x 165cm bar, 2 x 45cm dumbbell bars, 6 x 5kg, and 8 x 2.5kg vinyl weight plates. When you're finished it folds easily for storage.",
        "Category":"Weight, Gym"

    },

    {
        "prodId":"2",
        "productName":"One Electronic Cross Trainer",
        "Price" : "€ 499",
        "Images":"assets/img/product/product-2.png",
        "userRating":"4.4 / 5 ",
        "desc":"With a substantial 9kg rear-drive flywheel the GX40s gives you an exceptionally smooth motion during your workout. Its 12 pre-set programs challenge you on a variety of targets and settings such as time elapsed and calories burned during a workout so you can stride towards all kinds of different goals whether you're aiming to improve your cardio fitness or lose weight.",
        "Category":"Cardio, Gym"

    },


    {
        "prodId":"3",
        "productName":"Treadmill",
        "Price" : "€ 1900",
        "Images":"assets/img/product/product-3.jpg",
        "userRating":"4.7 / 5 ",
        "desc":"The Reebok Jet 100 Treadmill comes with 24 motivational programs and bodyfat analysis, so you can get the most from your workout. Measuring 64 x 32 mm (3.5 diagonal), the display window is clear and uncluttered, giving values for incline level, pulse, calories, time, speed, distance and program selected. With direct speed and incline buttons, the console is also easy to operate while exercising. An integrated adjustable cooling fan keeps you cool and comfortable while a media hub with USB port lets you move to your favourite tunes.",
        "Category":"Cardio, Gym"

    },


    {
        "prodId":"4",
        "productName":"Dumbbells",
        "Price" : "€ 499",
        "Images":"assets/img/product/product-4.jpg",
        "userRating":"4.9 / 5",
        "desc":"The vinyl dumbbells set is a set of different weights between 0.5 kg and 5 kg. Thanks to the anatomical shape and the vinyl coating these vinyl dumbbells lie comfortably in hand. These vinyl dumbbells with weights from 0.5 to 5 kg are ideal for the beginner.",
        "Category":"Weight Training, Gym"

    },


    {
        "prodId":"5",
        "productName":"Gym Matts",
        "Price" : "€ 199",
        "Images":"assets/img/product/product-5.jpg",
        "userRating":"5 / 5",
        "desc":"Even if your home gym is on the bare-bones side, you’ll want to upgrade it with a gym mat. These thick mats keep spin bikes in place and helps you maintain your footing during a cardio class. The main difference between a gym mat and your average yoga mat is size and weight. Gym mats tend to be bigger, thicker, and more firm. And while we’ve written before about big-ticket equipment to put on a gym mat — including the best treadmills, weight benches, and kettlebells — here, we’ve rounded up the best gym mats for every type of home gym.",
        "Category":"Protection, Gym"

    },


    {
        "prodId":"6",
        "productName":"Tri Grip Iron Weight Plates",
        "Price" : "€ 399",
        "Images":"assets/img/product/product-6.jpg",
        "userRating":"4.6 / 5",
        "desc":"Enhance your current muscle building routine with high performance Tri Grip Plates. The Tri Grip Plate’s unique ‘easy grip’ feature consists of three hand slots balanced evenly around the plate. They also facilitate accurate weight distribution. This ensures that your time is focused on working out rather than assembling equipment. The Trip Grip Weight Plates can be used individually for both overhead lifts and tricep workouts. ",
        "Category":"Weight Training, Gym "

    },


    {
        "prodId":"7",
        "productName":"Multi Gym Single Station",
        "Price" : "€ 2799",
        "Images":"assets/img/product/product-7.jpg",
        "userRating":"4.8 / 5",
        "desc":"Multi Gym Single Station comes with a massive 145lb weight stack. The Iron Man range of gyms have such an extremely high build quality that we are proud to offer a lifetime warranty on the frame. The gym is made from very robust 38mm steel square tubing with black chip resistant powder coating and impact absorbing rubber end caps. This home gym like all Iron Man products is built to last, ensuring it can be a prominent feature in your home workouts for years ahead. ",
        "Category":"Weight Training, Gym"

    },


    {
        "prodId":"8",
        "productName":"Indoor Exercise Bike",
        "Price" : "€ 999",
        "Images":"assets/img/product/product-8.jpg",
        "userRating":"5/5",
        "desc":"Indoor Exercise Bike  is designed to work in tandem with Yesoul Sports App via Bluetooth connectivity. Yesoul Sports App is available on iOS and Android devices to get on-demand training and cycling classes. It also enable to monitor your performance, including distance, time, calories burned, speed, heart rate, odometer and cadence, so you can adjust your workouts as needed.",
        "Category":"Cardio, Gym"

    },


    {
        "prodId":"9",
        "productName":"Weight Lifting Rods(Set Of 3)",
        "Price" : "€ 799",
        "Images":"assets/img/product/product-9.jpg",
        "userRating":"4.3/5",
        "desc":"Sleeve bar holds weights up to100- 300 LBS. Accommodates weight plates with 1 inch centre holes. Ergonomic design keeps storage easy. Simply clean your weighted bar to wipe away debris and sweat ",
        "Category":" Weight, Gym "

    },


    {
        "prodId":"10",
        "productName":"Exercise Ball",
        "Price" : "€ 149",
        "Images":"assets/img/product/product-10.jpg",
        "userRating":"5/5",
        "desc":"If you're looking to amp up your at-home workout, look no further than a stability ball. Because you're working with less surface area, stability balls are great for testing your balance, strength, and form, forcing you to recruit more muscles as you hold planks, push-ups, and glute bridges. This versatile piece of fitness equipment will also challenge your range of motion, leveling up your workout with rotational movements.",
        "Category":"Cardio, Gym"

    }

];

// JSON DATA END--------------------------------


// SEARCH PRODUCT DATA START--------------------------------

function search_product() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
     try
     {
    var found= data.filter(
      function(data){return data.productName.toLowerCase() == input} 
  );
    document.getElementById("imgdiv").style.display = "none";
    document.getElementById("productDisplay").style.display = "initial";
  document.getElementById('productD').innerHTML='<table><tr><td rowspan="5"><img src="'+ found[0].Images +'">' + '</td>'
  + '<td>'+ " Product Name : " + found[0].productName + '</td></tr>' 
  + '<tr><td>'+ " Product Category :  " + found[0].Category + '</td></tr>'
  + '<tr><td>'+ " Product Price : " + found[0].Price + '</td></tr>'
  + '<tr><td>'+ " Product Rating : " + found[0].userRating + '</td></tr>'
  + '<tr><td>'+ " Product Description : " + found[0].desc + '</td></tr></table>'



  
  
  
  +'</tr><table>';
  
  
  
  
  
  
  document.getElementById('productPrice').innerHTML=found[0].Price;
  document.getElementById('productRating').innerHTML=found[0].userRating;
  document.getElementById('productCategory').innerHTML=found[0].Category;
  document.getElementById('productdesc').innerHTML=found[0].desc;
  document.getElementById('productImage').innerHTML = '<img src="'+ found[0].Images +'">';

    }
    catch
    {
        alert("product not available")
    }

}
// SEARCH PRODUCT DATA END--------------------------------



// DISPLAY PRODUCT DATA START--------------------------------
function getProductById(id) {


var found= data.filter(
    function(data)
    
    {
        return data.prodId == id} 
);
document.getElementById("imgdiv").style.display = "none";
document.getElementById("productDisplay").style.display = "initial";
//alert(found[0].productName);
  document.getElementById('productName').innerHTML=found[0].productName;
  document.getElementById('productPrice').innerHTML=found[0].Price;
  document.getElementById('productRating').innerHTML=found[0].userRating;
  document.getElementById('productCategory').innerHTML=found[0].Category;
  document.getElementById('productdesc').innerHTML=found[0].desc;
  document.getElementById('productImage').innerHTML = '<img style="width: 100%;" src="'+ found[0].Images +'">';

}

// DISPLAY PRODUCT DATA END--------------------------------
function unhide()
{
  document.getElementById("imgdiv").style.display = "initial";
  document.getElementById("productDisplay").style.display = "none";
}

function openModal()
{
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
search_product();
}