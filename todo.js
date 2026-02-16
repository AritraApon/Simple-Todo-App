// Count the total todo task

function counts() {
    const ul = document.getElementById('todo_items');
    const countTodo = document.getElementById('task_count');

    const count = ul.childElementCount;
    countTodo.innerText = count

}



//add btn :

document.getElementById('add_btn')
    .addEventListener('click', function () {
        const addArea = document.getElementById('add_todo_area');
        const todoTaskAdd = addArea.value;
        // console.log(todoTaskAdd)


        if (todoTaskAdd.trim() === '') return;

        //   new Items add
        const newLi = document.createElement('li');
        newLi.classList.add(
            "bg-[#004FFA47]",
            "mx-3",
            "my-3",
            "py-3",
            "px-3",
            "border",
            "border-[#6ad7f8]",
            "shadow-xl",
            "rounded-lg",
            "text-[18px]",
            "font-bold",
            "flex",
            "justify-between",
            "items-center",
        );

        newLi.innerText = todoTaskAdd;


        //  remove btn
        const dltBtn = document.createElement('button');
        dltBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        dltBtn.classList.add(
            "bg-[#FF0B55]",
            "text-white",
            "px-3",
            "py-1",
            "rounded-md",
            "hover:bg-red-700",
            "ml-2",
            "border-2",
            "border-[black]"
        );


        newLi.append(dltBtn)


        //  new items add the parent ul And remove btn
        const ul = document.getElementById('todo_items');
        ul.appendChild(newLi) // append the new li

        addArea.value = '';

        //   add count
        counts()

        // Remove items :
        dltBtn.addEventListener('click',
            function () {
                ul.removeChild(newLi);
                counts()
            }
        );

    })


//   dark and light mood

const mainDiv = document.getElementById('main_Div');

document.getElementById('dark_mood').addEventListener('click',
    function(){
        mainDiv.style.backgroundColor ='#0B0D179C ';
         mainDiv.style.color ='white';
    }
)

document.getElementById('light_mood').addEventListener('click',
    function(){
        mainDiv.style.backgroundColor ='white';
         mainDiv.style.color ='black'
    }
)