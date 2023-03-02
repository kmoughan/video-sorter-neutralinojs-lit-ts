import "../components/lib/alert-confirm";
import "../components/lib/dialog";

/**
 * programmatically create dialogs
 */

const _base = function (type: string, message: string, heading: string = "", callback?: Function) {
    var elm = document.createElement("x-alert-confirm");
    elm.setAttribute("type", type);
    elm.setAttribute("message", message);
    elm.setAttribute("heading", heading);
    document.body.appendChild(elm);
    if (callback) elm.onAction = callback;
};

export const dialog = {
    alert: (message: string, heading: string = "", callback?: Function) => {
        _base("alert", message, heading, callback);
    },
    confirm: (message: string, heading: string = "", callback?: Function) => {
        _base("confirm", message, heading, callback);
    },
};
