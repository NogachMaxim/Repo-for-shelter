document.getElementById("back1").onclick = function(){
  document.getElementById("checkBurger").checked = false;
  zatemnenie();
}


function zatemnenie(){
  var inp=document.getElementById("back1");
  if(document.getElementById("checkBurger").checked){
    document.getElementById("Line_cont").style.animation="1s rotate1";
    inp.style.background="rgba(41, 41, 41, 0.6)";
    document.body.style.overflow="hidden";
    document.getElementsByClassName('Navmenu')[0].style.animation="1s slidein";
    }
  else{
    document.getElementById("Line_cont").style.animation="1s rotate2";
    inp.style.background="url(noise_lines_transparent@2X.png), radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%), #211F20";
    document.body.style.overflow="";
    document.getElementsByClassName('Navmenu')[0].style.animation="1s slideout";

  }
}

function Carousel(){
  var allNumbers=[1, 2, 3, 4, 5, 6, 7, 8];
  var numberNotShowCards = allNumbers.filter(n => window.getComputedStyle(document.getElementById("card"+n), null).display == 'none');
  var numberShowCards = allNumbers.filter(n => window.getComputedStyle(document.getElementById("card"+n), null).display != 'none');
  var randomIndex=Math.floor(Math.random()*numberNotShowCards.length);
  var elemToShow=document.getElementById("card"+numberNotShowCards[randomIndex]);
  document.getElementById("card"+numberShowCards[0]).id="card"+numberNotShowCards[randomIndex];
  elemToShow.id="card"+numberShowCards[0];
  numberNotShowCards.splice(randomIndex, 1);
  randomIndex=Math.floor(Math.random()*(numberNotShowCards.length-1));
  var elemToShow=document.getElementById("card"+numberNotShowCards[randomIndex]);
  document.getElementById("card"+numberShowCards[1]).id="card"+numberNotShowCards[randomIndex];
  elemToShow.id="card"+numberShowCards[1];
  numberNotShowCards.splice(randomIndex, 1);
  randomIndex=Math.floor(Math.random()*(numberNotShowCards.length-1));
  var elemToShow=document.getElementById("card"+numberNotShowCards[randomIndex]);
  document.getElementById("card"+numberShowCards[2]).id="card"+numberNotShowCards[randomIndex];
  elemToShow.id="card"+numberShowCards[2];
}

document.querySelectorAll('[id=primary]').forEach((item, i) => {
    item.onclick = function(){
      const pets=[
        {
          "name": "Katrine",
          "img": "../../assets/images/pets-katrine.png",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
          "age": "6 months",
          "inoculations": ["panleukopenia"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
      {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
      },
      {
        "name": "Sophia",
        "img": "../../assets/images/pets-katrine1.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
      },
      {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
      },
      {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Freddie",
        "img": "../../assets/images/pets-katrine2.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
      }
      ];
      document.body.style.overflow="hidden";
      const newDivFon = document.createElement("div");
      newDivFon.id="newDivFon";
      const buttonClose = document.createElement("div");
      buttonClose.id="buttonClose";
      var imgClose = new Image();
      imgClose.src="../../assets/images/VClose.png";
      buttonClose.appendChild(imgClose);
      const newDiv = document.createElement("div");
      newDiv.id="newDiv";
      var img1 = new Image();
      img1.src=pets[i]['img'];
      newDiv.appendChild(img1);
      const cont = document.createElement("div");
      const h3=document.createElement("h3");
      h3.textContent=pets[i]['name'];
      cont.appendChild(h3);
      const h4=document.createElement("h4");
      h4.textContent=pets[i]['type']+"-"+pets[i]['breed'];
      cont.appendChild(h4);
      const text=document.createElement("text");
      text.textContent=pets[i]['description'];
      cont.appendChild(text);
      const list=document.createElement("ul");
      var li=document.createElement("li");
      li.style="position: absolute;height: 18px;left: 0px;top: 0px;";
      li.textContent="Age: "+pets[i]['age'];
      list.appendChild(li);
      li=document.createElement("li");
      li.style="position: absolute;height: 18px;left: 0px;top: 28px;";
      li.textContent="inoculations: "+pets[i]['inoculations'];
      list.appendChild(li);
      li=document.createElement("li");
      li.style="position: absolute;height: 18px;left: 0px;top: 56px;";
      li.textContent="diseases: "+pets[i]['diseases'];
      list.appendChild(li);
      li=document.createElement("li");
      li.style="position: absolute;height: 18px;left: 0px;top: 84px;";
      li.textContent="parasites: "+pets[i]['parasites'];
      list.appendChild(li);
      cont.appendChild(list);

      if(window.innerWidth>1279){
        newDivFon.style.cssText="position: absolute; width: 100%; height: 300%; left: 0px; top: -100%; background:rgba(41, 41, 41, 0.6); z-index:9989;";
        buttonClose.style.cssText="box-sizing: border-box;position: absolute;width: 52px;height: 52px;left:1080px;top: 0px;border: 2px solid #F1CDB3;border-radius: 100px; z-index:9999;";
        imgClose.style="position: absolute;left: 38.46%;right: 38.46%;top: 38.46%;bottom: 38.46%;";
        newDiv.style.cssText="position: absolute; width: 900px; height: 500px; left: 190px; top: 52px; box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04); z-index:9999; background: #FAFAFA; border-radius: 9px;";
        img1.style="position: absolute; width:500px; background: url(image.png); border-radius: 9px 0px 0px 9px;";
        cont.style="position: absolute; width: 351px;height: 362px;left: 529px;top: 50px;";
        h3.style="position: absolute;width: 145px;height: 45px;left: 1px;top: 0px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 35px;line-height: 130%;letter-spacing: 0.06em;color: #000000;";
        h4.style="position: absolute;height: 23px;left: 1px;top: 55px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 20px;line-height: 115%;letter-spacing: 0.06em;color: #000000;";
        text.style="position: absolute;width: 350px;height: 102px;left: 1px;top: 118px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 15px;line-height: 110%;letter-spacing: 0.06em;color: #000000;";
        list.style="position: absolute;width: 330px;height: 102px;left: 20px;top: 260px;";
      }
      if(window.innerWidth<1280 && window.innerWidth>767){
        newDivFon.style.cssText="position: absolute; width: 100%; height: 300%; left: 0px; top: -100%; background:rgba(41, 41, 41, 0.6); z-index:9989;";
        buttonClose.style.cssText="position: absolute;width: 52px;height: 52px;left:calc(50% + 630px/2); top: 0px;border: 2px solid #F1CDB3;border-radius: 100px;"
        imgClose.style="position: absolute;left: 38.46%;right: 38.46%;top: 38.46%;bottom: 38.46%;";
        newDiv.style.cssText="position: absolute; width: 630px; height: 350px; left: calc(50% - 630px/2); top: 52px; box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04); z-index:9999; background: #FAFAFA; border-radius: 9px;";
        img1.style="position: absolute; width:350px; background: url(image.png); border-radius: 9px 0px 0px 9px;";
        cont.style="position: absolute; width: 260px;height: 303px;left: 361px;top: 10px;";
        h3.style="position: absolute;width: 145px;height: 45px;left: 0px;top: 0px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 35px;line-height: 130%;letter-spacing: 0.06em;color: #000000; margin:0px;";
        h4.style="position: absolute;height: 23px;left: 1px;top: 55px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 20px;line-height: 115%;letter-spacing: 0.06em;color: #000000;  margin:0px;";
        text.style="position: absolute;width: 260px;height: 98px;left: 0px;top: 98px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 13px;line-height: 110%;letter-spacing: 0.06em;color: #000000;";
        list.style="position: absolute;width: 330px;height: 87px;left: 20px;top: 226px; margin:0px;";
      }
      if(window.innerWidth<768){
        newDivFon.style.cssText="position: absolute; width: 100%; height: 300%; left: 0px; top: -100%; background:rgba(41, 41, 41, 0.6); z-index:9989;";
        buttonClose.style.cssText="position: absolute;width: 52px;height: 52px;left:calc(50% + 240px/2); top: 0px;border: 2px solid #F1CDB3;border-radius: 100px;"
        imgClose.style="position: absolute;left: 38.46%;right: 38.46%;top: 38.46%;bottom: 38.46%;";
        newDiv.style.cssText="position: absolute; width: 240px; height: 341px; left: calc(50% - 240px/2); top: 52px; box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04); z-index:9999; background: #FAFAFA; border-radius: 9px;";
        img1.style="position: absolute; width:350px; background: url(image.png); border-radius: 9px 0px 0px 9px;";
        cont.style="position: absolute; width: 220px;height: 321px;left: 10px;top: 10px;";
        h3.style="position: absolute;width: 145px;height: 45px;left: 39px;top: 0px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 35px;line-height: 130%;letter-spacing: 0.06em;color: #000000; margin:0px;";
        h4.style="position: absolute;height: 23px;left: auto;top: 55px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 20px;line-height: 115%;letter-spacing: 0.06em;color: #000000;  margin:0px;";
        text.style="position: absolute;width: 220px;height: 112px;left: 0px;top: 98px;font-family: 'Georgia';font-style: normal;font-weight: 400;font-size: 13px;line-height: 110%;letter-spacing: 0.06em;color: #000000;";
        list.style="position: absolute;width: 154px;height: 87px;left: 11px;top: 234px; margin:0px;";
        newDiv.removeChild(img1);
      }

      newDiv.appendChild(cont);
      const currentDiv=document.getElementById("Pets-content");
      var parentDiv = document.getElementById("Pets");
      parentDiv.insertBefore(newDivFon, currentDiv.nextSibling);
      parentDiv.insertBefore(buttonClose, currentDiv.nextSibling);
      parentDiv.insertBefore(newDiv, currentDiv.nextSibling);
      document.querySelectorAll('[id=newDivFon]')[0].onmouseover = function(){
        buttonClose.style.background="#FDDCC4";
      }
      document.querySelectorAll('[id=newDivFon]')[0].onmouseout = function(){
        buttonClose.style.background="";
      }
      document.querySelectorAll('[id=buttonClose]')[0].onmouseover = function(){
        buttonClose.style.background="#FDDCC4";
      }
      document.querySelectorAll('[id=buttonClose]')[0].onmouseout = function(){
        buttonClose.style.background="";
      }
      document.querySelectorAll('[id=newDivFon]')[0].onclick = function(){
        closeModaL();
      }
      document.querySelectorAll('[id=buttonClose]')[0].onclick = function(){
        closeModaL();
      }
    }
});




function closeModaL(){
  var newDivFon=document.getElementById("newDivFon");
  var buttonClose=document.getElementById("buttonClose");
  var newDiv=document.getElementById("newDiv");
  document.body.style.overflow="";
  newDivFon.parentNode.removeChild(newDivFon);
  buttonClose.parentNode.removeChild(buttonClose);
  newDiv.parentNode.removeChild(newDiv);

}
