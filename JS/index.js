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
      <button onclick="handleToolDetail('${tool.id}')" class="btn btn-primary rounded"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
      </div>
        
        `;

        toolsContainer.appendChild(toolCard)

    }
}

const handleToolDetail = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  .then(res => res.json())
  .then(data =>displayToolDetail(data))
}

const displayToolDetail = (tools) => {
    // console.log(tools);
    const tool = tools.data;
    console.log(tool.pricing[0].plan);
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = '';
    const div1 = document.createElement('div');
    div1.classList = 'bg-red-100 border border-red-400 text-black p-10 rounded-lg my-10 flex-1'
    div1.innerHTML = `
    <p class='mb-2 font-bold'>${tool.description}</p>
    <div class='flex gap-5'>
    <div class='flex-1 text-center bg-white p-3 rounded-lg text-green-500'>
    <p class='font-bold'>${tool.pricing[0].plan}</p>
    <p>${tool.pricing[0].price}</p>
    </div>
    <div class='flex-1 text-center bg-white p-3 rounded-lg text-orange-500'>
    <p class='font-bold'>${tool.pricing[1].plan}</p>
    <p>${tool.pricing[1].price}</p>
    </div>
    <div class='flex-1 text-center bg-white p-3 rounded-lg text-red-500'>
    <p class='font-bold'>${tool.pricing[2].plan}</p>
    <p>${tool.pricing[2].price}</p>
    </div>
    </div>
    <div class='flex mt-3 '>
    <div class='flex-1'>
    <h1 class='text-xl font-bold'>Features</h1>
    <ul class='list-disc p-3'>
    <li>${tool.features[1].feature_name}</li>
    <li>${tool.features[2].feature_name}</li>
    <li>${tool.features[3].feature_name}</li>
    </ul>
    </div>
    <div class='flex-1 ml-5 '>
    <h1 class='text-xl font-bold'>Integrations</h1>
    <ul class='list-disc p-3'>
    <li>FB Messenger</li>
    <li>Slack</li>
    <li>Telegram</li>
    </ul>
    </div>
    </div>
    `;

    const div2 = document.createElement('div');
    div2.classList = 'flex-1';
    div2.innerHTML= `
    <img src="${tool.image}" />
    
    `

    modalContainer.appendChild(div1);
    modalContainer.appendChild(div2);
    my_modal_1.showModal();

}

const isShowAll = () =>{
  const toolsContainer = document.getElementById('tools-container');
  toolsContainer.innerHTML = '';
  loadData(true);

}

loadData();

