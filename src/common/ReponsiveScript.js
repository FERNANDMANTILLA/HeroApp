const w = window;
const d = document;

const responsiveScript = () => {
    const ww = w.innerWidth;
    const wh = w.innerHeight;
    const fontsize = ww;
    const fontsize2 = wh;

    if (ww <= 768) {
        d.querySelector('html').style.fontSize = fontsize2 / 50 + 'px';
        responsiveMedia('home-box', '(max-width: 700px)');
    }
    else {
        d.querySelector('html').style.fontSize = fontsize / 100 + 'px';
    }
    return ww;
}

const responsiveMedia = (id, mquery) => {
    let breakpoint = w.matchMedia(mquery);
    const responsive = (e) => {
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}

export {
    responsiveScript
}