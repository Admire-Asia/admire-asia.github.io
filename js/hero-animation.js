const FlexSlider = {
  num_items: document.querySelectorAll(".hero__carousel-div").length,
  current: 1,
  positioning: 1,
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
    // console.log(this.positioning);
    // var progresses = document.querySelector('.progress_'+this.positioning) || document.querySelector('.progress_'+this.positioning+'_inactive');
    // progresses.style.width = '100%';
    //   setTimeout(() => {
    //       progresses.className = 'progress_' + this.positioning +'_inactive'
    //       console.log(progresses.className)
    //       progresses.style.width = '0%';
    //       progresses.className = 'progress_' + this.positioning;
    //       this.gotoNext();
    //       document
    //         .querySelector("#carousel__main")
    //         .addEventListener("transitionend", () => {
    //           this.changeOrder();
    //         })
    //       this.changePosition();
    //       this.addEvents();
    // }, 6000)
    console.log(this.positioning);
    $("#progress" + this.positioning).animate(
      {
        width: "100%",
      },
      5000,
      function () {
        console.log("Complete.");
        FlexSlider.gotoNext();
        document
          .querySelector("#carousel__main")
          .addEventListener("transitionend", () => {
            that.changeOrder();
          });
        console.log("#progress" + that.positioning);
        var ps = (document.querySelector(
          "#progress" + that.positioning
        ).style.width = "0%");
        that.changePosition();
        that.addEvents();
      }
    );
    // progresses.style.transition = "width 6s ease-in-out"
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

  changePosition: function () {
    if (this.positioning == 4) this.positioning = 1;
    else this.positioning++;
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
