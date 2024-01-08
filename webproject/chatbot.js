var isFirstUserMessage = true;

function handleUserInput(event) {
  // handelUserInput function
  var userInput = document.getElementById("user-input"); // get element with id "user-input"
  var suggestionList = document.getElementById("suggestion-list"); // get element with id "suggestion-list"

  if (event.key === "Enter") {
    // if enter key is pressed
    var userQuestion = userInput.value.trim(); // trim the value of userInput i.e. removes whitespace characters from the beginning and end of a string

    if (userQuestion !== "") {
      // check if userQuestion varible if no empty
      if (isFirstUserMessage) {
        // check if isFristMessage is true
        appendTopic(userQuestion); // call appendTopic function with parameter "useQuestion"
        isFirstUserMessage = false; // set isFristMessage to false
      }

      appendMessage("user", userQuestion); // call appendMessage function with two parameters "user" string and "userQuestion" variable
      var aiResponse = generateAIResponse(userQuestion); // call generateAIResponse function with userQuestion variable as parameter
      appendMessage("ai", aiResponse); // call appendMessage function with two parameters "ai" string and "aiResponse" variable get from above function (generateAIResponse)
      userInput.value = ""; // set the value of userInput element to empty string
      suggestionList.innerHTML = ""; // set suggestionList element inner HTML / text to empty string / null
    }
  } else if (event.key === "Tab") {
    // check tab key is pressed
    event.preventDefault(); // prevent the default action / restrict the default behaviour i.e. the cursor will not jump to next element
    updateSuggestions(userInput.value.trim()); // call updateSuggestions function with trim value of userInput
  } else if (event.key === "Escape") {
    // check escape key is pressed
    suggestionList.innerHTML = ""; // set suggestionList element inner HTML / text to empty string / null
  } else {
    // if all the above conditions are false then run this block
    updateSuggestions(userInput.value.trim()); // call the updateSuggestions function with trim() value of userInput element.
  }
}

function updateSuggestions(userInput) {
  var suggestions = getSuggestions(userInput); // call getSuggestions function
  var suggestionList = document.getElementById("suggestion-list"); // get the element with id "sugggestion-list"

  if (suggestions.length > 0) {
    // if suggestions variable length of character is greater then zero

    // loop through all suggestions get from above function (getSuggestions) and assign in to inerHTML of suggestionList
    suggestionList.innerHTML = suggestions
      .map(
        (suggestion) =>
          `<div class="suggestion" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>` // list code will run for all suggestions in form of loop
      )
      .join("");
  } else {
    // run this code if suggestion variable length of character is less then or equal to zero
    suggestionList.innerHTML = "";
  }
}

function selectSuggestion(clickedSuggestion) {
  document.getElementById("user-input").value = clickedSuggestion; // assign the clickedSuggestion to the value of user-input element
  document.getElementById("suggestion-list").innerHTML = ""; // set the suggestion-list elemet inner HTML/Text area to null / empty string
}

function appendMessage(sender, message) {
  var chatMessages = document.getElementById("chat-messages"); // get the element with id of "caht-messages"
  var messageContainer = document.createElement("div"); // create a new <div> element
  messageContainer.className = "message-container " + sender; // set the class name of div

  var messageContent = document.createElement("p"); // create a new <p> tag element

  // Check if it's an AI message
  if (sender === "ai") {
    /// assign the img tag to the <p> tag created above
    messageContent.innerHTML =
      '<img src="Images/download.png" alt="Bot" class="bot-image"> <br>' +
      message;
  } else {
    // if not AI message then assign the message to the <p> element created above
    messageContent.textContent = message;
  }

  messageContainer.appendChild(messageContent); // append  the <p> element to the div element created above

  chatMessages.appendChild(messageContainer); // append the div element to the chat-message element get above in first line of function.
}

function generateAIResponse(userQuestion) {
  var lowercaseQuestion = userQuestion.toLowerCase(); // change the character case to lower case and assign to lowercaseQuestion variable

  // Check for specific keywords in the user's question and if keywords match the return the relevant message.
  if (lowercaseQuestion.includes("location of naawi")) {
    return "Naawi Oodena is located in Winnipeg, Manitoba. It is a 64-hectare site west of Kenaston Boulevard.";
  } else if (lowercaseQuestion.includes("facts about naawi")) {
    return "Naawi Oodena is a fascinating place with a rich history.";
  } else if (lowercaseQuestion.includes("history about naawi")) {
    return "Naawi Oodena was introduced 15 years ago, with its innovation launch and master planning.";
  } else if (lowercaseQuestion.includes("employee benefits")) {
    return "There are many benefits to the peoples of canada who live in Naawi Oodena";
  } else if (lowercaseQuestion.includes("training programs")) {
    return "There aren't any training programs in the area from my knowledge, this is consistently updated.";
  } else if (lowercaseQuestion.includes("job openings")) {
    return "There are stores, such as Subway, Safeway, Quickmart, and more! Job openings are happening everywhere in Naawi Oodena.";
  } else if (
    // check if the string includes the any of the following string(s)
    lowercaseQuestion.includes("hey") ||
    lowercaseQuestion.includes("hi") ||
    lowercaseQuestion.includes("hello") ||
    lowercaseQuestion.includes("yo") ||
    lowercaseQuestion.includes("i need help") ||
    lowercaseQuestion.includes("help me") ||
    lowercaseQuestion.includes("greetings") ||
    lowercaseQuestion.includes("hey there") ||
    lowercaseQuestion.includes("hi there") ||
    lowercaseQuestion.includes("howdy") ||
    lowercaseQuestion.includes("sup") ||
    lowercaseQuestion.includes("what's up") ||
    lowercaseQuestion.includes("good day") ||
    lowercaseQuestion.includes("good morning") ||
    lowercaseQuestion.includes("good afternoon") ||
    lowercaseQuestion.includes("good evening") ||
    lowercaseQuestion.includes("how are you") ||
    lowercaseQuestion.includes("what's going on") ||
    lowercaseQuestion.includes("how's it going") ||
    lowercaseQuestion.includes("hiya") ||
    lowercaseQuestion.includes("hey ya") ||
    lowercaseQuestion.includes("how's everything") ||
    lowercaseQuestion.includes("what's new") ||
    lowercaseQuestion.includes("what's happening") ||
    lowercaseQuestion.includes("hey bud") ||
    lowercaseQuestion.includes("hi friend") ||
    lowercaseQuestion.includes("hey mate") ||
    lowercaseQuestion.includes("hi pal") ||
    lowercaseQuestion.includes("hey buddy") ||
    lowercaseQuestion.includes("good to see you") ||
    lowercaseQuestion.includes("nice to meet you") ||
    lowercaseQuestion.includes("pleased to meet you") ||
    lowercaseQuestion.includes("long time no see") ||
    lowercaseQuestion.includes("hi there friend") ||
    lowercaseQuestion.includes("hello friend") ||
    lowercaseQuestion.includes("hiya mate") ||
    lowercaseQuestion.includes("hi there buddy") ||
    lowercaseQuestion.includes("hey there pal") ||
    lowercaseQuestion.includes("hey there buddy") ||
    lowercaseQuestion.includes("how's your day") ||
    lowercaseQuestion.includes("hey you") ||
    lowercaseQuestion.includes("hey stranger") ||
    lowercaseQuestion.includes("hi stranger")
  ) {
    return "Hey, how can we help you today? Starting typing and click suggestions given below for quick answers, our AI seems to be having an error reaching its request, this is due to downage of our servers.";
  } else if (
    // check if the string includes the any of the following string(s)
    lowercaseQuestion.includes("thanks") ||
    lowercaseQuestion.includes("thank you") ||
    lowercaseQuestion.includes("thanks a lot") ||
    lowercaseQuestion.includes("thank you so much") ||
    lowercaseQuestion.includes("thanks heaps") ||
    lowercaseQuestion.includes("thanks a million") ||
    lowercaseQuestion.includes("thanks a bunch") ||
    lowercaseQuestion.includes("thanks heaps") ||
    lowercaseQuestion.includes("thanks loads") ||
    lowercaseQuestion.includes("thanks heaps") ||
    lowercaseQuestion.includes("thank you very much") ||
    lowercaseQuestion.includes("thanks buddy") ||
    lowercaseQuestion.includes("thanks mate") ||
    lowercaseQuestion.includes("thanks a ton") ||
    lowercaseQuestion.includes("thanks heaps buddy") ||
    lowercaseQuestion.includes("thanks a bunch buddy") ||
    lowercaseQuestion.includes("thanks a million buddy") ||
    lowercaseQuestion.includes("thanks a lot buddy") ||
    lowercaseQuestion.includes("thanks a ton buddy") ||
    lowercaseQuestion.includes("thanks a bunch mate") ||
    lowercaseQuestion.includes("thanks a million mate") ||
    lowercaseQuestion.includes("thanks a lot mate") ||
    lowercaseQuestion.includes("thanks a ton mate") ||
    lowercaseQuestion.includes("thanks a million pal") ||
    lowercaseQuestion.includes("thanks a bunch pal") ||
    lowercaseQuestion.includes("thanks a lot pal") ||
    lowercaseQuestion.includes("thanks a ton pal") ||
    lowercaseQuestion.includes("thanks a million friend") ||
    lowercaseQuestion.includes("thanks a bunch friend") ||
    lowercaseQuestion.includes("thanks a lot friend") ||
    lowercaseQuestion.includes("thanks a ton friend") ||
    lowercaseQuestion.includes("thanks a million pal") ||
    lowercaseQuestion.includes("thanks a bunch pal") ||
    lowercaseQuestion.includes("thanks a lot pal") ||
    lowercaseQuestion.includes("thanks a ton pal") ||
    lowercaseQuestion.includes("thanks a million friend") ||
    lowercaseQuestion.includes("thanks a bunch friend") ||
    lowercaseQuestion.includes("thanks a lot friend") ||
    lowercaseQuestion.includes("thanks a ton friend") ||
    lowercaseQuestion.includes("thank you kindly") ||
    lowercaseQuestion.includes("thanks a bunch pal") ||
    lowercaseQuestion.includes("thanks a million pal") ||
    lowercaseQuestion.includes("thanks a lot pal") ||
    lowercaseQuestion.includes("thanks a ton pal") ||
    lowercaseQuestion.includes("thank you kindly") ||
    lowercaseQuestion.includes("thanks buddy") ||
    lowercaseQuestion.includes("thanks mate") ||
    lowercaseQuestion.includes("thanks pal") ||
    lowercaseQuestion.includes("thanks friend") ||
    lowercaseQuestion.includes("thanks a bunch buddy") ||
    lowercaseQuestion.includes("thanks a million buddy") ||
    lowercaseQuestion.includes("thanks a lot buddy") ||
    lowercaseQuestion.includes("thanks a ton buddy") ||
    lowercaseQuestion.includes("thanks a bunch mate") ||
    lowercaseQuestion.includes("thanks a million mate") ||
    lowercaseQuestion.includes("thanks a lot mate") ||
    lowercaseQuestion.includes("thanks a ton mate") ||
    lowercaseQuestion.includes("thanks a million pal") ||
    lowercaseQuestion.includes("thanks a bunch pal") ||
    lowercaseQuestion.includes("thanks a lot pal") ||
    lowercaseQuestion.includes("thanks a ton pal") ||
    lowercaseQuestion.includes("thanks a million friend") ||
    lowercaseQuestion.includes("thanks a bunch friend") ||
    lowercaseQuestion.includes("thanks a lot friend") ||
    lowercaseQuestion.includes("thanks a ton friend") ||
    lowercaseQuestion.includes("thanks a million pal") ||
    lowercaseQuestion.includes("thanks a bunch pal") ||
    lowercaseQuestion.includes("thanks a lot pal") ||
    lowercaseQuestion.includes("thanks a ton pal") ||
    lowercaseQuestion.includes("thanks a million friend") ||
    lowercaseQuestion.includes("thanks a bunch friend") ||
    lowercaseQuestion.includes("thanks a lot friend") ||
    lowercaseQuestion.includes("thanks a ton friend") ||
    lowercaseQuestion.includes("thank you kindly") ||
    lowercaseQuestion.includes("thanks a bunch pal") ||
    lowercaseQuestion.includes("thanks a million pal") ||
    lowercaseQuestion.includes("thanks a lot pal") ||
    lowercaseQuestion.includes("thanks a ton pal") ||
    lowercaseQuestion.includes("thank you kindly") ||
    lowercaseQuestion.includes("thanks buddy") ||
    lowercaseQuestion.includes("thanks mate") ||
    lowercaseQuestion.includes("thanks pal") ||
    lowercaseQuestion.includes("thanks friend")
  ) {
    return "You're welcome! If you have more questions, feel free to ask.";
  } else if (
    lowercaseQuestion.includes("learn more details about general living")
  ) {
    // Replace the following with the actual image data URL for Naawi Oodena
    var imageUrl = "Images/26979636_web1_Safewayremodel-Seq-211103-FULL_8.jpg";
    var imageWidth = 400;
    // Text description
    var textResponse =
      "Here are some nice things about General Living in Naawi Oodena:";

    var additionalText =
      "Businesses in Naawi Oodena also reflects the multicultural nature of the community. Perhaps there's a family-owned restaurant serving authentic cuisine, a bookstore hosting community book clubs, or a local market showcasing handmade crafts. Each of these establishments brings its own unique contribution to the neighborhood, creating a mosaic of experiences for residents to enjoy. <br><br> Moreover, the existence of various businesses and services in Naawi Oodena contributes to a sustainable and self-sufficient community. Residents can find many of their needs met locally, reducing the need to travel outside the neighborhood for everyday essentials or leisure activities. This not only promotes a sense of local pride but also fosters economic resilience within the community. <br><br> The synergy between Safeway, Subway, and other local businesses creates a dynamic and well-rounded environment for residents. Whether they're grocery shopping, grabbing a quick bite, or exploring the offerings of other establishments, the people of Naawi Oodena have access to a diverse range of amenities that contribute to the overall vibrancy and livability of their community.";

    // Concatenate text and image HTML
    var combinedResponse = `${textResponse}<br><img src="${imageUrl}" alt="Naawi Oodena Photo" class="ai-image" style="width: ${imageWidth}px; border-radius: .3rem; margin-top: .2rem;"><br>${additionalText}`;

    return combinedResponse;
  } else if (lowercaseQuestion.includes("learn more details about housing")) {
    // Replace the following with the actual image data URL for Naawi Oodena
    var imageUrl = "Images/R.jpg";
    var imageWidth = 400;
    // Text description
    var textResponse =
      "Here are some nice things about Housing in Naawi Oodena:";

    var additionalText =
      "In Naawi Oodena, the concept of home is woven into the fabric of community life, where a variety of housing options cater to the diverse needs and preferences of its residents. The neighborhood is adorned with a mix of houses, each contributing to the overall charm and appeal of the area. <br><br> From cozy bungalows to modern townhouses, Naawi Oodena offers a range of housing styles that reflect the diverse tastes of its inhabitants. Neatly lined streets showcase well-maintained lawns and gardens, creating an inviting atmosphere that extends a warm welcome to both residents and visitors alike. The architecture varies, blending traditional and contemporary designs, contributing to the unique character of the neighborhood. <br><br> The emphasis on creating a pleasant living environment is evident not only in the physical structures but also in the community planning. Parks and green spaces dot the residential areas, providing residents with serene places to relax and connect with nature. Children play in well-designed playgrounds, and families gather for picnics, fostering a sense of community and neighborly bonds.";

    // Concatenate text and image HTML
    var combinedResponse = `${textResponse}<br><img src="${imageUrl}" alt="Naawi Oodena Photo" class="ai-image" style="width: ${imageWidth}px; border-radius: .3rem; margin-top: .2rem;"><br>${additionalText}`;

    return combinedResponse;
  } else if (
    lowercaseQuestion.includes("learn more details about apartments")
  ) {
    var imageUrls = ["Images/ree.jpg", "Images/OIP.jpg"];

    var imageWidth = 400;

    // loop through all the entries of imageUrls and assign them with formating (img tag) to imagesHtml variable.
    var imagesHtml = imageUrls
      .map(
        (url) =>
          `<img src="${url}" alt="Naawi Oodena Photo" class="ai-image" style="width: ${imageWidth}px; margin-top: .4rem; border-radius: .3rem;">`
      )
      .join("");
    // Text description
    var textResponse =
      "Here are some nice things about Apartments in Naawi Oodena:";

    var additionalText =
      "In Naawi Oodena, apartment living is embraced as an integral part of the community, offering a unique and vibrant housing option for residents. The skyline of Naawi Oodena is adorned with well-designed apartment buildings, each contributing to the dynamic and inclusive atmosphere of the neighborhood. <br><br> Apartments in Naawi Oodena cater to a diverse range of lifestyles, from young professionals and couples to families and retirees. The architectural variety reflects modern design principles, with sleek facades and thoughtful landscaping, creating an urban oasis within the community. The presence of apartments not only adds visual interest to the neighborhood but also provides an alternative housing choice that aligns with the preferences of many residents. <br><br>  Residents of Naawi Oodena apartments enjoy the convenience of communal amenities that enhance their daily lives. Well-maintained common areas, fitness centers, and recreation spaces offer opportunities for social interaction and a sense of community. Rooftop gardens or outdoor patios may provide panoramic views of the surrounding area, creating a tranquil retreat within the bustling city. <br><br>  The strategic placement of apartment buildings within Naawi Oodena ensures easy access to local services and businesses. Residents can walk to nearby shops, restaurants, and entertainment venues, fostering a pedestrian-friendly environment and reducing reliance on vehicular transportation. Proximity to public transportation hubs further enhances the accessibility of apartment living in this community.";

    // Concatenate text and image HTML
    var combinedResponse = `${textResponse}<br>${imagesHtml}<br>${additionalText}`;

    return combinedResponse;
  } else if (
    lowercaseQuestion.includes("learn more details about nearby recreation")
  ) {
    var imageUrls = [
      "Images/Jim_Durrell_Recreation_Centre.webp",
      "Images/0246b4cc0a9408d102e5de4ef2a60947.jpg",
    ];

    var imageWidth = 400;

    // loop through all the entries of imageUrls and assign them with formating (img tag) to imagesHtml variable.
    var imagesHtml = imageUrls
      .map(
        (url) =>
          `<img src="${url}" alt="Naawi Oodena Photo" class="ai-image" style="width: ${imageWidth}px; margin-top: .4rem; border-radius: .3rem;">`
      )
      .join("");
    // Text description
    var textResponse =
      "Here are some nice things about Nearby Recreation in Naawi Oodena:";

    var additionalText =
      "In Naawi Oodena, residents enjoy a wealth of recreational opportunities that contribute to a vibrant and active lifestyle. The community takes pride in offering spaces for various sports and activities, ensuring that residents of all ages can find outlets for physical fitness and leisure. One standout feature is the inclusive hockey rink, which has become a focal point for both residents and visitors. <br><br> The local hockey rink serves as a gathering place for the community, attracting hockey enthusiasts and recreational skaters alike. Whether it's a friendly game among neighbors or organized league play, the rink fosters a sense of camaraderie and sportsmanship. Families come together to watch games, and children eagerly take to the ice, honing their skating skills and creating lasting memories. <br><br> Situated conveniently within Naawi Oodena, the sports center on the right of Kenaston Blvd adds another layer to the community's commitment to an active lifestyle. This comprehensive facility caters to a variety of sports and fitness interests. The sports center likely features indoor courts for basketball and volleyball, a well-equipped gym, and spaces for group fitness classes. Residents can engage in organized sports leagues, participate in fitness programs, or simply enjoy recreational activities with friends and family. <br><br> The location of the sports center on Kenaston Blvd, a prominent thoroughfare, ensures easy accessibility for residents from different parts of Naawi Oodena. Its presence contributes not only to the physical well-being of the community but also to the overall vibrancy and energy of the neighborhood.";

    // Concatenate text and image HTML
    var combinedResponse = `${textResponse}<br>${imagesHtml}<br>${additionalText}`;

    return combinedResponse;
  } else if (
    lowercaseQuestion.includes("learn more details about community spaces")
  ) {
    var imageUrls = [
      "Images/1-20-opt.jpg",
      "Images/FitlerSquare_feature_004_BarrettDoherty_2016.jpg",
    ];

    var imageWidth = 400;

    var imagesHtml = imageUrls
      .map(
        (url) =>
          `<img src="${url}" alt="Naawi Oodena Photo" class="ai-image" style="width: ${imageWidth}px; margin-top: .4rem; border-radius: .3rem;">`
      )
      .join("");
    // Text description
    var textResponse =
      "Here are some nice things about Community Spaces in Naawi Oodena:";

    var additionalText =
      "In the heart of Naawi Oodena, nestled amidst the bustling apartments, lies a lush and inviting park that serves as a verdant oasis for residents. This centrally located green space is a testament to the neighborhood's commitment to creating a harmonious balance between urban living and nature. <br><br> The park, with its well-maintained lawns, vibrant flower beds, and mature trees, becomes a scenic retreat for residents living in the surrounding apartments. Walking paths meander through the greenery, providing a peaceful escape for those seeking a leisurely stroll or a moment of solitude. Benches strategically placed throughout the park offer spots for relaxation, encouraging residents to unwind and connect with nature amid the urban landscape. <br><br> Play areas for children enhance the family-friendly atmosphere of the park. Families living in the nearby apartments can bring their children to enjoy the playground, fostering a sense of community among parents and creating a space for children to socialize and play.";

    // Concatenate text and image HTML
    var combinedResponse = `${textResponse}<br>${imagesHtml}<br>${additionalText}`;

    return combinedResponse;
  } else if (
    lowercaseQuestion.includes("learn more details about nearby education")
  ) {
    var imageUrls = [
      "Images/our-campus-filming-on-campus-04.jpg",
      "Images/virtual-campus-tour-7.jpg",
    ];

    var imageWidth = 400;

    // loop through all the entries of imageUrls and assign them with formating (img tag) to imagesHtml variable.
    var imagesHtml = imageUrls
      .map(
        (url) =>
          `<img src="${url}" alt="Naawi Oodena Photo" class="ai-image" style="width: ${imageWidth}px; margin-top: .4rem; border-radius: .3rem;">`
      )
      .join("");
    // Text description
    var textResponse =
      "Here are some nice things about Nearby Education in Naawi Oodena:";

    var additionalText =
      "In Naawi Oodena, education is not only about academic enrichment; it's an immersive experience that extends to a beautiful cultural campus located south of the apartments, on the left of Kenaston Blvd. This campus stands as a testament to the community's dedication to fostering a rich and diverse learning environment that goes beyond traditional education. <br><br> The cultural campus encompasses a range of facilities dedicated to the arts, humanities, and cultural exchange. At its heart, there is a cultural center that serves as a hub for various activities and events. This center can house art galleries, performance spaces, and exhibition halls, showcasing the talents of local artists and providing a platform for cultural expression. <br><br> Educational institutions on the cultural campus may offer programs that celebrate and explore the rich tapestry of global cultures. Language classes, cultural workshops, and international studies programs could be part of the educational offerings, allowing residents to immerse themselves in different traditions and perspectives.";

    // Concatenate text and image HTML
    var combinedResponse = `${textResponse}<br>${imagesHtml}<br>${additionalText}`;

    return combinedResponse;
  } else if (
    lowercaseQuestion.includes("learn more details about mixed-use village")
  ) {
    var imageUrls = ["Images/20121114_0018.png", "Images/10_N8.webp"];

    var imageWidth = 400;

    // loop through all the entries of imageUrls and assign them with formating (img tag) to imagesHtml variable.
    var imagesHtml = imageUrls
      .map(
        (url) =>
          `<img src="${url}" alt="Naawi Oodena Photo" class="ai-image" style="width: ${imageWidth}px; margin-top: .4rem; border-radius: .3rem;">`
      )
      .join("");
    // Text description
    var textResponse =
      "Here are some nice things about Nearby Mixed-Use Village in Naawi Oodena:";

    var additionalText =
      "Welcome to the heart of Naawi Oodena, where a visionary mixed-use village seamlessly blends residential, commercial, and recreational spaces, creating a dynamic and self-sustaining community. This innovative development represents a modern approach to urban planning, emphasizing convenience, sustainability, and a rich array of amenities for residents. <br><br> The mixed-use village is characterized by a variety of housing options, including stylish apartments, contemporary townhouses, and eco-friendly single-family homes. Architecturally diverse, these residences are designed to cater to different preferences and lifestyles, fostering a sense of community within a harmonious living environment. <br><br> At the heart of the village, a bustling commercial district thrives with local businesses, boutique shops, and artisanal cafes. Residents enjoy the convenience of having essential services and trendy retail outlets right at their doorstep. The village square hosts lively farmers' markets, creating a vibrant atmosphere and promoting a sense of local commerce.";

    // Concatenate text and image HTML
    var combinedResponse = `${textResponse}<br>${imagesHtml}<br>${additionalText}`;

    return combinedResponse;
  } else {
    // Default response for unrecognized questions
    return "I'm sorry, I don't have information on that specific question.";
  }
}

function getSuggestions(userInput) {
  var lowercaseInput = userInput.toLowerCase(); // change the character case of userInput to lower case and assign to lowercaseInput variable

  if (lowercaseInput.includes("naa")) {
    // check if string includes the word
    return [
      "Location of Naawi Oodena",
      "Facts about Naawi Oodena",
      "History about Naawi Oodena",
      "Learn more details about General Living",
      "Learn more details about Community Spaces",
      "Learn more details about Housing",
      "Learn more details about Apartments",
      "Learn more details about Nearby Recreation",
      "Learn more details about Nearby Education",
      "Learn more details about Mixed-Use Village",
      "Employee Benefits",
      "Training Programs",
      "Job Openings",
    ];
  } else if (lowercaseInput.includes("wor")) {
    // check if string includes the word
    return ["Employee Benefits", "Training Programs", "Job Openings"]; // return an array
  } else if (lowercaseInput.includes("lear")) {
    // check if string includes the word
    return [
      "Learn more details about General Living",
      "Learn more details about Community Spaces",
      "Learn more details about Housing",
      "Learn more details about Apartments",
      "Learn more details about Nearby Recreation",
      "Learn more details about Nearby Education",
      "Learn more details about Mixed-Use Village",
    ];
  } else {
    return [];
  }
}

function appendTopic(topic) {
  var chatMessages = document.getElementById("chat-messages"); // get element with id "chat-message"
  var topicContainer = document.createElement("div"); // create a new <div> element
  topicContainer.className = "topic-container"; // set class name of div element to "topic-container"

  var topicContent = document.createElement("p"); // create a new <p> element
  topicContent.textContent = "Topic: " + topic;

  topicContainer.appendChild(topicContent); // append the p element to the div element

  // Prepend the topic container to the beginning of the chat messages
  chatMessages.insertBefore(topicContainer, chatMessages.firstChild);
  chatMessages.scrollTop = 0;
}
