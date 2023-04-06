import "./libs/toast/toastr.scss";

const footerCol1Items = ["Home", "About", "Contact us", "FAQ", "Blog"];
const footerCol2Items = ["Flutter", "Javascript", "Java", "Nodejs", "Python"];
const footerCol3Items = ["Home", "Feature", "Pricing", "FAQ", "About"];

//Animating the text

var options = {
  strings: ["<i>Top Educational Courses</i>"],
  typeSpeed: 40,
  showCursor: false,
};

var typed = new Typed(".typed", options);

//Validate the email id

$("#subscribeBtn").on("click", (e) => {
  e.preventDefault();
  const emailId = $("#newsletter1")[0].value;
  const isInvalid = validate.single(emailId, { presence: true, email: true });
  if (isInvalid === undefined) {
    console.log();
    toastr.success("You have been subscribed !");
  } else {
    toastr.error("Invalid email address is entered!");
  }
});

// Build footer items
function buildFooterItems(footerCol, itemsArr) {
  let listItems = "";
  _.forEach(itemsArr, (item) => {
    let menuItem =
      '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">' +
      item +
      "</a></li>";
    listItems += menuItem;
  });
  footerCol.innerHTML = listItems;
}

const footerCol1 = $("#footer-column-1")[0];
const footerCol2 = $("#footer-column-2")[0];
const footerCol3 = $("#footer-column-3")[0];

buildFooterItems(footerCol1, footerCol1Items);
buildFooterItems(footerCol2, footerCol2Items);
buildFooterItems(footerCol3, footerCol3Items);
