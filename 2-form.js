import"./assets/styles-D9ZWaK1l.js";let e={email:"",message:""};const o=document.querySelector(".feedback-form"),s="feedback-form-state";o.addEventListener("input",function(m){const t=m.target.name;(t==="email"||t==="message")&&(e[t]=m.target.value.trim(),localStorage.setItem(s,JSON.stringify(e)))});const i=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]'),a=JSON.parse(localStorage.getItem(s));a&&(i.value=a.email,e.email=a.email,n.value=a.message,e.message=a.message);o.addEventListener("submit",r);function r(l){l.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem(s),e={email:"",message:""},i.value="",n.value="")}
//# sourceMappingURL=2-form.js.map
