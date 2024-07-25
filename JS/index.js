const loadData = (isShowAll) => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => {
        const tools = data.data.tools;
        displayData(tools,isShowAll);
    }); 
}

const displayData = (tools,isShowAll) => {
    // console.log(tools);
    console.log('isshowall',isShowAll);
    const toolsContainer = document.getElementById('tools-container');
    const btnDiv = document.getElementById('btn-div');
    if(tools.length > 6 && !isShowAll){
      btnDiv.classList.remove('hidden')
    }
    else{
      btnDiv.classList.add('hidden');
    }


    if(!isShowAll){
      showTools = tools.slice(0,6)
    }
    else{
      showTools = tools;
    }
    
  
    
    // console.log(showTools);

    for(const tool of showTools){
        console.log(tool);
        const toolCard = document.createElement('div');
        toolCard.classList = 'card card-compact bg-gray-100  shadow-xl border-2 border-gray-300 rounded-lg p-8 text-black';
        toolCard.innerHTML = `
        <figure>
        <img
          src="${tool.image}" />
      </figure>
      <div class="card-body ">
        <h2 class="card-title">Features</h2>
        <p>1.National language processing</p>
        <p>2.Contextual Understanding</p>
        <p>3.Text Generation</p>
        <p class='text-black h-1 w-auto border-gray-200 border-b-2 mb-3'></p>
        <h2 class='text-2xl font-bold'>${tool.name}</h2>
        <p><i class="fa-solid fa-calendar-week"></i>${tool.published_in}</p>
        <div class="card-actions justify-end">
      <button onclick="my_modal_1.showModal()" class="btn btn-primary rounded"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
      </div>
        
        `;

        toolsContainer.appendChild(toolCard)

    }
}

const handleToolDetail = () => {
  fetch('')
}

const isShowAll = () =>{
  const toolsContainer = document.getElementById('tools-container');
  toolsContainer.innerHTML = '';
  loadData(true);

}

loadData();

