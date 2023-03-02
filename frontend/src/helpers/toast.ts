import "../components/lib/toast";

/**
 * programmatically create toasts
 */

let wrap; // ref to x-toast-wrap

const _wrap = function () {
    if (wrap) return;
    wrap = document.createElement("x-toast-wrap");
    document.body.appendChild(wrap);
};

const _base = function (message: string, type: string = "", callback?: Function) {
    var elm = document.createElement("x-toast");
    //elm.setAttribute("message", message);
    elm.setAttribute("type", type);

    //if (callback) elm.onAction = callback;
    elm.innerHTML = message;
    wrap.appendChild(elm);
};

export const toast = (message: string, type: string = "", callback?: Function) => {
    _wrap();
    _base(message, type, callback);
};
