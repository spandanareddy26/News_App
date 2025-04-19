//! Objects---
const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      desc: "A calm mountain view with clouds.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      desc: "A peaceful forest path in autumn.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      desc: "City skyline with a golden sunset.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      desc: "Minimal desk setup for productivity.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
      desc: "Hot coffee and a cozy book corner.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1742455147775-4f5f6c09011b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
      desc: "Road trip with scenic mountain view.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1",
      desc: "Serene beach waves hitting the shore.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1726549384638-e530b978ac3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Dog enjoying the breeze from car window.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
      desc: "Night sky filled with stars and dreams.",
      icon: "ri-heart-fill",
    },
    {
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
      desc: "Rainy street lights through a glass window.",
      icon: "ri-heart-fill",
    },
  ];
  //! ---Cards Apper ----
  const feedContainer = document.querySelector("#feed");
  
  function repeatCards() {
  
    var sum = "";
  
    cardsData.forEach(function (card, index) {
      // console.log(card,index);
  
      sum = sum +
        `<div class="card" >
          <img id=${index} src="${card.image}" alt="card-image">
          <p class="descp">${card.desc}</p>
          <i class="ri-heart-fill"></i>
      </div>`;
    });
  
    feedContainer.innerHTML = sum;
  }
  
  repeatCards();
  
  
  feedContainer.addEventListener('dblclick', function (e) {
   
  
    var card = e.target.closest('.card');
  
  
    if (card) {
      var icon = card.querySelector("i");
      var itag = document.createElement("i");
      itag.setAttribute("class", "ri-heart-fill middle");
      itag.style.position = "absolute";
      itag.style.top = "50%";
      itag.style.left = "50%";
      itag.style.transform = "translate(-50%,-50%) scale(0)";
      itag.style.fontSize = "40px";
      itag.style.opacity = "1";
      itag.style.transition = "all ease 0.5s";
      itag.style.color = "red";
  
      card.appendChild(itag);
  
      setTimeout(function () {
        itag.style.transform = "translate(-50%,-50%) scale(1)";
      }, 10);
  
      setTimeout(function () {
        itag.remove();
      }, 1000);
  
      if (icon) {
        icon.style.color = "red";
      }
    }
  
    icon.addEventListener("click", function () {
      if (icon.style.color === "rgba(90, 87, 87, 0.698)") {
        icon.style.color = "red";
      } else {
        icon.style.color = "rgba(90, 87, 87, 0.698)";
      }
    });
  });
  
  
  //! -------Dark Theme ----------
  
  const themebtn = document.querySelector(".theme");
  const body=document.body;
  
  //For Loading back
  
  const savedTheme=localStorage.getItem('theme');
  
  if(savedTheme)
  {
    body.classList.add(savedTheme);
  }
  
  themebtn.addEventListener("click",function()
  {
    body.classList.toggle('dark');
  
    if(body.classList.contains('dark'))
    {
      localStorage.setItem('theme','dark');
    }
    else{
      localStorage.setItem('theme','light');
    }
  
  });
  
  
  
  //! ------------ Load More ------------
  
  var currentIndex=0;
  const cardsPerLoad=3;
  
  const loadMorebtn=document.querySelector("#loadMoreBtn");
  
  function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${cardData.image}" alt="Card Image">
      <p class="descp">${cardData.desc}</p>
      <i class="${cardData.icon}"></i>
    `;
  
    return card;
  }
  
  function loadCards() {
    const nextCards = cardsData.slice(currentIndex, currentIndex + cardsPerLoad);
    nextCards.forEach(cardData => {
      const card = createCard(cardData);
      feedContainer.appendChild(card);
    });
  
    currentIndex += cardsPerLoad;
  
    // Hide button if no more cards
    if (currentIndex >= cardsData.length) {
      loadMoreBtn.style.display = "none";
    }
  }
  loadCards();
  loadMorebtn.addEventListener("click",loadCards);

  //! ------ Heart Like Feature -------
  
  function handleheartlike() {
    var allcard = document.querySelectorAll(".card");
  
    allcard.forEach(function (card) {
      var icon = card.querySelector("i");
      card.addEventListener("dblclick", function () {
        var itag = document.createElement("i");
        itag.setAttribute("class", "ri-heart-fill middle");
        itag.style.position = "absolute";
        itag.style.top = "50%";
        itag.style.left = "50%";
        itag.style.transform = "translate(-50%,-50%) scale(0)";
        itag.style.fontSize = "40px";
        itag.style.opacity = "1";
        itag.style.transition = "all ease 0.5s";
        itag.style.color = "red";
  
        card.appendChild(itag);
  
        setTimeout(function () {
          itag.style.transform = "translate(-50%,-50%) scale(1)";
        }, 10);
  
        setTimeout(function () {
          itag.remove();
        }, 1000);
  
        if (icon) {
          icon.style.color = "red";
        }
      });
  
      icon.addEventListener("click", function () {
        if (icon.style.color === "rgba(90, 87, 87, 0.698)") {
          icon.style.color = "red";
        } else {
          icon.style.color = "rgba(90, 87, 87, 0.698)";
        }
      });
    });
  }
  
  // handleheartlike();
  
  //! ------Live Time------
  
  function updateTime() {
    const timeelem = document.querySelector("#time");
    const now = new Date();
  
    console.log(now);
    let hour = now.getHours().toString().padStart(2, "0");
    let min = now.getMinutes().toString().padStart(2, "0");
    let sec = now.getSeconds().toString().padStart(2, "0");
  
    timeelem.innerHTML = `${hour}:${min}:${sec}`;
  }
  
  function liveTime() {
    updateTime();
    setInterval(updateTime, 1000);
  }
  
  liveTime();