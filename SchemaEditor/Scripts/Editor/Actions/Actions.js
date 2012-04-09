// Module: Action
// collects actions into the single namespace

define(['actions/editaction', 'actions/drawrectaction', 'actions/moveaction','actions/deleteaction'],
    function (EditAction,DrawRectAction,MoveAction,DeleteAction) {

    return {
        EditAction: EditAction,
        DrawRectAction: DrawRectAction,
        MoveAction: MoveAction,
        DeleteAction: DeleteAction
    };
});