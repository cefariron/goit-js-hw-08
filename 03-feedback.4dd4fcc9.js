!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.email,r=t.message,n={email:a.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(n))}));var t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);document.addEventListener("DOMContentLoaded",(function(e){var r=document.querySelector("input"),n=document.querySelector("textarea");t&&(r.value=a.email,n.value=a.message)})),e.addEventListener("submit",(function(t){t.preventDefault(),console.log(a),e.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.4dd4fcc9.js.map
