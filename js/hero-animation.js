// function move() {
//   var elem = document.getElementById("progresssss");
//   var width = 0.5;
//   console.log("I am here...")
//   var seconds = 6;
//   // change the milliseconds to 10 or 5 to fill it relatively faster
//   var id = setInterval(frame, seconds * 1000 / 100);
//   function frame() {
//     var today = new Date();
//     console.log(today.getSeconds());
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       // console.log("Hellasndkjanskdja")
//       width += 0.5;
//       elem.style.width = width + '%';
//     }
//   }
// }

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
    $('#progress_'+this.positioning).animate({
      width: '100%'
    }, {
      duration: 6000,
      complete: function() {
        console.log('here');
        $(this).css('width', '0%')
        this.gotoNext();
          document
            .querySelector("#carousel__main")
            .addEventListener("transitionend", () => {
              this.changeOrder();
            })
          this.changePosition();
          this.addEvents();
      }
    })
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

  changePosition: function() {
    if (this.positioning == 4) this.positioning = 1;
    else this.positioning++;
  },

  gotoNext: function () {
    document
      .querySelector("#carousel__main")
      .classList.add("carousel__main-transition");
    document.querySelector("#carousel__main").style.transform =
      "translateX(-100%)";
  }
};


// move();

// move();
FlexSlider.init();



