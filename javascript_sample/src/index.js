const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompeleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompeleteList = (text) => {

    // li生成
    const li = document.createElement("li");

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button(完了)生成
    const completebutton = document.createElement("button");
    completebutton.innerText = "完了";
    completebutton.addEventListener("click", () => {
        // 押された完了ボタンの親タグ（li)を削除
        deleteFromIncompleteList(completebutton.parentNode.parentNode);

        // 完了リストに追加する要素
        const addTarget = completebutton.parentNode;
        const text = addTarget.firstElementChild.innerText;

        // div以下を初期化
        addTarget.textContent = null;

        // liタグ生成
        const li = document.createElement("li");

        // p生成
        const p = document.createElement("p");
        p.innerText = text;

        // button(戻す)
        const returnbutton = document.createElement("button");
        returnbutton.innerText = "戻す";
        returnbutton.addEventListener("click", () => {
            const deleteTarget = returnbutton.parentNode.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            const text = returnbutton.parentNode.firstChild.innerText;
            createIncompeleteList(text);
        });

        // liの子要素にdivとpを設定
        addTarget.appendChild(p);
        addTarget.appendChild(returnbutton);
        li.appendChild(div);
        document.getElementById("complete-list").appendChild(li);
    });

    // button(削除)
    const deletebutton = document.createElement("button");
    deletebutton.innerText = "削除";
    deletebutton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ（li)を削除
        deleteFromIncompleteList(deletebutton.parentNode.parentNode);
    });

    // liの子要素にdivとpを設定
    div.appendChild(p);
    div.appendChild(completebutton);
    div.appendChild(deletebutton);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li);

}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());