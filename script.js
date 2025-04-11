
const questions = {
    "Wild for Creators": [
        "What’s your 'I know this is about to go viral' move on camera?",
        "You ever shot something that made you question your life choices?",
        "If your sex life was a song title, what would it be?",
        "What’s the wildest costume/character you’ve had to play?"
    ],
    "Funny & Unexpected": [
        "What’s your post-nut snack of choice?",
        "What’s something in your shoot bag that has nothing to do with sex?",
        "If you had to name your content brand after a food, what would it be?"
    ],
    "Fan Zone": [
        "What’s your hidden kink you’ve never admitted out loud?",
        "You watching for the plot or the positions?",
        "You got burner accounts or you bold with the bookmarks?"
    ],
    "This or That": [
        "Dominant or submissive?",
        "Content creator or content consumer?",
        "Make love or break backs?",
        "Foreplay or finish line?"
    ],
    "Deep AF": [
        "What’s one boundary you didn’t have in the beginning—but protect now?",
        "How do you separate your content self from your real self?",
        "What’s something that healed you through sex work?"
    ]
};

let currentQuestions = [];

function populateQuestions() {
    const selected = document.getElementById('category').value;
    if (selected === "all") {
        currentQuestions = Object.values(questions).flat();
    } else {
        currentQuestions = questions[selected] || [];
    }
}

function spinQuestion() {
    if (currentQuestions.length === 0) {
        populateQuestions();
    }
    const randomIndex = Math.floor(Math.random() * currentQuestions.length);
    const question = currentQuestions[randomIndex];
    document.getElementById('question-box').innerText = question;
    document.getElementById('question-box').classList.add('fade-in');
    setTimeout(() => {
        document.getElementById('question-box').classList.remove('fade-in');
    }, 1000);
}

populateQuestions();
