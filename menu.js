let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");


let roboto=document.querySelector("option[value='roboto']");
let arial=document.querySelector("option[value='arial']");
let rockwell=document.querySelector("option[value='rockwell']");
let monospace=document.querySelector("option[value='monospace']");


let leftAlignIcon=document.querySelector(".left-side");
let centerAlignIcon=document.querySelector(".center-side");
let rightAlignIcon=document.querySelector(".right-side");

let select=document.querySelector("#fontStyleSelect");
let selectT=document.querySelector("#font-text-size");

let bgColorIcon=document.querySelector("input[id='bg-color']");
let textColorIcon=document.querySelector("input[id='text-color']");
console.log(bgColorIcon.value);


bold.addEventListener("click",function(){
    setFontStyle("bold",bold);
})

italic.addEventListener("click",function(){
    setFontStyle("italic",italic);
})

underline.addEventListener("click",function(){
    setFontStyle("underline",underline);
})



leftAlignIcon.addEventListener("click",function()
{
    setFontStyle("leftAlign",leftAlignIcon);
})

centerAlignIcon.addEventListener("click",function()
{
    setFontStyle("centerAlign",centerAlignIcon);
})

rightAlignIcon.addEventListener("click",function()
{
    setFontStyle("rightAlign",rightAlignIcon);
})

select.addEventListener("change",function()
{
    setFontStyle(select.value,select);
})
selectT.addEventListener("change",function()
{
    setFontStyle(selectT.value,select);
})

bgColorIcon.addEventListener("blur",function(){
    setcolor("bgColor",bgColorIcon);
})

textColorIcon.addEventListener("blur",function(){
    setcolor("textColor",textColorIcon);
})



function setFontStyle(styleName,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if(cellObject.fontStyle[styleName]){
            if(styleName == "bold"){
                lastSelectedCell.style.fontWeight = "normal";
            }else if(styleName == "italic"){
                lastSelectedCell.style.fontStyle = "normal";
            }else if(styleName=="underline"){
                lastSelectedCell.style.textDecoration = "none";
            }else if(styleName=="leftAlign"){
                lastSelectedCell.style.textAlign="left";
            }else if(styleName=="centerAlign"){
                lastSelectedCell.style.textAlign="left";
            }else if(styleName=="rightAlign"){
                lastSelectedCell.style.textAlign="left";
            }

            element.classList.remove("active-font-style");
        }else{
            if(styleName == "bold"){
                lastSelectedCell.style.fontWeight = "bold";
            }else if(styleName == "italic"){
                lastSelectedCell.style.fontStyle = "italic";
            }else if(styleName=="underline"){
                lastSelectedCell.style.textDecoration = "underline";
            }else if(styleName=="leftAlign"){
                lastSelectedCell.style.textAlign="left";
            }else if(styleName=="centerAlign"){
                lastSelectedCell.style.textAlign="center";
            }else if(styleName=="rightAlign"){
                lastSelectedCell.style.textAlign="right";
            }else if(styleName=="roboto"){
                lastSelectedCell.style.fontFamily="Roboto";

                cellObject.fontFamily.roboto=true;
                cellObject.fontFamily.arial=false; 
                cellObject.fontFamily.rockwell=false; 
                cellObject.fontFamily.monospace=false;
                
                let option=document.querySelector("option[selected]")
                option.removeAttribute("selected");
                roboto.setAttribute("selected","");
                return;
    
            }else if(styleName=="arial"){
                lastSelectedCell.style.fontFamily="Georgia";

                cellObject.fontFamily.arial=true; 
                cellObject.fontFamily.roboto=false;
                cellObject.fontFamily.rockwell=false; 
                cellObject.fontFamily.monospace=false;
                
                let option=document.querySelector("option[selected]")
                option.removeAttribute("selected");
                arial.setAttribute("selected","");
                return;
            }else if(styleName=="rockwell"){
                
            lastSelectedCell.style.fontFamily="Rockwell";

            cellObject.fontFamily.rockwell=true; 
            cellObject.fontFamily.arial=false; 
            cellObject.fontFamily.roboto=false;
            cellObject.fontFamily.monospace=false;
            
            let option=document.querySelector("option[selected]");
            option.removeAttribute("selected");
            rockwell.setAttribute("selected","");

            return;
            }else if(styleName=="monospace"){
                lastSelectedCell.style.fontFamily="monospace";

            cellObject.fontFamily.monospace=true;
            cellObject.fontFamily.arial=false; 
            cellObject.fontFamily.roboto=false;
            cellObject.fontFamily.rockwell=false; 
            
            let option=document.querySelector("option[selected]")
            option.removeAttribute("selected");
            monospace.setAttribute("selected","");
            return;
            }else if(styleName=="12"){
                lastSelectedCell.style.fontSize="10px";
            }else if(styleName=="14"){
                lastSelectedCell.style.fontSize="12px";
            }else if(styleName=="16"){
                lastSelectedCell.style.fontSize="14px";
            }else if(styleName=="18"){
                lastSelectedCell.style.fontSize="18px";
            }else if(styleName=="20"){
                lastSelectedCell.style.fontSize="22px";
            }
              /*----------Check for Background Icon-------------------*/


        let bgColorIcon=document.querySelector("input[id='bg-color']");
        if(cellObject.bgColor!="#ffffff")//If color is not white
        {
         
        
            //we have to change bg-color it on ui
            bgColorIcon.value=cellObject.bgColor; 
        }else{
            // remove bg-color on ui
            bgColorIcon.value="#ffffff"; 
        }


        /*----------Check for Text color Icon-------------------*/

        let textColorIcon=document.querySelector("input[id='text-color']");
        if(cellObject.textColor!="#000000")//If color is not black
        {
            //we have to change text-color it on ui
            textColorIcon.value=cellObject.textColor; 
        }else{
            //remove text-color on ui
            textColorIcon.value="#000000"; 
        }
            element.classList.add("active-font-style");
        }
        cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];
    }
}