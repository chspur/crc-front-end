const count = document.querySelector(".visitor-count");
async function updateCount() {
    let response = await fetch("https://fywjpeisef63fc3uqgpfwwiuua0nkoav.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    count.innerHTML = `Views: ${data}`;
}

updateCount();