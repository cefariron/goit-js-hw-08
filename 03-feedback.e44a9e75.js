!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.email,r=t.message,n={email:a.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))}));var t=localStorage.getItem("feedback-form-state");currentLocalStorageData=JSON.parse(t),document.addEventListener("DOMContentLoaded",(function(e){inputEl=document.querySelector("input"),textareaEl=document.querySelector("textarea"),t&&(inputEl.value=currentLocalStorageData.email,textareaEl.value=currentLocalStorageData.message)})),e.addEventListener("submit",(function(t){t.preventDefault(),console.log(currentLocalStorageData),e.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.e44a9e75.js.map
