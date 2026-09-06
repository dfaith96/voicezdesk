const demoContent = {
  answering: {
    label: "Call Answering",
    title: "Respond immediately with a professional AI voice greeting.",
    text: "Voxdeskz answers the call, identifies the customer need, and moves the conversation into the right next step without leaving the caller waiting."
  },
  booking: {
    label: "Appointment Booking",
    title: "Capture booking intent while the caller is already engaged.",
    text: "The AI voice asks the right scheduling questions, gathers timing preference, and helps the business move faster on appointments."
  },
  questions: {
    label: "Customer Questions",
    title: "Handle common questions without pulling staff away.",
    text: "Voxdeskz can respond to routine business FAQs like hours, services, availability, and basic pricing information over the phone."
  },
  afterhours: {
    label: "After Hours",
    title: "Stay reachable even when the business is closed.",
    text: "Calls that would normally be missed can still be answered, qualified, and routed into the right next-day action."
  }
};

const tabButtons = document.querySelectorAll(".tab-button");
const demoLabel = document.getElementById("demo-label");
const demoTitle = document.getElementById("demo-title");
const demoText = document.getElementById("demo-text");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;
    const content = demoContent[topic];

    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    if (demoLabel && demoTitle && demoText) {
      demoLabel.textContent = content.label;
      demoTitle.textContent = content.title;
      demoText.textContent = content.text;
    }
  });
});
