// // document.addEventListener("DOMContentLoaded", function() {
// //     const feedbackField = document.getElementById("feedback");
// //     const wordCount = document.getElementById("wordCount");
// //     const maxChars = 150;

// //     // Update character count on input
// //     feedbackField.addEventListener("input", function() {
// //         const charCount = feedbackField.textContent.length;
// //         if (charCount > maxChars) {
// //             feedbackField.textContent = feedbackField.textContent.substring(0, maxChars);
// //             alert("Maximum character limit reached!");
// //             feedbackField.setAttribute("contenteditable", "false");
// //         }
// //         wordCount.textContent = Math.min(charCount, maxChars);
// //     });

// //     // Update max characters
// //     wordCount.textContent = '0';

// //     // Prevent form submission
// //     const form = document.getElementById("feedbackForm");
// //     form.addEventListener("submit", function(event) {
// //         event.preventDefault();
// //         alert("Feedback submitted!");
// //         // Additional logic to handle form submission
// //     });
// // });

// // https://docs.google.com/forms/d/e/1FAIpQLSe0W_DPc5a4X5qmImS1QR9-QDGvRNUhjv5wUSQDjhSlgEZR6g/viewform?usp=sf_link/ 

// document.addEventListener("DOMContentLoaded", function () {
//     const feedbackField = document.getElementById("feedback");
//     const wordCount = document.getElementById("wordCount");
//     const maxChars = 150;

//     // Update character count on input
//     feedbackField.addEventListener("input", function () {
//         const charCount = feedbackField.textContent.length;
//         if (charCount > maxChars) {
//             feedbackField.textContent = feedbackField.textContent.substring(0, maxChars);
//             alert("Maximum character limit reached!");
//         }
//         wordCount.textContent = Math.min(charCount, maxChars);
//     });

//     // Update max characters
//     wordCount.textContent = '0';

//     // Handle form submission
//     const form = document.getElementById("feedbackForm");
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const feedbackText = feedbackField.textContent.trim();

//         // Check if feedback is not empty
//         if (feedbackText) {
//             // Send feedback to server
//             sendFeedbackToServer(feedbackText);

//             // Optionally, you can also show a confirmation message to the user
//             alert("Thank you for your feedback!");

//             // Reset the feedback field and character count
//             feedbackField.textContent = "";
//             wordCount.textContent = '0';
//         } else {
//             alert("Please provide feedback before submitting.");
//         }
//     });

//     // Function to send feedback to server
//     // function sendFeedbackToServer(feedback) {
//     //     // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint where you want to send the feedback
//     //     const endpoint = 'https://formspree.io/f/mqkrbeya';

//     //     // Make a POST request to the server
//     //     fetch(endpoint, {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({ feedback: feedback }),
//     //     })
//     //         .then(response => {
//     //             if (!response.ok) {
//     //                 throw new Error('Network response was not ok');
//     //             }
//     //             return response.json();
//     //         })
//     //         .then(data => {
//     //             console.log('Feedback sent successfully:', data);
//     //         })
//     //         .catch(error => {
//     //             console.error('Error sending feedback:', error);
//     //         });
//     // }

//     // Function to send name and feedback to server
//     function sendFeedbackToServer(name, feedback) {
//         // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint where you want to send the feedback
//         const endpoint = 'https://formspree.io/f/mqkrbeya';

//         // Make a POST request to the server
//         fetch(endpoint, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name: name, feedback: feedback }),
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Feedback sent successfully:', data);
//             })
//             .catch(error => {
//                 console.error('Error sending feedback:', error);
//             });
//     }
    
// });

// start new here

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput"); // Updated to reference the name input field
    const feedbackField = document.getElementById("feedback");
    const wordCount = document.getElementById("wordCount");
    const maxChars = 150;

    // Update character count on input
    feedbackField.addEventListener("input", function () {
        const charCount = feedbackField.textContent.length;
        if (charCount > maxChars) {
            feedbackField.textContent = feedbackField.textContent.substring(0, maxChars);
            alert("Maximum character limit reached!");
        }
        wordCount.textContent = Math.min(charCount, maxChars);
    });

    // Update max characters
    wordCount.textContent = '0';

    // Handle form submission
    const form = document.getElementById("feedbackForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = nameInput.value.trim(); // Get the value of the name input field
        const feedbackText = feedbackField.textContent.trim();

        // Check if both name and feedback are not empty
        if (name && feedbackText) {
            // Send name and feedback to server
            sendFeedbackToServer(name, feedbackText);

            // Optionally, you can also show a confirmation message to the user
            alert("Thank you for your feedback!");

            // Reset the name and feedback fields, and character count
            nameInput.value = "";
            feedbackField.textContent = "";
            wordCount.textContent = '0';
        } else {
            alert("Please provide both name and feedback before submitting.");
        }
    });

    // Function to send name and feedback to server
    function sendFeedbackToServer(name, feedback) {
        // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint where you want to send the feedback
        const endpoint = 'https://formspree.io/f/mqkrbeya';

        // Make a POST request to the server
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, feedback: feedback }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Feedback sent successfully:', data);
            })
            .catch(error => {
                console.error('Error sending feedback:', error);
            });
    }
});
