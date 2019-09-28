import { createStore } from "redux";

const inittodo = {
    todo: [],//やることの内容データ
    message: "ここには操作ステータスが表示されます、まずは予定を入力してみてください",//表示するメッセージ
    mode: "default",//どういう操作をしたかを示す値
    ftodo: []//検索したメモをまとめておく値
};

//レデューサー
export function todoReducer(state = inittodo, action) {

    switch (action.type) {
        case "ADD":
            return addReuce(state, action);

        case "DELETE":
            return deleteReduce(state, action);

        case "FIND":
            return findReduce(state, action);

        default:
            return state;
    }
}

//レデュースアクション

//メモ追加のレデュース処理
function addReuce(state, action) {
    let d=new Date();
    let f=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    let todo = {
        message: action.message,
        created: f
    };
    let newtodo = state.todo.slice();
    newtodo.unshift(todo);
    return {
        todo: newtodo,
        message: "追加されました",
        mode: "default",
        ftodo: []
    };
}

// メモ検索のレデュース処理
function findReduce(state, action) {
    let f = action.find;
    let ftodo = [];
    state.todo.forEach((value) => {
        if (value.message.indexOf(f) >= 0) {
            ftodo.push(value);
        }
    });
    return {
        todo: state.todo,
        message: '予定を検索しました：' + f + '',
        mode: "find",
        ftodo: ftodo
    };
}

// メモ削除のレデュース処理
function deleteReduce(state,action){
    let newtodo=state.todo.slice();
    newtodo.splice(action.index,1);
    return{
        todo:newtodo,
        message:'削除しました：予定No.'+action.index+'',
        mode:"delete",
        ftodo:[]
    }
}

//アクションクリエーター
//メモ追加のアクション
export function addTodo(text) {
    return {
        type: "ADD",
        message: text
    }
}

//メモ削除のアクション
export function deleteTodo(num) {
    return {
        type: "DELETE",
        index: num
    }
}

//　メモ検索のアクション
export function findToDo(text) {
    return {
        type: "FIND",
        find: text
    }
}


export default createStore(todoReducer);



