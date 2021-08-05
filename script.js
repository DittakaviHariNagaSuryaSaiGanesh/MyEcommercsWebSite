const scriptURL = 'https://script.google.com/macros/s/AKfycbycDx_hnJAr9SIz4nZb29Uwd1cXpXpMs-MXqAYTDEkAyQiKSjZHHGuxO38TPK8cI4bm/exec'
const form = document.forms['submit-feedback']
          
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Submitting the Feedback."))
    .catch(error => console.error('Error!', error.message))
})