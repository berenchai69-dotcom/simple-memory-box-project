      function goToTasksOption(){
         
         document.getElementById("daily-option").style.display ="none";
         document.getElementById("goals-option").style.display ="none";
         document.getElementById("tasks-option").style.display =" block";
      }
      function goToDailyOption(){
          document.getElementById("daily-option").style.display ="block";
         document.getElementById("tasks-option").style.display =" none";
         document.getElementById("goals-option").style.display ="none";
      }
      function goToGoalsOption(){
         document.getElementById("daily-option").style.display ="none";
         document.getElementById("tasks-option").style.display =" none";
         document.getElementById("goals-option").style.display ="block";
      }
      function goToAddPage(){
            document.getElementById("main-page").style.display = "none";
            document.getElementById("add-page").style.display = "block";
       }

       function goToMainPage(){
            document.getElementById("main-page").style.display = "block";
            document.getElementById("add-page").style.display = "none";

            document.getElementById('title-input').value = '';
            document.getElementById('discreption-input').value = '';
            document.getElementById('event-input').value = '';
            document.getElementById('photo-input').value = '';

           document.getElementById('discreption-input').style.height='';
           document.getElementById('event-input').style.height='';
          
       }

     
       const descInput = document.getElementById('discreption-input');
       const eventInput = document.getElementById('event-input');
       function autoExpand(element){
          element.style.height = 'auto';
          element.style.height =element.scrollHeight + 'px';

       }
      
        descInput.addEventListener('input', function(){
          autoExpand(this);
       });
        eventInput.addEventListener('input', function(){
          autoExpand(this);
       });
        
       function showHideStatsMenu () {
          const menu = document.getElementById('stats-menu');

          if(menu.style.display === 'none')
          {
            updateCounts();
            menu.style.display = 'block';
          } else {
            menu.style.display='none';
          }

            document.getElementById('discreption-input').addEventListener('input', updateCounts);
             document.getElementById('event-input').addEventListener('input' , updateCounts);

         }
          function updateCounts(){
            const descText = document.getElementById('discreption-input').value;
            const eventText = document.getElementById('event-input').value;

            const totalChars =descText.length + eventText.length;

            const combinedText = descText + "" + eventText;

            const wordsArray =combinedText.trim().split(/\s+/).filter(word => word.length > 0);
            const totalwords = wordsArray.length;

            document.getElementById('char-count').innerText = totalChars;
            document.getElementById('words-count').innerText = totalwords;

           

          }

       
       const memoryCard = [ ]
      
       function renderMemoryCard (){
            let memoryCardHTML = "" ;
            for ( let i = 0 ; i < memoryCard.length ; i++) 
               {            
                     const memoryObject = memoryCard[i];
                  const {title , desc , event , imageHTML} = memoryObject;
                     const html= `
                        <div class="css-div-plus">
                           ${imageHTML}
                           <h3>${title}</h3>
                           <p>${desc}</p>
                           <small>${event}</small>
                           <button onclick=" 
                           memoryCard.splice(${i}, 1);
                           renderMemoryCard();"> Delete </button>
                        </div> 
                    `;
                     memoryCardHTML += html;        }
            
            document.querySelector('.memories-container').innerHTML = memoryCardHTML;
             
       }
       function saveMemory() {
            const titleInput = document.getElementById('title-input');
            const descInput = document.getElementById('discreption-input');
            const eventInput = document.getElementById('event-input');
             const photoInput = document.getElementById('photo-input');


            const title = titleInput.value;
            const desc = descInput.value;
            const event = eventInput.value;

              if (!title) {
            alert("Please enter a title");
            return;
            }
            
                   
          
            let imageHTML = ''; 
            if (photoInput.files && photoInput.files[0]) {
            const imageSrc = URL.createObjectURL(photoInput.files[0]);
            imageHTML = `<img src="${imageSrc}" class="memory-photo">`;
            }
          

            memoryCard.unshift({ 
               title ,
                  event,
                  desc ,
                  imageHTML
               });
        
            renderMemoryCard();


                goToMainPage();
            }     
             //add page done now id changing
                     
            const todoList =
         [   ]
         function renderTodoList (){
            let todoListHTML = "" ;
            for ( let i = 0 ; i < todoList.length ; i++) 
               {            
                     const todoObject =todoList[i];
                  const {name , date} = todoObject;
                     const html= `<p>
                     ${name} ${date}
                        <button onclick="
                           todoList.splice(${i}, 1);
                           renderTodoList();"> Delete </button>
                     </p>`;
                     todoListHTML += html;        }
            document.querySelector('.js-names').innerHTML = todoListHTML;
         } 
         function addTodo () 
         {
            const inputElement = document.querySelector('.js-name-input');
            const name=inputElement.value;

            const dateElement = document.querySelector('.js-date');
            const date= dateElement.value;

            todoList.push({ 
               name ,
                  date
               });
               inputElement.value='';
            renderTodoList();
         }
         const goals=[]

                 function renderGoals (){
            let goalsHTML = "" ;
            for ( let i = 0 ; i < goals.length ; i++) 
               {            
                     const goalsObject =goals[i];
                  const {name , date} = goalsObject;
                     const html= `<p>
                     ${name} ${date}
                        <button onclick="
                           goals.splice(${i}, 1);
                           renderGoals();"> Delete </button>
                     </p>`;
                     goalsHTML += html;        }
            document.querySelector('.goals-list').innerHTML = goalsHTML;
         } 
         function addGoals () 
         {
            const inputElement = document.querySelector('.goals-input');
            const name=inputElement.value;

            const dateElement = document.querySelector('.goals-date');
            const date= dateElement.value;

            goals.push({ 
               name ,
                  date
               });
               inputElement.value='';
               dateElement.value='';
            renderGoals();
         }
      
               
