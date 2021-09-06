const pickMeBtn = document.getElementById("btn");
const cancelBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");
const waiting = document.getElementById("waiting");
const results = document.getElementById("results");
const year = document.getElementById("year");
const model = document.getElementById("model");
const color = document.getElementById("color");
const modal = document.getElementById("modal");
const close = document.getElementById("closeMe");
const getCarTypeValue = document.getElementsByName("carType");
const carColorValue = document.getElementsByName("carColors");
const carModelValue = document.getElementsByName("carModels");

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

const closeModal = () => {
  modal.style.display = "none";
};

const showModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
};
pickMeBtn.addEventListener("click", showModal);

const carTypeValues = () => {
  for (let i = 0; i < getCarTypeValue.length; i++) {
    if (getCarTypeValue[i].checked) {
      console.log(getCarTypeValue[i].value);
      return getCarTypeValue[i].value;
    }
  }
};

const carColorValues = () => {
  for (let i = 0; i < carColorValue.length; i++) {
    if (carColorValue[i].checked) {
      console.log(carColorValue[i].value);
      return carColorValue[i].value;
    }
  }
};

const getYearModel = () => {
  for (let i = 0; i < carModelValue.length; i++) {
    if (carModelValue[i].checked) {
      console.log(carModelValue[i].value);
      return carModelValue[i].value;
    }
  }
};

const getImage = async () => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${color}car&client_id=ssTVtAtN1DjzvHiY0A6JJhgYSz8hdGF7XACzJG-yLhg`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  const { results } = data;
  console.log(results);
  const random = Math.floor(Math.random() * results.length);
  const image = results[random].urls.regular;
  const imageElement = document.getElementById("image");
  imageElement.src = image;
};

const submitted = () => {
  btn.style.display = "none";
  const userCar = new Car(carTypeValues(), carColorValues(), getYearModel());
  modal.style.display = "none";
  waiting.style.display = "block";
  console.log(userCar);
  setTimeout(() => {
    waiting.style.display = "none";
    results.style.display = "block";
    results.classList.add("results-show");
    getImage();
    year.innerHTML = userCar.year;
    model.innerHTML = userCar.model;
    color.innerHTML = userCar.make;
  }, 3000);
};

cancelBtn.addEventListener("click", closeModal);
close.addEventListener("click", closeModal);
submitBtn.addEventListener("click", submitted);
