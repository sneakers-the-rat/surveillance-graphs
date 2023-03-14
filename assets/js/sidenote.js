/*
 * @author: Kaushik Gopal
 * @author: Michal Jirku
 *
 * A jQuery function that displays the footnotes
 * on the side (sidenotes) for easier reading.
 *
 * This is as recommended by Edward Tufte's style sidenotes:
 * https://edwardtufte.github.io/tufte-css/#sidenotes
 *
 * ---
 *
 *  Changelog:
 *  - 2020-12-26, Michal Jirku
 *    - switch to resizing (rather than removing and re-initializing)
 *    - run resize triggers via setInterval and from resize/font hooks
 *    - setInterval finally fixes iOS sizing issues for stlviewer
 *    - remove bunch of "global" vars
 *  - 2020-11-23, Michal Jirku
 *    - make sidenotes flexible width
 *    - make sidenotes not overlap one another
 *    - make sidenotes reload on font load (to help with &previous)
 *    - make sidenotes compatible with multiple links to the same note
 *  - 2020-09-07, Kaushik Gopal
 *    - initial version from https://blog.jkl.gg/jekyll-footnote-tufte-sidenote/
 *  - 2023-03-13, Jonny Saunders
 *    - removing jquery
 */

function getOffset(element)
{
    // https://stackoverflow.com/a/60083373/13113166
    if (!element.getClientRects().length)
    {
      return { top: 0, left: 0 };
    }

    let rect = element.getBoundingClientRect();
    let win = element.ownerDocument.defaultView;
    return (
    {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset,
      height: rect.height,
      width: rect.width
    });   
}


(function () {
    function showSidenote(index, sup, fnli, prev) {
        // construct sidenote div
        let content = fnli[index].innerHTML;
        let div = document.createElement("div");
        div.innerHTML = "<span class=\"sidenote-header\">" + (index+1) + ". </span>" + content;
        div.classList.add("sidenote");
        // add id to use as an anchor
        div.id = `sn:${sup.id.split(':')[1]}`;



        let sizeit = function() {
            let main = document.getElementsByTagName("main")[0];
            let main_position = getOffset(main);
            let ww = main.offsetWidth + main_position.left;

            let position = getOffset(sup);
            let minh = 0;
            if (prev != null) {
                // get previous sidenote from id
                let prev_el = document.getElementById(`sn:${prev.id.split(':')[1]}`);
                let prev_position = getOffset(prev_el);
                minh = parseFloat(prev_position.top) + parseFloat(prev_position.height) + 5;
            }


            let div_style = {
                "position": "absolute",
                "left": `calc(${ww}px - 0.5em)`,
                "top": minh > position["top"] ? `${minh}px` : `${position["top"]}px`,
                "min-width": ww > 420 ? `${ww/4}px` : `%{ww/3}px`,
                "max-width": `${ww/2}px`,
                "width": `${ww/2}px`,
                "margin-right": "1em"
            };
            Object.entries(div_style).forEach(([key, value]) => {
                div.style[key.toString()] = value.toString();
            })

            if (ww > 420) {
                if (div.classList.contains("sidenote-perma-hover")) {
                    div.classList.remove("sidenote-hover");
                    div.classList.remove("sidenote-perma-hover");
                }
                sup.addEventListener('mouseover', function() {
                    div.classList.add("sidenote-hover");
                });
                sup.addEventListener('mouseout', function () {
                    div.classList.remove("sidenote-hover");
                });
            } else {
                div.classList.add("sidenote-hover");
                div.classList.add("sidenote-perma-hover");
            }

        };

        sizeit();

        div.addEventListener('resize', sizeit);
        // div.data("sizing-func", sizeit); // called from hooks
        // setInterval(sizeit, 3000); // last resort, but also fix for dynamic pages

        document.getElementsByTagName('body')[0].appendChild(div);

        return div;
    }

    window.addEventListener('load', function() {
        let fnli = document.querySelectorAll(".footnotes ol li");
        // Load sidenotes
        let prev = null;
        // kramdown
        document.querySelectorAll("sup[role='doc-noteref']").forEach((el, index, arr) => {

            prev = showSidenote(el.textContent - 1, el, fnli, index > 0 ? arr[index-1] : null);
        });
        // commonmark
        document.querySelectorAll("sup[class='footnote-ref']").forEach((el, index, arr) => {
            prev = showSidenote(el.textContent - 1, el, fnli, index > 0 ? arr[index-1] : null);
        });


        // Helper functions
        let hideNotes = function() {
            let main = document.getElementsByTagName("main")[0]
            let main_position = getOffset(main);
            let footnotes = document.querySelectorAll('.footnotes');
            const ww = main.offsetWidth + main_position.left;
            if (ww > 420) {
                footnotes.forEach(note => {note.style.display = 'none'});
                
            } else {
                footnotes.forEach(note => {note.style.display = 'unset'});
            }
        };

        let resizeNotes = function() {
            document.querySelectorAll(".sidenote").forEach((el, index) => {
                let evt = new Event('resize');
                el.dispatchEvent(evt);
            });
        };

        // Run + bind them to triggers
        hideNotes();

        window.addEventListener('resize', () => {
            hideNotes();
            resizeNotes();
        })

        document.fonts.onloadingdone = function(fss) {
            resizeNotes();
        };
    });

})();
