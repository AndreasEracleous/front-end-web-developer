/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

//import "./src/assets/scss/main.scss"

// Load Nunito Sans typeface
//require('typeface-nunito-sans')

exports.shouldUpdateScroll = ({
routerProps: { location },
getSavedScrollPosition
}) => {
anchorScroll(location);
return false
}

function anchorScroll(location) {
    // Check for location so build does not fail
    if (location && location.hash) {
        setTimeout(() => {
            try {
                const item = document.querySelector(`${location.hash}`).offsetTop;
                //console.log(item)
                const mainNavHeight = document.querySelector(`#mainNav`).offsetHeight;
                window.scrollTo({top: item - (mainNavHeight*2), left: 0, behavior: 'smooth'});
            }
            catch(error) {
                console.error(error);
                // expected output: ReferenceError: nonExistentFunction is not defined
                // Note - error messages will vary depending on browser
            }
        }, 0);
    } else {
        window.scrollTo(0, 0);
    }

}