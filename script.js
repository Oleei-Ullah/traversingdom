const milestonesData = JSON.parse(data).data;

const banner = document.querySelector('.banner-img');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const checkbox = document.querySelector('.checkbox');
const milestoneContainer = document.querySelector('#milestones');
const milestones = document.getElementById("milestones");


function loadMilestones () {

    milestones.innerHTML = milestonesData.map(milestone => `
    <div  id="${milestone._id}" class="p-3 pb-2 border-b border-[#292727] pl-4">
        <div class="flex items-center gap-3 ">
            <input onclick="markList(this, ${milestone._id})" type="checkbox" class="checkbox w-[20px] h-[20px]"/>
            <div onclick="openMilestone(this, ${milestone._id})">
                <h3 class="milestone-name text-white text-lg cursor-pointer">${milestone.name}</h3>
            </div>
        </div>
        <div class="hided">
        ${milestone.modules.map(module => {
            return `
            <div class="p-2 pb-2 border-b border-[#292727] ">
                <h3 class="text-white text-md">${module.name}</h3>
            </div>

            `}).join('')}
        </div>

    </div>
`).join("")
}





function markList (checkElement, id) {
    console.log("paici", checkElement, id);
    const milestoneList = document.querySelector('#milestones');
    const marked = document.getElementById(id);
    const doneList = document.querySelector('#donelist');
    const idList = document.querySelectorAll

    if(checkElement.checked) {
        milestoneList.removeChild(marked);
        doneList.appendChild(marked);
    } else {
        console.log(milestones.children);
        milestoneList.appendChild(marked);
        doneList.removeChild(marked);
    }


}

function loadImage(id) {
    banner.src = milestonesData[id].image;
    banner.style.opacity = 0;
    title.innerText = milestonesData[id].name;
    milestonesData[id].description ? description.innerText = milestonesData[id].description : description.innerText = "No description found"
}

banner.onload = function () {
    this.style.opacity = 1;
}




function openMilestone (milestone, id) {
    const currentPanel = milestone.parentNode.nextElementSibling;
    const showPanel = document.querySelector('.show');
    const activeElements = document.querySelector('.active')

    if(!milestone.classList.contains('active') && activeElements){
        activeElements.classList.remove('active')
    }
    milestone.classList.toggle('active')

    if(!currentPanel.classList.contains('show') && showPanel) {
        showPanel.classList.remove('show');
    }
    currentPanel.classList.toggle('show');

    loadImage(id)

}



loadMilestones();