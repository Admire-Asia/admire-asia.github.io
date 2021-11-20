const FlexSlider = {
  num_items: document.querySelectorAll(".hero__carousel-div").length,
  current: 1,
  init: function () {
    document
      .querySelectorAll(".hero__carousel-div")
      .forEach(function (element, index) {
        element.style.order = index + 1;
      });

    this.addEvents();
  },

  addEvents: function () {
    var that = this;
    setInterval(() => {
      this.gotoNext();
      document.querySelector("#carousel__main").addEventListener('transitionend', () => {
        this.changeOrder();
      });
    }, 6000);
  },

  changeOrder: function () {
    if (this.current == this.num_items) this.current = 1;
    else this.current++;

    let order = 1;

    for (let i = this.current; i <= this.num_items; i++) {
      document.querySelector(
        ".hero__carousel-div[data-position='" + i + "']"
      ).style.order = order;
      order++;
    }

    for (let i = 1; i < this.current; i++) {
      document.querySelector(
        ".hero__carousel-div[data-position='" + i + "']"
      ).style.order = order;
      order++;
    }

    document
      .querySelector("#carousel__main")
      .classList.remove("carousel__main-transition");
    document.querySelector("#carousel__main").style.transform = "translateX(0)";

    // document.querySelector("#progresssss[data-position='" + this.progressCurrent + "']").classList.add('progress_active')
  },
  gotoNext: function () {
    document
      .querySelector("#carousel__main")
      .classList.add("carousel__main-transition");
    document.querySelector("#carousel__main").style.transform =
      "translateX(-100%)";
  },
};

// move();

// move();
FlexSlider.init();
