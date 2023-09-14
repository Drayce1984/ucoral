

// Function to load data from local storage or use default data
function loadData() {
    const savedData = localStorage.getItem("nameData");
    return savedData ? JSON.parse(savedData) : [
        { name: "Ohed ",phone: "123-456-7890", car: "ABC-123" ,leavingDate: "2023-09-09", type: "Type 1",  },
        { name: "Aviel" ,phone: "987-654-3210", car: "XYZ-789" ,},
        { name: "Ester", phone: "555-123-4567", car: "DEF-456" },
        { name: "Saar", phone: "111-222-3333", car: "GHI-789" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
        { name: "Ruti", phone: "777-888-9999", car: "JKL-012" },
       

        
        
        

        
    

        


    ];
}

// Function to save data to local storage
function saveData(data) {
    localStorage.setItem("nameData", JSON.stringify(data));
}

// Sample list of names, phone numbers, and car numbers
let data = loadData();

// Function to display names and allow editing phone and car numbers
function displayData(searchName, searchCar) {
    const nameList = document.getElementById("name-list");
    nameList.innerHTML = ""; // Clear previous results

    data.forEach(item => {
        const name = item.name.toLowerCase();
        const car = item.car.toLowerCase();

        if ((name.includes(searchName.toLowerCase()) || searchName === "") &&
            (car.includes(searchCar.toLowerCase()) || searchCar === "")) {
            const nameItem = document.createElement("div");
            nameItem.className = "name-item";

            // Name field (unchangeable)
            const nameElement = document.createElement("p");
            nameElement.textContent = `Name: ${item.name}`;

            // Phone input field
            const phoneInput = document.createElement("input");
            phoneInput.className = "name-input";
            phoneInput.placeholder = "Phone Number";
            phoneInput.value = item.phone;

            // Car input field
            const carInput = document.createElement("input");
            carInput.className = "name-input";
            carInput.placeholder = "Car Number";
            carInput.value = item.car;

            // Quantity of Adults input field
            const adultsInput = document.createElement("input");
            adultsInput.className = "quantity-input";
            adultsInput.type = "number";
            adultsInput.placeholder = "Adults";
            adultsInput.value = item.adults;

            // Quantity of Youngsters input field
            const youngstersInput = document.createElement("input");
            youngstersInput.className = "quantity-input";
            youngstersInput.type = "number";
            youngstersInput.placeholder = "Youngsters";
            youngstersInput.value = item.youngsters;

            // Quantity of Babies input field
            const babiesInput = document.createElement("input");
            babiesInput.className = "quantity-input";
            babiesInput.type = "number";
            babiesInput.placeholder = "Babies";
            babiesInput.value = item.babies;

            // Date of Leaving input field
            const leavingDateInput = document.createElement("input");
            leavingDateInput.className = "date-input";
            leavingDateInput.type = "date";
            leavingDateInput.placeholder = "Date of Leaving";
            leavingDateInput.value = item.leavingDate;

            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.className = "save-button";
            saveButton.addEventListener("click", () => {
                // Update the data array with the new phone, car, quantity, and date values
                item.phone = phoneInput.value;
                item.car = carInput.value;
                item.adults = adultsInput.value;
                item.youngsters = youngstersInput.value;
                item.babies = babiesInput.value;
                item.leavingDate = leavingDateInput.value;
                saveData(data);
                alert(`Changes saved for ${item.name}`);
            });
// Icon for adults
const adultIcon = document.createElement("span");
adultIcon.innerHTML = "&#x1F468;"; // Unicode character for adult person

// Icon for youngsters
const youngsterIcon = document.createElement("span");
youngsterIcon.innerHTML = "&#x1F9D1;"; // Unicode character for child

// Icon for babies
const babyIcon = document.createElement("span");
babyIcon.innerHTML = "&#x1F476;"; // Unicode character for baby 

const aadultsInput = document.createElement("input");
    aadultsInput.className = "quantity-input";
    aadultsInput.type = "number";
    aadultsInput.placeholder = "Adults";
    aadultsInput.value = item.adults;

    
    nameList.appendChild(nameItem);
    nameItem.appendChild(nameElement);
    nameItem.appendChild(phoneInput);
    nameItem.appendChild(carInput);
    nameItem.appendChild(adultIcon);
    nameItem.appendChild(aadultsInput);
    nameItem.appendChild(youngsterIcon);
    nameItem.appendChild(youngstersInput);
    nameItem.appendChild(babyIcon);
    nameItem.appendChild(babiesInput);
    nameItem.appendChild(leavingDateInput);
    nameItem.appendChild(saveButton);
            
            
            
           
            
        }
    });
}

// Event listeners for the search inputs
const searchNameInput = document.getElementById("search-name");
const searchCarInput = document.getElementById("search-car");

searchNameInput.addEventListener("input", () => {
    const searchName = searchNameInput.value.trim();
    const searchCar = searchCarInput.value.trim();
    displayData(searchName, searchCar);
});

searchCarInput.addEventListener("input", () => {
    const searchName = searchNameInput.value.trim();
    const searchCar = searchCarInput.value.trim();
    displayData(searchName, searchCar);
});

// Initial display of data
displayData("", "");