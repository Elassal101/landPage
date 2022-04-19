// creating document fradgment in docFragment
let docFragment = document.createDocumentFragment ();
// selevt ul list in mainList variable
let mainList = document.getElementById ("nav-bar");
// select sections 
const sections = document.querySelectorAll("section");
// making loop for sections and create li an a for each one and add it to docFragmnt 
for (const section of sections) {
    // create li
    const listItem = document.createElement("li");
    // create a
    const link = document.createElement("a");
    // add the section name to link by data-nav attribute in the section
    link.textContent = section.getAttribute("data-nav") /* or .dataSet.nav */;
    // adding class to links
    link.classList.add ("scroll-from");
    // connect the a(link) to its section by data-nav attribute
    link.setAttribute("href", `#${section.id}`)
    // append the link to li(listItem)
    listItem.appendChild(link);
    // append li to docFragment
    docFragment.appendChild (listItem);
}
// append the document fragment to ul list(mainList)
mainList.appendChild (docFragment);


window.addEventListener("scroll", () => {
    for (const section of sections) {
        const activeLink = document.querySelector(`[href = "#${section.id}"]`);
        if (section.getBoundingClientRect().top >= 0 && 
        section.getBoundingClientRect().top < 250) {
            activeLink.classList.add("my-class");
        }else {
            activeLink.classList.remove("my-class");
        }
    }
})

function eventClick () {
    const links = document.querySelectorAll(".scroll-from");
    links.forEach(function (evet) {
        evet.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedSection = document.getElementById(evet.getAttribute("href").substring(1));
            selectedSection.scrollIntoView({behavior: "smooth", block: "start"});
    });
});
}
eventClick();

const scroll = document.querySelector(".scroll-top");
scroll.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"});
});
