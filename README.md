# jay's shopping_list

#### shopping_list를 구현해보았다.(스스로도 만들어보자.)

## 만든시간

#### 21/7/14 2시간 30분정도

## skills

#### HTML, CSS, JavaScript

## 스크린샷

#### 화면 구성

##### 실패(button부분과 input 위치가 이상하다.)

![fail](https://user-images.githubusercontent.com/77037051/125635387-5e08ece6-6232-4940-a9dc-f2289c07df61.png)

##### 성공

![success](https://user-images.githubusercontent.com/77037051/125635379-80b6d98c-47a7-41e6-b2fe-560ba70d1837.png)
<img width="80%" src="https://user-images.githubusercontent.com/77037051/125639147-6c254119-923b-4adb-8095-c8d53ff991b6.gif"/>

## 수정 & 보완
1. .footer부분에서 height 48px, padding 8px, font-size 24px를 지정안해줘도 되는걸 넣어서 실패한 부분이 나왔다.
2. 그리고 JS에서 const item = createItem(text); createItem()에 text를 안넣었더니 입력값 마다 undefined가 나왔다.


#### main__renew에는 

##### itemRow.setAttribute('data-id', id);
##### item_rowtemRow.innerHTML = `
#####        <div class="item">
#####            <span class="item__name">${text}</span>
#####            <button class="item__delete">
#####                <i class="fas fa-trash-alt" data-id=${id}><i>
#####            </button>
#####            </div>
#####            <div class="item__divider"></div>`;
#####     id++;


##### items.addEventListener('click', event => {
##### const id = event.target.dataset.id;
#####    if (id) {
#####        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
#####        toBeDeleted.remove();
#####    }
##### }); 

#### 이렇게 구현을 해주었다.

