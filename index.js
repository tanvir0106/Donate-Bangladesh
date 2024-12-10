
document.getElementById("history").addEventListener("click", function () {
    const donation = document.getElementById('donation');
    donation.classList.remove('bg-[#B4F461]');
    const history = document.getElementById('history')
    history.classList.add('bg-[#B4F461]')
    const hisrotyPaage = document.getElementById('history-page')
    hisrotyPaage.classList.remove('hidden')
    const donatPage = document.getElementById('donate-page')
    donatPage.classList.add('hidden')




});
document.getElementById('donation').addEventListener('click', function () {
    const history = document.getElementById('history')
    history.classList.remove('bg-[#B4F461]');
    const donation = document.getElementById('donation');
    donation.classList.add('bg-[#B4F461]')
    const hisrotyPaage = document.getElementById('history-page')
    hisrotyPaage.classList.add('hidden')

    const donatPage = document.getElementById('donate-page')
    donatPage.classList.remove('hidden')
})

document.getElementById('qouta-donate').addEventListener('click', function (event) {
    event.preventDefault()
    const mybalance = document.getElementById('my-bal').innerText
    const mybalanceNum = parseFloat(mybalance)
    const donate = parseFloat(document.getElementById('qouta-form').value)
    const qoutaAmount = document.getElementById('qouta-bal').innerText
    const qoutaAmountNum = parseFloat(qoutaAmount)
    if (typeof donate == "number" && donate >=0 &&  donate < mybalanceNum){
    let newMyBalance = mybalanceNum - donate

    let newQoutaBal = qoutaAmountNum + donate
    document.getElementById('my-bal').innerText = newMyBalance
    document.getElementById('qouta-bal').innerText = newQoutaBal

    const currenttime = new Date()
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "long", // Display full time zone name
    });

    const hisrotyPaage = document.getElementById('history-page')

    const donathistory = document.createElement('div')
    donathistory.innerHTML = `<div class="border-2 p-4 rounded-md m-4 border-solid border-gray-600"><h3 class="font-bold mt-8 lg:text-4xl ">${donate} Taka is Donated for Injured in the Quota Movement</h3>
				<p id="time" class="mt-1 lg:text-lg text-gray-600">${formatter.format(currenttime)}</p></div>
    `
    hisrotyPaage.appendChild(donathistory)


    document.getElementById('qouta-form').value = ""

    document.getElementById('my_modal_2').showModal()}
    else{
        alert('Invalid Donation Amount')
    }
    
})





document.getElementById('feni-donate').addEventListener('click', function (event) {
    event.preventDefault()
    const mybalance = document.getElementById('my-bal').innerText
    const mybalanceNum = parseFloat(mybalance)
    const donate = parseFloat(document.getElementById('feni-form').value)
    const qoutaAmount = document.getElementById('feni-bal').innerText
    const qoutaAmountNum = parseFloat(qoutaAmount)
    if (typeof donate == "number" && donate >=0 &&  donate < mybalanceNum){
    let newMyBalance = mybalanceNum - donate

    let newQoutaBal = qoutaAmountNum + donate
    document.getElementById('my-bal').innerText = newMyBalance
    document.getElementById('feni-bal').innerText = newQoutaBal

    const currenttime = new Date()
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "long", // Display full time zone name
    });

    const hisrotyPaage = document.getElementById('history-page')

    const donathistory = document.createElement('div')
    donathistory.innerHTML = `<div class="border-2 p-4 rounded-md m-4 border-solid border-gray-600"><h3 class="font-bold mt-8 lg:text-4xl ">${donate} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
				<p id="time" class="mt-1 lg:text-lg text-gray-600">${formatter.format(currenttime)}</p></div?
    `
    hisrotyPaage.appendChild(donathistory)


    document.getElementById('feni-form').value = ""

    document.getElementById('my_modal_2').showModal()}
    else{
        alert('Invalid Donation Amount')
    }
    
})






document.getElementById('noakhali-donate').addEventListener('click', function (event) {
    event.preventDefault()
    const mybalance = document.getElementById('my-bal').innerText
    const mybalanceNum = parseFloat(mybalance)
    const donate = parseFloat(document.getElementById('noakhali-form').value)


    if (typeof donate == "number" && donate >=0 &&  donate < mybalanceNum){
        const qoutaAmount = document.getElementById('noakhli-bal').innerText
        const qoutaAmountNum = parseFloat(qoutaAmount)
        let newMyBalance = mybalanceNum - donate
    
        let newQoutaBal = qoutaAmountNum + donate
        document.getElementById('my-bal').innerText = newMyBalance
        document.getElementById('noakhli-bal').innerText = newQoutaBal
    
        const currenttime = new Date()
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Dhaka",
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "long", // Display full time zone name
        });
    
        const hisrotyPaage = document.getElementById('history-page')
    
        const donathistory = document.createElement('div')
        donathistory.innerHTML = `<div class="border-2 rounded-md m-4 p-4 border-solid border-gray-600"><h3 class="font-bold mt-8 lg:text-4xl ">${donate} Taka is Donated forFlood at Noakhali, Bangladesh</h3>
                    <p id="time" class="mt-1 lg:text-lg text-gray-600">${formatter.format(currenttime)}</p></div>
        `
        hisrotyPaage.appendChild(donathistory)
    
    
        document.getElementById('noakhali-form').value = ""
    
    
    
    
        document.getElementById('my_modal_2').showModal()}
    else{
        alert('Invalid Donation Amount')
    }
    
})


