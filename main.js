const topicMapping = [
    { topic: 1, name: "Contexto", mainColor: "#7389B2"},
    { topic: 2, name: "Desafios", mainColor: "#D7E5FF"},
    { topic: 3, name: "Funções", mainColor: "#BED4FF"},
    { topic: 4, name: "Outros", mainColor: "#B29961"},
    { topic: 5, name: "Conclusão", mainColor: "#FFB514"},
];

function generateTopics() {
    topicMapping.forEach(function(current) {
        let listItem = document.createElement("li");

        listItem.setAttribute("data-topic", current.topic);
        listItem.addEventListener("click", getTopicContent.bind(window, current.topic));
        listItem.innerHTML = "<i class=\"material-icons\">explore</i>" + current.name;
        document.getElementById("navList").appendChild(listItem);
    });
}

function getTopicContent(topic) {
    let topicList = document.querySelectorAll(".topic-content");

    topicList.forEach(function(current) {
        let thisTopic = parseInt(current.getAttribute("data-topic"), 10);
        if (thisTopic === topic) {
            current.classList.remove("hidden");
            current.style.background = getMainColor(thisTopic);

            document.querySelector("li[data-topic='" + thisTopic + "']").style.background = getMainColor(thisTopic);
            document.querySelector("li[data-topic='" + thisTopic + "']").style.marginRight = "-2px";
        } else {
            current.classList.add("hidden");
            current.style.background = "none";
            document.querySelector("li[data-topic='" + thisTopic + "']").style.background = "none";
            document.querySelector("li[data-topic='" + thisTopic + "']").style.marginRight = "0px";
        }
    });
}

function getMainColor(topic) {
    for (let i = 0; topicMapping.length; i++) {
        if (topic === topicMapping[i].topic) {
            return topicMapping[i].mainColor;
        }
    }

    return "none";
}

window.addEventListener("load", function() {
    generateTopics();
    getTopicContent(1);
});