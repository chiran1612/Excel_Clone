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

let bgColorIcon=document.querySelector("input[id='bg-color']");
let textColorIcon=document.querySelector("input[id='text-color']");
let select=document.querySelector("#fontStyleSelect");

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

bgColorIcon.addEventListener("blur",function(){
    setFontStyle("bgColor",bgColorIcon);
})

textColorIcon.addEventListener("blur",function(){
    setFontStyle("textColor",textColorIcon);
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
            }


             //------------Check for background color
        if(styleName=="bgColor"){
            cellObject.bgColor=element.value;//Change in object value
            lastSelectedCell.style.background=element.value;//Change in ui
            return;
        }
        
        //------------Check for Text color
        if(styleName=="textColor"){
            cellObject.textColor=element.value;//Change in object value
            lastSelectedCell.style.color=element.value;//Change in ui
            return;
        }
        

            element.classList.add("active-font-style");
        }
        cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];
    }
}