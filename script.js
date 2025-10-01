const allQuestions = [
    { text: "Huruf yang dibaca tebal disebut hukum", options: ["Tarqiq", "Idgham", "Tafkhim", "Ikhfa"], correct: 2, explanation: "Huruf yang dibaca tebal disebut hukum Tafkhim" },
    { text: "Huruf yang dibaca tipis disebut hukum", options: ["Tafkhim", "Tarqiq", "Idzhar", "Iqlab"], correct: 1, explanation: "Huruf yang dibaca tipis disebut hukum Tarqiq" },
    { text: "Huruf Lam dalam lafadz \"Allah\" dibaca tebal jika didahului oleh", options: ["Kasrah", "Sukun", "Fathah", "Tanwin"], correct: 2, explanation: "Huruf Lam dalam lafadz \"Allah\" dibaca tebal jika didahului oleh Fathah" },
    { text: "Huruf Lam dalam lafadz \"Allah\" dibaca tipis jika didahului oleh", options: ["Fathah", "Dhammah", "Kasrah", "Sukun"], correct: 2, explanation: "Huruf Lam dalam lafadz \"Allah\" dibaca tipis jika didahului oleh Kasrah" },
    { text: "Huruf-huruf tafkhim termasuk dalam kelompok huruf", options: ["Idgham", "Isti'la", "Lin", "Qalqalah"], correct: 1, explanation: "Huruf-huruf tafkhim termasuk dalam kelompok huruf Isti'la" },
    { text: "Huruf-huruf tarqiq termasuk dalam kelompok huruf", options: ["Idgham", "Isti'la", "Istifal", "Qalqalah"], correct: 2, explanation: "Huruf-huruf tarqiq termasuk dalam kelompok huruf Istifal" },
    { text: "Huruf Ra dibaca tebal jika berharakat", options: ["Kasrah", "Sukun", "Fathah", "Tanwin"], correct: 2, explanation: "Huruf Ra dibaca tebal jika berharakat Fathah" },
    { text: "Huruf Ra dibaca tipis jika sebelumnya terdapat", options: ["Fathah", "Kasrah", "Dhammah", "Sukun"], correct: 1, explanation: "Huruf Ra dibaca tipis jika sebelumnya terdapat Kasrah" },
    { text: "Contoh huruf tafkhim adalah", options: ["س", "ن", "ص", "ب"], correct: 2, explanation: "Contoh huruf tafkhim adalah ص (Shad)" },
    { text: "Contoh huruf tarqiq adalah", options: ["ط", "ق", "س", "ظ"], correct: 2, explanation: "Contoh huruf tarqiq adalah س (Sin)" },
    { text: "Ilmu yang mempelajari sebab turunnya ayat disebut", options: ["Tajwid", "Asbabun Nuzul", "Fiqih", "Hadits"], correct: 1, explanation: "Ilmu yang mempelajari sebab turunnya ayat disebut Asbabun Nuzul" },
    { text: "Al-Qur'an diturunkan secara bertahap selama", options: ["10 tahun", "17 tahun", "23 tahun", "30 tahun"], correct: 2, explanation: "Al-Qur'an diturunkan secara bertahap selama 23 tahun" },
    { text: "Malam pertama turunnya Al-Qur'an disebut", options: ["Lailatul Qadar", "Nuzulul Qur'an", "Isra Mi'raj", "Hijrah"], correct: 1, explanation: "Malam pertama turunnya Al-Qur'an disebut Nuzulul Qur'an" },
    { text: "Nuzulul Qur'an terjadi pada tanggal", options: ["1 Muharram", "12 Rabiul Awal", "17 Ramadhan", "10 Dzulhijjah"], correct: 2, explanation: "Nuzulul Qur'an terjadi pada tanggal 17 Ramadhan" },
    { text: "Surat Al-Lahab diturunkan karena", options: ["Abu Jahal", "Abu Lahab", "Umar bin Khattab", "Bilal bin Rabah"], correct: 1, explanation: "Surat Al-Lahab diturunkan karena Abu Lahab" },
    { text: "Surat Al-Mujadilah diturunkan karena seorang wanita bernama", options: ["Aisyah", "Fatimah", "Khaulah", "Hafsah"], correct: 2, explanation: "Surat Al-Mujadilah diturunkan karena seorang wanita bernama Khaulah" },
    { text: "Tujuan Al-Qur'an diturunkan bertahap adalah agar", options: ["Cepat selesai", "Mudah dibaca dan dipahami", "Bisa dihafal dalam semalam", "Tidak terlalu panjang"], correct: 1, explanation: "Tujuan Al-Qur'an diturunkan bertahap adalah agar mudah dibaca dan dipahami" },
    { text: "QS. Al-Isra ayat 106 menjelaskan tentang", options: ["Shalat", "Puasa", "Penurunan Al-Qur'an", "Zakat"], correct: 2, explanation: "QS. Al-Isra ayat 106 menjelaskan tentang penurunan Al-Qur'an" },
    { text: "Huruf yang bisa dibaca tebal atau tipis tergantung harakatnya adalah", options: ["Ra", "Qaf", "Sad", "Tha"], correct: 0, explanation: "Huruf yang bisa dibaca tebal atau tipis tergantung harakatnya adalah Ra" },
    { text: "Huruf Lam dibaca tebal jika didahului oleh", options: ["Kasrah", "Fathah atau Dhammah", "Tanwin", "Sukun"], correct: 1, explanation: "Huruf Lam dibaca tebal jika didahului oleh Fathah atau Dhammah" },
    { text: "Huruf-huruf tafkhim dibaca dengan suara", options: ["Ringan", "Cepat", "Tebal", "Panjang"], correct: 2, explanation: "Huruf-huruf tafkhim dibaca dengan suara tebal" },
    { text: "Huruf-huruf tarqiq dibaca dengan suara", options: ["Tipis", "Keras", "Panjang", "Dalam"], correct: 0, explanation: "Huruf-huruf tarqiq dibaca dengan suara tipis" },
    { text: "Surat yang turun karena hinaan terhadap Nabi adalah", options: ["Al-Falaq", "Al-Lahab", "Al-Ikhlas", "Al-Kafirun"], correct: 1, explanation: "Surat yang turun karena hinaan terhadap Nabi adalah Al-Lahab" },
    { text: "Asbabun Nuzul membantu kita memahami", options: ["Bahasa Arab", "Makna ayat", "Cara shalat", "Nama surah"], correct: 1, explanation: "Asbabun Nuzul membantu kita memahami makna ayat" },
    { text: "Al-Qur'an diturunkan kepada Nabi Muhammad ﷺ melalui", options: ["Malaikat Mikail", "Malaikat Israfil", "Malaikat Jibril", "Malaikat Ridwan"], correct: 2, explanation: "Al-Qur'an diturunkan kepada Nabi Muhammad ﷺ melalui Malaikat Jibril" },
    { text: "Huruf Qaf termasuk huruf", options: ["Tarqiq", "Isti'la", "Lin", "Idgham"], correct: 1, explanation: "Huruf Qaf termasuk huruf Isti'la" },
    { text: "Huruf Ba termasuk huruf", options: ["Tafkhim", "Tarqiq", "Idgham", "Qalqalah"], correct: 1, explanation: "Huruf Ba termasuk huruf Tarqiq" },
    { text: "Surat Al-Mujadilah turun karena seorang wanita mengadukan masalah", options: ["Warisan", "Zihar", "Shalat", "Puasa"], correct: 1, explanation: "Surat Al-Mujadilah turun karena seorang wanita mengadukan masalah Zihar" },
    { text: "Penurunan Al-Qur'an secara bertahap disebut", options: ["Tajwid", "Wahyu", "Tadarus", "Nuzul"], correct: 3, explanation: "Penurunan Al-Qur'an secara bertahap disebut Nuzul" },
    { text: "Huruf-huruf Isti'la berjumlah", options: ["5", "7", "10", "3"], correct: 1, explanation: "Huruf-huruf Isti'la berjumlah 7" },
    { text: "Huruf-huruf Istifal dibaca dengan suara", options: ["Tipis", "Tebal", "Panjang", "Keras"], correct: 0, explanation: "Huruf-huruf Istifal dibaca dengan suara tipis" },
    { text: "Huruf Sad dibaca tebal karena termasuk huruf", options: ["Tarqiq", "Lin", "Isti'la", "Idgham"], correct: 2, explanation: "Huruf Sad dibaca tebal karena termasuk huruf Isti'la" },
    { text: "Huruf Sin dibaca tipis karena termasuk huruf", options: ["Tarqiq", "Tafkhim", "Qalqalah", "Idgham"], correct: 0, explanation: "Huruf Sin dibaca tipis karena termasuk huruf Tarqiq" },
    { text: "Surat Al-Lahab berisi tentang", options: ["Perintah shalat", "Kisah Abu Lahab", "Larangan makan", "Keutamaan puasa"], correct: 1, explanation: "Surat Al-Lahab berisi tentang kisah Abu Lahab" },
    { text: "Penurunan Al-Qur'an secara bertahap membantu Nabi", options: ["Menyembunyikan wahyu", "Menjelaskan isi ayat", "Menulis ayat sendiri", "Mengubah hukum"], correct: 1, explanation: "Penurunan Al-Qur'an secara bertahap membantu Nabi menjelaskan isi ayat" },
    { text: "Huruf Tha dibaca dengan suara", options: ["Tipis", "Tebal", "Panjang", "Ringan"], correct: 1, explanation: "Huruf Tha dibaca dengan suara tebal" },
    { text: "Huruf Nun termasuk huruf", options: ["Tafkhim", "Tarqiq", "Isti'la", "Idgham"], correct: 1, explanation: "Huruf Nun termasuk huruf Tarqiq" }
];

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let answeredQuestions = [];
let totalPoints = 0;
let currentPoints = 0;

let currentLevel = parseInt(localStorage.getItem("quizLevel")) || 1;
let currentExp = parseInt(localStorage.getItem("quizExp")) || 0;

document.addEventListener('DOMContentLoaded', function() {
    loadPoints();
    updatePointsDisplay();
    updateWelcomeScreen(); 
});

function expToNextLevel(level) {
  return Math.floor(level * level * 50);
}

function loadPoints() {
    const savedPoints = localStorage.getItem('quizTotalPoints');
    totalPoints = savedPoints ? parseInt(savedPoints) : 0;
}

function savePoints() {
    localStorage.setItem('quizTotalPoints', totalPoints.toString());
    localStorage.setItem("quizLevel", currentLevel);
    localStorage.setItem("quizExp", currentExp);
}

function updatePointsDisplay() {
    document.getElementById('totalPoints').textContent = totalPoints;
    document.getElementById('currentPoints').textContent = currentPoints;
}

function updateWelcomeScreen() {
    document.getElementById("welcomeLevel").textContent = currentLevel;
    document.getElementById("welcomeExpText").textContent = 
        `${currentExp} / ${expToNextLevel(currentLevel)} EXP`;

    let percent = (currentExp / expToNextLevel(currentLevel)) * 100;
    document.getElementById("welcome-progress-fill").style.width = percent + "%";
}

function startQuiz() {
    selectedQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 7);
    currentQuestion = 0;
    score = 0;
    currentPoints = 0;
    answeredQuestions = [];
    
    showScreen('quizScreen');
    updateProgress();
    updatePointsDisplay();
    showQuestion();
}

function showQuestion() {
    const question = selectedQuestions[currentQuestion];
    document.getElementById('questionText').textContent = question.text;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => handleAnswer(index);
        container.appendChild(btn);
    });
}

function handleAnswer(selectedIndex) {
    const question = selectedQuestions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    
    const pointsEarned = isCorrect ? 10 : 0;
    currentPoints += pointsEarned;
    
    answeredQuestions.push({
        question: question.text,
        correct: isCorrect,
        explanation: question.explanation,
        points: pointsEarned
    });

    if (isCorrect) {
        score++;
    }

    currentQuestion++;
    
    if (currentQuestion < selectedQuestions.length) {
        updateProgress();
        updatePointsDisplay();
        setTimeout(showQuestion, 300);
    } else {
        if (score === selectedQuestions.length) {
            currentPoints += 30;
        }
        
        totalPoints += currentPoints;

        let earnedExp = score * 10; 
        if (score === selectedQuestions.length) {
            earnedExp += 30; 
        }
        currentExp += earnedExp;

        while (currentExp >= expToNextLevel(currentLevel) && currentLevel < 1000) {
            currentExp -= expToNextLevel(currentLevel);
            currentLevel++;
        }

        savePoints();
        setTimeout(showResults, 300);
    }
}

function updateProgress() {
    const container = document.getElementById('progressBars');
    container.innerHTML = '';
    
    for (let i = 0; i < selectedQuestions.length; i++) {
        const bar = document.createElement('div');
        bar.className = 'progress-bar';
        
        if (i < currentQuestion) {
            bar.classList.add('completed');
        } else if (i === currentQuestion) {
            bar.classList.add('current');
        } else {
            bar.classList.add('upcoming');
        }
        
        container.appendChild(bar);
    }
    
    document.getElementById('progressText').textContent = 
        `${currentQuestion + 1} dari ${selectedQuestions.length}`;
}

function showResults() {
    document.getElementById('scoreText').textContent = 
        `${score}/${selectedQuestions.length}`;
    
    document.getElementById('pointsEarned').textContent = `+${currentPoints}`;
    
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';
    
    answeredQuestions.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = `result-item ${answer.correct ? 'correct' : 'incorrect'}`;
        
        item.innerHTML = `
            <div class="result-icon ${answer.correct ? 'correct' : 'incorrect'}">
                ${answer.correct ? '✓' : '✗'}
            </div>
            <div class="result-content">
                <div class="result-question">${answer.question}</div>
                <div class="result-explanation">${answer.explanation}</div>
                ${answer.correct ? `<div style="color: #22c55e; font-size: 0.9rem; margin-top: 5px;">+${answer.points} poin</div>` : ''}
            </div>
        `;
        
        container.appendChild(item);
    });

    if (score === selectedQuestions.length) {
        const bonusItem = document.createElement('div');
        bonusItem.className = 'result-item correct';
        bonusItem.innerHTML = `
            <div class="result-icon correct">⭐</div>
            <div class="result-content">
                <div class="result-question">Skor Sempurna!</div>
                <div class="result-explanation">Kamu mendapatkan bonus 30 poin & EXP!</div>
                <div style="color: #22c55e; font-size: 0.9rem; margin-top: 5px;">+30 bonus</div>
            </div>
        `;
        container.appendChild(bonusItem);
    }

    document.getElementById("levelText").textContent = `Level: ${currentLevel}`;
    document.getElementById("expText").textContent = 
        `${currentExp} / ${expToNextLevel(currentLevel)} EXP`;

    let progressPercent = (currentExp / expToNextLevel(currentLevel)) * 100;
    document.getElementById("progress-fill").style.width = progressPercent + "%";

    showScreen('resultScreen');
    updatePointsDisplay();
    updateWelcomeScreen();
}

function restart() {
    showScreen('welcomeScreen');
    updatePointsDisplay();
    updateWelcomeScreen();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function resetPoints() {
    totalPoints = 0;
    currentPoints = 0;
    currentLevel = 1;
    currentExp = 0;
    savePoints();
    updatePointsDisplay();
    updateWelcomeScreen();
}