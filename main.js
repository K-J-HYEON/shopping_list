// 7/14 내용을 입력하고 버튼을 누르면 undefined라고 뜬다.
// const item = createItem(text); createItem()에 text를 안넣었다.


// 사용자의 클릭 이벤트를 처리하는 버튼
const items = document.querySelector('.items');
// footer안에 들어있는 인풋
const input = document.querySelector('.footer__input');
// footer안에 들어있는 버튼
const addBtn = document.querySelector('.footer__button');


// onAdd()함수 안에서 로직을 쉽게 작성 하기 위해
// 순서대로 주석을 먼저 작성한 다음에
// 각 주석에 맞춰서 코드를 작성했다.
/* 주석쓸때 한 즐씩 쓰지말고 이 함수는 무엇인지 어떤의도로 만들었는지
어떻게 사용하는 것이 바람직한지 왜 사용해야 하는지 왜 이런방식으로 작성했는지
'왜'를 설명해야 한다.*/

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아온다.
    const text = input.value;

    // 만약에 텍스트가 텅텅 비어져 있으면 포커스 주고 나간다.
    if (text == '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items라는 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링 블럭이 항상 중간에 올 수 있도록
    item.scrollIntoView({ block: 'center' });
    // 5. 인풋을 초기화 한다.(사용자가 플러스 누르면 포커스가 들어오도록)
    // 인풋의 벨류를 텅텅 비어진 값으로 만든다.
    input.value = ''
    input.focus();
    // 사용자가 addbtn 누르면 input에 들어와 있는 텍스트를 읽어와야 한다.

}

//createItem을 만들자
function createItem(text) {
    // item 한 줄에 있는 요소를 만들어야 하니까
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');


    // main__renew.js에서 여기부터는 삭제하고 다른 거 추가함
    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name')
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    // 버튼안에 i태그(html파일에서 확인)
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // delete에 addEventListener을 등록할 건데 클릭이 되면
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');
    // item__row에 들어갈 item을 만든다.

    // item에 span과 delete버튼을 넣어줘야한다.


    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
    // 여기까지 main__renew.js 삭제하고 다른거 추가함
}

// 클릭이 되면 등록한 콜백 함수를 호출
// 클릭이 되면 사용자가 onAdd() 함수를 호출한다.
addBtn.addEventListener('click', () => {
    onAdd();
});



// 키가 눌러지면 콜백함수 이용 콘솔창에 key 횟수 입력
input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    }

});