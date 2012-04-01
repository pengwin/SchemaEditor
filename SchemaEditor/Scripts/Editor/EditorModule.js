
app.Editor.Views = (function (parent) {

    var popUpView = function () {
        this._popup = $('.popup__overlay');
    };

    popUpView.prototype.Show = function () {
        this._popup.css('display', 'block');
    };

    popUpView.prototype.Hide = function () {
        this._popup.css('display', 'none');
    };

    parent.PopUpView = popUpView;
    return parent;
} (app.Editor.Views || {}));