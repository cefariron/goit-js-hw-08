const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){e.preventDefault();const{email:t,message:a}=e.currentTarget.elements,r={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))}));const t=localStorage.getItem("feedback-form-state");currentLocalStorageData=JSON.parse(t),document.addEventListener("DOMContentLoaded",(function(e){inputEl=document.querySelector("input"),textareaEl=document.querySelector("textarea"),t&&(inputEl.value=currentLocalStorageData.email,textareaEl.value=currentLocalStorageData.message)})),e.addEventListener("submit",(function(t){t.preventDefault(),console.log(currentLocalStorageData),e.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.2872f2ad.js.map
