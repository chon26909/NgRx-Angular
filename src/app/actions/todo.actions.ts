import { Action } from '@ngrx/store';
import { todoActionTypes } from '../shared/enum/todo-action-type';

export class ActionParent implements Action {
    type: any;
    playload: any;
}

export class TodoAdd implements ActionParent {
    type: todoActionTypes.Add,
    playload: any
}
