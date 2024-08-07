const searchedItem=document.querySelector(".foodName");
const searchbtn=document.querySelector(".btn");
const foodContainer=document.querySelector(".food-container");


async function fetchFoodInfo(query){
    try{
    const response= await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    
    const data= await response.json();
    // console.log(data);
    if(data?.meals===null){
        window.alert("you entered wrong name");
    }
    else{
        data.meals.forEach((meals)=>{
        let foodItems=document.createElement('div');
        foodItems.classList.add("recipe");
        foodContainer.appendChild(foodItems);
        foodItems.innerHTML=`<img src="${meals?.strMealThumb}">
            <p>${meals?.strMeal}</p>
            <p>Ingredients used:</p>
            <span>${meals?.strIngredient1},${meals?.strIngredient2}</span>
        `;
    })
    }
    
    // const foodImage=document.querySelector(".foodimage");
    // foodImage.src=`${data?.meals?.[1].strMealThumb}`;
    // const foodid=document.querySelector(".para");
    // foodid.innerText=`hello ${data?.meals?.[0].idMeal}`;
    }
    catch(e){
        console.log("error occured "+e);
    }
    
}
searchbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let query=searchedItem.value.trim();
    if(query===""){
        window.alert("You didn't provided any food name");
    }
    else{
fetchFoodInfo(query);
    }
    
});